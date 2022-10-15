import Classes from "../models/class";
export const getListClass = async (req, res) => {
  try {
    const listClass = await Classes.find()
      .populate({
        path: "userOfClass",
        populate: { path: "userId" },
      })
      .exec();
    res.json(listClass);
  } catch (error) {
    res.status(400).json({ message: "Không tìm thấy Data" });
  }
};

export const detailClass = async (req, res) => {
  try {
    const itemClass = await Classes.findOne({ _id: req.params.id }).populate({
      path: "userOfClass",
      populate: { path: "userId" },
    }).exec();
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
    ).populate({
      path: "userOfClass",
      populate: { path: "userId" },
    }).exec();
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
