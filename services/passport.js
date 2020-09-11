const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')
const keys =  require('../config/keys')
passport.use(new GoogleStrategy({
    clientID:keys.googleClientID,
    clientSecret:keys.googleSecret,
    callbackURL:'/auth/google/callback'
      },(accessToken,refreshToken,profile,done)=>{
          console.log("Helooooo BUOY")
          console.log("accessToken",accessToken)
          console.log("refreshToken",refreshToken)
          console.log("profile",profile)
          console.log("done",done)
      }
));