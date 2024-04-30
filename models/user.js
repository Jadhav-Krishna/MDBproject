const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/NotePad");

const userSchema = mongoose.Schema({
    username : String,
    name : String,
    age : Number,
    email : String,
    img : String,
})

module.exports = mongoose.model("user",userSchema);