// importing core module
const path = require("path");

// importing external module
const express = require("express");

///creating path
const rootDir = require("../utils/pathUtil");

const { bookRoom } = require("./userRouter");

hostRouter = express.Router();

hostRouter.post("/", (req, res, next) => {
  
  res.sendFile(path.join(rootDir, "views", "homepage.html"));
});

hostRouter.get("/", (req, res, next) => {
  console.log({bookRoom});// print it 
  res.sendFile(path.join(__dirname, "../", "views", "homepage.html"));
});

module.exports = hostRouter;
