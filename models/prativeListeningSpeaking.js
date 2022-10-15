import mongoose from 'mongoose'

const prativeListeningSchema = new mongoose.Schema({
    nameClass:{
        type: String,
        required: true
    },
    numberOfStudent:{
        type: Number,
        required: true
    },
    lever: {
        type: String,
        default: ''
    }
    
}, {timestamps: true})

export default mongoose.model('PrativeListening', prativeListeningSchema);