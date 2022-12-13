const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get("/", (req, res) => {
  res.send("Hello world, I am a websocket server");
});

io.on("connection", (socket) => {
  console.log(socket);
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });
});

server.listen(8889, () => {
  console.log("listening on *:8889");
});
