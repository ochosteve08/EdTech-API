const socketio = require('socket.io');

// Create a map to store connected sockets and their associated receivers
const socketReceiverMap = new Map();

const configureSocket = (server) => {
  const io = socketio(server, {
    cors: {
      origin: '*',
      credentials: true,
    },
  });

  io.on('connection', (socket) => {
    console.log('Client connected:', socket.id);

    socket.on('registerReceiver', (receiver) => {
      // Map the socket id to the receiver
      socketReceiverMap.set(socket.id, receiver);
      console.log('Receiver registered:', receiver);
    });

    socket.on('disconnect', () => {
      console.log('Client disconnected:', socket.id);

      // Remove the socket receiver mapping upon disconnection
      if (socketReceiverMap.has(socket.id)) {
        socketReceiverMap.delete(socket.id);
        console.log('Receiver unregistered:', socket.id);
      }
    });
  });

  return io;
};
let io;
// Get the receiver associated with a socket
const getReceiverBySocket = (socketId) => socketReceiverMap.get(socketId);
const getIo = () => io;

module.exports = {
  configureSocket,
  getReceiverBySocket,
  getIo,
};
