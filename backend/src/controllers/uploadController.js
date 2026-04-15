import express from "express";
import { PDFParse } from "pdf-parse";
import {chunkText} from '../utils/chunkText.js'
import { generateEmbedding } from "../utils/embedding.js";
import Chunk from '../models/Chunks.js'
import { randomUUID } from "node:crypto"; 

export const uploadPdf = async (req, res) => {
  try {
    // console.log(req.file)
    if (!req.file) {
      res.status(400).json({
        message: "no file uploaded",
      });
    }
     
    const parser = new PDFParse({ data: req.file.buffer });
      const parsed = await parser.getText();
      // console.log(parsed)
         
     

      
      const parsedText = parsed.pages  
      let parsedTextfinal="";

      for(const each of parsedText){
       parsedTextfinal+=(each.text)
      }










    const chunks = chunkText(parsedTextfinal);
    // console.log(chunks)

   
    // console.log(embedContent)
     
    const documentId = randomUUID();

    const docToinsert = [];
    for(const chunk of chunks){
         let embedContent = await generateEmbedding(chunk);
        console.log(embedContent)

       docToinsert.push({
        documentId,
        fileName:req.file.originalname,
        chunkText:chunk,
        embedding:embedContent
        
       })
    }

    await Chunk.insertMany(docToinsert);








    res.status(200).json({
      documentId,
        "message":"success ",
        "fileName":req.file.originalname,
        parsedTextfinal
        // "chunks": chunks.length,
        
    })




  } catch (error) {
    console.log("error in parsing pdf",error);
    res.status(500).json({
        "message": "error in uploading and parsing pdf"
    })

  }
};


