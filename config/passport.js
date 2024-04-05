const fs = require('fs');
const passport = require('passport');
const path = require('path');
const User = require('mongoose').model('User');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

const pathToKey = path.join(__dirname, '..', 'id_rsa_pub.pem');
const PUB_KEY = fs.readFileSync(pathToKey, 'utf8');



// TODO
const options = {};

// TODO
module.exports = (passport) => {}