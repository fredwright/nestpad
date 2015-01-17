/* @flow */

(function() {

  var Reflux = require('reflux');

  var AuthenticationActions = require('./AuthenticationActions');

  var LoginActions = Reflux.createActions([
      'login',
      'fail',
      'logoff'
    ]
  );

  LoginActions.login.preEmit = function(username, password) {
    if (authenticationService(username, password)) {
      AuthenticationActions.set(true);
    } else {
      AuthenticationActions.set(false);
      LoginActions.fail();
    }
  };

  LoginActions.logoff.preEmit = function(username, password) {
    AuthenticationActions.set(false);
  };

  module.exports = LoginActions;

})();

var authenticationService = function(username, password) {
  return username !== 'fail';
};