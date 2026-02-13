const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.method, req.url);

  // SHOW FORM
  if (req.url === "/" && req.method === "GET") {
    res.write("<html>");
    res.write("<head><title>Form</title></head>");
    res.write("<body>");

    res.write("<h2>User Registration Form</h2>");

    res.write('<form method="POST" action="/submit">');
    res.write('Name: <input type="text" name="username"><br><br>');
    res.write('Email: <input type="email" name="email"><br><br>');

    res.write("Gender: ");
    res.write('<input type="radio" name="gender" value="male"> Male ');
    res.write('<input type="radio" name="gender" value="female"> Female ');
    res.write(
      '<input type="radio" name="gender" value="other"> Other <br><br>',
    );

    res.write('Age: <select name="age">');
    res.write('<option value="18">18</option>');
    res.write('<option value="19">19</option>');
    res.write('<option value="20">20</option>');
    res.write("</select><br><br>");

    res.write('<button type="submit">Submit</button>');
    res.write("</form>");

    res.write("</body></html>");
    return res.end();
  }

  // how to see data from server
  if (req.url === "/submit" && req.method === "POST") {
    const body = []; // create an empty array whereall chunks geting pushed

    req.on("data", (chunk) => {
      body.push(chunk);
      console.log(body);
    });

    // convert chunks into string

    
    req.on("end", () => {
      const parsedData = Buffer.concat(body).toString();
      console.log("Form Data:", parsedData);

      ///// yaha se data shai se aa tho rha haibut sahi se arrange nhi hai 

      const perimeters = new URLSearchParams(parsedData);

// data ko sahi se arrange karne kla trika 

      // const bodyObj={};
      // for(const[key,val] of perimeters.entries()){
      //   bodyObj[key]=val;
      //
      //   console.log(bodyObj);
      //  }

      // simple version code from  line 57 to 64==66to 68

      const bodyObj = Object.fromEntries(perimeters);
      console.log(bodyObj);


      // write chunks in saperate file

      fs.writeFileSync("user.txt", parsedData);

      res.statusCode = 302;
      res.setHeader("Location", "/");
      res.end();
    });
  }
});

server.listen(3005, () => {
  console.log("Server running on http://localhost:3005");
});
// components from40 mints in lecture 5


/// from 56:00 min