import  express  from "express"
import { addContact, editContact, getContactById, listContact, removeContact } from "../controllers/contact";


const routeContact = express.Router();

routeContact.get('/contact', listContact);
routeContact.post('/contact', addContact);
routeContact.put('/contact/:id', editContact);
routeContact.delete('/contact/:id', removeContact);
routeContact.get('/contact/:id', getContactById);


export default routeContact;