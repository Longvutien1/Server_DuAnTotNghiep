import mongoose from 'mongoose'

const contactSchema = new mongoose.Schema({
    surname:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    birthday:{
        type: Date,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    message:{
        type: String,
        required: true
    },
    status:{
        type: Number
    },
    sendAds:{
        type: Number
    }
}, {timestamps: true})

export default mongoose.model('Contact', contactSchema);

