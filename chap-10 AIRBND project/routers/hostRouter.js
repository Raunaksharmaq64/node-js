// importing core module
const path=require('path');

// importing external module
const express = require("express");

hostRouter=express.Router();

hostRouter.post("/", (req, res, next) => {
  
  res.sendFile(path.join(__dirname,'../','views','homepage.html'));
});

hostRouter.get("/", (req, res, next) => {
  
  res.sendFile(path.join(__dirname,'../','views','homepage.html'));
});

module.exports=hostRouter;