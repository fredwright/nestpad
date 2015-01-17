'use strict';

var route = require('koa-route'),
    parse = require('co-body'),
    questionService = require('../services/question-service');

// ROUTES

exports.init = function (app) {
  app.use(route.get('/api/questions/:userId', getQuestions));
  app.use(route.post('/api/questions', createQuestion));
  app.use(route.put('/api/questions/:id', updateQuestion));
  app.use(route.del('/api/questions/:id', deleteQuestion));
};

// ROUTE FUNCTIONS

function *getQuestions(userId) {
  // get questions
  var questions = yield questionService.getQuestions(userId);

  // return
  this.body = questions;
}

function *createQuestion() {
  // get new question
  var question = yield parse(this);

  // create record
  var results = yield questionService.createQuestion(question);
  
  // return
  this.status = 201;
  this.body = results[0]._id.toString();
}

function *updateQuestion(id) {
  // get question to update
  var question = yield parse(this);
  question = {
    description: question.description,
    answers: question.answers
  };

  // update record
  yield questionService.updateQuestion(id, question);

  // return
  this.status = 201;
}

function *deleteQuestion(id) {
  // set question to inactive
  yield questionService.deleteQuestion(id);

  // return
  this.status = 201;
}