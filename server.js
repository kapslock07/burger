// LOOK AT DAYPLANNER ACTIVITY************* 

// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");
var mysql = require("mysql");

// Create an instance of the express app.
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "burgers_db"
});

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }

    console.log("connected as id " + connection.threadId);
});
// Routes
// Use Handlebars to render the main index.html page with the burgers in it.
app.get("/", function (req, res) {
    connection.query("SELECT * FROM burgers;", function (err, data) {
        if (err) {
            return res.status(500).end();
        }

        res.render("index", { burgers: data });
    });
});

// Create a new burger
app.post("/api/burgers", function (req, res) {
    connection.query("INSERT INTO burgers (burger_name, devoured) VALUES (?)", [req.body.burger_name, req.body.devoured], function (err, result) {
        if (err) {
            return res.status(500).end();
        }

        // Send back the ID of the new movie
        res.json({ id: result.insertId });
        console.log({ id: result.insertId });
    });
});


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});
