import mongoose from "mongoose";
const { ObjectId } = mongoose;

const answerListenWriteSchema = new mongoose.Schema(
  {
    idListenWrite: {
      type: ObjectId,
      ref: "ListenWrite",
    },
    answer: {
      type: String,
      required: true,
    },
    confidence: {
      type: String,
      required: true,
    },
    order: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("AnswerListenWrite", answerListenWriteSchema);
