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
    // 1: us
    // 0:uk
    place:{
        type: Number,
        // required: true
    },
    // Phiên âm
    pa:{
        type: String,
        required: true
    },
    example:{
        type:String,
        required: true
    }
}, {timestamps: true})

export default mongoose.model("Vocabulary", vocabularySchema)