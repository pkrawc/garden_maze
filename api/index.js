// require('@std/esm');

const http = require('http');
const socketIO = require('socket.io');
const app = require('./app');

// import {
//   onInit,
//   onChat,
//   onLogin,
//   onDisconnect,
//   onHop,
//   onHelp,
// } from './socket';

const server = http.createServer(app);

const hostname = '127.0.0.1';
const port = 8080;

const io = socketIO(server);

server.listen(port, hostname, () => {
  console.log(`Server running on port ${hostname}:${port}`);
});

io.on('connection', (socket) => {
  console.log('connection', socket);
  
  socket.emit('message1', 'message1');
  
  setTimeout(() => {
    socket.emit('message2', 'message2');
  }, 2000);
  
  socket.on('message2', (payload) => {
    console.log('message2', payload)
    return { hi: 'hello' };
  });
  
  // onInit({ s1 });
  // s1.on('chat', msg => onChat({ s1, msg }));
  // s1.on('login', () => onLogin({ s1 }));
  // s1.on('disconnect', () => onDisconnect({ s1 }));
  // s1.on('hop', () => onHop({ s1 }));
  // s1.on('help', () => onHelp({ s1 }));
});
