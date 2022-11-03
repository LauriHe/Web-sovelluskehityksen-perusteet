"use strict";

// Cat controller
const { getCat, getAllCats } = require("../models/catModel");

const cat_list_get = async (req, res) => {
  res.json(await getAllCats());
};

const cat_get = (req, res) => {
  const cat = getCat(req.params.id);
  res.json(cat);
};

const cat_post = (req, res) => {
  console.log("cat_post", req.body, req.file);
  res.send("Cat post done.");
};

module.exports = {
  cat_list_get,
  cat_get,
  cat_post,
};
