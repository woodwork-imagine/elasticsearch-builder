import _ from 'bodybuilder';

var bodybuilder = require('bodybuilder');
var body = bodybuilder()
  .query('match', document.getElementById('queryText').value)
  .build();

document.getElementById('result').value = body;
