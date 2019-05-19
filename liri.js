require("dotenv").config();
var axios = require("axios");
var Spotify = require("node-spotify-api");
var keys = require("./keys.js");

var command = process.argv[2];
var queryName = process.argv.slice(3).join(" ");
console.log("Your command is: " + command);
console.log("Your query is: " + queryName);
console.log("Spotify id is: " + process.env.SPOTIFY_ID);
console.log("Spotify secret is: " + process.env.SPOTIFY_SECRET)

var spotify = new Spotify({
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
});


if (command == "spotify-this-song"){
    spotify.search({ type: 'track', query: queryName, limit: 2 }, function(err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        } else{
            for (var i = 0; i<data.tracks.items.length; i++){ 
            console.log("Artist: " + data.tracks.items[i].album.artists[0].name);
            console.log("Song Name: " + data.tracks.items[i].name);
            console.log("Preview: " + data.tracks.items[i].preview_url);
            console.log("Album: " + data.tracks.items[i].album.name);
            }
        };
    });
};


if (command === "concert-this"){
    spotify.search({ type: 'track', query: queryName, limit: 2 }, function(err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        } else{
            for (var i = 0; i<data.tracks.items.length; i++){ 
            console.log("Artist: " + data.tracks.items[i].album.artists[0].name);
            console.log("Song Name: " + data.tracks.items[i].name);
            console.log("Preview: " + data.tracks.items[i].preview_url);
            console.log("Album: " + data.tracks.items[i].album.name);
            }
        };
    });
};

if (command === "movie-this"){
    axios.get("http://www.omdbapi.com/?t="+ queryName + "&apikey="+ process.env.OMDb_KEY).then(
      function (response) {
          console.log("Movie Title: " + response.data.Title);
          console.log("Release Year: " + response.data.Year);
          console.log("OMBd Rating: " + response.data.imbdbRating);
          console.log("Proudced in: " + response.data.Country);
          console.log("Language:" + response.data.Language)
          console.log("Rotten Tomato Rating: " + response.data.Ratings[1].Value);
          console.log("Plot Synopsis: " + response.data.Plot);
          console.log("Actors: " + response.data.Actors);

      }
  );
};
