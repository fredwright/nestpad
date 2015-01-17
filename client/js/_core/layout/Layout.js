/* @jsx React.DOM */
/* @flow */

var React = require('react');
var Reflux = require('reflux');

var Nav = require('./Nav');

var Layout = React.createClass({
  
  render: function() {
    return this.transferPropsTo(
      <div className='container'>
        <Nav/>
        <div>{this.props.children}</div>
      </div>
    );
  }
});

module.exports = Layout;