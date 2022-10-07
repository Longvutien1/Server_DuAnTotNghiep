import Grammar from "../models/grammar";

export const listGrammar = async (req, res) => {
    try {
        const grammar = await Grammar.find().exec();
        res.json(grammar) 
    } catch (error) {   
        res.status(400).json({message : "Không tìm thấy"})
    }
}

export const getGrammarById = async (req , res) => {
    try {
        const grammar = await Grammar.findOne({_id: req.params.id }).exec()
        res.json(grammar)
    } catch (error) {
        res.status(400).json({message:"Không tìm thấy Data"})
    }
}

export const createGrammar = async (req , res) => {
    try {
        const grammar = await Grammar(req.body).save()
        res.json(grammar)
    } catch (error) {   
        res.status(400).json({message : "thêm thất bại"})

    }
}

export const editGrammar = async (req, res ) => {
    try {
        const grammar = await Grammar.findOneAndUpdate({_id:req.params.id}, req.body, {new: true});
        res.json(grammar)
    } catch (error) {
        res.status(400).json({message:"Sửa thất bại"})
    }
}


export const removeGrammar = async (req, res) => {
    try {
        const grammar = await Grammar.findOneAndDelete({_id:req.params.id}).exec();
        res.json(grammar)
    } catch (error) {
        res.status(400).json({message:"Xóa thất bại"})
    }
}