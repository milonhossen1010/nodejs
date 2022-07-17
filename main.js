const http = require("http");

let server = http.createServer(function (req, res) {
res.end("<h1>Hello world!</h1>");
});

server.listen(5050);
console.log("server is running");