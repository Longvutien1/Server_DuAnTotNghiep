import comment from "../models/comment"



export const listComment = async (req, res) => {
    try {
        const comments = await comment.find().exec();
        res.json(comments)
    } catch (error) {
        res.status(400).json({message:"Không tìm thấy"})
    }
}

export const addComment = async (req, res) => {
    try {
        const comments = await comment(req.body).save();
        res.json(comments)
    } catch (error) {
        res.status(400).json({message:"Thêm thất bại"})
    }
}


export const editComment = async (req, res) => {
    try {
        const comments = await comment.findOneAndUpdate({_id:req.params.id}, req.body, {new: true});
        res.json(comments)
    } catch (error) {
        res.status(400).json({message:"Sửa thất bại"})
    }
}

export const removeComment = async (req, res) => {
    try {
        const comments = await comment.findOneAndDelete({_id:req.params.id}).exec();
        res.json(comments)
    } catch (error) {
        res.status(400).json({message:"Xóa thất bại"})
    }
}
export const getCommentById = async (req, res) => {
    try {
        const comments = await comment.findOne({_id:req.params.id}).exec();
        res.json(comments)  
    } catch (error) {
        res.status(400).json({message:"Xóa thất bại"})
    }
}
export const updateLike = async (req, res) => {
    try {
        const comments = await comment.findOneAndUpdate({_id:req.body.id},{
            like: req.body.like
        }, {new: true});
        res.json(comments)
    } catch (error) {
        res.status(400).json({message:"Sửa thất bại"})
    }
}


