const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Create and open the database
const db = new sqlite3.Database(path.join(__dirname, 'users.db'));

// Initialize the database and create the users table
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
  )`);
});

module.exports = db;
