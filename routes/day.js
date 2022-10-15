import express from 'express'
import { addDay, detailDay, editDay, listDay, removeDay } from '../controllers/day';


const routeDay = express.Router();

routeDay.get("/day",listDay);
routeDay.get("/day/:id",detailDay);
routeDay.post("/day",addDay);
routeDay.put("/day/:id",editDay);
routeDay.delete("/day/:id",removeDay);

export default routeDay;