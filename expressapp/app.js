var express = require("express");
var app =express();

app.get("/", function(req,  res){
    res.render("home.ejs");
    res.send("roo ie \"\\\" running perfectly");
    console.log("started");
})

app.listen(8000, function(){
console.log("listening");
})
