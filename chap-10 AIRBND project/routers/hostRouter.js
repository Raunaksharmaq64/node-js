const express = require("express");
express.u
hostRouter=express.Router();

hostRouter.get("/", (req, res, next) => {
  
  res.send(`
 <!DOCTYPE html>
<html>
<head>
  <title>Home Form</title>
</head>
<body>

  <h2>Home Form</h2>

  <form action="/bookRoom" method="POST">
    <label>Enter Message:</label>
    <input type="text" name="message"><br><br>

    <button type="submit">Submit</button>
  </form>

</body>
</html>


  `);
});

module.exports=hostRouter;