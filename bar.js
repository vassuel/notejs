'use strict';
var _ = require('underscore');

function Bar(data) {
  _.extend(this, data);
  this.chords   = data.chords.map(function(chord) {
    return new Chord(chord);
  })
}

module.exports = Bar;