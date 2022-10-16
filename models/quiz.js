import mongoose from "mongoose";
const { ObjectId } = mongoose

const quizSchema = new mongoose.Schema({
    practiceActivity:{
        type: ObjectId,
        ref:"PracticeActivity"
    },
    question:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    timeLimit:{
        type: Number,
        required: true
    },
    type:{
        type: Number,
        required: true
    },
    meaning:{
        type: String,
        // required: true
        default: ""
    },
    suggestions:{
        type: String,
        // required: true
        default: ""
    }
},{timestamps:true})

export default mongoose.model("Quiz",quizSchema)