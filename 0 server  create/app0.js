const https=require("http");
const server=https.createServer((req,res)=>{
console.log(req.method,req.url,req.headers);


});








const port = 3005;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});