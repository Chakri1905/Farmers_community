const express = require('express');
const app=express();
const mongoose=require('mongoose');
const UserModel = require('./models/users');

const cors = require("cors");
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://chakri1905:Chakri1905@cluster0.ugwq8uw.mongodb.net/merntutorial?retryWrites=true&w=majority");


app.get("/getUsers", (req,res)=>{
    UserModel.find({}, (err, result) =>{
        if(err){
            res.json(err)
        }else{
            res.json(result)
        }
    })
})

app.post("/createUsers", async(req,res)=>{
    const user=req.body;
    const newUser = new UserModel(user);
    await newUser.save();

    res.json(user);
    })

app.listen(3001, ()=>{
console.log("Server runs perfectly")
});