"use strict";
module.exports = function (app) {
    var controller = require("./controller");
    var upload = require("multer")({ dest: "./uploads" });

    app.route("").get(controller.default_page);

    app
        .route("/api/utilisateurs")
        .get(controller.get_all_users)
        .put(upload.single("avatar"), controller.create_a_user);

    app
        .route("/api/utilisateurs/:id")
        .get(controller.find_a_user_by_id)
        .delete(controller.delete_a_user);

    app.route("/api/utilisateurs/:name").get(controller.find_a_user_by_name);
};