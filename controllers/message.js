import Message from "../models/message";

export const getMessageByGroup = async (req, res) => {
  try {
    const { classId } = req.params;
    const messages = await Message.find({ classId })
      .populate("userId")
      .populate("classId")
      .sort({ createdAt: -1 })
      .exec();
    res.json(messages);
  } catch (error) {
    res.json(error);
  }
};
