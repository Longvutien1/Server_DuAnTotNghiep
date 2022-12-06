import Classes from "../models/class";
import mongoose from 'mongoose'
const  ObjectId  = mongoose.Types.ObjectId;
export const getListClass = async (req, res) => {
  try {
    const listClass = await Classes.find()
      .populate({
        path: "userOfClass",
        populate: { path: "userId" },
      })
      .populate({
        path: "teacherOfClass",
        populate: { path: "userId" },
      })
      .exec();
    res.json(listClass);
  } catch (error) {
    res.status(400).json({ message: "Không tìm thấy Data" });
  }
};

export const getClassByUserId = async (req, res) => {
  try {
    const {userId} = req.params;
    const listClass = await Classes.find({})
      .populate({
        path: "userOfClass",
        populate: { path: "userId" },
      })
      .exec();
    const listClassByUserId = listClass.filter((item) => {
      const listUser = item.userOfClass;

      const check = listUser.find((item) => item.userId._id.toString() === userId);
      console.log(check);
      if (check) {
        return true;
      } else {
        return false;
      }
    })
    res.json(listClassByUserId);
  } catch (error) {
    res.status(400).json({ message: "Không tìm thấy Data" });
  }
};

export const detailClass = async (req, res) => {
  try {
    const itemClass = await Classes.findOne({ _id: req.params.id })
      .populate({
        path: "userOfClass",
        populate: { path: "userId" },
      })
      .populate({
        path: "teacherOfClass",
        populate: { path: "userId" },
      })
      .exec();
    res.json({ class: itemClass });
  } catch (error) {
    res.status(400).json({ message: "Không tìm thấy Data" });
  }
};

export const addClass = async (req, res) => {
  try {
    const itemClass = await Classes(req.body).save();
    res.json({ class: itemClass });
  } catch (error) {
    res.status(400).json({ message: "Thêm thất bại" });
  }
};

export const editClass = async (req, res) => {
  try {
    const editClass = await Classes.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    )
      .populate({
        path: "userOfClass",
        populate: { path: "userId" },
      })
      .exec();
    res.json({ class: editClass });
  } catch (error) {
    res.status(400).json({ message: "Sửa thất bại" });
  }
};

export const deleteClass = async (req, res) => {
  try {
    const deleteClass = await Classes.findOneAndDelete({
      _id: req.params.id,
    }).exec();
    res.json({ class: deleteClass });
  } catch (error) {
    res.status(400).json({ message: "Xóa thất bại" });
  }
};

export const joinClass = async (req, res) => {
  try {
    
    const checkLink = await Classes.findOne({
      linkJoinClass: req.query.link,
    }).exec();
    if (checkLink) {
      const checkUser = checkLink.userOfClass.find(
        (item) => item.userId.toString() === req.query.userId
      );
      if (checkUser) {
        res.status(203).json({
          message: "Thành viên này đã có trong lớp học, ko thể join nữa",
        });
      } else {
        checkLink.userOfClass.push({
          userId: req.query.userId,
          timeJoinClass: new Date(),
        });
       

        const updateClass = await Classes.findOneAndUpdate(
          { linkJoinClass: req.query.link },
          { userOfClass: checkLink.userOfClass },
          { new: true }
        ).populate({
          path: "userOfClass",
          populate: { path: "userId" },
        });
        res.json({ class: updateClass });
      }
    } else {
      res.status(400).json({ message: "Join class ko thành công" });
    }
  } catch (error) {
    res.status(400).json({ message: "Join class thất bại" });
  }
};
