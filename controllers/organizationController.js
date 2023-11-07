const { Organization } = require('../models');


async function getAllOrganizations(req,res){
    try{
        const organizations = await Organization.find();
        res.json(organizations);
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

async function getOrganizationById (req,res){
    try{
        const {id} = req.params;
        const organization = await Organization.findById(id);
        if(organization){
            return res.json(organization);
        }
        res.status(404).json({message:'Organization not found!'})
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

async function createOrganization (req, res) {
    try {
        const organization = await  Organization.create(req.body)
        await organization.save()
        return res.status(201).json({
            organization,
        })
    } catch (e) {
        return res.status(500).json({ error: e.message})
    }
}

async function updateOrganization (req, res) {
    try {
        const { id } = req.params
        let organization = await Organization.findByIdAndUpdate(id)
        if (organization) {
            return req.status(200).json(organization)
        }
        throw new Error('Organization not found')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

async function deleteOrganization (req, res) {
    try {
        const id = req.params
        let organization = await Organization.findByIdAndDelete(id)
        if (organization) {
            return res.status(200).json(organization)
        }
        throw new Error('Organization')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}



module.exports={
    getAllOrganizations,
    getOrganizationById,
    createOrganization,
    updateOrganization,
    deleteOrganization
}