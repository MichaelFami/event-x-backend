const { User } = require('../models');


async function getAllUsers(req,res){
    try{
        const users = await User.find();
        res.json(users);
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

async function getUserById (req,res){
    try{
        const {id} = req.params;
        const user = await User.findById(id);
        if(user){
            return res.json(user);
        }
        res.status(404).json({message:'User not found!'})
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

async function createUser (req, res) {
    try {
        const user = await  User.create(req.body)
        await user.save()
        return res.status(201).json({
            user,
        })
    } catch (e) {
        return res.status(500).json({ error: e.message})
    }
}

async function updateUser (req, res) {
    try {
        const { id } = req.params
        let user = await User.findByIdAndUpdate(id)
        if (user) {
            return req.status(200).json(user)
        }
        throw new Error('User not found')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

async function deleteUser (req, res) {
    try {
        const id = req.params
        let user = await User.findByIdAndDelete(id)
        if (user) {
            return res.status(200).json(user)
        }
        throw new Error('User')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}



module.exports={
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}