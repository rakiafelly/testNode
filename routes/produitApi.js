const express = require('express');
const Produit = require('../models/produit');
const router = express.Router();
//import Schema
router.get('/produit', async (req, res, next) => {
    const produit = await Produit.find()
    res.send(produit)
})

router.get('/produit/:id', async(req, res, next) => {
    
    const produit=await Produit.findById(req.params.id);
    res.send(produit);
    
})
//add
router.post('/produit', async(req, res, next) => {

const produit=await Produit.create(req.body);
res.send(produit)
})

//update
router.put('/produit/:id', async(req, res, next) => {

const updateProduit=await Produit.findByIdAndUpdate(req.params.id,req.body) 
res.send(updateProduit);

})

//delete
router.delete('/produit/:id',async (req, res, next) => {

const deleteProduit=await Produit.findByIdAndRemove(req.params.id);
res.send(deleteProduit);

})

module.exports = router;