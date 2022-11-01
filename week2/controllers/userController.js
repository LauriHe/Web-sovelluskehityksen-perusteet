'use strict';

// Person controller

const {users, getUser} = require('../models/userModel');

const user_list_get = (req, res) => {
  res.json(users);
};

const user_get = (req, res) => {
  const user = getUser(req.params.id);
  res.json(user);
};

module.exports = {
  user_list_get,
  user_get,
};