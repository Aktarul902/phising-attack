const mongoose = require("mongoose")
const Schema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})
const model = new mongoose.model("instagram",Schema)
module.exports = model