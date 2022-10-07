import express from 'express'
import { addWeek, detailWeek, editWeek, listWeek, removeWeek } from '../controllers/week';


const routeWeek = express.Router();

routeWeek.get("/week",listWeek);
routeWeek.get("/week/:id",detailWeek);
routeWeek.post("/week",addWeek);
routeWeek.put("/week/:id",editWeek);
routeWeek.delete("/week/:id",removeWeek);

export default routeWeek;