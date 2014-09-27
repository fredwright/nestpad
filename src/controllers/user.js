'use strict';

var route = require('koa-route'),
    parse = require('co-body'),
    _ = require('lodash'),
    userService = require('../services/user-service');

// ROUTES

exports.init = function (app) {
  app.use(route.get('/api/users/:userId', getUsers));
  app.use(route.post('/api/users', createUser));
  app.use(route.put('/api/users/:id', updateUser));
  app.use(route.del('/api/users/:id', deleteUser));
};

// ROUTE FUNCTIONS

function *getUsers(userId) {
  // get users
  var users = yield userService.getUsers(userId);

  // return
  this.body = users;
}

function *createUser() {
  // get new user
  var user = yield parse(this);

  // create record
  var results = yield userService.createUser(user);
  
  // return
  this.status = 201;
  this.body = results[0]._id.toString();
}

function *updateUser(id) {
  // get user to update
  var user = yield parse(this);
  user = {
    name: user.name,
    uni: user.uni,
    course: user.course,
    questions: user.questions,
    messages: user.messages
  };

  // update record
  yield userService.updateUser(id, user);

  // return
  this.status = 201;
}

function *deleteUser(id) {
  // set user to inactive
  yield userService.deleteUser(id);

  // return
  this.status = 201;
}