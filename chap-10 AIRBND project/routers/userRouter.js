const express = require("express");
userRouter=express.Router();





userRouter.post("/bookRoom",(req,res,next)=>{
  console.log(req.body)
res.send(`
  <!DOCTYPE html>
<html>
<head>
  <title>Book Room</title>
</head>
<body>

  <h2>Book Room Form</h2>

  <form action="/resister-user" method="POST">
    <label>Name:</label>
    <input type="text" name="name" required><br><br>

    <label>Room Number:</label>
    <input type="number" name="roomNo"><br><br>

    <button type="submit">Book Room</button>
  </form>

</body>
</html>

  `)
});

userRouter.post("/resister-user",(req,res,next)=>{
   console.log(req.body)
res.send(`<!DOCTYPE html>
<html>
<head>
  <title>Register User</title>
</head>
<body>

  <h2>User Registration</h2>

  <form action="/" method="POST">
    <label>Username:</label>
    <input type="text" name="username" required><br><br>

    <label>Email:</label>
    <input type="email" name="email" required><br><br>

    <label>Password:</label>
    <input type="password" name="password" required><br><br>

    <button type="submit">Register</button>
  </form>

</body>
</html>
`)
})

userRouter.post("/", (req, res, next) => {
   console.log(req.body)
  res.send(`
 <!DOCTYPE html>
<html>
<head>
  <title>Home Form</title>
</head>
<body>

  <h2>resister sucessfully</h2>
  <a href="/">go to home</a>


</body>
</html>


  `);
});

module.exports=userRouter;