module.exports = function (callback) {
  return function (socket) {
    callback(socket);
  };
};
