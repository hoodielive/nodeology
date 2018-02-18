const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('password-google-oauth20').Strategy;
const app = express();




password.use(new GoogleStrategy()); // authenticate users with google


const PORT = process.env.PORT || 5000;

app.listen(PORT);
