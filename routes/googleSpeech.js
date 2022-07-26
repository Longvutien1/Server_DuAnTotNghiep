import express from "express";
import { getAudio, transcribeSpeech, uploadAudio, quickStart } from "../controllers/googleSpeech";
// const Multer = require("multer");

import Multer from 'multer'

const multer = Multer({
    storage: Multer.memoryStorage(),
    limits: {
        fileSize: 200 * 1024 * 1024, // No larger than 5mb, change as you need
    },
});


const router = express.Router();
router.get("/googlespeech",transcribeSpeech)
router.get("/upload", getAudio)
router.post("/upload", multer.single("audiofile"),uploadAudio)
router.post("/speaker",quickStart)
router.get('/googlespeech2', (request,response)=>{
    response.send(ggSpeech());
})

export default router;