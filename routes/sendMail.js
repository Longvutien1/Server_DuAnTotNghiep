import express from "express";

import { loginEmail } from "../controllers/otpEmail";
import { changePassword, userByEmail } from "../controllers/user";

const routerEmail = express.Router();

routerEmail.put("/newPassword", changePassword);
routerEmail.post("/sendMail", userByEmail, loginEmail);

export default routerEmail;
