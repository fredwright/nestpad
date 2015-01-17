/* @jsx React.DOM */
/* @flow */

var React = require('react/addons');
var Reflux = require('reflux');

var LoginActions = require('../login/LoginActions');
var LoginStore = require('../login/LoginStore');

var Login = React.createClass({
  mixins: [
    Reflux.listenTo(LoginStore,'onAuthenticate')
  ],
  
  getInitialState: function() {    
    return {
      username: 'user123',
      password: 'password',
      authenticated: false
    };
  },
  
  componentDidMount: function() {
    this.refs.initialFocus.getDOMNode().focus();
    this.refs.initialFocus.getDOMNode().select();
  },

  onAuthenticate: function(authenticated) {
    this.setState({authenticated: authenticated});
    if (authenticated) {
      this.props.onLogin();  
    } else {
      this.setState({authenticationFailed: true});
    }
  },

  handleFieldChanges: function(property) {
    return function(e) {
      var propState = {};
      propState[property] = e.target.value;
      this.setState(propState);
    }.bind(this);
  },
  handleLogin: function() {
    LoginActions.login(this.state.username, this.state.password);    
  },  
  keyPressed : function(e) {
    if (e.keyCode === 13 && e.target.value !== '') this.handleLogin();
  },

  render: function() {
    return (
      <div>
        <p>Username</p>
        <input ref='initialFocus' type='text' placeholder='Username...' value={ this.state.username ? this.state.username : null } onChange={ this.handleFieldChanges('username') } onKeyDown={ this.keyPressed }/>
        
        <p>Password</p>
        <input type='password' placeholder='Password...' value={ this.state.password ? this.state.password : null } onChange={ this.handleFieldChanges('password') } onKeyDown={ this.keyPressed }/>

        <button onClick={ this.handleLogin }>Login</button>

        { this.state.authenticationFailed ? <p>Oops, not this time!</p>: null }
      </div>);
  }
});

module.exports = Login;