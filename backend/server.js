import express from 'express'
import { ENV } from './src/config/env.js';
import { connectDB } from './src/config/db.js';
import uploadRoutes from './src/routes/uploadRoutes.js';
import cors from 'cors'
import queryRoutes from './src/routes/queryRoutes.js'









const app = express();
app.use(cors())
app.use(express.json())


const PORT = ENV.PORT

app.use("/api/upload",uploadRoutes);
app.use("/api/query", queryRoutes);


app.get("/",(req,res)=>{
    res.json({message: "yeah it is running"});

})

app.listen(PORT ,()=>{
    connectDB();
    console.log(`server is runnig at ${PORT}`);
    
})



// 6sGMQIIUNjcCULF9