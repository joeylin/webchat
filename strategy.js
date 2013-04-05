var passport = require('passport')
  , QQStrategy = require('passport-qq').Strategy
  , SinaStrategy = require('passport-sina')
  , config = require('./config.json');

/*
 * Auth strategy
 */
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

if(config.auth.qq.clientID.length) {
  passport.use(new QQStrategy({
      clientID: config.auth.qq.clientID,
      clientSecret: config.auth.qq.clientSecret,
      callbackURL: config.auth.qq.callback
    },
    function(token, tokenSecret, profile, done) {
      return done(null, profile);
    }
  ));
} 

if(config.auth.sina.clientID.length) {
  passport.use(new SinaStrategy({
      clientID: config.auth.sina.clientID,
      clientSecret: config.auth.sina.clientSecret,
      callbackURL: config.auth.sina.callback
    },
    function(accessToken, refreshToken, profile, done) {
      return done(null, profile);
    }
  ));
}
