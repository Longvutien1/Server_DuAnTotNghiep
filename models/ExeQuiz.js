import mongoose from "mongoose";

const exeQuizSchema = new mongoose.Schema({
    question:{
        type: String,
        required: true
    },
    image:{
        type: String,
    },
    correctAnswer:{
        type: Boolean,
        required: true
    },
    timeLimit:{
        type: Numbers,
        required: true
    }

},{timestamps:true})

export default mongoose.model('ExeQuiz', exeQuizSchema)