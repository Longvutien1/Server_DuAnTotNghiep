import mongoose from "mongoose";
const { ObjectId } = mongoose

const weekSchema = new mongoose.Schema({
    month:{
        type: ObjectId,
        ref:"Month"
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

export default mongoose.model('Week', weekSchema)