//create server web socket
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

//create connection to database
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database : 'comments'
});

//connect to database
connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

//create table
connection.query("CREATE TABLE IF NOT EXISTS comments (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), comment VARCHAR(255))", function (err, result) {
  if (err) throw err;
  console.log("Table created");
});

// Path: comments.js
//create server web socket
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

//create connection to database
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database : 'comments'
});

//connect to database
connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

//create table
connection.query("CREATE TABLE IF NOT EXISTS comments (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), comment VARCHAR(255))", function (err, result) {
  if (err) throw err;
  console.log("Table created");
});

// Path: comments.js
//create server web socket
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

//create connection to database
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database : 'comments'
});

//connect to database
connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

//create table
connection.query("CREATE TABLE IF NOT EXISTS comments (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), comment VARCHAR(255))", function (err, result) {
  if (err) throw err;
  console.log("Table created");
});

// Path: comments.js
//create server web socket