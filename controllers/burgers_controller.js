var express = require("express");

var router = express.Router();

var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "burgers_db"
});

const burger = require("../models/burger");

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }

    console.log("connected as id " + connection.threadId);
});
// Routes
// Use Handlebars to render the main index.html page with the burgers in it.
router.get("/", function (req, res) {
    burger.selectAll(function(data){
        res.render("index", { burgers: data });
    })
});

// Create a new burger
router.post("/api/burgers", function (req, res) {


    burger.insertOne(req.body, function(result){
        //res.json(true)
        res.json({ id: result.insertId });
    })
});

router.put("/api/burgers/:id", function(req, res){
    var condition = "id = " + req.params.id;
    console.log(condition)
    burger.updateOne(req.body,condition, function(result) {
        if (result.changedRows == 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        } else {
          res.status(200).end();
        }
    });
})

module.exports = router;