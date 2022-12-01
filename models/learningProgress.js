import mongoose from 'mongoose'
const { ObjectId } = mongoose
const learningProgressSchema = new mongoose.Schema({
    listeningSpeakingScore: {
        type: Number,
        default: 0
    },
    vocabularyScore: {
        type: Number,
        default: 0
    },
    structureSentencesScore: {
        type: Number,
        default: 0
    },
    conversationScore: {
        type: Number,
        default: 0
    },
    grammarScore: {
        type: Number,
        default: 0
    },
    oralScore: {
        type: Number,
        default: 0
    },
    oralWeekVocabularyScore:{
      type: Number,
        default: 0
    },
    oralWeekSentencesScore:{
      type: Number,
        default: 0
    },
    isPass: {
        type: Boolean,
        default: false
    },
    // order: {
    //     type: Number,
    //     required: true
    // },
    day: {
        type: ObjectId,
        ref: "Day"
    },
    user: {
        type: ObjectId,
        ref: "User"
    }

}, { timestamps: true })

export default mongoose.model('LearningProgress', learningProgressSchema);