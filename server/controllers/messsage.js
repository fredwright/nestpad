'use strict';

var route = require('koa-route'),
    parse = require('co-body'),
    _ = require('lodash'),
    messageService = require('../services/message-service'),
    userService = require('../services/user-service');

// ROUTES

exports.init = function (app) {
  app.use(route.get('/api/messages/:userId', getMessages));
  app.use(route.post('/api/messages', createMessage));
  app.use(route.put('/api/messages/:id', updateMessage));
  app.use(route.del('/api/messages/:id', deleteMessage));
};

// ROUTE FUNCTIONS

function *getMessages(userId) {
  // get user
  console.log('user: '+userId)
  var user = yield userService.getUser('u1');

  // get messages
  var messages = yield messageService.getMessages([user.messages]);

  // return
  this.body = messages;
}

function *createMessage() {
  // get new message
  var message = yield parse(this);

  // create record
  var results = yield messageService.createMessage(message);
  
  // return
  this.status = 201;
  this.body = results[0]._id.toString();
}

function *updateMessage(id) {
  // get message to update
  var message = yield parse(this);
  message = {
    subject: message.subject,
    responses: message.responses
  };

  // update record
  yield messageService.updateMessage(id, message);

  // return
  this.status = 201;
}

function *deleteMessage(id) {
  // set message to inactive
  yield messageService.deleteMessage(id);

  // return
  this.status = 201;
}