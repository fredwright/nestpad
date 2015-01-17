/** 
 * @jsx React.DOM
 * @flow
*/

var React = require('react'),
    Reflux = require('reflux'),
    Router = require('react-router'),
    RouteHandler = Router.RouteHandler;

var Layout = require('./Layout');

var Login = require('../../_pages/Login');
var LoginStore = require('../../login/LoginStore');


var App = React.createClass({
  mixins: [
    Reflux.connect(LoginStore,"authenticated")
  ],

  getInitialState: function () {
    return { authenticated: false };
  },

  onLogin: function() { this.setState({authenticated: true}); },
  
  render: function() {
    return (
      <div>
        { this.state.authenticated? <Layout route={RouteHandler}/> : <Login onLogin={this.onLogin}/> }
      </div>
    );
  }
});

module.exports = App;