// importing core module
const path=require('path');

// importing external module

const express = require("express");
userRouter=express.Router();



///creating path
const rootDir=require("../utils/pathUtil");


userRouter.post("/bookRoom",(req,res,next)=>{
  console.log(req.body)
res.sendFile(path.join(rootDir,'views','roomBook.html'));

});

userRouter.get("/resister-user",(req,res,next)=>{
   console.log(req.body)
res.sendFile(path.join(rootDir,'views','registerUser.html'));
})

userRouter.post("/resister-user",(req,res,next)=>{
   console.log(req.body)
res.sendFile(path.join(rootDir,'views','registerUser.html'));
})

module.exports=userRouter;