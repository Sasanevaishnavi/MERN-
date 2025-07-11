const mongoose = require("mongoose");

const connectDB = async (MONGODB_URL) =>{
    try {
        console.log("Connecting to DB...")
        await mongoose.connect(MONGODB_URL);
        console.log("connection seccessful to DB");
        
    } catch (error) {
        console.log("Database Conection failed");
        process.exit(0)
        
    }
}

module.exports = connectDB;