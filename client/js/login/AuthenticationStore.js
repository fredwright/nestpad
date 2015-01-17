/* @flow */

(function() {

  var Reflux = require('reflux');
  
  var AuthenticationActions = require('./AuthenticationActions');

  var AuthenticationStore = Reflux.createStore({
    listenables: AuthenticationActions,

    authenticated: false,

    onGet: function() {
      this.trigger(this.authenticated);
    },
    onSet: function(authenticated) {
      this.authenticated = authenticated;
      this.trigger(authenticated);
    }
  });

  module.exports = AuthenticationStore;

})();