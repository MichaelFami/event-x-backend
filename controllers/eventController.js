const { Event } = require('../models');


async function getAllEvents(req,res){
    try{
        const events = await Event.find();
        res.json(events);
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

async function getEventById (req,res){
    try{
        const {id} = req.params;
        const event = await Event.findById(id);
        if(event){
            return res.json(event);
        }
        res.status(404).json({message:'Event not found!'})
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

async function createEvent (req, res) {
    try {
        const event = await  Event.create(req.body)
        await event.save()
        return res.status(201).json({
            event,
        })
    } catch (e) {
        return res.status(500).json({ error: e.message})
    }
}

async function updateEvent (req, res) {
    try {
        const { id } = req.params
        let event = await Event.findByIdAndUpdate(id)
        if (event) {
            return req.status(200).json(event)
        }
        throw new Error('Event not found')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

async function deleteEvent (req, res) {
    try {
        const id = req.params
        let event = await Event.findByIdAndDelete(id)
        if (event) {
            return res.status(200).json(event)
        }
        throw new Error('Event')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}



module.exports={
    getAllEvents,
    getEventById,
    createEvent,
    updateEvent,
    deleteEvent
}