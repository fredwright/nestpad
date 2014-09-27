/**
 * @jsx React.DOM
 */

(function () {

  var React = require('react/addons'),
      Router = require('react-router'),
      Routes = Router.Routes,
      Route = Router.Route,
      DefaultRoute = Router.Route,
      _ = require('lodash'),
      Nav = require('./nav.jsx'),
      Profile = require('./profile.jsx'),
      Bio = require('./profile/bio.jsx'),
      Questions = require('./profile/questions.jsx'),
      Messages = require('./profile/messages.jsx');

  var App = React.createClass({
    getInitialState: function() {
      return {};
    },
    render: function() {
      return (
        <div>
          <Nav/>
          <this.props.activeRouteHandler />
        </div>
      );
    },
  });

  var Home = React.createClass({
    render: function() {
      return (
        <h1>Home</h1>
      );
    }
  });

  var Discover = React.createClass({
    render: function() {
      return (
        <h1>Discover</h1>
      );
    }
  });

  var Houses = React.createClass({
    render: function() {
      return (
        <h1>Houses</h1>
      );
    }
  });

  var routes = (
    <Routes location="history">
      <Route name="app" path="/" handler={App}>

        <Route name="profile" handler={Profile}>
          <Route name="bio" handler={Bio}/>
          <Route name="questions" handler={Questions}/>
          <Route name="messages" handler={Messages}/>
          <DefaultRoute handler={Questions}/>
        </Route>

        <Route name="discover" handler={Discover}/>
        <Route name="houses" handler={Houses}/>
        <DefaultRoute handler={Messages}/>
        <NotFoundRoute handler={Messages}/>
      </Route>
    </Routes>
  );

  React.renderComponent(routes, document.getElementById('app'));

})();