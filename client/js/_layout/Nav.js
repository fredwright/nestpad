/** 
 * @jsx React.DOM
 * @flow
*/

var React = require('react'),
    Router = require('react-router'),
    Link = Router.Link;

var Tab = require('./Tab');

var LoginActions = require('../login/LoginActions');

var Nav = React.createClass({

  handleLogoff: function() {
    LoginActions.logoff();
  },  

  render: function() {
    return (
      <div className='nav'>
        <div className='nav__logo'>
          <Link to="home">nestpad</Link>
        </div>
        <ul className='nav__list'>
          <Tab className="nav__list__profile" to="profile">pad</Tab>
          <Tab className="nav__list__discover" to="discover">pool</Tab>
          <Tab className="nav__list__houses" to="houses">nest</Tab>
        </ul>
        <div className='nav__logout' onClick={this.handleLogoff}>logout</div>
      </div>
    );
  }
});

module.exports = Nav;