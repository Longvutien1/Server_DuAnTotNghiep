import mongoose from "mongoose";
const { ObjectId } = mongoose

const practiceActivitySchema = new mongoose.Schema({
    day:{
        type: ObjectId,
        ref:"Day"
    },
    title:{
        type: String,
        required: true
    },
    type:{
        type: Number,
        default: 0,
        required: true
    }

},{timestamps:true})

export default mongoose.model('PracticeActivity', practiceActivitySchema)