import Grammar from "../models/grammar";

export const listGrammar = async (req, res) => {
    try {
        const data = await Grammar.find().exec();
        res.json(data)
    } catch (error) {
        res.status(400).json({message:"Lỗi"})
    }

}

export const addGrammar = async (req, res) => {
    console.log(req.body);
    try {
        const data = await Grammar(req.body).save();
        req.json(data)
    } catch (error) {
        res.status(400).json({message: "Fail!"})
    }
}

export const detailGrammar = async (req,res)=>{
    try {
        const data = await Grammar.findOne({_id: req.params.id }).exec()
        res.json(data)
    } catch (error) {
        res.status(400).json({message:"Không tìm thấy Data"})
    }
}