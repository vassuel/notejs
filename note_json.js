var s = {
  title: 'Duna',
  artist: 'Kultur Shock',
  album: 'We came to take your jobs away',
  tracks: [
    {
      title: 'Guitar',
      instrument: {
        id: 30, // distortion guitar
        frets: 24,
        tuning: ['E3', 'A3', '...', 'E6']
      },
      bars: [
        {
          measure: [4, 4],
          tempo: 120,
          chords: [           
            {
              is_rest: false,
              length: {
                base: 4,
                dot: false
              },
              notes: [
                { // string 6
                  fret: 6,
                  palm_mute: false,
                  let_ring: false
                },
                { // string 5
                  fret: 6,
                  palm_mute: false
                },
                { // string 4
                  fret: 9,
                  let_ring: false
                },
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'Drums',
      type: 'percussion',
      drumkit: 1, 
      bars: [
        {

        }
      ]
    }
  ]
}

console.log(JSON.stringify(s, null, ' '));

var test = s['tracks'][0]['name'];

console.log('Test: ' + test);