import mongoose from "mongoose";
const {ObjectId} = mongoose
const vocabularySchema = new mongoose.Schema({
    // Từ
    words:{
        required: true,
        type: String
    },
    // Ý nghĩa
    meaning:{
        required: true,
        type: String
    },
    // Loại từ
    wordForm:{
        required: true,
        type: String
    },
    // Ảnh
    image:{
        type: String,
        // required: true
    },
    category:{
        type: ObjectId,
        ref:"TopicVocabulary"
    },
    audio:{
        type: String,
        // required: true
    },
    // Cụm từ
    sentences:{
        type: ObjectId,
        ref:""
    },
    // Cấu trúc cụm từ
    structureSentences:{
        type:ObjectId,
        ref:""
    },
    // Ngữ pháp
    grammar:{
        type: ObjectId,
        ref:"Grammar"
    }
}, {timestamps: true})

export default mongoose.model("Vocabulary", vocabularySchema)