/** 
* @jsx React.DOM
* @flow
*/

var React = require('react');

Questions = React.createClass({
  render: function() {
    return (
      <div className='questions'>
        <Filter/>
        <Question/>
        <Question/>
        <Question/>
      </div>
    );
  }
});

var Filter = React.createClass({
  render: function() {
    return (
      <div className='questions__filter'>
        <div className='questions__filter__sort'></div>
        <div className='questions__filter__answered'></div>
      </div>
    );
  }
});

var Question = React.createClass({
  render: function() {
    return (
      <div className='question'>
        <div className='question__title'>What age range?</div>
        <Answers/>
        <Result/>
      </div>
    );
  }
});

var Answers = React.createClass({
  render: function() {
    return (
      <div className='answers'>
        <div className='answers__head'>
          <div className='answers__text'></div>
          <div className='answers__me'>I am</div>
          <div className='answers__others'>I will accept</div>
        </div>

        <div className='answer'>
          <div className='answer__text'>18 - 21</div>
          <div className='answer__me'>.</div>
          <div className='answer__others'>.</div>
        </div>

        <div className='answer'>
          <div className='answer__text'>22 - 24</div>
          <div className='answer__me'>.</div>
          <div className='answer__others'>.</div>
        </div>

        <div className='answer'>
          <div className='answer__text'>25+</div>
          <div className='answer__me'>.</div>
          <div className='answer__others'>.</div>
        </div>

        <div className='answers__weight'>
          <div className='answers__weight_text'>How much do you care?</div>
          <div className='answers__weight__input'>------------o------</div>
        </div>
      </div>
    );
  }
});

var Result = React.createClass({
  render: function() {
    return (
      <div className='result'>
        <div className='result__summary'>
          <div className='result__summary__answer'>21 - 24</div>
          <div className='result__summary__accepts'>18 - 21 | 21 - 24</div>
          <div className='result__summary__score'>80%</div>
        </div>

        <div className='result__answer'>Answer question</div>

        <div className='result__answers'>
          <Answers/>
        </div>
      </div>
    );
  }
});

module.exports = Questions;