const express = require('express');
const app = express();
const path = require('path');
const user = require("./models/user");
const userModel = require('./models/user');


app.set("view engine","ejs");
app.use(express.json( ));
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "/public")));


app.get("/",(req,res) => {
    res.render("index")
})

app.post("/read",(req,res) => {
    res.render("read")
})

app.get("/create",(req,res) => {
    res.send("hello chutiye , kya create karna chahta hai !!!")
})

app.listen(3000 , (ex) => {
    console.log("Server is running ....")
})