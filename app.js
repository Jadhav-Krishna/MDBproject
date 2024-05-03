const express = require('express');
const app = express();
const path = require('path');
const user = require("./models/user");
const userModel = require('./models/user');
const { log } = require('console');


app.set("view engine","ejs");
app.use(express.json( ));
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "/public")));


app.get("/",(req,res) => {
    res.render("index")
})

app.get("/read",(req,res) => {
    // try{
        userModel.find()
    .then((users)=>{ res.render("read",{users})
        })
    // }      
    // catch(err){
    //     res.send(err.message)
    // }
})

app.post("/create",(req,res) => {
        let {name,email,age,img} = req.body;
        userModel.create({
            name,
            email,
            age,
            img,
        })
        .then( (data) =>{
            res.redirect("/read") 
        })
        .catch((err)=>{
        res.send(err.message);
    })
})

app.get("/delete/:id",(req,res)=>{
    userModel.findOneAndDelete({_id:req.params.id})
    .then((ress)=>{
        res.redirect('/read')
    })
    .catch(err => {
        res.send(err.message);
    })
})

app.get("/edit/:id", async(req,res) => {
    try{
       let user = await userModel.findOne({_id:req.params.id})
       res.render('edit',{user})
    }
    catch(err){
        res.send(err.message)
    }
})

app.post('/update/:userid',async (req,res) => {
    try{
        let {name,age,img,email} = req.body;
        let userdets = await userModel.findOneAndUpdate({_id:req.params.userid} , {name,age,img,email} , {new:true});
        res.redirect("/read");
    }
    catch(err){
        res.send(err.message)
    }
})

app.listen(3000 , (ex) => {
    console.log("Server is running ....")
})
