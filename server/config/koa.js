'use strict';

var fs = require('fs'),
    logger = require('koa-logger'),
    send = require('koa-send'),
    livereload = require('koa-livereload'),
    config = require('./config');

module.exports = function (app) {
  // middleware configuration
  if (config.app.env !== 'test') {
    app.use(logger());
  }
  if (config.app.env === 'development') {
    app.use(livereload({excludes: ['/modules']}));
  }

  // serve the static files from the /public directory
  var sendOpts = {root: 'public', maxage: config.app.cacheTime};
  app.use(function *(next) {
    // skip any route that starts with /api as it doesn't have any static files
    if (this.path.substr(0, 5).toLowerCase() === '/api/') {
      yield next;
      return;
    }

    // if the requested path matched a file and it is served successfully, exit the middleware
    // public folder must be flat to allow for nested routing
    var pathArray = this.path.split('/');
    var file = '/'+pathArray[pathArray.length - 1];
    if (yield send(this, file, sendOpts)) {
      return;
    }
    
    // if given path didn't match any file, just let the client side handle the routing
    yield send(this, '/index.html', sendOpts);
  });

  // mount all the routes defined in the api controllers
  fs.readdirSync('./server/controllers').forEach(function (file) {
    if (file.substr(-3) === '.js') require('../controllers/' + file).init(app);
  });
};