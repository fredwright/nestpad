/* @flow */

(function() {

  var Reflux = require('reflux');
  var LoginActions = require('./LoginActions');

  var LoginStore = Reflux.createStore({
    listenables: LoginActions,

    onFail: function() {
      this.trigger(true);
    }
  });

  module.exports = LoginStore;

})();