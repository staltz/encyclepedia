var Cycle = require('cyclejs');
var h = Cycle.h;

function inputFieldStyle() {
  return {
    'font-size': '18px',
    'width': '100%',
    'box-sizing': 'border-box',
    'border': '1px solid grey',
    'padding': '10px'
  };
}

function listStyle() {
  return {
    'list-style-type': 'none',
    'padding': '0'
  };
}

function listItemStyle() {
  return {
    'padding': '0.5rem 10px',
    'font-size': '18px'
  };
}

function vrenderSuggestions(suggestions) {
  return h('ul', {style: listStyle()}, suggestions.map(function (suggestion) {
    return h('li', {style: listItemStyle()}, [
      h('a', {
        attributes: {href: '#/article/' + encodeURI(suggestion)}
      }, suggestion)
    ]);
  }));
}

var SearchView = Cycle.createView(['suggestions$'], function (model) {
  return {
    events: ['searchInputs$'],
    vtree$: model.suggestions$
      .map(function (suggestions) {
        return h('div', [
          h('input', {
            'ev-input': 'searchInputs$',
            attributes: {placeholder: 'Search Wikipedia'},
            style: inputFieldStyle()
          }),
          vrenderSuggestions(suggestions)
        ]);
      })
  };
});

module.exports = SearchView;
