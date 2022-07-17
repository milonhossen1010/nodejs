const http = require("http");
let fs = require("fs");


let server = http.createServer(function (req, res) {

    if (req.url=="/"){


        fs.readFile("home.html", function (err, data) {

            res.writeHead(200, {"Content-Type":"text/html"});
            res.write(data);
            res.end();

        });
    }

});

server.listen(5050);

console.log("server is running");