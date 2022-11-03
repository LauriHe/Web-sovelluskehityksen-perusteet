"use strict";

// User controller
const { getUser, getAllUsers } = require("../models/userModel");

const user_list_get = async (req, res) => {
  res.json(await getAllUsers());
};

const user_get = async (req, res) => {
  const user = await getUser(req.params.id);
  if (user.length > 0){
    res.json(user.pop());
  } else{
    res.send('Could not find user with id ' + req.params.id);
  };
};

const user_post = (req, res) => {
  console.log("user_post", req.body, req.file);
  res.send("User post done.");
};

module.exports = {
  user_list_get,
  user_get,
  user_post,
};