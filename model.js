"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    surname: {
        type: String,
        required: "Surname of the user is required"
    },
    name: {
        type: String,
        required: "Name of the user is required"
    },
    avatar: {
        type: String
    },
    mail: {
        type: String
    },
    deck: {
        type: [Number]
    },
    solde: {
        type: Number,
        default: 100
    }
});
module.exports = mongoose.model("Users", UserSchema);