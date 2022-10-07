import mongoose from "mongoose";
const { ObjectId } = mongoose

const monthSchema = new mongoose.Schema({
    course:{
        type: ObjectId,
        ref:"Course"
    },
    title:{
        type: String,
        required: true
    },
    order:{
        type: Number,
        default: 0,
        required: true
    }

},{timestamps:true})

export default mongoose.model('Month', monthSchema)