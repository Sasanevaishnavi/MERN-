

 const sighupSchema = require("../validators/auth-validator"); 
const User = require("../models/user-model");
  const bcrypt = require("bcrypt")
   
  //////////////// HOME ////////////////////////////
  const home = async(req,res) =>{
    try {
         res.status(200).send("Welcome to world best mern series");
        
    } catch (error) {
        console.log(error);
        
    }
  }
/////////////////////Registrer////////////////////////////////
  const register= async(req, res) =>{
    try {
         const result = sighupSchema.safeParse(req.body);

          if (!result.success) {
            const errorList = result.error.issues.map(issue => issue.message).join(", ");
            return res.status(422).json({
              message: "Validation Failed",
              extraDetails: errorList
            });
          }
        console.log("Registration request received:", req.body); // Debugging line
        const { username, email, phone, password} = req.body;

        const userExist = await User.findOne({email:email});

        if (userExist){
          return res.status(404).json({message:"email already exist"})
        }

        // hash password
        // for password complecity
        console.log("Hashing password for user:", username); // Debugging line
        const saltRound = 10; 
        const hash_password = await bcrypt.hash(password,saltRound);

        console.log("Password hashed successfully for user:", username); // Debugging line
         const userCreated = await User.create ({
          username,
           email,
           phone,
           password : hash_password
          });
        console.log("User created successfully:", userCreated); // Debugging line
          
        res.status(201).json({
          message:"Registration Sucessful" ,
          token: await userCreated.generateToken(),
          userId: userCreated._id.toString(),    
            });
        
    } catch (error) {
        res.status(500).json({mgs:"internal server error"})
        
    }
  }

  /////////////// Login ///////////////////////////////////////////////
  const login = async (req,res) =>{
    console.log("Login request received:", req.body); // Debugging line
    try {
      
      const{email, password}= req.body;

      const userExist = await User.findOne({email});
      console.log(userExist);

      if(!userExist){
        return res.status(400).json({message: "Invaile Credential"});
      }

      const user = await bcrypt.compare(password,userExist.password);

      if (user){
        res.status(200).json({
          message:"Login sucessful",
          token:await userExist.generateToken(),
          
          // token : await userExist.generateToken(),
          userId: userExist._id.toString(),
        })
      }else{
        res.status(401).json({msg:"Invaile email or password"})
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };


  /////////////////////////// user data /////////////////////////////////

 const user = async (req, res) => {
      try {
          const userData = req.user; // set by authMiddleware
          console.log(userData);     // ✅ printing?
          return res.status(200).json({ userData });
      } catch (error) {
          console.log(`error from user route ${error}`);
      }
  };




  module.exports= {home , register , login, user};





