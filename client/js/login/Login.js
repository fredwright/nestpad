/** 
 * @jsx React.DOM
 * @flow
*/

var React = require('react');
var Reflux = require('reflux');

var LoginActions = require('./LoginActions');
var LoginStore = require('./LoginStore');

var Login = React.createClass({
  mixins: [
    Reflux.connect(LoginStore, 'failed')
  ],
  
  getInitialState: function() {    
    return {
      username: 'user123',
      password: 'password',
      failed: false
    };
  },
  
  componentDidMount: function() {
    this.refs.initialFocus.getDOMNode().focus();
    this.refs.initialFocus.getDOMNode().select();
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

        { this.state.failed ? <p>Oops, not this time!</p>: null }
      </div>);
  }
});

module.exports = Login;