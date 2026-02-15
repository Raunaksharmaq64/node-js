const express=require('express');
const app=express();

app.use((req,res,next)=>{
  console.log("first adding middleware");
  next();
});

app.use((req,res,next)=>{
  console.log("second adding middleware");
  next();
});


// app.use((req,res,next)=>{
//   console.log("second adding middleware");
//   res.send("<h1>hai</h1>")
//   next();
// });


app.get("/",(req,res,next)=>{
  console.log("get  adding middleware");
  next();
});

// addding a form at contect-me address 
app.get("/contact-me",(req,res,next)=>{
  console.log("get  adding middleware");
    res.send(`
    <html>
      <head>
        <title>Contact Me</title>
        <style>
          body{
            font-family: Arial;
            background:#f4f4f4;
            display:flex;
            justify-content:center;
            align-items:center;
            height:100vh;
          }
          .box{
            background:white;
            padding:20px;
            border-radius:10px;
            box-shadow:0 0 10px rgba(0,0,0,0.2);
            width:300px;
          }
          input, textarea{
            width:100%;
            margin-top:10px;
            padding:8px;
          }
          button{
            margin-top:10px;
            padding:8px 12px;
            background:#007bff;
            color:white;
            border:none;
            cursor:pointer;
          }
        </style>
      </head>

      <body>
        <div class="box">
          <h2>Contact Me</h2>
          <form action="/contact-me" method="post">
            <input type="text" name="name"  placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email"  required />
            <textarea rows="4" placeholder="Message"
            name="message"></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </body>
    </html>
  `);
  next();
});

// after submit the post request handling
app.post("/contact-me",(req,res,next)=>{
  console.log(" adding post middleware");
  res.send("<h1>thanks ! we will reach u soon </h1>")
  next();
})



const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});