import ollama from "ollama";

export const generateRagAnswer = async (question, contextChunks) => {
  try {
    // Check if Ollama server is reachable
    await ollama.list();

    const context = contextChunks;


    const response = await ollama.chat({
  model: "llama3",
  messages: [
    {
      role: "user",
      content: `
You are a helpful assistant answering questions from document context.

Instructions:
- Answer using the provided context as the primary source.
- If the context contains relevant information, summarize it clearly in your own words.
- If the exact wording is not present but the answer can be reasonably inferred from the context, answer it.
- Only say "Not found" if the context truly contains no relevant information.

Context:
${context}

Question:
${question}
      `,
    },
  ],
});

    return response.message.content;

  } catch (error) {
    console.error("Ollama not running or unreachable:", error.message);
    throw new Error("Ollama server is not running. Start it with 'ollama serve'");
  }
};