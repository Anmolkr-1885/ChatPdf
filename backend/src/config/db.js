import mongoose from "mongoose";
import { ENV } from "./env.js";
const MONGO_URI = ENV.MONGO_URI;

export const connectDB= async() =>{
    try {
        const conn= await mongoose.connect(MONGO_URI);
        console.log("DATABASE CONNECTED")
        
    } catch (error) {
        console.log("ERROR IN CONNECTION WITH DATABASE",error)
        
    }
    
}