import mongoose from "mongoose";
const { ObjectId } = mongoose;

const answerListenWriteSchema = new mongoose.Schema(
  {
    idQuestion: {
      type: ObjectId,
      ref: "QuestionListenWrite",
    },
    answer: [
      {
        type: String,
        required: true,
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("AnswerListenWrite", answerListenWriteSchema);
