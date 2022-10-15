import mongoose from "mongoose";
const {ObjectId} = mongoose
const noteSchema =  new mongoose.Schema({
    userId:{
        type: ObjectId,
        ref:"User",
        required: true        
    },
    dayId:{
        type: String,
        // ref:"",
        required: true
    },
    text:{
        type: String,
        required: true
    },

},{timestamps: true})

export default mongoose.model("NoteCouse", noteSchema);
