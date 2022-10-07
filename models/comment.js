import mongoose from 'mongoose'

const commentSchema = new mongoose.Schema({
    id: {
        type: Number,
    },
    content: {
        type: String,
        required: true
    },
    datetime: {
        type: String,
    },
    author: {
        type: String,
    },
    avatar: {
        type: String
    },
    like: [
        {
            userId: {
                type: String
            },
            status: {
                type: String
            }
        }
    ],
    dislike: [
        {
            userId: {
                type: String
            },
            status: {
                type: String
            }
        }
    ],
    rating: {
        type: Number
    }
}, { timestamps: true })

export default mongoose.model('Comment', commentSchema);

