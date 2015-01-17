var React = require('react');

var Router = require('./routing/Router');

var RootPage = require('./pages/RootPage');

start(RootPage, document.getElementById('app'), {
  '/home': 'home',
  '/profile': 'profile',
  '/discover': 'discover',
  '/properties': 'properties',
  '/': 'login'
});

function start(componentClass, domNode, routes, useHistory) {
  Router.start(componentClass, domNode, routes, useHistory);
}