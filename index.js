const express = require('express');
const app = express();
const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mysql',
});

app.use(express.json());

app.delete('/:id', (req, res) => {
  const id = req.params.id;

  connection.query('DELETE FROM users WHERE id = ?', [id], function (err, result) {
    if (err) {
      console.error(err);
      res.status(500).json({ message: 'Error deleting data' });
      return;
    }

    console.log(result);
    res.status(200).json({ message: 'Data deleted successfully' });
  });
});

app.post('/', function(req, res) {
  console.log(req.body);
  connection.query('INSERT INTO users SET ?', req.body, function (err, result) {
    if (err) {
      console.error(err);
      res.status(500).json({ message: 'Error inserting data' });
      return;
    }
    console.log(result);
    res.status(200).json({ message: 'Data inserted successfully' });
  });
});

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.listen(4500, () => {
  console.log('Example app listening on port 4500!');
});
