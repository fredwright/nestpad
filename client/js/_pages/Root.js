/* @jsx React.DOM */
/* @flow */

var React = require('react');
var Reflux = require('reflux');
var R = require('ramda');

var Router = require('../_core/routing/Router');
var Layout = require('../_core/layout/Layout');

var Login = require('./Login');
var Home = require('./Home');
var Profile = require('./Profile');
var Discover = require('./Discover');
var Houses = require('./Houses');

var LoginStore = require('../login/LoginStore');

var RootPage = React.createClass({
  mixins: [
    Reflux.connect(LoginStore,'authenticated')
  ],

  getInitialState: function () {
    return {
      authenticated: false
    };
  },

  onLogin: function() { Router.trigger('/home'); },

  render: function() {
    var route = this.props.route;

    var pages = [
      { path: 'login', wrapped: false, component: <Login onLogin={this.onLogin}/> },
      { path: 'home', component: <Home/> },
      { path: 'profile', component: <Profile activeRoute={route}/> },
      { path: 'discover', component: <Discover activeRoute={route}/> },
      { path: 'houses', component: <Houses activeRoute={route}/> }
    ];

    var activePage = this.state.authenticated && R.find(R.propEq('path', this.props.page))(pages) || pages[0];
    var component = activePage.wrapped !== false ? <Layout header={activePage.name}>{activePage.component}</Layout> : activePage.component;

    return component;    
  }
});

module.exports = RootPage;