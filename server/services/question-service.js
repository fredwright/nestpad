'use strict';

var mongo = require('../config/mongo'),
    ObjectID = mongo.ObjectID;

// EXPORTS

module.exports.getQuestions = getQuestions;
module.exports.createQuestion = createQuestion;
module.exports.updateQuestion = updateQuestion;
module.exports.deleteQuestion = deleteQuestion;

// EXPORTED FUNCTIONS

function *getQuestions() {
  // get active questions
  var questions = yield mongo.questions.find({'deletedTime': {'$exists': false}}).toArray();
  questions.forEach(function (question) {
    question.id = question._id;
    delete question._id;
  });

  return questions;
}

function *createQuestion(question) {
  // create new question record
  question.createdTime = new Date();
  var results = yield mongo.questions.insert(question);

  return results;
}

function *updateQuestion(id, question) {
  id = ObjectID(id);

  // update question record
  question.updatedTime = new Date();
  var results = yield mongo.questions.update({_id: id}, question);

  return results;
}

function *deleteQuestion(id) {
  id = ObjectID(id);

  // set question to inactive
  var results = yield mongo.questions.update({_id: id}, {$set: {deletedTime: new Date()}});

  return results;
}