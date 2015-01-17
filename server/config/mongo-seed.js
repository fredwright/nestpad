'use strict';

var mongo = require('./mongo'),
    ObjectID = mongo.ObjectID;

// EXPORTS

module.exports = function *(overwrite) {
  var count = yield mongo.users.count({}, {limit: 1});
  if (overwrite || count === 0) {

    // clear database
    for (var collection in mongo) {
      if (mongo[collection].drop) {
        try {
          yield mongo[collection].drop();
        } catch (err) {
          if (err.message !== 'ns not found') { // indicates 'collection not found' error in mongo which is ok
            throw err;
          }
        }
      }
    }

    // populate with seed data
    yield mongo.users.insert(users);
    yield mongo.questions.insert(questions);
    yield mongo.messages.insert(messages);
  }
};

// SEED DATA

var users = [
  {
    id: 'u1',
    name: 'Chris Clarke',
    uni: 'University of Durham',
    course: 'Chemistry BSc',
    questions: [
      {
       id: 'q1',
       answer: 'a2',
       accepts: ['a2', 'a3'],
       weight: 0.8 
      },
      {
       id: 'q2',
       answer: 'a4',
       accepts: ['a5', 'a4'],
       weight: 0.4 
      }
    ],
    messages: ['m1', 'm2']
  },
  {
    id: 'u2',
    name: 'Kevin Karter',
    uni: 'Sussex University',
    course: 'Theatre BA',
    questions: [
      {
       id: 'q2',
       answer: 'a5',
       accepts: ['a6', 'a5'],
       weight: 1 
      }
    ],
    messages: ['m1']
  },
  {
    id: 'u3',
    name: 'Sarah Smith',
    uni: 'University of Oxford',
    course: 'Economics MSc',
    questions: [
      {
       id: 'q1',
       answer: 'a1',
       accepts: ['a1'],
       weight: 1
      },
      {
       id: 'q2',
       answer: 'a4',
       accepts: ['a4', 'a5'],
       weight: 0.6
      }
    ],
    messages: ['m2']
  }
];
var questions = [
  {
    id: 'q1',
    description: 'How many times a week do you like to go out?',
    answers: [
      {
        id: 'a1',
        description: '0 - 2'
      },
      {
        id: 'a2',
        description: '3 - 5'
      },
      {
        id: 'a3',
        description: '6 - 7'
      }
    ]
  },
  {
    id: 'q2',
    description: 'How long are you looking to rent for?',
    answers: [
      {
        id: 'a4',
        description: 'less than 1 year'
      },
      {
        id: 'a5',
        description: 'up to 2 years'
      },
      {
        id: 'a6',
        description: 'more than 2 years'
      }
    ]
  }
];
var messages = [
  {
    id: 'm1',
    subject: 'What do you think of Bread Street?',
    responses: [
      {
        user: 'u2',
        description: 'Well I like this place, what do you guys think?'
      },
      {
        user: 'u1',
        description: 'Yeah! Not bad. Whats the price?'
      },
      {
        user: 'u2',
        description: 'About 800pm?'
      }
    ]
  },
  {
    id: 'm2',
    subject: 'When are you thinking of arriving?',
    responses: [
      {
        user: 'u3',
        description: 'Ill probably get there around 5th March'
      },
      {
        user: 'u1',
        description: 'Probably around then for me too'
      },
      {
        user: 'u3',
        description: 'Cool! This is looking dog good'
      }
    ]
  }
];