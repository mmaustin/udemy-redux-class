const jwt = require('jwt-simple');
const User = require('../models/user');
const config = require('../config')

function tokenForUser(user){
    const timestamp = new Date().getTime();
    return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signup = function(req, res, next) {
    //req.body means anything contained within the post request
    const email = req.body.email
    const password = req.body.password

    if (!email || !password){
        return res.status(422).send({error: 'You must provide email and password'})
    }
    //see if a user with the given email exists
    User.findOne({email: email}, function(err, existingUser){
        if (err) {return next(err);}
        //return error, if a user with email does exist
        if (existingUser){
            return res.status(422).send({error: 'Email is in use'})
        }
        //if a user with email does Not exist, create and save user record
        const user = new User({
            email: email,
            password: password
        })
        user.save((err)=> {
            if (err) {return next(err);}
        //respond to request indicating the user was created
        res.json({success:true});
        });
    })
}