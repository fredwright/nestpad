/* @jsx React.DOM */
/* @flow */

var React = require('react');
var Reflux = require('reflux');

var App = require('../_core/App');
var Nav = require('./Nav');

var Layout = React.createClass({
  
  render: function() {
    return this.transferPropsTo(
      <App>
        <Nav>
          <div className='container'>{this.props.children}</div>
        </Nav>
      </App>
    );
  }
});

module.exports = Layout;