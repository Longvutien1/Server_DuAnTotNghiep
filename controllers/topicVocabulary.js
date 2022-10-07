import TopicVocabulary from "../models/topicVocabulary";
import Vocabulary from "../models/vocabulary";

export const detailTopic = async (req, res) => {
    try {
        const topic = await TopicVocabulary.findOne({_id: req.params.id}).exec();
        const vocabulary = await Vocabulary.find({category:topic}).exec()
        console.log(topic, vocabulary);
        res.json({topic, vocabulary})
    } catch (error) {
       res.status(400).json({message:"No data"})
    }
}

export const addTopicV = async (req, res) => {
    console.log(req.body);
    try {
        const data = await TopicVocabulary(req.body).save();
        req.json(data)
    } catch (error) {
        res.status(400).json({message: "Fail!"})
    }
}