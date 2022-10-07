import express from "express";
import { addVocabulary, deleteVocabulary, editVocabulary, listVocabulary } from "../controllers/vocabularyController";

const router = express.Router();

router.get("/vocabulary", listVocabulary);
router.post("/vocabulary", addVocabulary);
router.put("/vocabulary/:id", editVocabulary);
router.delete("/vocabulary/:id", deleteVocabulary);

export default router;