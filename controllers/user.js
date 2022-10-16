import jwt from "jsonwebtoken";
import User from "../models/user";
import bcrypt from "bcrypt";
// import { setCookie } from "react-cookies";
export const signIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email }).exec();
    if (!user) {
      return res.json({
        message: "Tài khoản hoặc mật khẩu không chính xác",
      });
    }
    const match = await bcrypt.compare(password, user.password);
    if (match == false) {
      return res.json({
        message: "Tài khoản hoặc mật khẩu không chính xác",
      });
    }

    const token = jwt.sign(
      {
        _id: user._id,
        email: user.email,
        username: user.username,
        role: user.role,
        phone: user.phone,
        address: user.address,
        img: user.img,
        sex: user.sex,
        colorImage: user.colorImage,
      },
      "123456",
      { expiresIn: "12h" }
    );

    res.setHeader("userCookie", token);

    return res
      .status(200)
      .json({ message: "Đăng nhập thành công !", token: token });
  } catch (error) {
    res.status(400).json({ message: "Đăng nhập thất bại" });
  }
};

export const signUp = async (req, res) => {
  const { email, username, password, img, colorImage } = req.body;
  try {
    // check user exist
    const exisUser = await User.findOne({ email }).exec();
    if (exisUser) {
      return res.json({ message: "User đã tồn tại" });
    }
    // mã hóa pass
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    const user = await User({
      email,
      password: passwordHash,
      username,
      img,
      colorImage,
    }).save();

    res.json({
      user: {
        _id: user._id,
        email: user.email,
        username: user.username,
        colorImage,
      },
    });
  } catch (error) {
    res.status(400).json({ message: "Lỗi rồi" });
  }
};

export const signInWidthFaceBook = async (req, res) => {
  const { id, email, name, img } = req.body;
  try {
    const exisUser = await User.findOne({ idFacebook: id }).exec();

    if (exisUser) {
      const token = jwt.sign(
        {
          _id: exisUser._id,
          email: exisUser.email,
          username: exisUser.username,
          role: exisUser.role,
          phone: exisUser.phone,
          address: exisUser.address,
          img: exisUser.img,
          sex: exisUser.sex,
        },
        "123456",
        { expiresIn: "12h" }
      );

      res.setHeader("userCookie", token);

      return res
        .status(200)
        .json({ message: "Đăng nhập thành công !", token: token });
    } else {
      const user = await User({
        idFacebook: id,
        email,
        password: "123456",
        username: name,
        img,
      }).save();

      const token = jwt.sign(
        {
          _id: user._id,
          email: user.email,
          username: user.username,
          role: user.role,
          phone: user.phone,
          address: user.address,
          img: user.img,
          sex: user.sex,
        },
        "123456",
        { expiresIn: "12h" }
      );

      res.setHeader("userCookie", token);

      return res
        .status(200)
        .json({ message: "Đăng nhập thành công !", token: token });
    }
  } catch (error) {
    res.status(400).json({ message: "Lỗi rồi" });
  }
};

export const signInWidthGoogle = async (req, res) => {
  const { id, email, name, img } = req.body;
  try {
    const exisUser = await User.findOne({ idGoogle: id }).exec();

    if (exisUser) {
      const token = jwt.sign(
        {
          _id: exisUser._id,
          email: exisUser.email,
          username: exisUser.username,
          role: exisUser.role,
          phone: exisUser.phone,
          address: exisUser.address,
          img: exisUser.img,
          sex: exisUser.sex,
        },
        "123456",
        { expiresIn: "12h" }
      );

      res.setHeader("userCookie", token);

      return res
        .status(200)
        .json({ message: "Đăng nhập thành công !", token: token });
    } else {
      const user = await User({
        idGoogle: id,
        email,
        password: "123456",
        username: name,
        img,
      }).save();
      const token = jwt.sign(
        {
          _id: user._id,
          email: user.email,
          username: user.username,
          role: user.role,
          phone: user.phone,
          address: user.address,
          img: user.img,
          sex: user.sex,
        },
        "123456",
        { expiresIn: "12h" }
      );

      res.setHeader("userCookie", token);

      return res
        .status(200)
        .json({ message: "Đăng nhập thành công !", token: token });
    }
  } catch (error) {
    res.status(400).json({ message: "Lỗi rồi" });
  }
};

export const userDetail = async (request, response) => {
  try {
    const user = await User.findOne({ _id: request.params.id }).exec();
    response.json(user);
  } catch (error) {
    response.status(400).json({ message: "Không tìn thấy data" });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.find().exec();
    res.json(user);
  } catch (error) {
    response.status(400).json({ message: "Không tìm thấy data" });
  }
};

export const userById = async (req, res, next, id) => {
  try {
    const userById = await User.findById(id).exec();
    if (!userById) {
      res.status(400).json({
        message: "Không tìm thấy user",
      });
    }
    req.profile = userById;
    req.profile.password = undefined;
    next();
  } catch (error) {
    console.log(error);
  }
};

export const userByEmail = async (req, res, next) => {
  const { email } = req.body;
  try {
    const userByemail = await User.findOne({ email: email }).exec();
    if (!userByemail) {
      res.json({
        message: "Tài khoản không tồn tại !",
      });
    }
    req.profile = userByemail;
    req.profile.password = undefined;
    next();
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (request, response) => {
  try {
    const user = await User.findOneAndUpdate(
      { _id: request.params.id },
      request.body,
      { new: true }
    );
    response.json(user);
  } catch (error) {
    response.status(400).json({ message: "Không thể sửa" });
  }
};

export const deleteUser = async (request, response) => {
  try {
    const user = await User.findOneAndDelete({ _id: request.params.id });
    response.json(user);
  } catch (error) {
    response.status(400).json({ message: "Không thể xóa" });
  }
};

export const changePassword = async (req, res, next) => {
  try {
    const { email } = req.body;
    // mã hóa pass
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(String(req.body.password), salt);

    const userNewPassword = await User.findOneAndUpdate(
      { email: email },
      { password: password },
      { new: true }
    );

    res.json(userNewPassword);
  } catch (error) {
    res.status(400).json({ message: "Lỗi rồi" });
  }
};

export const getCurrentUser = async (req, res) => {
  try {
    const token = req.headers.authtokens;
    const verifyToken = jwt.verify(token, "123456", (error, decoded) => {
      if (error) {
        // Token không hợp lệ
        return;
      }
      return decoded;
    });
    res.json(verifyToken);
  } catch (error) {
    res.status(400).json({ message: "Không tìm thấy user" });
  }
};
