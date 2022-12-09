import mongoose from "mongoose";
const { ObjectId } = mongoose
const vnpaySchema = new mongoose.Schema({
    userId: {
        type: ObjectId,
        required:true
    },
    amount:{
        type:String,
        required: true
    },
    bank:{
        type: String,
        required: true
    },
    content:{
        type: String,
        default:""
    },
    code:{
        type:Number,
        required: true
    }

},{timestamps:true})

export default mongoose.model("payment", vnpaySchema)