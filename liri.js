require("dotenv").config();

var Spotify = require('node-spotify-api');
var axios = require("axios");
var moment = require("moment");
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var fs = require('fs');

var command = process.argv[2];
var input = process.argv.slice(3).join(" ")

// Get command (argvv[2])
// if command === (do-wathat is says)
    // use fs to read command and data from random.txt
    // comand = new command data = data
// else data = argv[3]


// BANDS IN TOWN 
if (command === "concert-this"){

    // Call bands in town API using Axios  
    axios.get("https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp")

        // Display venue & date
        .then(function (response) {
            console.log("Venue: ", response.data[0].venue);
            console.log("Date: " + moment(response.data[0].datetime).format("MM/DD/YYYY"));
        })
    }

// SPOTIFY 
if (command === "spotify-this-song")

    // (Research node spotify API documentation)
        spotify.search({
            type: 'track',
            query: input
        }, function (err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }

    // Get selected artist from node 
        console.log("Album: ", data.tracks.items[0].album.name);
        console.log("Track: ", data.tracks.items[0].name);
        console.log("Artist: ", data.tracks.items[0].album.artists[0].name);
        console.log("Preview: ", data.tracks.items[0].preview_url);
    })


// MOVIE THIS FUCTION 

    // Use axios to call on OMBD 
    axios.get("http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=trilogy").then(

        // Get response back
        function(response) {
            console.log("Title: " + response.data.Title);
            console.log("Year: " + response.data.Year);
            console.log("IMDB Rating: " + response.data.imdbRating);
            console.log("Rotten Tomatoes Rating:" + response.data.Ratings[1].Value);
            console.log("Country: " + response.data.Country);
            console.log("Language: " + response.data.Language);
            console.log("Plot: " + response.data.Plot);
            console.log("Actors: " + response.data.Actors);
          })
          .catch(function(error) {
            if (error.response) {
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              console.log("---------------Data---------------");
              console.log(error.response.data);
              console.log("---------------Status---------------");
              console.log(error.response.status);
              console.log("---------------Status---------------");
              console.log(error.response.headers);
            } else if (error.request) {
              // The request was made but no response was received
              // `error.request` is an object that comes back with details pertaining to the error that occurred.
              console.log(error.request);
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log("Error", error.message);
            }
            console.log(error.config);
          });  



