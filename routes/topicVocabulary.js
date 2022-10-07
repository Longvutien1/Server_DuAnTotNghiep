import express from "express";
import { addTopicV, detailTopic } from "../controllers/topicVocabulary";

const router = express.Router();

router.get("/topicVocabulary/:id", detailTopic);
router.post("/topicVocabulary", addTopicV)

export default router;