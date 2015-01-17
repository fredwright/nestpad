/* @flow */

var React = require('react'),
    Router = require('react-router'),
    Routes = Router.Routes,
    Route = Router.Route,
    DefaultRoute = Router.DefaultRoute;

var App = require('./_core/layout/App');

var Home = require('./_pages/Home');
var Profile = require('./_pages/Profile');
var Discover = require('./_pages/Discover');
var Houses = require('./_pages/Houses');

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="home" handler={Home}/>
    <Route name="profile" handler={Profile}/>
    <Route name="discover" handler={Discover}/>
    <Route name="houses" handler={Houses}/>
    <DefaultRoute handler={Home}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});