import ListenWrite from "../models/listenWrite"
import Category from "../models/category"
export const listListenWrite = async (req,res)=>{
    try {
        const listenWrite = await ListenWrite.find().exec()
        res.json(listenWrite)
    } catch (error) {
        res.status(400).json({message:"Không tìm thấy Data"})
    }
}

export const detailListenWrite = async (req,res)=>{
     // console.log(req.params.id);
     try {
        const listenWrite = await ListenWrite.findOne({_id: req.params.id }).exec()
        res.json(listenWrite)
    } catch (error) {
        res.status(400).json({message:"Không tìm thấy Data"})
    }
}

export const detailListenWriteByIdCategory = async (req,res)=>{
    console.log(req.params.id);
    try {
        const categories =  await Category.findOne({_id:req.params.id}).exec();
        // const listenWrite = await ListenWrite.find({categories}).select("-category").exec();
          const listenWrite = await ListenWrite.findOne({category:categories}).populate("practiceActivity").exec();
        // const listenWrite = await ListenWrite.findOne({category: req.params.id }).exec()
        res.json(listenWrite)
    } catch (error) {
        res.status(400).json({message:"Không tìm thấy Data"})
    }
   
}

export const addListenWrite = async (req,res)=>{
    try {
        const listenWrite = await ListenWrite(req.body).save()
        res.json(listenWrite)
    } catch (error) {
        res.status(400).json({message:"Thêm thất bại"})
    }
}

export const editListenWrite = async (req,res)=>{
    try {
        const listenWrite = await ListenWrite.findOneAndUpdate({_id: req.params.id }, req.body ,{new:true}).exec()
        res.json(listenWrite)
    } catch (error) {
        res.status(400).json({message:"Sửa thất bại"})
    }
}

export const deleteListenWrite = async (req,res)=>{
    try {
        const listenWrite = await ListenWrite.findOneAndDelete({_id: req.params.id }).exec()
        res.json(listenWrite)
    } catch (error) {
        res.status(400).json({message:"Xóa thất bại"})
    }
}