const mongoose = require('mongoose');
const router = require('express').Router();
const User = mongoose.model('User');
const passport = require('passport');
const utils = require('../lib/utils');

// TODO
router.get('protected', (req, res, next) => {
});

// TODO
router.post('/login', function(req, res, next) {});

// TODO
router.post('/register', function(req, res, next){
    const saltHash = utils.genPassword(req.body.password);

    const salt = saltHash.salt;
    const hash = saltHash.hash;

    const newUser = new User({
        username: req.body.username,
        hash: hash,
        salt: salt
    });

    newUser.save()
        .then((user) => {
            res.json({ success: true, user: user });
        })
        .catch(err => next(err));
});

module.exports = router;