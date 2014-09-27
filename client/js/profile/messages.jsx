/**
 * @jsx React.DOM
 */

(function () {

  var React = require('react/addons'),
      _ = require('lodash');

  module.exports = React.createClass({
    render: function() {
      return (
        <div className='messages'>
          <Filter/>
          <Message/>
          <Message/>
          <Message/>
        </div>
      );
    }
  });

  var Filter = React.createClass({
    render: function() {
      return (
        <div className='messages__filter'>
          <div className='messages__filter__sort'></div>
          <div className='messages__filter__hidden'></div>
        </div>
      );
    }
  });

  var Message = React.createClass({
    render: function() {
      return (
        <div className='message'>
          <Head/>
          <Responses/>
          <div className='message__expand'></div>
          <Reply/>
        </div>
      );
    }
  });

  var Head = React.createClass({
    render: function() {
      return (
        <div className='message__head'>
          <div className='message__title'>What do you guys think about 28 Bread Street?</div>
          <div className='message__hide-me'></div>
          <div className='message__hide-others'></div>
          <div className='message__add'></div>
        </div>
      );
    }
  });

  var Responses = React.createClass({
    render: function() {
      return (
        <div className='message__responses'>
          <Response/>
          <Response/>
          <Response/>
        </div>
      );
    }
  });

  var Response = React.createClass({
    render: function() {
      return (
        <div className='response'>
          <div className='response__image'></div>
          <div className='response__name'>Kevin Smith</div>
          <div className='response__message'>
            <div className='response__message__text'>Yeah, I like it!</div>
            <div className='response__message__image'></div>
          </div>
        </div>
      );
    }
  });

  var Reply = React.createClass({
    render: function() {
      return (
        <div className='message__reply'>
          <div className='message__reply__input'></div>
          <div className='message__reply__add-image'></div>
          <div className='message__reply__send'></div>
        </div>
      );
    }
  });

})();