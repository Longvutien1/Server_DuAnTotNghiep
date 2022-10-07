import mongoose from "mongoose";
const { ObjectId } = mongoose

const historySchema = new mongoose.Schema({
    user:{
        type: ObjectId,
        ref: "User"
    },
    // score:{
    //     type: ObjectId,
    //     ref: "Score"
    // },
    category:{
        type: ObjectId,
        ref: "Category"
    },
    totalPoint:{
        type: Number,
        required: true
    },
    totalCorrect:{
        type: Number,
        required: true
    },
    result:{
        type: Number,
        required: true
    },
    type:{
        type: Number,
        required: true
    },
    // experience:{
    //     type: Number,
    //     required: true
    // }
},{timestamps:true})

export default mongoose.model("History",historySchema)