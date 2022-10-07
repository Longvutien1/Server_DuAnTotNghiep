import express from "express";
import { addQuestionListenWrite, deleteQuestionListenWrite, editQuestionListenWrite, listQuestionListenWriteByIdQuestion } from "../controllers/questionListenWrite";


const router = express.Router()

router.get("/questionListenWrite/:id", listQuestionListenWriteByIdQuestion )
router.post("/questionListenWrite", addQuestionListenWrite )
router.put("/questionListenWrite/:id", editQuestionListenWrite )
router.delete("/questionListenWrite/:id", deleteQuestionListenWrite )

export default router