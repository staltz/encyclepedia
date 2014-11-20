var Cycle = require('cyclejs');
var jQuery = require('jquery');

function getSuggestionsFromWikipedia(text) {
  return jQuery.ajax({
    url: 'http://en.wikipedia.org/w/api.php',
    dataType: 'jsonp',
    data: {
      action: 'opensearch',
      format: 'json',
      search: encodeURI(text)
    }
  }).promise();
}

var SearchModel = Cycle.createModel(['searchText$'], function (intent) {
  return {
    suggestions$: intent.searchText$
      .debounce(400)
      .flatMap(getSuggestionsFromWikipedia)
      .map(function (response) { return response[1]; })
      .startWith([])
  };
});

module.exports = SearchModel;
