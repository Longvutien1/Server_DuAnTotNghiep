import mongoose from "mongoose";
const { ObjectId } = mongoose;

const listenWriteSchema = new mongoose.Schema(
  {
    practiceActivity: {
      type: ObjectId,
      ref: "PracticeActivity",
    },
    audio: {
      type: String,
      required: true
    },
    conversation:{
      type: Object,
      required: true
    },
    structure: {
      type: String,
      required: true
    },
  },
  { timestamps: true }
);

export default mongoose.model("ListenWrite", listenWriteSchema);
