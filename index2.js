// const express = require('express');
// const app = express();
// const mysql = require('mysql2');
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'mysql',
// });

// app.use(express.json());

// app.delete('/:id', (req, res) => {
//   const id = req.params.id;

//   connection.query('DELETE FROM users WHERE id = ?', [id], function (err, result) {
//     if (err) {
//       console.error(err);
//       res.status(500).json({ message: 'Error deleting data' });
//       return;
//     }

//     res.status(200).json({ message: 'Data deleted successfully' });
//   });
// });

// app.post('/', function(req, res) {
//   connection.query('INSERT INTO users SET ?', req.body, function (err, result) {
//     if (err) {
//       console.error(err);
//       res.status(500).json({ message: 'Error inserting data' });
//       return;
//     }
//     res.status(200).json({ message: 'Data inserted successfully' });
//   });
// });

// app.get('/', function(req, res) {
//   connection.query('SELECT * FROM users', function (err, result) {
//     if (err) {
//       console.error(err);
//       res.status(500).json({ message: 'Error retrieving data' });
//       return;
//     }
//     console.log(result);
//     res.status(200).json(result);
// });
// });

// app.listen(4500, () => {
//   console.log('Example app listening on port 4500!');
// });

// awaisdev2
// tl6xwJeBaWXxFM5x
// mongodb+srv://awaisdev2:tl6xwJeBaWXxFM5x@testdb.vymlfxp.mongodb.net/
