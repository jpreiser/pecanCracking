//load http module
const http = require("http");

const hostname = "127.0.0.1";
const port = 8000;

// create http server
const server = http.createServer(function (req, res) {
    //Set response http header with http status and content type
    res.writeHead(200, {"Content-Type": "text/plain"});

    res.end("hello world\n");
});

server.listen(port, hostname, function () {
    console.log(`server running at http://${hostname}:${port}/`);
});
