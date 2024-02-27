const express = require("express");
const path = require('path');
const app = express();

const { Server } = require("socket.io");

const http = require("http");
const cors = require("cors");
const PORT = 5000;


const _dirname = path.dirname("");
const buildpath = path.join(_dirname, "../frontend/dist");
app.use(express.static(buildpath));
app.use(cors());
app.get("/*",function(req,res){
    res.sendFile(
        path.join(__dirname,"../frontend/dist/index.html"),
        function(err){
            if(err){
                res.status(500).send(err);
            }
        } 
    );
})

const httpServer = http.createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5000",
  },
});

io.on("connection", (socket) => {
  console.log("User connnected: ", socket.id);
  io.emit('userCount', io.engine.clientsCount);

  socket.on('sendusercount', ()=>{
    socket.emit('userCount', io.engine.clientsCount);
  })
  socket.on("sendsocketid", () => {
    socket.emit("yoursocketid", socket.id);
  });

  socket.on("message", (data) => {
    console.log("message sent");
    io.emit("roomMessage", data);
  });

  socket.on("disconnect", (data) => {
    console.log("...", socket.id);
    io.emit('userCount', io.engine.clientsCount);
    socket.on("notTyping", (displayName)=>{
      io.emit("notTyping", displayName);
    });
  });

  socket.on("typing", (displayName)=>{
    socket.broadcast.emit("typing", displayName);
  });
  socket.on("notTyping", (displayName)=>{
    socket.broadcast.emit("notTyping", displayName);
  });

});

httpServer.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
