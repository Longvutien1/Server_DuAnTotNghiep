import Month from "../models/month";




export const listMonth = async (req, res) => {
    try {
        const month = await Month.find().exec();
        res.json(month)
    } catch (error) {
        res.status(400).json({message:"Không tìm thấy"})
    }
}


export const detailMonth= async (req,res)=>{
    try {
        const month = await Month.findOne({_id: req.params.id }).exec()

        res.json(month)
    } catch (error) {
        res.status(400).json({message:"Không tìm thấy Data"})
    }
}

export const addMonth = async (req, res) => {
    try {
        const month = await Month(req.body).save();
        res.json(month)
    } catch (error) {
        res.status(400).json({message:"Thêm thất bại"})
    }
}


export const editMonth = async (req, res) => {
    try {
        const month = await Month.findOneAndUpdate({_id:req.params.id}, req.body, {new: true});
        res.json(month)
    } catch (error) {
        res.status(400).json({message:"Sửa thất bại"})
    }
}

export const removeMonth = async (req, res) => {
    try {
        const month = await Month.findOneAndDelete({id:req.params.id});
        res.json(month)
    } catch (error) {
        res.status(400).json({message:"Xóa thất bại"})
    }
}

