/* @flow */

(function() {

  var Reflux = require('reflux');

  var LoginActions = Reflux.createActions([
      'login',
      'success',
      'fail'
    ]
  );

  LoginActions.login.preEmit = function(username, password) {
    if(username === 'fail') LoginActions.fail();
    LoginActions.success();
  };

  module.exports = LoginActions;

})();