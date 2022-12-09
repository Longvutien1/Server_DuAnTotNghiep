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

export const createMessage = async (req, res) => {
  try {
    const message = await Message(req.body).save();
    res.json(message);
  } catch (error) {
    res.json(error);
  }
};

export const updateMessage = async (req, res) => {
  try {
    const message = await Message.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    ).populate("userId")
    .populate("classId").exec();
    res.json(message);
  } catch (error) {
    res.json(error);
  }
};


export const removeMessage = async (req, res) => {
  try {
    const message = await Message.findOneAndDelete(
      { _id: req.params.id }
    ).exec();
    res.json(message);
  } catch (error) {
    res.json(error);
  }
};
