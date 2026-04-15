import dotenv from 'dotenv'
dotenv.config({quiet:true});



export const ENV={
     
    PORT:   process.env.PORT,
    MONGO_URI : process.env.MONGO_URI,
    GEMINI_API_KEY:process.env.GEMINI_API_KEY
    
}