import  express  from "express";
import { addAnswerForQuestion, getAnswerForQuestion } from "../controllers/answerVocabController";

const router = express.Router();

router.get("/answerVocabulary", getAnswerForQuestion);
router.post("/answerVocabulary", addAnswerForQuestion)
export default router;