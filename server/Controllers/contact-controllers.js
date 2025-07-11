
const contact = require("../models/contact-model");

const contactFrom = async (req , res ) =>{
    try {
       
        //get data fron req
        const { username, email,message} = req.body;
        const contactmessage = await contact.create ({
          username,
           email,
           message,
           
          });
          console.log("Contact message saved successfully:", contactmessage);
        
        return res.status(201).json({messge:"message send successfuly"})
        
    } catch (error) {
        return res.status(500).json({messge:"message not deliverd"})
        
    }
}

module.exports = contactFrom;