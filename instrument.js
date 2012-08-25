'use strict';

function Instrument(data) {
  function next_tone(tone) {
    var GAMMA = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    var match = tone.match(/([A-Z]#?)(\d)/);
    var note = match[1];
    var octave = parseInt(match[2]);
    var next_index = GAMMA.indexOf(note) + 1;

    if (next_index > GAMMA.length - 1) {
      next_index = 0;
      octave += 1;
    }
    return GAMMA[next_index] + octave;
  }

  this.id       = data.id;
  this.tuning   = data.tuning;
  this.frets    = data.frets;
  this.strings  = this.tuning.map(function(base_tone) {
    var result = [base_tone];
    for (var i = 0; i < data.frets; i++) {
      result.push(next_tone(result[result.length - 1]))
    }
    return result;
  }); 
}
Instrument.prototype.info = function() {
  console.log('patka: ', this.strings);
}

