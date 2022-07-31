const express =require("express")
const app = express()
const db = require('./Db/connect')
const data = require('./model/data')
const path = require("path")
app.use(express.static("img"))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.get("/account/login",(req,res)=>{
    res.sendFile(path.join(__dirname,"/index.html"))
})
app.post("/account/authlogin",async(req,res)=>{
    const{name,password}= req.body
    console.log(req.body)
    const Data = new data({
        name,
        password
    })
    const response = await Data.save()
    // res.status(200).json({success:"data saved"})
    res.redirect("/account/login")

    
})
app.listen(3000,()=>{
    console.log("listen website in port no 3000")
})