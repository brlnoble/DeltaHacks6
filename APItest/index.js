const express = require('express');
const request = require('request');
const parseString = require('xml2js').parseString;

const app = express();

/*request('https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar&number=2&apiKey=bca601b838634795a1a0ced74911f775', function(error, response, body){
        console.log(JSON.parse(body));
});*/

/*request('https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyBbljhuTItFNRxgG3pGm4kF2P7Aeu7gBOI', function(error, response, body){
    var data = JSON.parse(body);
    console.log(data);
});*/

/*request('https://maps.googleapis.com/maps/api/geocode/json?latlng=37.956952,-102.639566&key=AIzaSyBbljhuTItFNRxgG3pGm4kF2P7Aeu7gBOI', function(error, response, body){
    var data = JSON.parse(body);
    console.log(data.results[0].address_components[4].long_name);
});*/
