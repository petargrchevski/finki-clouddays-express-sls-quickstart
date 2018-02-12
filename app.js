var express = require('express')
// var mysql = require('mysql');

var app = express()

// var connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'me',
//   password: 'secret',
//   database: 'my_db'
// });

// connection.connect();

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/goodbye', function(req, res){
  res.send('Goodbye World')
})

// app.get('/test_mysql_connection', function(req,res){
//   connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//     if (error){
//       res.statusCode = 500;
//       res.send(error);
//     }
//     res.send(results);
//   });
// })
 
app.listen(8080)