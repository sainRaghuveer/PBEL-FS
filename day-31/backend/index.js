const express = require("express");
const cors = require("cors");
require('dotenv').config()
const { GoogleGenAI } = require("@google/genai");
// import * as fs from "node:fs";

const app = express();
app.use(cors());
app.use(express.json());

const API_KEY = process.env.GEMINI_API_KEY
const ai = new GoogleGenAI({apiKey:API_KEY});

app.post("/generate", async (req, res) => {
  const { prompt } = req.body;

  console.log("Received prompt:", prompt);

  try {
    const response = await ai.models.generateContent({
    //   model: "gemini-3-flash-preview",
      model: "gemini-3.6-flash",
      // model: "gemini-3.1-flash-image-preview",
      contents: prompt,
    });

    console.log("response", response)

    res.json({
      output: response.text || "No response",
    });

  } catch (error) {
    console.error("ERROR:", error.message);

    res.status(500).json({
      error: "Error generating content",
      details: error.message,
    });
  }
});

app.listen(5000, () => {
  console.log("Gemini server running on http://localhost:5000");
});


// const express = require("express");
// const cors = require("cors");
// require("dotenv").config();
// const { GoogleGenAI } = require("@google/genai");

// const app = express();
// app.use(cors());
// app.use(express.json());

// const API_KEY = process.env.GEMINI_API_KEY;
// const ai = new GoogleGenAI({ apiKey: API_KEY });

// app.post("/generate", async (req, res) => {
//   const { prompt } = req.body;

//   console.log("Received prompt:", prompt);

//   try {
//     const response = await ai.models.generateContent({
//       // model: "gemini-3-flash-preview",
//       model: "gemini-2.5-flash-image",
//       contents: prompt,
//     });

//     let imageBase64 = null;

//     // 🔥 Extract image from response
//     for (const part of response.candidates[0].content.parts) {
//       if (part.inlineData) {
//         imageBase64 = part.inlineData.data;
//       }
//     }

//     if (!imageBase64) {
//       return res.status(400).json({ error: "No image generated" });
//     }

//     // ✅ Send base64 image to frontend
//     res.json({
//       image: `data:image/png;base64,${imageBase64}`,
//     });

//   } catch (error) {
//     console.error("ERROR:", error.message);

//     res.status(500).json({
//       error: "Error generating image",
//       details: error.message,
//     });
//   }
// });

// app.listen(5000, () => {
//   console.log("Gemini server running on http://localhost:5000");
// });