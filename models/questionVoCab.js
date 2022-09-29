import mongoose from "mongoose";
 
const questionVocabSchema = mongoose.Schema({
    questionText:{
        type:String,
        require: true
    },
    image:{
        type: String,
    }
},{timestamps:true});

export default mongoose.model("QuestionVocabulary", questionVocabSchema)