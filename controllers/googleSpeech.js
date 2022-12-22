

// const speech = require('@google-cloud/speech');
import speech from '@google-cloud/speech'
import fs from 'fs'
// const fs = require('fs');
// Instantiates a client
const client = new speech.SpeechClient();



export const transcribeSpeech = async (req, res) => {



    // The path to the remote LINEAR16 file
    // const gcsUri = 'gs://cloud-samples-data/speech/brooklyn_bridge.raw';
    // const gcsUri = 'gs://vian_english/audio-files/play_sound.mp3';
    // const gcsUri = 'gs://vian_english/test/what-are-you-doing-22344.mp3';
    // const gcsUri = 'gs://vian_english/test/what-are-you-doing-22344.wav';
    const gcsUri = 'gs://vian_english/what-are-you-doing-22344 (1).mp3';
    // const gcsUri = "gs://vian_english/[Luyện nói Tiếng Anh qua phim]_Harry Potter và hòn đá phù thủy.mp3"

    const audio = {
        uri: gcsUri,
    };

    const config = {
        // encoding: 'LINEAR16',
        encoding: 'MP3',
        useEnhanced: true,
        model: 'default',
        languageCode: 'en-US',
        enableWordTimeOffsets: true,
        // enableWordConfidence: true,
        // enableAutomaticPunctuation: true,
        audioChannelCount: 2,
    };

    const request = {
        audio: audio,
        config: config,
    };

    const [operation] = await client.longRunningRecognize(request);

    const [response] = await operation.promise();
    response.results.forEach(result => {
        console.log(`Transcription: ${result.alternatives[0].transcript}`);
        result.alternatives[0].words.forEach(wordInfo => {
            const startSecs =
                `${wordInfo.startTime.seconds}` +
                '.' +
                wordInfo.startTime.nanos / 100000000;
            const endSecs =
                `${wordInfo.endTime.seconds}` +
                '.' +
                wordInfo.endTime.nanos / 100000000;
            console.log(`Word: ${wordInfo.word}`);
            console.log(`\t ${startSecs} secs - ${endSecs} secs`);
        });
    });
    res.json({ response })
}

// const { Storage } = require("@google-cloud/storage");
import {Storage} from "@google-cloud/storage"
// const fs = require('fs')


let projectId = "golden-rite-363502"; // Get this from Google Cloud
let keyFilename = "speech-to-text-key.json"; // Get this from Google Cloud -> Credentials -> Service Accounts
const storage = new Storage({
    projectId,
    keyFilename,
});
const bucket = storage.bucket("vian_english"); // Get this from Google Cloud -> Storage

export const getAudio = async (req, res) => {
    try {
        const [files] = await bucket.getFiles();
        res.send([files]);
        console.log("Success");
    } catch (error) {
        res.send("Error:" + error);
    }
}

export const getAudioDetail = async (req, res) => {
    try {
        const [files] = await bucket.getFiles();
        res.send([files]);
        console.log("Success");
    } catch (error) {
        res.send("Error:" + error);
    }
}

export const uploadAudio = async (req, res) => {
    console.log("Made it /upload");

    try {
        if (req.file) {
            console.log("File found, trying to upload...");
            console.log("req.file", req.file);
            const blob = bucket.file(req.file.originalname);
            const blobStream = blob.createWriteStream();
            blobStream.on("finish", async () => {
                // res.status(200).send("Success");
                console.log("Success");

                const gcsUri = `gs://vian_english/${req.file.originalname}`;

                const audio = {
                    uri: gcsUri,
                };

                const config = {
                    // encoding: 'LINEAR16',
                    encoding: 'MP3',
                    useEnhanced: true,
                    model: 'default',
                    languageCode: 'en-US',
                    enableWordTimeOffsets: true,
                    audioChannelCount: 2,
                    // enableSeparateRecognitionPerChannel: true,
                };

                const request = {
                    audio: audio,
                    config: config,
                };

                const [operation] = await client.longRunningRecognize(request);

                const [response] = await operation.promise();
                response.results.forEach(result => {
                    console.log(`Transcription: ${result.alternatives[0].transcript}`);
                    result.alternatives[0].words.forEach(wordInfo => {
                        const startSecs =
                            `${wordInfo.startTime.seconds}` +
                            '.' +
                            wordInfo.startTime.nanos / 100000000;
                        const endSecs =
                            `${wordInfo.endTime.seconds}` +
                            '.' +
                            wordInfo.endTime.nanos / 100000000;
                        console.log(`Word: ${wordInfo.word}`);
                        console.log(`\t ${startSecs} secs - ${endSecs} secs`);
                    });
                });
                res.json({ response })



            });
            blobStream.end(req.file.buffer);

        } else throw "error with img";


    } catch (error) {
        console.log("error", error);
        res.status(500).send(error);
    }



}


// Imports the Google Cloud client library
import textToSpeech from '@google-cloud/text-to-speech'
import util from 'util'
const client2 = new textToSpeech.TextToSpeechClient();
export const quickStart = async (req, res) => {
    const text = req.body.value
    const language = req.body.language
    const type = req.body.type
    const gender = req.body.gender
    const request = {
        input: { text: text },
        voice: { languageCode: language, ssmlGender: gender, name:type, },
        audioConfig: { audioEncoding: 'MP3' },
    };

    const [response] = await client2.synthesizeSpeech(request);
    const writeFile = util.promisify(fs.writeFile);
    const flag = await writeFile('output.mp3', response.audioContent, 'binary');
    var abc=""
    const readStream = fs.createReadStream("output.mp3");
    readStream.on("data", function(data) {
        var chunk = data.toString();
        abc = Buffer.from(data).toString('base64')
        res.json(abc)
    }); 
    console.log('Audio content written to file: output.mp3');
}





