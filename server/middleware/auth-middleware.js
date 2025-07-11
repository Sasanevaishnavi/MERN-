const jwt = require("jsonwebtoken");
const user = require("../models/user-model");


const authMiddleware = async(req ,res , next) =>{
    const token = req.header("Authorization");

    if(!token){
        return res.status(401).json({message:"Unautharized HTTP, Token not Provided"});
    }
    console.log("token from auth middlevare", token);

    const jwtToken = token.replace("Bearer","").trim();


    try {
        const isVarified = jwt.verify(jwtToken , process.env.JWT_KEY);
        console.log("JWT_SECRET_KEY:", process.env.JWT_KEY);

        console.log(isVarified);

        const userData = await user.findOne({email:isVarified.email}).select({
            password:0,
        });
        console.log(userData);

        req.user= userData;
        req.token=token;
        req.userID = userData._id;

        
        
        next();
    } catch (error) {
        return res.status(400).json({message:"Unautharized Invalid token."});
        
    }


    

};

module.exports = authMiddleware;