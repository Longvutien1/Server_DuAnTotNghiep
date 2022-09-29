import mongoose from "mongoose";
const { ObjectId } = mongoose
const answerVoCabSchema = mongoose.Schema({
    questionId:{
        type: ObjectId,
        ref:"QuestionVocabulary"
    },
    answerText:{
        type: String,
        require: true
    },
    // 0:false 1:true
    inCorect:{
        type:Number,
        require: true
    }
},{timestamps:true})

export default mongoose.model("AnswerVocabulary", answerVoCabSchema)