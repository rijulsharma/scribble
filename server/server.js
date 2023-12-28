const express = require('express');
const http = require('http');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = require("socket.io")(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"]
    }
});

io.on('connection', (socket) => {
  console.log('A user connected');

  // Listen for messages
  socket.on('message', (data) => {
    console.log('Received message:', data);
    io.emit('message', data); // Broadcast the message to all connected clients
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

server.listen(3001, () => {
  console.log('Server is running on port 3001');
});
