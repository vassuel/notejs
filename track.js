'use strict';
var _ = require('underscore');

function Track(data) {
  _.extend(this, data);
  this.instrument = new Instrument(this.instrument);
}
Track.prototype.verify = function() {
  this.bars.forEach(function(bar) {
    bar.chords.forEach(function(chord) {
      chord.notes.length === this.tuning.length;
    })
  })
}
module.exports = Track;