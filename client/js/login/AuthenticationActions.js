/* @flow */

(function() {

  var Reflux = require('reflux');

  var AuthenticationActions = Reflux.createActions([
      'get',
      'set'
    ]
  );

  module.exports = AuthenticationActions;

})();