import mongoose from 'mongoose'

const contactSchema = new mongoose.Schema({
    surname:{
        type: String,
    },
    name:{
        type: String,
    },
    address:{
        type: String,
    },
    birthday:{
        type: Date,
    },
    email:{
        type: String,
    },
    phone:{
        type: String,
    },
    message:{
        type: String,
    },
    status:{
        type: Number
    },
    sendAds:{
        type: Number
    }
}, {timestamps: true})

export default mongoose.model('Contact', contactSchema);

