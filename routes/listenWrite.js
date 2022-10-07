import express from "express";
import { addListenWrite, deleteListenWrite, detailListenWrite, detailListenWriteByIdCategory, editListenWrite, listListenWrite } from "../controllers/listenWrite";



const router = express.Router()

router.get("/listenWrite", listListenWrite )
router.get("/listenWrite/:id", detailListenWrite )
router.get("/listenWrite/:id/writeAndListen", detailListenWriteByIdCategory )
router.post("/listenWrite", addListenWrite )
router.put("/listenWrite/:id", editListenWrite )
router.delete("/listenWrite/:id", deleteListenWrite )

export default router