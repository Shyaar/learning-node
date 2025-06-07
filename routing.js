let http = require("http");

//routing is used to distinguish data for users to consume based on the req url.
let fs = require("fs");

let server = http.createServer((req, res) => {
  if (req.url === "/home" || "/") {
    res.writeHead(200, { "Content-Type": "text.html" });

   let read = fs.createReadStream(__dirname + "/index.html").pipe(res);

  }
});

server.listen(3000)