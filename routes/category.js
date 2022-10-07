import  express  from "express"
import { addCategory, detailCategory, editCategory, getCategoryById, listCategories, removeCategory } from "../controllers/category";
import { userById } from "../controllers/user";
import { isAdmin, isAuth, requiredSignin } from "../midlerware/checkAuth";


const routeCategory = express.Router();

routeCategory.get('/categories', listCategories);
routeCategory.get('/categories/:id', detailCategory);
routeCategory.post('/categories/:userId', addCategory);
routeCategory.put('/categories/:id', editCategory);
routeCategory.delete('/categories/:id', removeCategory);
routeCategory.get('/categories/:id', getCategoryById);

routeCategory.param("userId", userById)

export default routeCategory;