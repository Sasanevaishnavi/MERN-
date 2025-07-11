const { response } = require("express");
const Service = require ("../models/service-model");

const getservices = async (req , res )=>{
    try {
        const responses = await Service.find();
        if(!responses){
            res.status(404).json({msg:"No service found"});
            return;
        }
        res.status(200).json({msg: responses});

    } catch (error) {
        console.log(`services: ${error}`);
        res.status(500).json({ msg: "Server error while fetching services" });
        
        
    }
}

module.exports = getservices;