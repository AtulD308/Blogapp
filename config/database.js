const mongoose = require("mongoose");
require("dotenv").config();

const connectwithdb=()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(console.log("db conneced"))
    .catch((error)=>{
        console.log("errorin db");
        console.log(error);
        process.exit(1);
    })
};

module.exports = connectwithdb;