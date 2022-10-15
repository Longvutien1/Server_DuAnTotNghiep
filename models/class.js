import mongoose from 'mongoose'
const { ObjectId } = mongoose
const classSchema = new mongoose.Schema({
    nameClass:{
        type: String,
        required: true
    },
    lever: {
        type: String,
        default: ''
    },
    userOfClass: [
        {
            userId: {
                type: ObjectId,
                ref: "User"
            },
            timeJoinClass: {
                type: Date,
                default: new Date()
            }
        }
    ],
    linkJoinClass: {
        type: String
    }
    
}, {timestamps: true})

export default mongoose.model('Classes', classSchema);