import  express  from "express";
import { addWellcome, listWellcome } from "../controllers/wellComeController";

const router = express.Router();

router.get("/listWellcome", listWellcome);
router.post("/addWellcome", addWellcome)


export default router