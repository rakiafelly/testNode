const express = require('express');
const Client = require('../models/client');
const router = express.Router();
//import Schema
router.get('/client', async (req, res, next) => {
    const clients = await Client.find()
    res.send(clients)
})

router.get('/client/:id', async(req, res, next) => {
    
    const clients=await Client.findById(req.params.id);
    res.send(clients);
    
})
//add
router.post('/client', async(req, res, next) => {

const clients= await Client.create(req.body);
res.send(clients)
})

//update
router.put('/client/:id', async(req, res, next) => {

const updateClient=await Client.findByIdAndUpdate(req.params.id,req.body) 
res.send(updateClient);

})

//delete
router.delete('/client/:id',async (req, res, next) => {

const deleteClient=await Client.findByIdAndRemove(req.params.id);
res.send(deleteClient);

})

module.exports = router;