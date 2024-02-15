const express = require("express");
const app = express();

const { Server } = require("socket.io");

const http = require("http");
const cors = require("cors");
const PORT = 5000;

app.use(cors());

const httpServer = http.createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173",
  },
});

io.on("connection", (socket) => {
  console.log("User connnected: ", socket.id);
  socket.on("sendsocketid", () => {
    socket.emit("yoursocketid", socket.id);
  });
  socket.on("message", (data) => {
    console.log("message sent");
    io.emit("roomMessage", data);
  });
  socket.on("disconnect", (data) => {
    console.log("...", socket.id);
  });
});

httpServer.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
