var express = require('express');
var mysql = require('mysql2');
var router = express.Router();

// var pool = mysql.createPool({
//     host: '127.0.0.1',
//     user: 'root',
//     password: '123456',
//     port: 3306,
//     database: 'test_schema'
// });

// var db = pool.getConnection(function (err, conn){
//     if(err) throw err;
//     return conn
// });

var db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '123456',
    port: 3306,
    database: 'test_schema'
});

db.connect(function(err){
    if(err) throw err;
    console.log('Database connected')
});

module.exports = db