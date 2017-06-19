/**
 * Created by esterlingaccime on 6/17/17.
 */

var express = require("express"),
    router = express.Router(),
    path = require("path");


var db = require("../models");


router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/../public/index.html"));
});


router.post("/appointment", function (req, res) {
    console.log(req.body);

    db.Reservation.create(req.body)
        .then(function (booked) {
            console.log("Data has been posted!!!");
        });
    var data = {
        date:req.body.date,
        time:req.body.time,
        description:req.body.description
    };

    res.json(data);
});


router.get("/api", function (req, res) {

    db.Reservation.findAll({raw : true})
        .then(function (data) {
            console.log(data);
            res.json(data);
        })
        .catch(function (err) {
            res.json(err);
        })
});


router.get("/api/:search", function (req, res) {
    var des = req.params.search;

    console.log(des);


    db.Reservation.findAll({raw : true,
        where:{
            description: des
        }
    })
        .then(function (data) {
            console.log(data);
            res.json(data);
        })
        .catch(function (err) {
            res.json(err);
        })
});

router.post("/api/:id", function (req, res) {
    var id = req.params.id;

    console.log(id);


    db.Reservation.destroy({raw : true,
        where:{
            id: id
        }
    })
        .then(function (data) {

            db.Reservation.findAll({raw: true})
                .then(function (response) {
                    res.json(response);
                })
                .catch(function (err) {
                    console.log(err);
                })
        })
        .catch(function (err) {
            res.json(err);
        })
});



module.exports = router;