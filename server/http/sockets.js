var connection = require('./sockets/connection');

module.exports = function (io) {
  io.on('connection', connection);
};
