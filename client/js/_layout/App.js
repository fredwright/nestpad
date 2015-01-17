/** 
 * @jsx React.DOM
 * @flow
*/

var React = require('react'),
    Reflux = require('reflux'),
    Router = require('react-router'),
    RouteHandler = Router.RouteHandler;

var Layout = require('./Layout');

var Login = require('../login/Login');

var AuthenticationActions = require('../login/AuthenticationActions'),
    AuthenticationStore = require('../login/AuthenticationStore');

var App = React.createClass({
  mixins: [
    Reflux.connect(AuthenticationStore, "authenticated")
  ],

  getInitialState: function() {
    return { authenticated: false };
  },
  componentDidMount: function() {
    AuthenticationActions.get();
  },

  render: function() {
    return (
      <div>
        { this.state.authenticated? <Layout route={RouteHandler}/> : <Login/> }
      </div>
    );
  }
});

module.exports = App;