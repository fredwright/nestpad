/**
 * @jsx React.DOM
 */

(function () {

  var React = require('react/addons'),
      _ = require('lodash');

  module.exports = React.createClass({
    render: function() {
      return (
        <div className='bio'>
          <div className='bio__editor'></div>
        </div>
      );
    }
  });

})();