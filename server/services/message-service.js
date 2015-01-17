'use strict';

var _ = require('lodash'),
    mongo = require('../config/mongo'),
    ObjectID = mongo.ObjectID;

// EXPORTS

module.exports.getMessages = getMessages;
module.exports.createMessage = createMessage;
module.exports.updateMessage = updateMessage;
module.exports.deleteMessage = deleteMessage;

// EXPORTED FUNCTIONS

function *getMessages(messageIds) {
  // get active messages
  console.log('messages: '+messageIds)
  var messages = yield mongo.messages.find({"id": "m1"}).toArray();
  // var messages = yield mongo.messages.find({id: { $in: messageIds}, "deletedTime": {"$exists": false}}).toArray();
  messages.forEach(function (message) {
    message.id = message._id;
    delete message._id;
  });

  console.log('return messages: '+messages)
  return messages;
}

function *createMessage(message) {
  // create new message record
  message.createdTime = new Date();
  var results = yield mongo.messages.insert(message);

  return results;
}

function *updateMessage(id, message) {
  id = ObjectID(id);

  // update message record
  message.updatedTime = new Date();
  var results = yield mongo.messages.update({_id: id}, message);

  return results;
}

function *deleteMessage(id) {
  id = ObjectID(id);

  // set message to inactive
  var results = yield mongo.messages.update({_id: id}, {$set: {deletedTime: new Date()}});

  return results;
}