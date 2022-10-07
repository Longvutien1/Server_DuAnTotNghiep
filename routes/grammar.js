import  express  from "express"
import { createGrammar, editGrammar, getGrammarById, listGrammar, removeGrammar } from "../controllers/grammar";


const routeGrammar = express.Router();

routeGrammar.get('/grammar' , listGrammar)
routeGrammar.get('/grammar/:id' , getGrammarById)
routeGrammar.post('/grammar' , createGrammar);
routeGrammar.put('/grammar/:id' , editGrammar)
routeGrammar.delete('/grammar/:id' , removeGrammar)


export default routeGrammar