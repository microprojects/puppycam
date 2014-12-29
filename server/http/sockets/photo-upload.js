module.exports = function (socket) {
  return function(msg) {
    console.log('photo');
    socket.broadcast.emit('photo send', msg);
  };
};
