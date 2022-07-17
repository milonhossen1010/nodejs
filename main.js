const http = require("http");
var URL = require("url");

let server = http.createServer(function (req, res) {

    let link = "https://milonpc.com/contact?age=20";
    let urlObj = URL.parse(link, true);

    let host = urlObj.host;
    let pathname = urlObj.pathname;
    let searchName = urlObj.search;

    res.write(`HostName : ${host}, pathName : ${pathname}, search : ${searchName}`);
    res.end();

});

server.listen(5050);

console.log("server is running");