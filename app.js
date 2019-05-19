var axiom = require("axios");
var spotify = require("node-spotify-api");
require("dotenv").config();

var spotify = new Spotify({
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
  });

axios.get("" + name).then(
      function (response) {
          
      }
  )