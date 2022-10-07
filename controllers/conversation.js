import Conversation from "../models/conversation";

export const listConversation = async (req, res) => {
    try {
        const conversation = await Conversation.find().exec();
        res.json(conversation) 
    } catch (error) {   
        res.status(400).json({message : "Không tìm thấy"})
    }
}

export const getConversationById = async (req , res) => {
    try {
        const conversation = await Conversation.findOne({_id: req.params.id }).exec()
        res.json(conversation)
    } catch (error) {
        res.status(400).json({message:"Không tìm thấy Data"})
    }
}

export const createConversation = async (req , res) => {
    try {
        const conversation = await Conversation(req.body).save()
        res.json(conversation)
    } catch (error) {   
        res.status(400).json({message : "thêm thất bại"})

    }
}

export const editConversation = async (req, res ) => {
    try {
        const conversation = await Conversation.findOneAndUpdate({_id:req.params.id}, req.body, {new: true});
        res.json(conversation)
    } catch (error) {
        res.status(400).json({message:"Sửa thất bại"})
    }
}


export const removeConversation = async (req, res) => {
    try {
        const conversation = await Conversation.findOneAndDelete({_id:req.params.id}).exec();
        res.json(conversation)
    } catch (error) {
        res.status(400).json({message:"Xóa thất bại"})
    }
}