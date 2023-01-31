const http = require("http");

const server = http.createServer(function(req, res) {
    if (req.url == "/") {
        if (req.method == "GET") {
            res.writeHead(200);
            res.write("HTTP - GTPS");
            res.end();
        }
    }
    else if (req.url == "Your Url Sites") {
        if (req.method == "POST") {
            res.write("Your Url Server Sites");
            res.end();
        }
        else {
            res.writeHead(404);
            res.write("You cant access that");
            return res.end();
        }
    }
    else {
        res.writeHead(404);
        res.write("404 Not Found");
        return res.end();
    }
});
server.listen(80);
console.log("Your server is start up!");
