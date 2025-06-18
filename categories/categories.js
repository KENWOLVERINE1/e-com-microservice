require("dotenv").config();
const { config } = require("dotenv");
const express = require("express");
const app = express();
const mongoose = require("mongoose");



app.get("/", (req,res) => {
  res.send("welcome to sanx_wu corner where you can find all custom products and designs exclusively!!");
});

app.post("/upload-designs",(req,res)=>{

});

mongoose.connect(process.env.DB_URL).then(()=>console.log("connected"));

app.listen(process.env.PORT, () => {
  console.log("server is running");
});
