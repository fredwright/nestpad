/** 
 * @jsx React.DOM
 * @flow
*/

var React = require('react/addons'),
    Router = require('react-router'),
    Link = Router.Link;

var Tab = require('./Tab');

var LoginActions = require('../../login/LoginActions');

var Nav = React.createClass({

  handleLogin: function() {
    LoginActions.logoff();    
  },  

  render: function() {
    return (
      <div className='nav'>
        <div className='nav__logo'>
          <Link to="home">nestpad</Link>
        </div>
        <ul className='nav__list'>
          <Tab to="profile">pad</Tab>
          <Tab to="discover">pool</Tab>
          <Tab to="houses">nest</Tab>
        </ul>
        <div className='nav__logout'>logout</div>
      </div>
    );
  }
});

module.exports = Nav;