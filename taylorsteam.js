app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
  
  app.get("/api/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });
  
  app.get("/api/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });