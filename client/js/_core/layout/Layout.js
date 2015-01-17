/** 
 * @jsx React.DOM
 * @flow
*/

var React = require('react');

var Nav = require('./Nav');

var Layout = React.createClass({
  
  render: function() {
    return (
      <div className='container'>
        <Nav/>
        <this.props.route/>
      </div>
    );
  }
});

module.exports = Layout;