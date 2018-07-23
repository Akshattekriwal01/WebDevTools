var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");

app.get("/",function(req, res){

    res.render("search")

});

app.get("/results", function(req, res){
    //console.log("body="+req.body.search) Dont know why req.body it isnt working
    var searchterm = req.query.search ;
    //console.log("param="+req.params.search) Dont know why req.params is not working
    request("http://omdbapi.com/?s="+searchterm+"&apikey=thewdb", function(error , response , body){
	
	if(!error && response.statusCode == 200){
	    var data  = JSON.parse(body)
	    res.render("results",{data: data});
	    console.log("something in happening")
	}
    });
});

app.listen(8000, function(){
    console.log("Server for the movie app is turned on");
});

