const express = require("express");
const request = require("request");
const parse = require("body-parser");

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
    var result = req.body.lattitude + "," + req.body.longitude;
    var link = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + result + "&key=AIzaSyBbljhuTItFNRxgG3pGm4kF2P7Aeu7gBOI";
    request(link, function(error, response, body){
        var data = JSON.parse(body);
        var i;
        for(i=0; i<data.results[0].address_components.length; i++){
            if(data.results[0].address_components[i].types[0] == "administrative_area_level_1"){
                var out = data.results[0].address_components[i].long_name;
            }
        }
        res.send(out);
    });
});

