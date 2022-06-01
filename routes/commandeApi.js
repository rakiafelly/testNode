const express = require('express');
const Commande = require('../models/commande');
const router = express.Router();


router.post('/commande', async (req, res, next) => {
    const commande = await Commande.create(req.body)
    res.send(commande)
})

router.get('/commande', async (req, res, next) => {
    const commande = await Commande.find()
    res.send(commande)
})

router.get('/commande/:id', async(req, res, next) => {
    
    const commande=await Commande.findById(req.params.id);
    res.send(commande);
})
module.exports = router;
