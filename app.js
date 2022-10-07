import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import morgan from 'morgan'
import swaggerUI from 'swagger-ui-express'
import swaggerJsDoc from 'swagger-jsdoc'

import homeRouter from './routes/home';
import { checkAuth } from './midlerware/checkAuth';
import routeAuth from './routes/auth';
import routeCategory from './routes/category';
import routerSpeak from './routes/speak';
import routerQuiz from './routes/quiz';

import routerListenWrite from './routes/listenWrite'; 
import routerQuestionListenWrite from './routes/questionListenWrite'; 

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

import routeContact from './routes/contact';

import wellcome from './routes/wellcome'
import paypalR from './routes/paypalRouter';

//-----------------USER-ANSWER------------------------ 


//-----------------History------------------------ 
import routerHistory from './routes/history';


//Vocabulary
import vocabulary from './routes/vocabularyRouter'
import routeComment from './routes/comment';
import topicVocabulary from './routes/topicVocabulary';
//----------------Lecture Video------------------------ 


import rourerLectureVideo from './routes/lectureVideo';
import grammar from './routes/grammar';

//Sentences
import sentences from './routes/sentences';
// const { Auth, LoginCredentials  } = require("two-step-auth");


//-----------------Course------------------------ 
import course from './routes/course';

//-----------------Month------------------------ 
import month from './routes/month';

//-----------------Week------------------------ 
import week from './routes/week';
import routeConversation from './routes/conversation';

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API VianEnglish",
      version: "1.0.0",
      description: "Documents API VianEnglish"
    },
    server: [
      {
        url: "http://localhost:8000"
      }
    ],
  },
  apis: ["./routes/*.js"]
}

const specs = swaggerJsDoc(options)


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
app.use("/api" ,routeConversation)
//----------------QUESTION------------------------ 

app.use("/api", routerAnswerSpeak )
app.use("/api", routerAnswerQuiz )
app.use("/api", routerAnswerListenWrite )
//----------------ANSWER------------------------ 

app.use("/api", routerUserSpeak )
app.use("/api", routerUserQuiz )
app.use("/api", routerUserListenWrite )


// swagger API documents router
app.use("/documents", swaggerUI.serve, swaggerUI.setup(specs))

app.use("/", homeRouter)
app.use("/api", checkAuth, routeAuth);
app.use("/api", checkAuth, routeCategory);
app.use("/api", routeContact);
app.use("/api", routeComment);



app.use("/api", routerEmail)


app.use("/api", routerQuiz )
app.use("/api", routerSpeak )
app.use("/api", routerListenWrite )
app.use("/api", routerQuestionListenWrite )

//----------------QUESTION------------------------ 


app.use("/api", routerAnswerSpeak)
app.use("/api", routerAnswerQuiz)
app.use("/api", routerAnswerListenWrite)
//----------------ANSWER------------------------ 


app.use("/api", routerUserSpeak)
app.use("/api", routerUserQuiz)
app.use("/api", routerUserListenWrite)

//----------------History------------------------ 
app.use("/api", routerHistory)


//----------------Payment-----------------------
app.use("/api", paypalR)

// ---------------Wellcome----------------------
app.use("/api", wellcome)
//-----------------USER-ANSWER------------------------ 

//----------------Lecture Video------------------------ 

app.use("/api", rourerLectureVideo )

//Vocabulary
app.use("/api", vocabulary)
app.use("/api", topicVocabulary)
app.use("/api", grammar)

//Sentences
app.use("/api", sentences);


//----------------Course------------------------ 
app.use("/api", course)

//----------------Month------------------------ 
app.use("/api", month)

//----------------Week------------------------ 
app.use("/api", week)

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB Connected"))
  .catch((error) => console.log("DB not connected ", error));



// mongoose.connect('mongodb://localhost:27017/datn')

// app.use(express.static(path.join(__dirname, "./frontend/build")));

// app.get("*", function (_, res) {
//   res.sendFile(
//     path.join(__dirname, "./frontend/build/index.html"),
//     function (err) {
//       if (err) {
//         res.status(500).send(err);
//       }
//     }
//   );
// });

const port = process.env.PORT || 8000



app.listen(port, () => {
    console.log("Server is running on port 8000");
});

