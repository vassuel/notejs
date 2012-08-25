chai = require 'chai'
Instrument = require '../instrument'
chai.should()

describe 'Instrument', ->
  it 'Parses a hash', ->
    instrument = new Instrument(
      id: 30,
      frets: 5,
      tuning: 'E3 A3 D4 G4'.split ' '
    )

    expected_strings = [
      'E3 F3 F#3 G3 G#3 A3'.split(' '),
      'A3 A#3 B3 C4 C#4 D4'.split(' '),
      'D4 D#4 E4 F4 F#4 G4'.split(' '),
      'G4 G#4 A4 A#4 B4 C5'.split(' '),
    ]

    for expected_string, string_indx in expected_strings
      for tone, tone_indx in instrument.strings[string_indx]
        tone.should.equal expected_string[tone_indx]
