/** 
 * @jsx React.DOM
 * @flow
*/

var React = require('react'),
    Router = require('react-router'),
    RouteHandler = Router.RouteHandler;

var Tab = require('../_layout/Tab');

var Profile = React.createClass({
  
  getInitialState: function() {
    return {user: {}};
  },

  componentWillMount: function() {
    // var self = this;
    // UserStore.listen(function(u) {
    //   self.setState({user: u});
    // });
    // Actions.userGet('u3');
  },

  render: function() {
    var head = (
      <div className='profile__head'>
        <div className='profile__image'></div>
        <div className='profile__info'>
          <div className='profile__info__name'>{this.state.user.name}</div>
          <div className='profile__info__uni'>{this.state.user.uni}</div>
          <div className='profile__info__course'>{this.state.user.course}</div>
        </div>
      </div>
    );

    var tabs = (
      <ul className='profile__tabs'>
        <Tab className="profile__tabs__tab" to="bio">Bio</Tab>
        <Tab className="profile__tabs__tab" to="questions">Questions</Tab>
        <Tab className="profile__tabs__tab" to="messages">Messages</Tab>
      </ul>
    );

    return (
      <div className='profile'>
        {head}
        {tabs}
        <RouteHandler/>
      </div>
    );
  }
});

module.exports = Profile;