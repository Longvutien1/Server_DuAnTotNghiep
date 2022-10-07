import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    rating:{
        type: Number,
        default: 0
    },
    totalBuy:{
        type: Number,
        default: 0
    },
    expiredTime:{
        type: Date,
        default: 0
    }

},{timestamps:true})

export default mongoose.model('Course', courseSchema)