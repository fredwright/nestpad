'use strict';

var _ = require('lodash'),
    mongo = require('../config/mongo'),
    ObjectID = mongo.ObjectID;

// EXPORTS

module.exports.getUser = getUser;
module.exports.getUsers = getUsers;
module.exports.createUser = createUser;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;

// EXPORTED FUNCTIONS

function *getUser(id) {

  // get active user
  var user = yield mongo.users.findOne({id: id, "deletedTime": {"$exists": false}});
  if (user) {
    user.id = user._id;
    delete user._id;
  } else {
    user = {name: 'Cannot find user: '+id};
  }

  return user;
}

function *getUsers() {
  // get active users
  var users = yield mongo.users.find({"deletedTime": {"$exists": false}}).toArray();
  users.forEach(function (user) {
    user.id = user._id;
    delete user._id;
  });

  return users;
}

function *createUser(user) {
  // create new user record
  user.createdTime = new Date();
  var results = yield mongo.users.insert(user);

  return results;
}

function *updateUser(id, user) {
  id = ObjectID(id);

  // update user record
  user.updatedTime = new Date();
  var results = yield mongo.users.update({_id: id}, user);

  return results;
}

function *deleteUser(id) {
  id = ObjectID(id);

  // set user to inactive
  var results = yield mongo.users.update({_id: id}, {$set: {deletedTime: new Date()}});

  return results;
}