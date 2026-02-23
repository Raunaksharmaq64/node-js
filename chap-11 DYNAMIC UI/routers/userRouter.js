// importing core module
const path = require("path");

// importing external module

const express = require("express");
userRouter = express.Router();

///creating path
const rootDir = require("../utils/pathUtil");

// creating AN ARRAY WHERE AATA OF ROOM NUMBER STORE
const bookRoom = [];

userRouter.post("/bookRoom", (req, res, next) => {
  console.log(req.body, req.body.name);
  bookRoom.push({ user_name: req.body.name, user_roomNo: req.body.roomNo });// store the data so that we use the array 

  res.sendFile(path.join(rootDir, "views", "roomBook.html"));
});



userRouter.get("/resister-user", (req, res, next) => {
  console.log(req.body);
  res.sendFile(path.join(rootDir, "views", "registerUser.html"));
});

userRouter.post("/resister-user", (req, res, next) => {
  console.log(req.body);
  res.sendFile(path.join(rootDir, "views", "registerUser.html"));
});

/// MAKING OBJECT 
exports.userRouter = userRouter;
exports.bookRoom=bookRoom;
