/* @flow */

var React = require('react');

var Router = require('./_core/routing/Router');

var RootPage = require('./_pages/RootPage');

Router.start(RootPage, document.getElementById('app'), {
  '/': 'login',
  '/home': 'home',
  '/profile': 'profile',
  '/discover': 'discover',
  '/properties': 'properties'
});