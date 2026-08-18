const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    googleId:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    picture:{
        type:String
    }
}, {timestamps:true});

const userModel = mongoose.model("user",userSchema);

module.exports = {
    userModel
}