const router = require("express").Router();
const db = require("../models");

router.post("/signup", function (req, res) {
    console.log(db.User);
    db.User.create(req.body).then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

module.exports = router;