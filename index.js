//jshint esversion:6

const express = require("express");
const app =  express();

app.get("/", function(request, response) {
  //this is what is displayed on localhost
  response.send("Hello");
});

app.get("/contact", function(request, response) {
  response.send("kindly contact me at xxx.gmail.com");
});

app.get("/about", function(request, response) {
  response.send("<h1>Scam</h1>");
});


app.listen(3000, function(){
  //this is what node disploays
  console.log("Yelp");
});
