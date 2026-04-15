import Chunk from "../models/Chunks.js";
import { chunkText } from "../utils/chunkText.js";
import { generateEmbedding } from "../utils/embedding.js";
import { generateRagAnswer } from "../utils/ragService.js";


export const queryDocs = async(req,res)=>{
   
    try {
          
         const {question, documentId} = req.body;
        //  console.log(question)

         if(!question || !documentId){
            res.status(400).json({
                message:"question is required"
            })
         }


         const queryEmbedding = await generateEmbedding(question);
        //  console.log(queryEmbedding)

         const results = await Chunk.aggregate([
            {
                $vectorSearch:{
                    index:"vector_index",
                    path:"embedding",
                    queryVector:queryEmbedding,
                    numCandidates:100,
                    limit:40,
                    filter:{
                        documentId:documentId,
                    },
                }, 
            },
            {
                $project:{
                    chunkText:1,
                    fileName:1,
                    score:{
                        $meta:"vectorSearchScore"
                    },
                }
            }
         ])

         

const contextChunks = results;

console.log(contextChunks)
 
 
        
         const answer = await generateRagAnswer(question,contextChunks);




         res.status(200).json({
            "message":"successs",
            answer,
            sources:results
         })


        
    } catch (error) {
        console.log("ERROR IN SEMANTIC SEARCH IN MONGODB",error)
        
    }








}