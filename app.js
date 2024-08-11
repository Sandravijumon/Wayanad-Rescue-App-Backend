const express=require("express")
const mogoose=require("mongoose")
const bcrypt=require("bcrypt")
const cors=require("cors")
const jwt=require("jsonwebtoken")
const { default: mongoose } = require("mongoose")
const loginModel = require("./models/admin")

const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://sandramern23:Sandra_23@cluster0.jp0su3x.mongodb.net/ResuceDB?retryWrites=true&w=majority&appName=Cluster0")


app.post("/adminSignUp",(req,res)=>{
    let input=req.body
    let hashedpassword=bcrypt.hashSync(input.password,10)
    input.password=hashedpassword
    console.log(input)
    let result=new loginModel(input)
    result.save()
    res.json({"status":"success"})
})

app.listen(8080,()=>{
    console.log("server started")
})