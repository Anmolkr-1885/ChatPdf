export const chunkText = (text, chunkSize = 400, overlap = 100) => {
  const chunks = [];
  let start = 0;
  console.log(typeof text, text?.length);


  while (start < text.length) {
    const end = start + chunkSize;
    chunks.push(text.slice(start, end));
    start += chunkSize - overlap;
  }
//   console.log(chunks)
  return chunks;
};
