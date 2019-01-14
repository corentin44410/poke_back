"use strict";
module.exports = function (app) {
    var controller = require("./controller");
    var upload = require("multer")({ dest: "./uploads" });

    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    app.route("").get(controller.default_page);

    app
        .route("/api/utilisateurs")
        .get(controller.get_all_users)
        .post(controller.create_a_user)
        .put(controller.modify_user_deck);

    app.route("/api/utilisateurs/:name")
        .get(controller.find_a_user_by_name);

    /*app
        .route("/api/utilisateurs/:id")
        .get(controller.find_a_user_by_id)
        .delete(controller.delete_a_user);*/


};