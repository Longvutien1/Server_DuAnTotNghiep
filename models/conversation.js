import mongoose from "mongoose";
const {ObjectId} = mongoose

const conversationSchema = new mongoose.Schema({
    title:{
        type : String,
        required : true
    },
    day:{
        type :ObjectId,
        ref: 'Day'
    }
}, {timestamps : true})

export default mongoose.model("Conversation" , conversationSchema)

