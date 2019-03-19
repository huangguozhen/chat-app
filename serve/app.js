const express = require('express');
const path = require('path');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);

const groups = {};

app.use(express.static(path.join(__dirname, '../build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

io.on('connection', function ()  {
  io.on('addGroup', function (groupName) {
  });
})

server.listen(9000, function () {
  console.log('node server running. http://localhost:9000');
});
