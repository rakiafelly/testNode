const mongoose=require('mongoose');
const Schema = mongoose.Schema;
const produitSchema = new Schema({
    Nom:{
        type:String,
        required:true,
    },
    Description:{
        type:String,
        required:true,
    },
    quantite:{
        type:Number,
        required:true,
    },
    Prix:{
        type:Number,
        required:true,
    }
})
module.exports=mongoose.model("produit",produitSchema,"Produit")