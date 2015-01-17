/* @flow */

(function() {

  var Reflux = require('reflux');
  var LoginActions = require('./LoginActions');

  var LoginStore = Reflux.createStore({
    listenables: LoginActions,

    onSuccess: function() {
      this.trigger(true);
    },

    onFail: function() {
      this.trigger(false);
    }
  });

  module.exports = LoginStore;

})();