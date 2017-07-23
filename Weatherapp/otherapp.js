
//Program will accept the user input address using Yargs module and set the options for passing address by -a 'node app.js -a '1360 south white' and it has to be encoded
//and then call google maps API uinhg http request from request package and display the latitude and longitude

const request = require('request');
const yargs = require('yargs');
//Create a new directory caled geocode and import geocode function here
const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

geocode.geocodeaddresss(argv.address)//create this function in geocode.js




    //request(url,callbackfunction(){});//request takes two parameters and once url result come back it execites the callback function and that time only call back function gets executed.