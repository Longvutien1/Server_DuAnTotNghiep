import mongoose from "mongoose";
import { stringify } from "uuid";
const { ObjectId } = mongoose

const questionListenWrite = new mongoose.Schema({
 
    idListenWrite:{
        type: ObjectId,
        ref: "ListenWrite"
    },
    name:{
        type: String,
        required:true
    },
    text:{
        type: String,
        required:true
    },
    order:{
      type: Number,
      required:true
    }
},{timestamps:true})

export default mongoose.model("QuestionListenWrite",questionListenWrite)