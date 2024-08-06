const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// Set up middleware
app.use(cors());
app.use(bodyParser.json());

// Set up MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password", // replace with your MySQL password
  database: "math_game",
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err.stack);
    return;
  }
  console.log("Connected to the database.");
});

// API to save player data
app.post("/api/players", (req, res) => {
  const { name, score } = req.body;
  // Insert or update player data
  db.query(
    "INSERT INTO players (name, score, highscore) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE score = ?, highscore = GREATEST(highscore, ?)",
    [name, score, score, score, score],
    (err, results) => {
      if (err) {
        console.error("Error saving player data:", err);
        res.status(500).send("Internal Server Error");
      } else {
        res.status(200).send("Player data saved successfully.");
      }
    }
  );
});

// API to fetch leaderboard
app.get("/api/leaderboard", (req, res) => {
  db.query(
    "SELECT name, highscore FROM players ORDER BY highscore DESC LIMIT 10",
    (err, results) => {
      if (err) {
        console.error("Error fetching leaderboard:", err);
        res.status(500).send("Internal Server Error");
      } else {
        res.status(200).json(results);
      }
    }
  );
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
