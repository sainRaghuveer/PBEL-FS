const passport = require("passport");
const GoogleStrategy = require('passport-google-oidc');
const express = require("express");
const { userModel } = require("../models/user.model");
require('dotenv').config()



passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:8000/api/google/callback',
    scope: ['profile', 'email']
}, async function verify(issuer, profile, done) {
    try {
        let user = await userModel.findOne({ googleId: profile.id });

        if (!user) {
            user = await userModel.create({
                name: profile.displayName,
                googleId: profile.id,
                email: profile.emails[0].value,
                picture: profile.photo ? profile.photo[0].value : "",
            })
        }
        return done(null, user)

    } catch (error) {
        return done(error, null)
    }
}
)
)

passport.serializeUser((user, done)=>{
    done(null, user)
});

passport.deserializeUser(async(id, done)=>{
    try {
        const user = await userModel.findById(id);
        done(null, user)
    } catch (error) {
        done(error, null)
    }
});

module.exports={
    passport
}