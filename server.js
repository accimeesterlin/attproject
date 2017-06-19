var express = require("express"),
    logger = require("morgan"),
    bodyParser = require("body-parser"),
    path = require("path");


var app = express(),
    PORT = process.env.PORT || 8080;



app.use(logger("dev"));

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.text());
// app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var routes = require("./routes/path");

app.use("/", routes);

app.use(express.static(path.join(__dirname + "/public")));


var db = require("./models");

// force: true will drop the table if it already exists
db.sequelize.sync({ force : true }).then(() => {

    app.listen(PORT, function () {
        console.log("App starting at ", PORT);
    });
});


