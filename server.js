const express         = require("express");
const app             = express();
const bodyParser      = require("body-parser");
const path            = require("path");
const logger          = require("morgan");
const fs              = require("fs");
const mysql           = require("mysql");

const PORT = process.env.PORT || 9000;
const IP = process.env.IP;

const Connection = mysql.createConnection({
    host     : "localhost",
    user     : 'root',
    password : 'String33',
    database : 'CustomerDatabase'
});

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', req.get('Origin') || '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    next();
});

// Connection.connect();
//
// Connection.query('SELECT * FROM customers AS c WHERE c.id BETWEEN 5 AND 25 ORDER BY c.state', function (error, results, fields) {
//     var records = [];
//     if (error) {
//         console.log(error);
//     }
//
//     console.log(results);
// });

// Connection.end();

app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended : false }));

app.get("/api/user/get", (request, response) => {
    let query = new SQLQuery();
    let results = query.getUsers();

    results.then((res) => {
        console.log(res);
        response.send(res);
    })
    .catch((err) => {
        console.log(err);
        response.send(err);
    });
});

app.post("api/user/add", (request, response) => {
    // Do Some things
});

app.listen(PORT, IP, () => {
    console.log("Server is listening on port " + PORT);
});

function SQLQuery() {
    this.connection = Connection;
}

SQLQuery.prototype.getUsers = function() {
    return new Promise((resolve, reject) => {
        this.connection.query('SELECT * FROM customers', function(err, res, fields) {
           if(err) {
               console.log(err);
               reject(err);
           }
           resolve(res);
       });
    });
}

SQLQuery.prototype.endConnection = function() {
    this.connection.end();
}
