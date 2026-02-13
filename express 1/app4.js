const http = require("http");
const user = require("./module _user");

const express = require("express");
const app = express();

const server = http.createServer(app);

const port = 3005;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
