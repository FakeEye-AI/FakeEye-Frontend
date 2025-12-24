// Placeholder API functions for analysis — these return mock results and can be replaced
// with real backend calls later (e.g., fetch to /api/detect-image)

export async function analyzeImage(file: File) {
  // simulate network delay
  await new Promise((r) => setTimeout(r, 800));
  return {
    isAIGenerated: Math.random() > 0.5,
    confidence: Math.round((60 + Math.random() * 40) * 10) / 10,
  };
}

export async function analyzeVideo(file: File) {
  await new Promise((r) => setTimeout(r, 1000));
  return {
    isAIGenerated: Math.random() > 0.6,
    confidence: Math.round((60 + Math.random() * 40) * 10) / 10,
  };
}

export async function analyzeText(text: string) {
  await new Promise((r) => setTimeout(r, 600));
  return {
    isAIGenerated: Math.random() > 0.5,
    confidence: Math.round((65 + Math.random() * 35) * 10) / 10,
  };
}

export async function analyzeEmail(content: string) {
  await new Promise((r) => setTimeout(r, 700));
  return {
    isAIGenerated: Math.random() > 0.55,
    confidence: Math.round((65 + Math.random() * 35) * 10) / 10,
  };
}
