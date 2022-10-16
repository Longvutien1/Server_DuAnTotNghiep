import PracticeActivity from "../models/practiceActivity";
import History from "../models/history";
import ListenWrite from "../models/listenWrite";
import Quiz from "../models/quiz";
import Speak  from "../models/speak";

export const getListPracticeActivity = async (req, res) => {
  try {
    const listpracticeActivity = await PracticeActivity.find()
      .populate('day')
      .exec();
    res.json(listpracticeActivity);
  } catch (error) {
    res.status(400).json({ message: "Không tìm thấy Data" });
  }
};

export const getListPracticeActivityByDay = async (req, res) => {
  try {
    const listpracticeActivity = await PracticeActivity.find({day: req.params.id }).exec();
    res.json(listpracticeActivity);
  } catch (error) {
    res.status(400).json({ message: "Không tìm thấy Data" });
  }
};

export const detailPracticeActivity = async (req, res) => {
  try {
    const itemPracticeActivity = await PracticeActivity.findOne({ _id: req.params.id }).populate('day').exec();
    const quizs = await Quiz.find({practiceActivity: itemPracticeActivity._id}).populate("practiceActivity").exec()
    // const speak = await Speak.find({practiceActivity: day._id}).populate("practiceActivity").exec()
    const listenWrite = await ListenWrite.find({practiceActivity: itemPracticeActivity._id}).populate("practiceActivity").exec()
    const history = await History.find({practiceActivity: itemPracticeActivity, user:"62c853c16948a16fbde3b43e"}).populate("user").exec()
    res.json({itemPracticeActivity, quizs, listenWrite, history})
    // res.json({ PracticeActivity: itemPracticeActivity });
  } catch (error) {
    res.status(400).json({ message: "Không tìm thấy Data" });
  }
};

export const addPracticeActivity = async (req, res) => {
  try {
    const practiceActivity = await PracticeActivity(req.body).save();
    res.json({ practiceActivity: practiceActivity, message: "Thêm mới thành công" });
  } catch (error) {
    res.status(400).json({ message: "Thêm thất bại" });
  }
};

export const editPracticeActivity = async (req, res) => {
  try {
    const practiceActivity = await PracticeActivity.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    ).populate('day').exec();
    res.json({ practiceActivity: practiceActivity, message: 'Sửa thành công' });
  } catch (error) {
    res.status(400).json({ message: "Sửa thất bại" });
  }
};

export const deletePracticeActivity = async (req, res) => {
  try {
    const practiceActivity = await PracticeActivity.findOneAndDelete({
      _id: req.params.id,
    }).exec();
    res.json({ practiceActivity: practiceActivity , message: "Xóa thành công"});
  } catch (error) {
    res.status(400).json({ message: "Xóa thất bại" });
  }
};
