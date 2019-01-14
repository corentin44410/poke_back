"use strict";

var mongoose = require("mongoose"),
    Users = require("./model"),
    User = mongoose.model("Users");


exports.default_page = function (req, res) {
    res.send("42");
};

exports.create_a_user = function (req, res) {
    console.log("create a user");
    console.log(`creating a user ${req.body.surname} ${req.body.name}`);
    var new_user = new User({
        surname: req.body.surname,
        name: req.body.name,
        //avatar: "uploads/" + req.file.filename,
        mail: req.body.mail,
        //deck: new Array();
    });
    new_user.save(function (err, user) {
        if (err) res.send(err);
        res.json(user);
    });
};

exports.modify_user_deck = function (req, res) {
    console.log("modify a user");
    console.log(JSON.stringify(req.body));
    var json = JSON.stringify(req.body);
    //console.log(req.body.deck);
    var myquery = { "surname": req.body.surname };
    var json = { "surname": req.body.surname, "name": req.body.name, "mail": req.body.mail, "avatar": "", "deck": req.body.deck, "solde": req.body.solde };
    //console.log(myquery);
    //console.log(json);
    User.update(myquery, json, function (err, res) {
        if (err) {
            console.log('err : ' + err);
        } else {
            console.log(res);
        }
    });
}

exports.get_all_users = function (req, res) {
    console.log("finding all users");
    User.find({}, function (err, users) {
        if (err) res.send(err);
        res.json(users);
    });
};

exports.find_a_user_by_id = function (req, res) {
    console.log("finding a user by id");
    User.findById(req.params.id, function (err, user) {
        if (err) res.send(err);
        res.json(user);
    });
};

exports.find_a_user_by_name = function (req, res) {
    console.log("finding a user by name");
    User.findOne({ surname: req.params.name }, function (err, user) {
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