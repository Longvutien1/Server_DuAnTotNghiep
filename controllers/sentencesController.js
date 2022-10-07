import Sentences from "../models/sentences";

export const getlistSentence = async (req, res) => {
    try {
        const data = await Sentences.find({}).exec();
        res.json(data)
    } catch (error) {
        res.status(400).json({message:"Lỗi"})
    }
} 

export const addSentence = async (req, res) => {
    try {
        const data = await Sentences(req.body).save();
        res.json(data)
    } catch (error) {
        res.status(400).json({message:"Lỗi"})
    }
}

export const getDetailSentence = async (req, res) => {
    try {
        const data = await Sentences.findOne({_id: req.params.id}).exec();
        res.json(data)
    } catch (error) {
        res.status(400)
    }
}

export const editSentence = async (req, res) => {
    try {
        const data = await Sentences.findOneAndUpdate({_id: req.params.id}, req.body, {new:true}).exec();
        res.json(data)
    } catch (error) {
        res.status(400).json({message:"Lỗi"})
    }
}

export const deleteSentence = async (req, res) => {
    try {
        const data = await Sentences.findOneAndDelete({_id: req.params.id}).exec();
        res.json(data)
    } catch (error) {
        res.status(400).json({message:"Lỗi"})
    }
}