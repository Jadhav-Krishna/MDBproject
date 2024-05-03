const mongoose = require("mongoose");
const joi = require("joi");

mongoose.connect("mongodb://127.0.0.1:27017/NotePad");

const userSchema = mongoose.Schema({
    username : {
        type : String,
        // required:true,
    },
    name : {
        type:String,
        required:true,
        },
    age : Number,
    email : String,
    img : {
        type:String,
        required : true,
    },
})

module.exports = mongoose.model("user",userSchema);