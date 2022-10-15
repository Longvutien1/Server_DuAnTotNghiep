import mongoose from 'mongoose'
const { ObjectId } = mongoose

const daySchema = new mongoose.Schema({
    week:{
        type: ObjectId,
        ref:"Week"
    },
    title:{
        type: String,
        required: true
    },
    order:{
        type: Number,
        required: true
    }
}, {timestamps: true})

export default mongoose.model('Day', daySchema);

