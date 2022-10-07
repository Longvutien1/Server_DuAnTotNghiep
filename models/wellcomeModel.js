import mongoose from "mongoose";

const wellcomeSchema =  new mongoose.Schema({
    username : {
        type: String,
        // required: true,
    },
    numberphone: {
        type:Number,
        // required:true,
        trim: true
    },
    social: {
        type: String   
    },
    reason: {
        type: String
    },
    timeStudy:{
        type:String
    }
},{timestamps:true})

export default mongoose.model("wellcome", wellcomeSchema)