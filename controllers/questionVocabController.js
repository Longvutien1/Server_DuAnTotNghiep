import QuestionVocabulary from "../models/questionVoCab";
import AnswerVobcabulary from "../models/answerVobcab";
export const getDetail = async (req, res) => {
    try {
        const data = await QuestionVocabulary.findOne({_id: req.params.id}).exec();
        res.json(data)
    } catch (error) {
        res.status(400).json({message:"Lỗi"})
    }
}

export const addQuestion = async (req, res) => {
    try {
        const data = await QuestionVocabulary(req.body).save();
        const answer = await AnswerVobcabulary.find({questionId:data}).exec();
        res.json({data, answer})
    } catch (error) {
        res.status(400).json({message:"Lỗi"})
    }
}

export const getAllQuestion = async (req, res) => {
    try {
        const data = await QuestionVocabulary.find().exec();
        const answer = await AnswerVobcabulary.find({questionId:data}).exec();
        console.log({data, answer});
        res.json({data, answer})
    } catch (error) {
        res.status(400).json({message:"Lỗi"})
    }
}