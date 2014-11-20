var Cycle = require('cyclejs');
var SearchModel = require('encyclepedia/models/search');
var SearchView = require('encyclepedia/views/search');
var SearchIntent = require('encyclepedia/intents/search');

Cycle.createRenderer('.js-app').inject(SearchView);
Cycle.circularInject(SearchModel, SearchView, SearchIntent);

