var connection = require('./sockets/connection');
var photoUpload = require('./sockets/photo-upload');

module.exports = function (io) {
  io.on('connection', connection(function (socket) {
    socket.on('photo upload', photoUpload(socket));
  }));
};
