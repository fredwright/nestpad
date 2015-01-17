/** 
* @jsx React.DOM
* @flow
*/

var React = require('react');

Bio = React.createClass({
  render: function() {
    return (
      <div className='bio'>
        <div className='bio__editor'></div>
      </div>
    );
  }
});

module.exports = Bio;