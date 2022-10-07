import mongoose from "mongoose";

const topicSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    }
}, {timestamps: true})

export default mongoose.model("TopicVocabulary", topicSchema)