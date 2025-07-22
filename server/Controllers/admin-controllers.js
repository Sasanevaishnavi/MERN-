const User = require("../models/user-model");
const contact = require("../models/contact-model");


// Logig for get all users data from db
const getAllUsers = async(req, res) =>{
    try {

        const usersData = await User.find({},{password:0});
        console.log("usersData at admin-controller ",usersData);
        
        if(!usersData || usersData.length ===0){
            return res.status(404).json({message:"No User Found"});

        }

        return res.status(200).json(usersData)

        
    } catch (error) {
       next(error);
       z;
       console.log("from admin controllers zod ", z);
       
        
        
    }


}

//Logic for get all contacs megasses from db
const getAllContacts = async(req , res)=>{
    try {
       const contactData = await contact.find();
       console.log("contact data fron db",contactData);

       if(!contactData || contactData.length ===0){
         return res.status(404).json({message:"Contact data not found"})
       }
       return res.status(200).json(contactData);

        
    } catch (error) {
        next(error);
        
    }

}

//get user for update
const getUserByID = async(req , res)=>{
    try {
        const id = req.params.id;
        const  data = await User.findOne({_id:id},{password:0});
        console.log("data by uder ID at admin controller");
        
        return res.status(200).json(data);

    } catch (error) {
         console.error("Error updating user:", error);
        return res.status(500).json({ message: "Internal server error" });
        
    }

}

//user update logic

const updateUserById = async(req, res) =>{
    try {
        const id = req.params.id;
        const updatedUserData = req.body;
        
        const updateUser = await User.updateOne(
            {_id: id},
            {
                $set:updatedUserData,
            }
        )
        return res.status(200).json(updateUser)
        
    } catch (error) {
        next(error)
        
    }
}

//delete user from admin panal button 
const deleteUserById = async (req ,res)=>{
    try {
        const id = req.params.id;
        await User.deleteOne({_id : id}) ;
        return res.status(200).json({ message: "User deleted successfully" });
        
    } catch (error) {
         console.error("Error deleting user:", error);
        return res.status(500).json({ message: "Internal server error" });
        
    }

}
// delete contact by id
const deleteContactById = async (req ,res)=>{
    try {
        const id = req.params.id;
        await contact.deleteOne({_id : id}) ;
        return res.status(200).json({ message: "conatctdeleted successfully" });
        
    } catch (error) {
         console.error("Error deleting user:", error);
        return res.status(500).json({ message: "Internal server error" });
        
    }

}


module.exports = {getAllUsers , getAllContacts , deleteUserById ,getUserByID ,updateUserById, deleteContactById}; 