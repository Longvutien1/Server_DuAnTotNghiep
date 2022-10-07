import express from 'express'
import { addMonth, detailMonth, editMonth, listMonth, removeMonth } from '../controllers/month';


const routeMonth = express.Router();

routeMonth.get("/month",listMonth);
routeMonth.get("/month/:id",detailMonth);
routeMonth.post("/month",addMonth);
routeMonth.put("/month/:id",editMonth);
routeMonth.delete("/month/:id",removeMonth);

export default routeMonth;