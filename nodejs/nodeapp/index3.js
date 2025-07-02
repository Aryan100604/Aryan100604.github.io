import http from "http";
let server = http.createServer((req, res) => {
  res.end("Good Night...");
});

server.listen(8080, () => {
  console.log("Server started");
});
