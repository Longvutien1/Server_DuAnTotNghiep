import express  from "express";
import { addUserNote, editUserNote, getListUserNote } from "../controllers/noteController";

const router = express.Router();

router.get("/noteCouse/:dayId/:userId", getListUserNote)
router.post("/noteCouse", addUserNote);
router.put("/noteCouse/:dayId/:userId", editUserNote)

export default router;