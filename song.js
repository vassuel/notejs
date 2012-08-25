//var util = require("util");
var Track = require('./track');

function Song(data) {
  this.title  = data.title;
  this.artist = data.artist;
	this.album  = data.album;
  this.tracks = data.tracks.map(function(track) {
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
