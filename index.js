"use strict";

var express = require("express");
var path = require("path");
var app = express(),
    port = process.env.PORT || 8080,
    mongoose = require("mongoose"),
    bodyParser = require("body-parser");

mongoose.Promise = global.Promise;

mongoose.connect(
    "MONGODB=mongodb://localhost/Users1",
    { useNewUrlParser: true }
    , function (err, db) {
        //console.log(db);
        if (err) console.log(err);
        console.log("Connecté à la base Users");
    });
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require("./route");
routes(app);

app.listen(port);

console.log("Users RESTful API server started on: " + port);
