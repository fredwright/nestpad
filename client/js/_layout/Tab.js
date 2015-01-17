/** 
 * @jsx React.DOM
 * @flow
*/

var React = require('react'),
    Router = require('react-router'),
    Link = Router.Link;

var Tab = React.createClass({
  propTypes: {
    to: React.PropTypes.string.isRequired,
    className: React.PropTypes.string
  },

  render: function() {
    return <Link className={this.props.className} to={this.props.to}>{this.props.children}</Link>;
  }
});

module.exports = Tab;