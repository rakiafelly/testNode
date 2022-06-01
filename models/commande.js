const mongoose=require('mongoose');
const Schema = mongoose.Schema;
const commandeSchema = new Schema({
    prixTotal:{
        type:Number,
        required:true,
    },
    listeProduits:[
        {
            type:Schema.Types.ObjectId,
ref:"¨Produit"
        }
    ],
    clientAssocie:[
        {
            type:Schema.Types.ObjectId,
ref:"clients"
        }
    ]

    
})
const Commande= mongoose.model('commande',commandeSchema);
module.exports=Commande;