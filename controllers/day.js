import Day from "../models/day";



export const listDay = async (req, res) => {
    try {
        const day = await Day.find().exec();
        res.json(day)
    } catch (error) {
        res.status(400).json({message:"Không tìm thấy"})
    }
}

export const listDayByWeek = async (req, res) => {
    try {
        const day = await Day.find({week: req.params.id }).exec();
        res.json(day)
    } catch (error) {
        res.status(400).json({message:"Không tìm thấy"})
    }
}



export const detailDay= async (req,res)=>{
    try {
        const day = await Day.findOne({_id: req.params.id }).exec()

        res.json(day)
    } catch (error) {
        res.status(400).json({message:"Không tìm thấy Data"})
    }
}

export const addDay = async (req, res) => {
    try {
        const day = await Day(req.body).save();
        res.json(day)
    } catch (error) {
        res.status(400).json({message:"Thêm thất bại"})
    }
}


export const editDay = async (req, res) => {
    try {
        const day = await Day.findOneAndUpdate({_id:req.params.id}, req.body, {new: true});
        res.json(day)
    } catch (error) {
        res.status(400).json({message:"Sửa thất bại"})
    }
}

export const removeDay = async (req, res) => {
    try {
        const day = await Day.findOneAndDelete({id:req.params.id});
        res.json(day)
    } catch (error) {
        res.status(400).json({message:"Xóa thất bại"})
    }
}

