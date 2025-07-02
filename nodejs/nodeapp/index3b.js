import http from "http";
let server = http.createServer((req, res) => {
  res.end("Mango...");
});

server.listen(8082, () => {
  console.log("Server started");
});
