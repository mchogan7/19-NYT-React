// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var request = require('request');

// Require History Schema
var History = require("./models/History");

// Create Instance of Express
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

// -------------------------------------------------

// MongoDB Configuration configuration (Change this URL to your own DB)
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/nytArticles");
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// -------------------------------------------------

// Main "/" Route. This will redirect the user to our rendered React application
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/search", function(req, res) {
  request.get({
  url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
  qs: {
    'api-key': "36ca37cc73a3419fa714007159e396ac",
    'q': req.query.search
  },
}, function(err, response, body) {
  body = JSON.parse(body);
   res.send(body)
})



});






// This is the route we will send GET requests to retrieve our most recent search data.
// We will call this route the moment our page gets rendered
app.get("/api", function(req, res) {

  // We will find all the records, sort it in descending order, then limit the records to 5
  History.find({}).sort([
    ["date", "descending"]
  ]).exec(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});

// This is the route we will send POST requests to save each search.
app.post("/api", function(req, res) {

  // Here we'll save the location based on the JSON input.
  // We'll use Date.now() to always get the current date time
  History.create(req.body, function(err) {
    if (err) {
      console.log(err);
    }
    else {
      res.send("Saved Search");
    }
  });
});

app.post("/apiDelete", function(req, res) {

  History.remove({ _id: req.body.id }, function(err) {
    if (err) {
      console.log(err);
    }
    else {
      res.send("Deleted");
    }
  });
});

// -------------------------------------------------

// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
