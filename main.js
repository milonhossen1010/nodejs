const http = require("http");

let server = http.createServer(function (req, res) {
    if (req.url == "/"){
        res.writeHead(200, {"Content-Type" : "text/html"});
        res.write("<h1>This is home page</h1>");
        res.end();
    }

    else if (req.url == "/about"){
        res.writeHead(200, {"Content-Type" : "text/html"});
        res.write("<h1>This is About us page</h1>");
        res.end();
    }

    else if (req.url == "/contact"){
        res.writeHead(200, {"Content-Type" : "text/html"});
        res.write("<h1>This is contact us page</h1>");
        res.end();
    }

});

server.listen(5050);

console.log("server is running");