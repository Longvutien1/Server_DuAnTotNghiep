import mongoose from "mongoose";
import { stringify } from "uuid";
const { ObjectId } = mongoose

const listenWriteSchema = new mongoose.Schema({
    area: {
        type: String,
        required: true
    },
    category: {
        type: ObjectId,
        ref: "Category"
    },
    content: [
        {
            name: {
                type: String,
                required: true
            },
            text: {
                type: String,
                required: true
            },
            answer: {
                type: Array,
            }
        }
    ],

    // order:{
    //     type: Number,
    //     required:true
    // },
    audio:{
        type: String,
        required: true
    }
}, { timestamps: true })

export default mongoose.model("ListenWrite", listenWriteSchema)