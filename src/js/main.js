/** @jsx React.DOM */
var React = require('react');

// Not ideal to use createFactory, but don't know how to use JSX to solve this
// Posted question at: https://gist.github.com/sebmarkbage/ae327f2eda03bf165261

var LinkTable = require('./components/LinkTable.js');
var LinkForm = require('./components/LinkForm.js');


React.render(
  <LinkTable />,
  document.getElementById('linktable')
);

React.render(
  <LinkForm />,
  document.getElementById('linkform')
);
