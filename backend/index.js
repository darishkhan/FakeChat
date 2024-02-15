const express = require('express');
const app = express();

const {Server} = require('socket.io');

const {router, updateUsers} = require('./routes/api.js');
const http = require('http');
const cors = require('cors');
const PORT = 5000;

var users = [];

app.use(cors());

const httpServer = http.createServer(app);

const io = new Server(httpServer, {
    cors:{
        origin: 'http://localhost:5173'
    }
});

io.on('connection', (socket)=>{
    console.log("User connnected: ", socket.id);
    updateUsers({displayName: socket.id});
    socket.on('message', (data)=>{
        console.log("message sent");
        io.emit("roomMessage", data);
    })
});

app.use('/api/v1', router);

  
httpServer.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
