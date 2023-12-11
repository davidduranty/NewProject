const express = require("express");
const sqlite3 = require("sqlite3").verbose();

const app = express();

app.get("/api", (req, res) => {
  const db = new sqlite3.Database("", sqlite3.OPEN_READONLY, (error) => {
    if (error) {
      res.status(400).json({ error: error.message });
    } else {
      console.log("connected to the SQlite database");
    }
  });
    
    const sql = "SELECT * FROM  WHERE = strftime('%w'", 'now');";
});

app.listen(8000, () => {
  console.log("server listening on port 8000");
});
