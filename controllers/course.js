import Course from "../models/course";




export const listCourse = async (req, res) => {
    try {
        const coures = await Course.find().exec();
        res.json(coures)
    } catch (error) {
        res.status(400).json({message:"Không tìm thấy"})
    }
}


export const detailCourse= async (req,res)=>{
    try {
        const coures = await Course.findOne({_id: req.params.id }).exec()

        res.json(coures)
    } catch (error) {
        res.status(400).json({message:"Không tìm thấy Data"})
    }
}

export const addCourse = async (req, res) => {
    try {
        const course = await Course(req.body).save();
        res.json(course)
    } catch (error) {
        res.status(400).json({message:"Thêm thất bại"})
    }
}


export const editCourse = async (req, res) => {
    try {
        const course = await Course.findOneAndUpdate({_id:req.params.id}, req.body, {new: true});
        res.json(course)
    } catch (error) {
        res.status(400).json({message:"Sửa thất bại"})
    }
}

export const removeCourse = async (req, res) => {
    try {
        const course = await Course.findOneAndDelete({id:req.params.id});
        res.json(course)
    } catch (error) {
        res.status(400).json({message:"Xóa thất bại"})
    }
}

