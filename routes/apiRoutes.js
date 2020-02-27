const router = require("express").Router();
const db = require("../models");

router.post("/signup", function (req, res) {
    console.log(db.User);
    db.User.create(req.body).then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

router.get("/users", function (req, res) {
    db.User.find({})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

router.get("/users/:id", function (req, res) {
    db.User.find({ uid: req.params.id })
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

router.put("/profile/:id", function (req, res) {
    console.log("Inside profile put");
    console.log(req.params.id);
    console.log(req.body);
    db.User
        .findOneAndUpdate({ uid: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

router.put("/list/:id", function (req, res) {
    console.log("Inside profile put");
    console.log(req.params.id);
    console.log(req.body);
    db.User
        .findOneAndUpdate({ uid: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

//to push housing deatils to Home and have ref in User table 
router.post("/list/:id", function (req, res) {
    db.Home.create(req.body)
        .then(function (dbHouse) {
            return db.User.findOneAndUpdate({ uid: req.params.id }, { $push: { home: dbHouse._id } }, { new: true });
        }).then(function (dbUser) {
            res.json(dbUser);
        }).catch(err => res.status(422).json(err));
});

// router.get("/roomate", function (req, res) {
//     db.User.find({})
//         // Specify that we want to populate the retrieved users with any associated notes
//         .populate("home")
//         .then(function (dbUser) {
//             // If able to successfully find and associate all Users and Notes, send them back to the client
//             res.json(dbUser);
//         })
//         .catch(function (err) {
//             // If an error occurs, send it back to the client
//             res.json(err);
//         });
// });


// router.get("/userextradeatils/:id", function (req, res) {
//     db.User.find({ uid: req.params.id })
//         // Specify that we want to populate the retrieved users with any associated notes
//         .populate("home")
//         .then(function (dbUser) {
//             // If able to successfully find and associate all Users and Notes, send them back to the client
//             res.json(dbUser);
//         })
//         .catch(function (err) {
//             // If an error occurs, send it back to the client
//             res.json(err);
//         });
// });


module.exports = router;