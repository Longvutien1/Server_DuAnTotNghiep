import NoteCouse from "../models/note";

export const getListUserNote  = async (req, res) => {
    try {
        const data = await NoteCouse.findOne({dayId: req.params.dayId, userId : req.params.userId}).exec();
        res.json(data)
    } catch (error) {
        res.status(400).json({message:"Nothing"})
    }
}

export const addUserNote = async (req, res) =>{
    try {
        const data = await NoteCouse(req.body).save();
        res.json(data);
    } catch (error) {
        res.status(400).json({message:"Nothing"});
    }
}

export const editUserNote = async (req, res) =>{
    try {
        // dayId: req.params.typeId, userId : req.params.userId
        const data = await NoteCouse.findOneAndUpdate({_id: req.params.id}, req.body, {new:true}).exec();
        res.json(data);
    } catch (error) {
        res.status(400).json({message:"Nothing"});
    }
}