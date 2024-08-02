Step-by-Step Setup
Initialize your project:

step-1:
mkdir login-app
cd login-app
npm init -y
Install required dependencies:

step-2:
npm install express sqlite3 body-parser

step-3:
Create the project structure:
server.js: Main server file
database.js: Database setup and queries
views/: Directory for HTML files
login.html: HTML file for the login form

step-4
Set up the SQLite database:
Create a file named database.js:
javascript

const sqlite3 = require('sqlite3').verbose();
const path = require('path');

Create and open the database
const db = new sqlite3.Database(path.join(__dirname, 'users.db'));

step-5:
Set up the Express server:
Create a file named server.js:
const PORT = 3000;
console.log(`Server is running on http://localhost:${PORT}`);

step-6:
Create a file named login.html inside the views directory:

step-7:
If you want to hash passwords before saving them to the database, you would use bcrypt to hash and compare passwords. Install bcrypt:
npm install bcrypt

step-8:
When creating a new user, hash the password before saving it:
const bcrypt = require('bcrypt');
bcrypt.hash('myPassword', saltRounds, (err, hash) => {
}

https://github.com/wasimakram-17/nodejs.git
