'use strict';
var _ = require('underscore');
var Track = require('./track');

function Song(data) {
  _.extend(this, data);
  this.tracks = this.tracks.map(function(track) {
    return new Track(track);
  });
}
Song.prototype.getInfo = function() {
  console.log("Song   : " + this.title);
  console.log("Artist : " + this.artist);
  console.log("Album  : " + this.album)
  console.log("Tracks : " + this.tracks);
  console.log("-----------------------------------------------");
}

module.exports = Song;
