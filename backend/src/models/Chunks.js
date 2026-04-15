import mongoose from "mongoose";

const chunkSchema = new mongoose.Schema({
    documentId:{
        type:String,
        required:true
    },
    fileName:{
        type:String,
        required:true
    },
    chunkText:{
        type:String,
        required:true
    },
    embedding:{
        type:[Number],
        required:true
    },
    uploadedAt:{
        type:String,
        default:Date.now
    }
});



const Chunk = mongoose.model("chunk",chunkSchema)

export default Chunk;