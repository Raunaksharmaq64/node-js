// importing core module
const path=require('path');

// importing external module

const express = require("express");
userRouter=express.Router();





userRouter.post("/bookRoom",(req,res,next)=>{
  console.log(req.body)
res.sendFile(path.join(__dirname,'../','views','roomBook.html'));
});

userRouter.get("/resister-user",(req,res,next)=>{
   console.log(req.body)
res.sendFile(path.join(__dirname,'../','views','registerUser.html'));
})

userRouter.post("/resister-user",(req,res,next)=>{
   console.log(req.body)
res.sendFile(path.join(__dirname,'../','views','registerUser.html'));
})

module.exports=userRouter;