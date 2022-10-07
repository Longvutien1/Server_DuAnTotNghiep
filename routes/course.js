import express from 'express'
import { addCourse, detailCourse, editCourse, listCourse, removeCourse } from '../controllers/course';


const routeCourse = express.Router();

routeCourse.get("/course",listCourse);
routeCourse.get("/course/:id",detailCourse);
routeCourse.post("/course",addCourse);
routeCourse.put("/course/:id",editCourse);
routeCourse.delete("/course/:id",removeCourse);

export default routeCourse;