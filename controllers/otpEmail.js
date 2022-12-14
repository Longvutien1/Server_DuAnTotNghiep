import {sendEmail} from "../util/sendEmail";

export const loginEmail = async (req, res) => {
  try {
    const { email } = req.body;
    const otp = Math.floor(Math.random() * (1000000 - 100000) ) + 100000;
    const text = `
    <div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
      <div style="margin:50px auto;width:70%;padding:20px 0">
        <div style="border-bottom:1px solid #eee">
          <a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600"><b>VIAN ENGLISH</b></a>
        </div>
        <p style="font-size:1.1em">Chào bạn,</p>
        <p>Cảm ơn bạn đã lựa chọn <b>VIAN ENGLISH</b>. Sử dụng mã OTP sau để hoàn tất thủ tục Đăng ký của bạn. OTP có giá trị trong 5 phút</p>
        <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${otp}</h2>
        <p style="font-size:0.9em;">${email},<br /><b>VIAN ENGLISH</b></p>
        <hr style="border:none;border-top:1px solid #eee" />
        <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
          <p>VIAN ENGLISH</p>
        </div>
      </div>
    </div>
    `;

    await sendEmail(email, "Password reset", text);
    return res
      .status(200)
      .json({
        otpHash: otp,
        message: `Đã gửi mail thành công cho tài khoản ${email} }`,
      });
  } catch (error) {
    return res.status(400).json({ message: "Lỗi rồi!!" });
  }
};