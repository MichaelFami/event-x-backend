const { UserEvent } = require('../models');


async function getAllUserEvents(req,res){
    try{
        const userEvents = await UserEvent.find();
        res.json(userEvents);
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

async function getUserEventById (req,res){
    try{
        const {id} = req.params;
        const userEvent = await UserEvent.findById(id);
        if(userEvent){
            return res.json(userEvent);
        }
        res.status(404).json({message:'UserEvent not found!'})
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

async function createUserEvent (req, res) {
    try {
        const userEvent = await  UserEvent.create(req.body)
        await userEvent.save()
        return res.status(201).json({
            userEvent,
        })
    } catch (e) {
        return res.status(500).json({ error: e.message})
    }
}

async function updateUserEvent (req, res) {
    try {
        const { id } = req.params
        let userEvent = await UserEvent.findByIdAndUpdate(id)
        if (userEvent) {
            return req.status(200).json(userEvent)
        }
        throw new Error('UserEvent not found')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

async function deleteUserEvent (req, res) {
    try {
        const id = req.params
        let userEvent = await UserEvent.findByIdAndDelete(id)
        if (userEvent) {
            return res.status(200).json(userEvent)
        }
        throw new Error('UserEvent')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}



module.exports={
    getAllUserEvents,
    getUserEventById,
    createUserEvent,
    updateUserEvent,
    deleteUserEvent
}