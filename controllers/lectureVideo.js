import LectureVideo from '../models/lectureVideo'
export const listLectureVideos = async (req,res)=>{
    try {
        const lectureVideos = await LectureVideo.find().populate("category").exec()
        res.json(lectureVideos)
    } catch (error) {
        res.status(400).json({message:"Không tìm thấy Data"})
    }
}

export const detailLectureVideo = async (req,res)=>{
    try {
        const lectureVideo = await LectureVideo.findOne({_id: req.params.id }).populate("category").exec()
        res.json(lectureVideo)
    } catch (error) {
        res.status(400).json({message:"Không tìm thấy Data"})
    }
}

export const addLectureVideo = async (req,res)=>{
    try {
        const lectureVideo = await LectureVideo(req.body).save()
        res.json(lectureVideo)
    } catch (error) {
        res.status(400).json({message:"Thêm thất bại"})
    }
}

export const editLectureVideo = async (req,res)=>{
    try {
        const lectureVideo = await LectureVideo.findOneAndUpdate({_id: req.params.id }, req.body ,{new:true}).exec()
        res.json(lectureVideo)
    } catch (error) {
        res.status(400).json({message:"Sửa thất bại"})
    }
}

export const deleteLectureVideo = async (req,res)=>{
    try {
        const lectureVideo = await LectureVideo.findOneAndDelete({_id: req.params.id }).exec()
        res.json(lectureVideo)
    } catch (error) {
        res.status(400).json({message:"Xóa thất bại"})
    }
}