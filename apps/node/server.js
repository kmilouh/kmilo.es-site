const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  res.end("node.kmilo.es - OK\n");
});

server.listen(3000, "0.0.0.0", () => {
  console.log("Node app listening on :3000");
});
