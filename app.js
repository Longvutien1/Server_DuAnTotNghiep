import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import morgan from 'morgan'
import homeRouter from './routes/home';
import { checkAuth } from './midlerware/checkAuth';
import routeAuth from './routes/auth';
import routeCategory from './routes/category';
import routerSpeak from './routes/speak';
import routerQuiz from './routes/quiz';
import routerListenWrite from './routes/listenWrite'; 
//----------------QUESTION------------------------ 
import routerAnswerSpeak from './routes/answerSpeak';
import routerAnswerQuiz from './routes/answerQuiz';
import routerAnswerListenWrite from './routes/answerListenWrite';
//----------------ANSWER------------------------ 
import routerUserSpeak from './routes/userSpeak';
import routerUserQuiz from './routes/userQuiz';
import routerUserListenWrite from './routes/userListenWrite';
import routerEmail from './routes/sendMail';
import routeGrammar from './routes/grammar';
//-----------------USER-ANSWER------------------------ 
const { Auth, LoginCredentials  } = require("two-step-auth");
const app = express();
const path = require("path");
const nodemailer = require("nodemailer")

app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())
require('dotenv').config()
app.use("/api",checkAuth, routeAuth);
app.use("/", homeRouter )
app.use("/api",checkAuth, routeCategory);
app.use("/api", routerEmail )
app.use("/api", routerQuiz )
app.use("/api", routerSpeak )
app.use("/api", routerListenWrite )
app.use("/api" ,routeGrammar)
//----------------QUESTION------------------------ 

app.use("/api", routerAnswerSpeak )
app.use("/api", routerAnswerQuiz )
app.use("/api", routerAnswerListenWrite )
//----------------ANSWER------------------------ 

app.use("/api", routerUserSpeak )
app.use("/api", routerUserQuiz )
app.use("/api", routerUserListenWrite )
//-----------------USER-ANSWER------------------------ 
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB Connected"))
  .catch((error) => console.log("DB not connected ", error));
const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log("Server is running on port 8000");
});