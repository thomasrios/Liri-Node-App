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
            console.log("Date: ", response.data[0].datetime);
        })
    }

// SPOTIFY 

    // (Research node spotify API documentation)

    // Get selected artist from node 

    // (If no song provided, song = ace of base)


// Else if Movie-this 

    // Use axios to call on OMBD 

        // Get response back  

        // Extract selected data & display (Line 185 in instructions)


// Else alert an error 

