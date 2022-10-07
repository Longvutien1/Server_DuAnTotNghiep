import  express  from "express"
import { addComment, editComment, getCommentById, listComment, removeComment } from "../controllers/comment";


const routeComment = express.Router();

routeComment.get('/comment', listComment);
routeComment.post('/comment', addComment);
routeComment.put('/comment/:id', editComment);
routeComment.put('/comment/like/:id', editComment);
routeComment.delete('/comment/:id', removeComment);
routeComment.get('/comment/:id', getCommentById);


export default routeComment;