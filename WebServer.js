var http = require("http");

function handle_request(req,res)
{
    res.writeHead(200,{
        "Content-Type":"text/plain"  });
        res.end("Hello Rakesh");
}

http.createServer(handle_request).listen(9999);