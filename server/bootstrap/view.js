var engines = require('consolidate');
var path = require('path');

module.exports = function (app) {
  app.engine('html', engines.ejs);
  app.engine('jade', require('jade').__express);

  app.set('views', path.join(__dirname, '../resources/templates'));
};
