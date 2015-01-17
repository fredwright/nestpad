/* @flow */

var React = require('react'),
    Router = require('react-router'),
    Routes = Router.Routes,
    Route = Router.Route,
    DefaultRoute = Router.DefaultRoute;

var App = require('./_layout/App');

var Home = require('./_pages/Home'),
    Profile = require('./_pages/Profile'),
    Bio = require('./_pages/Bio'),
    Questions = require('./_pages/Questions'),
    Messages = require('./_pages/Messages'),
    Discover = require('./_pages/Discover'),
    Houses = require('./_pages/Houses');

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="home" path="/" handler={Home}/>
    <Route name="profile" handler={Profile}>
      <Route name="bio" handler={Bio}/>
      <Route name="questions" handler={Questions}/>
      <Route name="messages" handler={Messages}/>
      <DefaultRoute handler={Questions}/>
    </Route>
    <Route name="discover" handler={Discover}/>
    <Route name="houses" handler={Houses}/>
    <DefaultRoute handler={Home}/>
  </Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler/>, document.body);
});