/** 
 * @jsx React.DOM
 * @flow
*/

var React = require('react/addons'),
    Router = require('react-router'),
    Link = Router.Link;

var Tab = React.createClass({

  render: function() {
    var className = 'nav__list__'+this.props.to;
    
    return <Link className={className} to={this.props.to}>{this.props.children}</Link>;
  }
});

module.exports = Tab;