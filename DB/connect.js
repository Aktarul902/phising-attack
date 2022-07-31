const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://Akarul:123aktar@cluster0.9s1sg.mongodb.net/?retryWrites=true&w=majority",{}).then(()=>{
    console.log("connection successfull")

}).catch(err=>{
    console.log("no connection")
})