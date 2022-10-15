import PracticeActivity from "../models/practiceActivity";
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

export const detailPracticeActivity = async (req, res) => {
  try {
    const itemPracticeActivity = await PracticeActivity.findOne({ _id: req.params.id }).populate('day').exec();
    res.json({ PracticeActivity: itemPracticeActivity });
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
