import mongoose from 'mongoose'
const { ObjectId } = mongoose
const randomLeft = (Math.random() + 1).toString(36).substring(6);
const randomRight = (Math.random() + 1).toString(36).substring(6);
const linkJoin = `${randomLeft}-${randomRight}`
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
    linkGoogleMeet: {
        type: String,
        default: 'https://meet.google.com/mqz-snbd-bsq'
    },
    teacherOfClass: [
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
        type: String,
        default: linkJoin
    }
    
}, {timestamps: true})

export default mongoose.model('Classes', classSchema);