import mongoose from "mongoose";

const sentenceSchema = new mongoose.Schema({
    words:{
        type: String,
        required: true
    },
    meaning:{
        type: String,
        required: true
    },
    //Ví dụ
    example:{
        type: String,
        // required: true
    },
    explain:{
        type:String
    }
}, {timestamps:true})

export default mongoose.model('Sentences', sentenceSchema)