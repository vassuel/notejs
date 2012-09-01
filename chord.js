'use strict';
var _ = require('underscore');

function Chord(data) {
  _.extend(this, data);
  this.notes = this.notes.map(function(note) {
    return new Note(note);
  });
}

module.exports = Chord;