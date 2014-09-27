/**
 * @jsx React.DOM
 */

(function () {

  var React = require('react/addons'),
      Router = require('react-router'),
      Link = Router.Link,
      ActiveState = Router.ActiveState,
      _ = require('lodash');

  module.exports = React.createClass({
    render: function() {
      return (
        <div className='nav'>
          <div className='nav__logo'><Link to="/">nestpad</Link></div>
          <ul className='nav__list'>
            <Tab to="profile">pad</Tab>
            <Tab to="discover">pool</Tab>
            <Tab to="houses">nest</Tab>
          </ul>
          <div className='nav__logout'>logout</div>
        </div>
      );
    },
    navHandler: function(optionIndex) {
      var self = this;
      return function() {
        Actions.nav-selected(optionIndex);
      };
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
      var className = this.state.isActive ? 'nav__list__'+this.props.to+'--active' : 'nav__list__'+this.props.to;
      var link = Link(this.props);
      return <li className={className}>{link}</li>;
    }
  });

})();