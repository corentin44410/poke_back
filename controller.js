"use strict";

var mongoose = require("mongoose"),
    Users = require("./model"),
    User = mongoose.model("Users");


exports.default_page = function (req, res) {
    res.send("42");
};

exports.create_a_user = function (req, res) {
    console.log(`creating a user ${req.body.surname} ${req.body.name}`);
    var new_user = new User({
        surname: req.body.surname,
        name: req.body.name,
        avatar: "uploads/" + req.file.filename
    });
    new_user.save(function (err, user) {
        if (err) res.send(err);
        res.json(user);
    });
};

exports.get_all_users = function (req, res) {
    console.log("finding all users");
    User.find({}, function (err, users) {
        if (err) res.send(err);
        res.json(users);
    });
};

exports.find_a_user_by_id = function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) res.send(err);
        res.json(user);
    });
};

exports.find_a_user_by_name = function (req, res) {
    console.log("LA" + req.params.userName);
    User.find({ name: req.params.userName }, function (err, user) {
        if (err) res.send(err);
        res.json(user);
    });
};

exports.delete_a_user = function (req, res) {
    User.remove({ _id: req.params.id }, function (err, user) {
        if (err) res.send(err);
        res.json({ message: "User successfully deleted" });
    });
};