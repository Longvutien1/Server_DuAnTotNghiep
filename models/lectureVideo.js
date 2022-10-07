import mongoose from "mongoose";
const { ObjectId } = mongoose

const lectureVideoSchema = new mongoose.Schema({
    category:{
        type: ObjectId,
        ref:"Category"
    },
    nameVideo:{
        type: String,
        required: true
    },
    videoUrl:{
        type: String,
        required: true
    },
},{timestamps:true})

export default mongoose.model("LectureVideo", lectureVideoSchema)