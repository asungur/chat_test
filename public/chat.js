//Create  connection
var socket = io.connect("http://localhost:9090");

// retrieve DOM elements
var message = document.querySelector("#message");
var handle = document.querySelector("#handle");
var btn = document.querySelector("#send");
var output  = document.querySelector("#output");
var feedback = document.querySelector("#feedback");

btn.addEventListener("click", function() {
  socket.emit("chat", {
    message: message.value,
    handle:  handle.value,
  });
});

message.addEventListener("keypres", function() {
  socket.emit("typing", handle.value);
});

socket.on("chat", function(data) {
  output.innerHTML += "<p><strong>" + data.handle +":</strong>" + data.message + "</p>";
  feedback.innerHTML = "";
});

socket.on("typing", function(data) {
  feedback.innerHTML = "<p> <em>" + data + " is typing a message...</em> </p>";
});