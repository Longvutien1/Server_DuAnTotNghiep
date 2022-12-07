import mongoose from 'mongoose'
const { ObjectId } = mongoose

const messageSchema = new mongoose.Schema({
    message:{
        type: String,
        required: true
    },
    userId: {
        type: ObjectId,
        ref: "User"
    },
    classId: {
        type: ObjectId,
        ref: "Classes"
    },
    status: {
        type: Boolean,
        default: true
    }
    
}, {timestamps: true})

export default mongoose.model('Messages', messageSchema);