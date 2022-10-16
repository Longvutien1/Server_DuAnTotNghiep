import Week from "../models/week";




export const listWeek = async (req, res) => {
    try {
        const week = await Week.find().exec();
        res.json(week)
    } catch (error) {
        res.status(400).json({message:"Không tìm thấy"})
    }
}

export const listWeekByMonth = async (req, res) => {
    try {
        const week = await Week.find({month: req.params.id }).exec();
        res.json(week)
    } catch (error) {
        res.status(400).json({message:"Không tìm thấy"})
    }
}


export const detailWeek= async (req,res)=>{
    try {
        const week = await Week.findOne({_id: req.params.id }).exec()

        res.json(week)
    } catch (error) {
        res.status(400).json({message:"Không tìm thấy Data"})
    }
}

export const addWeek = async (req, res) => {
    try {
        const week = await Week(req.body).save();
        res.json(week)
    } catch (error) {
        res.status(400).json({message:"Thêm thất bại"})
    }
}


export const editWeek = async (req, res) => {
    try {
        const week = await Week.findOneAndUpdate({_id:req.params.id}, req.body, {new: true});
        res.json(week)
    } catch (error) {
        res.status(400).json({message:"Sửa thất bại"})
    }
}

export const removeWeek = async (req, res) => {
    try {
        const week = await Week.findOneAndDelete({id:req.params.id});
        res.json(week)
    } catch (error) {
        res.status(400).json({message:"Xóa thất bại"})
    }
}

