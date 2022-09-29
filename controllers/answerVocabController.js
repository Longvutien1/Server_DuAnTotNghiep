import AnswerVobcabulary from "../models/answerVobcab";

export const getAnswerForQuestion = async (req, res) => {
    try {
        const data = await AnswerVobcabulary.find().exec();
        res.json(data)
    } catch (error) {
        res.status(400).json({message: "Lỗi"})
    }
}

export const addAnswerForQuestion = async (req, res) => {
    try {
        const data = await AnswerVobcabulary(req.body).save();
        res.json(data)
    } catch (error) {
        res.status(400).json({message: "Lỗi"})
    }
}