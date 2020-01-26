const express = require("express");
const request = require("request");
const parse = require("body-parser");
const fs = require('fs');

const app = express();
app.use(parse.urlencoded({extended: true}));
app.use(express.static(__dirname));

app.listen(3000, function(){
    console.log("Server is running on port 3000.");
});

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    var location = req.body.location;
    /*var table = __dirname + "/USA_januarySeason.json";
    var i, j, out;
    for(i=0; i<table.length; i++){
        if(table[i].State == location){
            for(j=1; j<table[i].length; j++){
                if(table[i][j]=="TRUE"){
                    out += table[i][j] + ",+";
                }
            }
        }
    }
    out -= ",+";
    console.log(out);
    var call;*/
    if(location == "Alabama"){
        request('https://api.spoonacular.com/recipes/findByIngredients?ingredients=celery,+turnips&number=3&apiKey=bca601b838634795a1a0ced74911f775', function(error, response, body){
            fs.writeFile('recipe.txt', body, function(err){});
            res.send(JSON.parse(body));
            console.log(body);
        });
    }
    //res.sendFile(__dirname + "/meals-choose.html");*/
});

    /*var result = req.body.lattitude + "," + req.body.longitude;
    var link = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + result + "&key=AIzaSyBbljhuTItFNRxgG3pGm4kF2P7Aeu7gBOI";
    request(link, function(error, response, body){
        var data = JSON.parse(body);
        var i;
        for(i=0; i<data.results[0].address_components.length; i++){
            if(data.results[0].address_components[i].types[0] == "administrative_area_level_1"){
                var out = data.results[0].address_components[i].long_name;
            }
        }
    });*/
