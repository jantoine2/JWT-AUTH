const fs = require('fs');
const passport = require('passport');
const path = require('path');
const User = require('mongoose').model('User');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

const pathToKey = path.join(__dirname, '..', 'id_rsa_pub.pem');
const PUB_KEY = fs.readFileSync(pathToKey, 'utf8');

const options = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: PUB_KEY,
    algorithm: ['RS256']
};

const strategy = new JWTStrategy(options, (payload, done) => {

    User.findOne({ _id: payload.sub })
        .then((user) => {
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }

        })
        .catch(err => done(err, null));

});


module.exports = (passport) => {
    passport.use(strategy);
}