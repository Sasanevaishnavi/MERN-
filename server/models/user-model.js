const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    isadmin:{
        type:Boolean,
        default:false,
    },
});

userSchema.methods.generateToken =  async function (){
    try {
        const token =  jwt.sign({
            userId : this._id.toString(),
            email:this.email,
            isadmin: this.isadmin,
        },
        process.env.JWT_KEY, {expiresIn:"30d"}
    
    );
        return token;
    } catch (error) {
        console.error(error);
        
    }
    console.log("Signing token with secret:", process.env.JWT_SECRET_KEY);


};

const User = new mongoose.model("User", userSchema);

module.exports = User;