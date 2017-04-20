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
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());

app.get("/api/user/get", (request, response) => {
    let dataBaseRequest = new SQLQuery();
    let results = dataBaseRequest.getUsers();

    results.then((res) => {
        console.log(res);
        response.send(res);
    })
    .catch((err) => {
        console.log(err);
        response.send(err);
    });
});

app.post("/api/user/create", (request, response) => {
    // let dataBaseRequest = new SQLQuery();
    // let results = dataBaseRequest.createUser();
    console.log(request.body);
    response.send({key: "Success"});
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

SQLQuery.prototype.createUser = function() {
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
