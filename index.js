const bcrypt = require('bcrypt');
const saltRounds = 10;

bcrypt.hash('myPassword', saltRounds, (err, hash) => {
  if (err) throw err;
  db.run('INSERT INTO users (username, password) VALUES (?, ?)', ['myUsername', hash], (err) => {
    if (err) throw err;
    console.log('User added.');
  });
});
