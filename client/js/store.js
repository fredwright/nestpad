(function () {

  var Reflux = require('reflux'),
      _ = require('lodash'),
      Actions = require('./actions');

  module.exports = Reflux.createStore({

    init: function() {
      this.getData();
      this.listenTo(Actions.optionSelected, this.selectOption);
    },

    // get data from remote
    getData: function() {
      var self = this;
      $.ajax({
        url: "http://olliesilviotti.co.uk/15g/front-end-test-api.json",
        type: "POST",
        crossDomain: true,
        dataType: "jsonp",
        jsonpCallback: "dataWrapper",
        success: function (response) {
          self.columns = self.initialiseColumns(response.columns);
          self.trigger(self.columns);
        }
      });
    },

    // initialise columns with first option
    initialiseColumns: function(columns) {
      var self = this;
      return _.map(columns, function(column) {
        return self.select(column, 0);
      });
    },

    // select an option and trigger an update
    selectOption: function(columnId, optionIndex) {
      var self = this;
      this.trigger(_.map(self.columns, function(column) {
        if (column.id !== columnId) return column;
        return self.select(column, optionIndex);
      }));
    },

    // set an option within a column as selected
    select: function(column, optionIndex) {
      column.selected = column.options[optionIndex];
      return column;
    }
  });

})();