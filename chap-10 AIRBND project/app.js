const path=require('path');

const express = require("express");

const app = express();

//// local module imported from file
const hostRouter=require("./routers/hostRouter");

const userRouter=require("./routers/userRouter")


app.use((req,res,next)=>{
console.log(req.url,req.method);
next();
})

app.use(express.urlencoded());

// module ka use from hostRouter module
app.use(hostRouter);

// module ka use from userRouter module
app.use(userRouter);


app.use((req,res,next)=>{
  res.status(404).sendFile(path.join(__dirname,'views','pgnotfound.html'));
})


const port = 3001;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
