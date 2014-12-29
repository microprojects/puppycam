module.exports = function (socket) {
  return function(msg) {
    socket.broadcast.emit('photo send', msg);
  };
};
