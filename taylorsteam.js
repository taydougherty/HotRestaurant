// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// lsSets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set up the array to be used to store data coming in
// =============================================================
var reservation = [];
var waitlist = [];

// Routes
// =============================================================
// 
app.get("/api/reservation", function(req,res) {
  res.json(reservation);
});

app.get("/api/waitlist", function(req,res) {
  res.json(waitlist);
});

app.post("/api/reservation", function(req,res) {
  if (reservation.length < 5) {
    reservation.push(req.body);
    res.json(true);
  }
  else {
    waitlist.push(req.body);
    res.json(false);
  }
})





// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  