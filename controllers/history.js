import History from "../models/history"
import UserQuiz from "../models/userQuiz"
import AnswerQuiz from "../models/answerQuiz"

export const listHistory = async (req,res)=>{
    try {
        const history = await History.find().exec()
        res.json(history)
    } catch (error) {
        res.status(400).json({message:"Không tìm thấy Data"})
    }
}

export const detailHistory = async (req,res)=>{
    try {
        const history = await History.findOne({_id: req.params.id }).populate("category").exec()
        // const userQuiz = await UserQuiz.find({_id: history.answerQuiz}).populate("answerQuiz").exec()
        const userQuiz2 = await UserQuiz.find({history}).populate("answerQuiz").populate("quiz").exec()
       
        let userQuiz = userQuiz2
        for (let index = 0; index < userQuiz2.length; index++) {
            const answerQuiz = await AnswerQuiz.find({quiz: userQuiz2[index].quiz._id, isCorrect: 1 }).exec()
            // flag.push(answerQuiz)
            // flag[index].correctAnswer = answerQuiz
            userQuiz[index] = {...userQuiz[index]._doc, correctAnswer: answerQuiz[0]}
            // console.log("flag",flag);
        }
        

        res.json({history,userQuiz})
    } catch (error) {
        res.status(400).json({message:"Không tìm thấy Data"})
    }
}

export const addHistory = async (req,res)=>{
    try {
        const history = await History(req.body).save()
        res.json(history)
    } catch (error) {
        res.status(400).json({message:"Thêm thất bại"})
    }
}

export const editHistory = async (req,res)=>{
    try {
        const history = await History.findOneAndUpdate({_id: req.params.id }, req.body ,{new:true}).exec()
        res.json(history)
    } catch (error) {
        res.status(400).json({message:"Sửa thất bại"})
    }
}

export const deleteHistory = async (req,res)=>{
    try {
        const history = await History.findOneAndDelete({_id: req.params.id }).exec()
        res.json(history)
    } catch (error) {
        res.status(400).json({message:"Xóa thất bại"})
    }
}