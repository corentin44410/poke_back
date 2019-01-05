var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/Users";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("Users");
    dbo.createCollection("Users", function (err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    });
    var myobj = { name: "corentin", surname: "desousa", __v: "0", Added_date: "2017-12-05T21:00:54.085Z" };
    dbo.collection("Users").insertOne(myobj, function (err, res) {
        if (err) throw err;
        console.log("1 element inserted");
        db.close();
    });
    /*dbo.collection("utilisateurs").findOne({}, function (err, result) {
        if (err) throw err;
        console.log(result.name);
        console.log(result.surname);
        db.close();
    });*/
});