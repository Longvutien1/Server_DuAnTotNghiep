import QuestionListenWrite from "../models/questionListenWrite"

export const addQuestionListenWrite = async (req,res)=>{
    try {
        const questionListenWrite = await QuestionListenWrite(req.body).save()
        res.json(questionListenWrite)
    } catch (error) {
        res.status(400).json({message:"Thêm thất bại"})
    }
}

export const listQuestionListenWriteByIdQuestion = async (req,res)=>{
    try {
        const questionListenWrite = await QuestionListenWrite.find({idListenWrite: req.params.id }).sort({'order':'asc'}).exec()
        res.json(questionListenWrite)
    } catch (error) {
        res.status(400).json({message:"Không tìm thấy Data"})
    }
}

export const editQuestionListenWrite = async (req,res)=>{
    try {
        const questionListenWrite = await QuestionListenWrite.findOneAndUpdate({_id: req.params.id }, req.body ,{new:true}).exec()
        res.json(questionListenWrite)
    } catch (error) {
        res.status(400).json({message:"Sửa thất bại"})
    }
}

export const deleteQuestionListenWrite = async (req,res)=>{
    try {
        const questionListenWrite = await QuestionListenWrite.findOneAndDelete({_id: req.params.id }).exec()
        res.json(questionListenWrite)
    } catch (error) {
        res.status(400).json({message:"Xóa thất bại"})
    }
}