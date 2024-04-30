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
    userModel.find()
    .then((users)=>{ res.render("read",{users})
})      
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
})

// app.get("/delete/:id",(req,res)=>{
//     userModel.findOneAndDelete({_id:req.params.id})
//     .then(()=>{
//         res.redirect('/read')
//     })
// })

app.listen(3000 , (ex) => {
    console.log("Server is running ....")
})
