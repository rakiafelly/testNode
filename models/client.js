const mongoose=require('mongoose');
const Schema = mongoose.Schema;
const clientSchema = new Schema({
    Nom:{
        type:String,
        required:true,
    },
    Prenom:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        required:true,
    },
    
})
const Client= mongoose.model('client',clientSchema);
module.exports=Client;