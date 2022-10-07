import  express  from "express"
import { createConversation, editConversation, getConversationById, listConversation, removeConversation } from "../controllers/conversation";


const routeConversation = express.Router();

routeConversation.get('/conversation' , listConversation)
routeConversation.get('/conversation/:id' , getConversationById)
routeConversation.post('/conversation' , createConversation);
routeConversation.put('/conversation/:id' , editConversation)
routeConversation.delete('/conversation/:id' , removeConversation)


export default routeConversation
