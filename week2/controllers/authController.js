"use strict";
const jwt = requre("jsonwebtoken");
const passport = require("passport");
const { httpError } = require("../utils/errors");

const login = (req, res, next) => {
  passport.authenticate("local", { session: false }, (err, user, info) => {
    console.log('info', info);
    console.log('err1', err);
    if (err || !user) {
      next(httpError("Login failed", 403));
      return
    }
    req.login(user, { session: false }, () => {
      if (err) {
        console.log('err2', err);
        next(httpError("Login failed", 403));
        return
      }
      const token = jwt.sign(user, 'yikbvbvuy13487s');
      return res.json({ user, token });
    });
  });
};

module.exports = {
  login,
};
