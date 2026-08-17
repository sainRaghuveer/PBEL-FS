from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

import torch
from diffusers import Flux2KleinPipeline, AutoencoderKLFlux2
import base64
from io import BytesIO
import logging

# -----------------------------
# App Config
# -----------------------------
app = FastAPI()

# Enable CORS (important for frontend like React / HTML)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # change in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Logging
logging.basicConfig(level=logging.INFO)

# -----------------------------
# Device Setup
# -----------------------------
device = "cuda" if torch.cuda.is_available() else "cpu"
dtype = torch.bfloat16 if device == "cuda" else torch.float32

logging.info(f"Using device: {device}")

# -----------------------------
# Load Model ONCE (important)
# -----------------------------
try:
    logging.info("Loading VAE...")
    vae = AutoencoderKLFlux2.from_pretrained(
        "black-forest-labs/FLUX.2-small-decoder",
        torch_dtype=dtype
    )

    logging.info("Loading Pipeline...")
    pipe = Flux2KleinPipeline.from_pretrained(
        "black-forest-labs/FLUX.2-klein-4B",
        vae=vae,
        torch_dtype=dtype
    )

    if device == "cuda":
        pipe.to(device)
    else:
        pipe.enable_model_cpu_offload()

    logging.info("Model loaded successfully!")

except Exception as e:
    logging.error(f"Model loading failed: {str(e)}")
    raise e

# -----------------------------
# Request Schema
# -----------------------------
class PromptRequest(BaseModel):
    prompt: str
    height: int = 1024
    width: int = 1024
    steps: int = 4


# -----------------------------
# Routes
# -----------------------------
@app.get("/")
def root():
    return {"message": "FLUX Image API is running 🚀"}


@app.post("/generate")
def generate_image(req: PromptRequest):
    try:
        logging.info(f"Prompt: {req.prompt}")

        # Generate image
        image = pipe(
            prompt=req.prompt,
            height=req.height,
            width=req.width,
            guidance_scale=1.0,
            num_inference_steps=req.steps,
            generator=torch.Generator(device=device).manual_seed(0)
        ).images[0]

        # Convert image to base64
        buffered = BytesIO()
        image.save(buffered, format="PNG")
        img_base64 = base64.b64encode(buffered.getvalue()).decode()

        return {
            "success": True,
            "image": f"data:image/png;base64,{img_base64}"
        }

    except Exception as e:
        logging.error(f"Error: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))