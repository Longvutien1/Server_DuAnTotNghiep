import AnswerListenWrite from "../models/answerListenWrite"

export const listAnswerListenWrite = async (req,res)=>{
    try {
        const answerListenWrite = await AnswerListenWrite.find().exec()
        res.json(answerListenWrite)
    } catch (error) {
        res.status(400).json({message:"Không tìm thấy Data"})
    }
}

export const detailAnswerListenWrite = async (req,res)=>{
    try {
        const answerListenWrite = await AnswerListenWrite.find({idListenWrite: req.params.id }).exec()
        res.json(answerListenWrite)
    } catch (error) {
        res.status(400).json({message:"Không tìm thấy Data"})
    }
}

export const addAnswerListenWrite = async (req,res)=>{
    try {
        const answerListenWrite = await AnswerListenWrite(req.body).save()
        res.json(answerListenWrite)
    } catch (error) {
        res.status(400).json({message:"Thêm thất bại"})
    }
}

export const editAnswerListenWrite = async (req,res)=>{
    try {
        const answerListenWrite = await AnswerListenWrite.findOneAndUpdate({idQuestion: req.params.id }, req.body ,{new:true}).exec()
        res.json(answerListenWrite)
    } catch (error) {
        res.status(400).json({message:"Sửa thất bại"})
    }
}

export const deleteAnswerListenWrite = async (req,res)=>{
    try {
        const answerListenWrite = await AnswerListenWrite.findOneAndDelete({_id: req.params.id }).exec()
        res.json(answerListenWrite)
    } catch (error) {
        res.status(400).json({message:"Xóa thất bại"})
    }
}