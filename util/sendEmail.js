// const nodemailer = require("nodemailer");
import nodemailer from 'nodemailer'

export const sendEmail = async (email, subject, text) => {
    try {
        const transporter = nodemailer.createTransport({
            host: 'https://serverduantotnghiep-production-53a7.up.railway.app/api',
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

// module.exports = sendEmail;