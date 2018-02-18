const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('password-google-oauth20').Strategy;
const keys = require('./config/keys');
const app = express();

// authenticate users with google
password.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret
        callbackURL: '/auth/google/callback'
      },
            (accessToken) => {
              console.log(accessToken); i
       }
   )
);

app.get('/auth/google', passport.authentication('google', {
    scope: ['profile', 'email']
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);
