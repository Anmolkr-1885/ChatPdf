export const generateEmbedding = async (text) => {
  const response = await fetch("http://127.0.0.1:11434/api/embed", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    
    body: JSON.stringify({
      model: "nomic-embed-text:latest",
      input: text,
    }),
  });

  const data = await response.json();

  console.log("OLLAMA RESPONSE:", data);

  if (!response.ok) {
    throw new Error(data.error || "Embedding failed");
  }

  return data.embeddings[0];
};