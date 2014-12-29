var catchall = require('./controllers/catchall');

module.exports = function (app) {
  app.use('*', catchall);
};
