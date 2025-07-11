// Import necessary modules
const express = require("express");
const connectDB = require("./utils/db");
const  authrouter = require("./router/auth-router");
const contactFrom = require("./Controllers/contact-controllers");
const contactRouter = require("./router/contact-router");
const serviceRoute = require("./router/service-router");
const errorMiddleware = require("./middleware/erroe-middleware");
const cors = require("cors");

// Load environment variables and initialize the app
require("dotenv").config();
const app = express();

// Middlewares
app.use(express.json());
app.use(errorMiddleware);

// CORS configuration
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true, 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.get("/api/test", (req, res) => {
    res.status(200).json({ message: "API is working fine!" });
});

// Routes
app.use("/api/auth", authrouter);
app.use("/api/form",contactFrom);
app.use("/api/data", serviceRoute );

// Database connection and server start
const PORT = process.env.PORT || 5000;
connectDB(process.env.MONGODB_URL).then(()=>{
    app.listen(PORT, () =>{
        console.log(`server is running at port : ${PORT}`);
        
    });
}).catch((error) => {
    console.error("Database connection failed:", error);
});