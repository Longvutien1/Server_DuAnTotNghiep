import mongoose from "mongoose";
const {ObjectId} = mongoose

const grammarSchema = new mongoose.Schema({
    title:{
        type : String,
        required : true
    },
    day:{
        type :ObjectId,
        ref: 'Day'
    }
}, {timestamps : true})

export default mongoose.model("Grammar" , grammarSchema)




