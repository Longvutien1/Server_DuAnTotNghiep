const nodemailer = require("nodemailer");

const sendEmail = async (email, subject, text) => {
    try {
        const transporter = nodemailer.createTransport({
            host: 'http://localhost:8000/api',
            service: "tllong20002@gmail.com",
            port: 587,
            secure: true,
            auth: {
                // user: process.env.USER,
                // pass: process.env.PASS,
                user: "tllong20002@gmail.com",
                pass:"yprvrszykoirzllw",
            },
        });

        await transporter.sendMail({
            from: "tllong20002@gmail.com",
            to: email,
            subject: subject,
            html:text
        });
    } catch (error) {
        console.log(error, "email not sent");
    }
};

module.exports = sendEmail;