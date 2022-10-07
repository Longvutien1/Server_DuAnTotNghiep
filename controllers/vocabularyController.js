import Vocabulary from "../models/vocabulary";

export const listVocabulary = async (req, res) => {
    try {
        const vocabulary = await Vocabulary.find().select("-__v").populate('category').limit(5).exec();
        res.json(vocabulary)
    } catch (error) {
      res.status(400).json({massage:"Không tìm thấy!"});
    }
}
export const detailVocabulary = async (req,res)=>{
    try {
        const vocabulary = await Vocabulary.findOne({_id: req.params.id }).exec()
        res.json(vocabulary)
    } catch (error) {
        res.status(400).json({message:"Không tìm thấy Data"})
    }
}

export const addVocabulary = async (req,res)=>{
    try {
        const vocabulary = await Vocabulary(req.body).save()
        res.json(vocabulary)
    } catch (error) {
        res.status(400).json({message:"Thêm thất bại"})
    }
}

export const editVocabulary = async (req,res)=>{
    try {
        const vocabulary = await Vocabulary.findOneAndUpdate({_id: req.params.id }, req.body ,{new:true}).exec()
        res.json(vocabulary)
    } catch (error) {
        res.status(400).json({message:"Sửa thất bại"})
    }
}

export const deleteVocabulary = async (req,res)=>{
    try {
        const vocabulary = await Vocabulary.findOneAndDelete({_id: req.params.id }).exec()
        res.json(vocabulary)
    } catch (error) {
        res.status(400).json({message:"Xóa thất bại"})
    }
}
