var Cycle = require('cyclejs');

var SearchIntent = Cycle.createIntent(['searchInputs$'], function (view) {
  return {
    searchText$: view.searchInputs$.map(function (ev) {
      return ev.target.value;
    })
  };
});

module.exports = SearchIntent;
