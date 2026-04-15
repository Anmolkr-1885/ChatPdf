import express from 'express'



const router = express.Router();

import {queryDocs} from '../controllers/queryController.js'



router.post("/",queryDocs);
export default router