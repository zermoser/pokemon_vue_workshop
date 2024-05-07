var express = require('express');
var port = process.env.PORT || 8080;
var app = express();
var path = require('path');

var mysql = require('mysql');
const { title } = require('process');

var con = mysql.createConnection({
  host: "localhost",
  user: "mos",
  password: ""
});


con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE customers ( id VARCHAR(255), img VARCHAR(255), title VARCHAR(255), price VARCHAR(255),color VARCHAR(255), type VARCHAR(255) ))";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
  });

  

app.use(express.static(path.resolve(__dirname, 'dist')));

app.get('*', function (req, res) {
    res.sendFile(__dirname + '/dist/index.html')
})

app.listen(port);
