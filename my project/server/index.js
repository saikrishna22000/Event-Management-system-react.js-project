const express=require('express');
const cors=require('cors');
const {MongoClient}=require('mongodb');
const bcrypt=require("bcrypt");


const app=new express();
app.use(express.json());
app.use(cors());
app.get('/home',(req,res)=>{
    res.send("Welcome home page")
})
const client=new MongoClient('mongodb+srv://admin1:admin1@cluster0.jzjcygw.mongodb.net/?retryWrites=true&w=majority')
client.connect();
const db=client.db('cvms');
const col=db.collection('register');
const co2=db.collection('eventlist');

app.post('/insert', async(req, res) => {
    console.log(req.body);
        col.insertOne(req.body);
        res.send("suuccessfully received");
})
app.post('/insert1', async(req, res) => {
    console.log("cheking")
    console.log(req.body);
        co2.insertOne(req.body);
        res.send("suuccessfully received");
})
app.get('/showall',async(req,res)=>{
    const result=await col.find().toArray();
    res.send(result)
})
app.get('/eventlist',async(req,res)=>{
    const result=await co2.find().toArray();
    res.send(result)
})
app.post('/Update',async(req,res)=>{
    console.log(req.body)
    const {un, pw, ro, em}=req.body
    await col.updateOne({name:un},{
    $set:{
        password:pw,
        role:ro,
        email:em
    }
    })
})

app.post('/delete',async(req,res)=>{
    const result1=await col.findOne({'name':req.body.un});
    console.log(result1);
    if (result1.password==req.body.pw){
        col.deleteOne(result1);
        console.log("deleted")
    }
   
})
app.post('/check', async(req, res) => {
    console.log("entering check")
    const result = await col.findOne({'name':req.body.un})
    if(result.password == req.body.pw) {
        res.send(result)
    }
    else {
        res.send("Login Failed")
    }
    console.log(result);
})


app.listen(8081);
console.log("server running");