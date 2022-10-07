import mongoose from "mongoose";
const { ObjectId } = mongoose

const userListenWriteSchema = new mongoose.Schema([
    {
        history:{
            type: ObjectId,
            ref: "History"
        },
        listenWrite:{
            type: ObjectId,
            ref: "ListenWrite"
        },
        score:{
            type: Number,
            // required: true
        },
        idListenWrite:{
            type: String,
            required: true
        },
        listAnswer:[
           {
            answerUser:{
                type: String,
                required: true
            },
            answerCorrect:{
                type: String,
                required: true
            },  
            isCorrect:{
                type: Boolean,
                required: true
            },
           }
        ]
            
        ,
        numTrueAnswer:{
            type: Number,
            required: true
        },
    
    }
],{timestamps:true})

export default mongoose.model("UserListenWrite",userListenWriteSchema)