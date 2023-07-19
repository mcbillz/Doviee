import { User } from "./schemas.js";
import bcrypt from 'bcryptjs';
import { Strategy as LocalStrategy } from "passport-local";

export default function configurePassport(passport) {
  passport.use(
    new LocalStrategy((username, password, done) => {
      User.findOne({ username: username })
        .then((user) => {
          if (!user) return done(null, false);
          bcrypt.compare(password, user.password)
            .then((result) => {
              if (result === true) {
                return done(null, user);
              } else {
                return done(null, false);
              }
            })
            .catch((err) => {
              throw err;
            });
        })
        .catch((err) => {
          throw err;
        });
    })
  );

  passport.serializeUser((user, cb) => {
    cb(null, user.id);
  });
  
  passport.deserializeUser((id, cb) => {
    User.findOne({ _id: id })
      .then((user) => {
        const userInformation = {
          username: user.username,
        };
        cb(null, userInformation);
      })
      .catch((err) => {
        cb(err);
      });
  });
}
