import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import morgan from 'morgan'
import swaggerUI from 'swagger-ui-express'
import swaggerJsDoc from 'swagger-jsdoc'
var bodyParser = require('body-parser');

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
import classRouter from './routes/class'



//Sentences
import sentences from './routes/sentences';
const { Auth, LoginCredentials  } = require("two-step-auth");


//-----------------Course------------------------ 
import course from './routes/course';

import noteCouse from './routes/noteRouter';

//-----------------Month------------------------ 
import month from './routes/month';

//-----------------Week------------------------ 
import week from './routes/week';

//-----------------Day------------------------ 
import day from './routes/day';
import routeReplyComment from './routes/replycomment';


//----------------PracticeActivity---------

//-----------------LearningProgress------------------------ 
import LearningProgress from './routes/learningProgress';
import PracticeActivityRouter from './routes/practiceActivity'

//----------------GoogleSpeech---------
import googleSpeech from './routes/googleSpeech';


// ------------- VNPAY--------------------------------
import vnpay from './routes/vnpayRoute';

import messageRouter from './routes/message';


const speech = require('@google-cloud/speech');
const speechClient = new speech.SpeechClient()

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
var bodyParser = require('body-parser');
const nodemailer = require("nodemailer")


app.use(morgan("tiny"));
app.use(express.json());
// app.use(express.json({limit: '50mb'}));
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(express.urlencoded({ extended: false }));
app.use(cors())
require('dotenv').config()

// swagger API documents router
app.use("/documents", swaggerUI.serve, swaggerUI.setup(specs))

app.use("/", homeRouter)
app.use("/api", checkAuth, routeAuth);
app.use("/api", checkAuth, routeCategory);
app.use("/api", routeContact);
app.use("/api", routeComment);
app.use("/api", routeReplyComment);




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
// Class
app.use('/api', classRouter)

//Sentences
app.use("/api", sentences);


//----------------Course------------------------ 
app.use("/api", course)

app.use("/api", noteCouse)

//----------------Month------------------------ 
app.use("/api", month)

//----------------Week------------------------ 
app.use("/api", week)

//----------------Day------------------------ 
app.use("/api", day)

//----------------LearningProgress------------------------ 
app.use("/api", LearningProgress)

//----------------PracticeActivity-------------
app.use('/api', PracticeActivityRouter)

//----------------GoogleSpeech-------------
app.use('/api', googleSpeech)

// -------------- VNPAY ----------------
app.use('/api',vnpay)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//----------------GoogleSpeech-------------
app.use('/api', messageRouter)


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB Connected"))
  .catch((error) => console.log("DB not connected ", error));


app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Methods','Content-Type','Authorization');
    next(); 
})
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

// const server = require('http').createServer(app);

// const io = require('socket.io')(server);
const socketIO = require("socket.io")

const server = app.listen(port, () => console.log(`Application up and running on ${port}`))
const io = socketIO(server);

// =========================== SOCKET.IO ================================ //

io.on('connection', function (client) {
  console.log('Client Connected to server');
  let recognizeStream = null;

  client.on('join', function () {
    client.emit('messages', 'Socket Connected to Server');
  });

  client.on('messages', function (data) {
    client.emit('broad', data);
    console.log("broad",data);
  });

  client.on('startGoogleCloudStream', function (data) {
    startRecognitionStream(this, data);
    console.log("data start",data);
  });

  client.on('endGoogleCloudStream', function () {
    stopRecognitionStream();
    console.log("data stop");
  });

  client.on('binaryData', function (data) {
    // console.log(data); //log binary data
    if (recognizeStream !== null) {
      recognizeStream.write(data);
    }
  });

  function startRecognitionStream(client) {
    recognizeStream = speechClient
      .streamingRecognize(request)
      .on('error', console.error)
      .on('data', (data) => {
        process.stdout.write(
          data.results[0] && data.results[0].alternatives[0]
            ? `Transcription: ${data.results[0].alternatives[0].transcript}\n`
            : '\n\nReached transcription time limit, press Ctrl+C\n'
        );
        client.emit('speechData', data);

        // if end of utterance, let's restart stream
        // this is a small hack. After 65 seconds of silence, the stream will still throw an error for speech length limit
        if (data.results[0] && data.results[0].isFinal) {
          stopRecognitionStream();
          startRecognitionStream(client);
          console.log('restarted stream serverside');
        }
      });
  }

  function stopRecognitionStream() {
    if (recognizeStream) {
      recognizeStream.end();
    }
    recognizeStream = null;
  }
});

// =========================== GOOGLE CLOUD SETTINGS ================================ //

// The encoding of the audio file, e.g. 'LINEAR16'
// The sample rate of the audio file in hertz, e.g. 16000
// The BCP-47 language code to use, e.g. 'en-US'
const encoding = 'LINEAR16';
const sampleRateHertz = 16000;
const languageCode = 'en-US'; //en-US

const request = {
  config: {
    encoding: encoding,
    sampleRateHertz: sampleRateHertz,
    languageCode: languageCode,
    profanityFilter: false,
    enableWordTimeOffsets: true,
    // speechContexts: [{
    //     phrases: ["hoful","shwazil"]
    //    }] // add your own speech context for better recognition
  },
  interimResults: true, // If you want interim results, set this to true
};

// app.listen(port, () => {
//     console.log("Server is running on port 8000");
// });

