const express = require("express");
const app =  express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

app.use(express.json());
const blog = require("./routes/blog");

app.use("/api/v1",blog);

const connectwithdb = require("./config/database");


app.listen(PORT,()=>{
    console.log(`App runs at ${PORT}`)
})

app.get("/",(req,res)=>{
    res.send(`<h1>This is my Home Page</h1>`)
})