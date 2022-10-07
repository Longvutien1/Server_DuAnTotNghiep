import WellcomeModel from "../models/wellcomeModel";

export const listWellcome = async(req, res) => {
    try {
        const data = await WellcomeModel.find().exec();
        res.json(data)
    } catch (error) {
        res.status(400).json({message:"Không tìm thấy Data"})
    }
} 

export const addWellcome = async (req, res) => {
    try {
        const data = await WellcomeModel(req.body).save();
        res.json(data)
    } catch (error) {
        res.status(400).json({message:"Thêm dữ liệu không thành công!"})
    }
}