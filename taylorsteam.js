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

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function(req, res) {
res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
res.sendFile(path.join(__dirname, "reserve.html"));
});

// GET and Post for Reservation and Waitlist Table Data
app.get("/api/tables", function(req,res) {
  res.json(reservation);
});

app.get("/api/reserve", function(req,res) {
  res.json(waitlist);
});

app.post("/api/tables", function(req,res) {
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

