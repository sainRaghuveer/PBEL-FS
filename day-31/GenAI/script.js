async function generateContent() {
  const prompt = document.getElementById("prompt").value;
  const paraEl = document.getElementById("generatedContent");
  const loading = document.getElementById("loading");
  const downloadBtn = document.getElementById("downloadBtn");

  if (!prompt) {
    alert("Please enter a prompt!");
    return;
  }

  loading.classList.remove("hidden");
  paraEl.classList.add("hidden");
  downloadBtn.classList.add("hidden");

  try {
    const response = await fetch("http://localhost:5000/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ prompt })
    });

    const data = await response.json();

    console.log("API Response:", data);

    if (data) {
      paraEl.innerText = data.output;
      paraEl.classList.remove("hidden");
      // downloadBtn.classList.remove("hidden");
    } else {
      alert("No content generated");
    }

  } catch (error) {
    console.error(error);
    alert("Failed to connect to server");
  }

  loading.classList.add("hidden");
}

function downloadImage() {
  const imageEl = document.getElementById("generatedImage");

  if (!imageEl.src) {
    alert("No image to download!");
    return;
  }

  const link = document.createElement("a");
  link.href = imageEl.src;
  link.download = "generated-image.png";
  link.click();
}

// function copyText() {
//   const text = document.getElementById("result").innerText;

//   if (!text) {
//     alert("Nothing to copy!");
//     return;
//   }

//   navigator.clipboard.writeText(text);
//   alert("Copied to clipboard!");
// }


//Prompt Templates
function useTemplate(type) {
  const promptBox = document.getElementById("prompt");

  if (type === "resume") {
    promptBox.value = "Write one resume summary based on Full Stack Developer profile";
  } 
  else if (type === "blog") {
    promptBox.value = "Write a blog on A futuristic AI robot";
  } 
  else if (type === "linkedin") {
    promptBox.value = "Write a compelling LinkedIn 'About' section for a Full Stack Developer with 4+ years of experience in Software development, specializing in JavaScript, NOdeJS, React.js. Keep the tone professional yet approachable, highlight my passion for Building scalable application and AI driver portals, and end with a call to connect.";
  }
}