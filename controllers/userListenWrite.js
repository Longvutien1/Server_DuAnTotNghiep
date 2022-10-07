import UserListenWrite from "../models/userListenWrite"

export const listUserListenWrite = async (req,res)=>{
    try {
        const userListenWrite = await UserListenWrite.find().exec()
        res.json(userListenWrite)
    } catch (error) {
        res.status(400).json({message:"Không tìm thấy Data"})
    }
}

export const detailUserListenWrite = async (req,res)=>{
    try {
        const userListenWrite = await UserListenWrite.findOne({idListenWrite: req.params.id }).exec()
        res.json(userListenWrite)
    } catch (error) {
        res.status(400).json({message:"Không tìm thấy Data"})
    }
}

export const addUserListenWrite = async (req,res)=>{
    try {
        const userListenWrite = await UserListenWrite(req.body).save()
        res.json(userListenWrite)
    } catch (error) {
        res.status(400).json({message:"Thêm thất bại"})
    }
}

export const editUserListenWrite = async (req,res)=>{
    try {
        const userListenWrite = await UserListenWrite.findOneAndUpdate({_id: req.params.id }, req.body ,{new:true}).exec()
        res.json(userListenWrite)
    } catch (error) {
        res.status(400).json({message:"Sửa thất bại"})
    }
}

export const deleteUserListenWrite = async (req,res)=>{
    try {
        const userListenWrite = await UserListenWrite.findOneAndDelete({_id: req.params.id }).exec()
        res.json(userListenWrite)
    } catch (error) {
        res.status(400).json({message:"Xóa thất bại"})
    }
}