var express = require("express");
var socket = require("socket.io");
var app = express();

const PORT = 9090

var server = app.listen(PORT, function() {
  console.log(`Listening on port ${PORT}`)
});

app.use(express.static("public"));

var io = socket(server);

io.on("connection", function(socket) {
  socket.on("chat", function(data) {
    io.sockets.emit("chat", data);
  });

  socket.on("typing", function(data) {
    socket.broadcast.emit("typing", data);
  });
});