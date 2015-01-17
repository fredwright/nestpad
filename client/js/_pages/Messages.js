/** 
* @jsx React.DOM
* @flow
*/

var React = require('react');

    // Actions = require('../actions.js'),
    // UserStore = require('../stores/userStore.js'),
    // MessageStore = require('../stores/messageStore.js');

Messages = React.createClass({

  getInitialState: function() {
    return {user: {}, messages: []};
  },

  componentWillMount: function() {
    var self = this;
    // MessageStore.listen(function(m) {
    //   self.setState({messages: m});
    // });
    // UserStore.listen(function(u) {
    //   self.setState({user: u});
    //   Actions.messagesGet(u.id);
    // });
    // Actions.userGet('u3');
  },

  render: function() {
    return (
      <div className='messages'>
        <Filter/>
        { 
          // _.map(this.state.messages, function(m, i) {
          //   return <Message key={i} message={c}/>;
          // })
        }
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
        <Head message={this.props.message}/>
        <Responses message={this.props.message}/>
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
        <div className='message__title'>{this.props.message.subject}</div>
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
        { 
          // _.map(this.props.message.responses, function(r, i) {
          //   return <Response key={i} response={r}/>;
          // })
        }
      </div>
    );
  }
});

var Response = React.createClass({
  render: function() {
    return (
      <div className='response'>
        <div className='response__image'></div>
        <div className='response__name'>{this.props.response.user}</div>
        <div className='response__message'>
          <div className='response__message__text'>{this.props.response.description}</div>
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

module.exports = Messages;