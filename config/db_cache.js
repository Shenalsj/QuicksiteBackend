"user strict";
var host = require("../_helpers/constant").HOST;
var user = require("../_helpers/constant").USER_C;
var password = require("../_helpers/constant").PASSWORD_C;
var db = require("../_helpers/constant").DB_C
var mysql = require("mysql");

//local mysql db connection
var connection = mysql.createConnection({
  host: host,
  user: user,
  password: password,
  database: db
});



connection.connect(function(err) {
  if (!err) {
    console.log("Database connection succeeded...!");
  } else {
    console.log("Error in DB connection :" + JSON.stringify(err, undefined, 2));
  }
});

module.exports = connection;

//database configurations

