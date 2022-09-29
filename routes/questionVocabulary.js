import express from "express";
import { addQuestion, getAllQuestion, getDetail } from "../controllers/questionVocabController";

const router = express.Router();

router.get("/questionVocabulary/:id", getDetail);
router.post("/questionVocabulary", addQuestion)
router.get("/questionVocabulary", getAllQuestion)
export default router;