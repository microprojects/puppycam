module.exports = function (callback) {
  return function(socket) {
      console.log('a user connected');
      callback(socket);
  };
};
