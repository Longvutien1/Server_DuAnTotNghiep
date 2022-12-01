import mongoose from "mongoose";
const { ObjectId } = mongoose;

const answerQuizSchema = new mongoose.Schema(
  {
    quiz: {
      // ObjectId
      type: ObjectId,
      ref: "Quiz",
    },
    answer: {
      type: String,
      required: true,
    },
    isCorrect: {
      type: Boolean,
      // required: true,
    },
    wordMeaning: {
      type: String,
      default: "",
    },
    explainAnswer: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      default: "",
    },
    order:{
      type:Number,
      default: 0,
    }
  },
  { timestamps: true }
);

export default mongoose.model("AnswerQuiz", answerQuizSchema);
