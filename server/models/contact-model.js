const {Schema ,model } = require ("mongoose")
const { required } = require("../validators/auth-validator")

 const contactSchema = new Schema ({
    username : { type: String, required:true},
    email: { type: String, required:true},
    message: { type: String, required:true},

 })

// creat modle or collection 

const contact = new model("contact",contactSchema);
module.exports = contact;