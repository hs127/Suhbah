const router = require("express").Router();
const db = require("../models");

router.post("/signup", function (req, res) {
    console.log(db.User);
    db.User.create(req.body).then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

router.get("/signup", function (req, res) {
    db.User.find({})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

router.put("/signup/:id", function (req, res) {
    console.log("Inside Route.put");
    console.log(req.params.id);
    db.User
        .findOneAndUpdate({ uid: req.params.id }, {
            $set: { loggedIn: false }
        })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

router.put("/login/:id", function (req, res) {
    console.log("Inside login put");
    console.log(req.params.id);
    db.User
        .findOneAndUpdate({ uid: req.params.id }, {
            $set: { loggedIn: true }
        })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

module.exports = router;