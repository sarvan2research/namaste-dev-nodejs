const http = require("node:http");

const server = http.createServer(function (req, res) {
  if (req.url === "/secret") {
    res.end("Secret page loaded");
  }
  res.end("Hello world!!!");
});

server.listen(7777);
