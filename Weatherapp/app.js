
//Program will accept the user input address using Yargs module and set the options for passing address by -a 'node app.js -a '1360 south white' and it has to be encoded
//and then call google maps API uinhg http request from request package and display the latitude and longitude

const request = require('request');
const yargs = require('yargs');

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

var encodedAddress = encodeURIComponent(argv.address);

request({
  url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
  json: true    //dont put capital JSON it will throw no results, happened in training
}, (error, response, body) => {
  console.log(`Address: ${body.results[0].formatted_address}`);
  console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
  console.log(`Longitude: ${body.results[0].geometry.location.lng}`)
});




    //request(url,callbackfunction(){});//request takes two parameters and once url result come back it execites the callback function and that time only call back function gets executed.