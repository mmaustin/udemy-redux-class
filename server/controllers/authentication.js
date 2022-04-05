const User = require('../models/user')

exports.signup = function(req, res, next) {
    //req.body means anything contained within the post request
    const email = req.body.email
    const password = req.body.email
    //see if a user with the given email exists
    User.findOne({email: email}, ()=>{err, existingUser})

    //return error, if a user with email does exist


    //if a user with email does Not exist, create and save user record


    //respond to request indicating the user was created
}