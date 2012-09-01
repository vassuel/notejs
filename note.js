'use strict';
var _ = require('underscore');

function Note(data) {
  _.extend(this, data);
}

module.exports = Note;