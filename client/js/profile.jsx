/**
 * @jsx React.DOM
 */

(function () {

  var React = require('react/addons'),
      Router = require('react-router'),
      Link = Router.Link,
      ActiveState = Router.ActiveState,
      _ = require('lodash'),
      Bio = require('./profile/bio.jsx'),
      Questions = require('./profile/questions.jsx'),
      Messages = require('./profile/messages.jsx');

  module.exports = React.createClass({
    render: function() {
      return (
        <div className='profile'>
          <Head/>
          <Tabs/>
          <this.props.activeRouteHandler/>
        </div>
      );
    }
  });

  var Head = React.createClass({
    render: function() {
      return (
        <div className='profile__head'>
          <div className='profile__image'></div>
          <div className='profile__info'>
            <div className='profile__info__name'>Dave Clarke</div>
            <div className='profile__info__uni'>University of Norwich</div>
            <div className='profile__info__course'>Chemistry BSc</div>
          </div>
        </div>
      );
    }
  });

  var Tabs = React.createClass({
    render: function() {
      return (
        <ul className='profile__tabs'>
          <Tab to="bio">Bio</Tab>
          <Tab to="questions">Questions</Tab>
          <Tab to="messages">Messages</Tab>
        </ul>
      );
    }
  });

  var Tab = React.createClass({
    mixins: [ ActiveState ],
    getInitialState: function () {
      return { isActive: false };
    },
    updateActiveState: function () {
      this.setState({
        isActive: Tab.isActive(this.props.to, this.props.params, this.props.query)
      })
    },
    render: function() {
      var className = this.state.isActive ? 'profile__tabs__tab--active' : 'profile__tabs__tab';
      var link = Link(this.props);
      return <li className={className}>{link}</li>;
    }
  });

})();