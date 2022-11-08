"use strict";

// Cat controller
const {
  getCat,
  getAllCats,
  addCat,
  updateCat,
  deleteCat,
} = require("../models/catModel");

const cat_list_get = async (req, res, next) => {
  res.json(await getAllCats(next));
};

const cat_get = async (req, res, next) => {
  const cat = await getCat(req.params.id, next);
  if (cat.length > 0) {
    res.json(cat.pop());
  } else {
    res.send("Could not find cat with id " + req.params.id);
  }
};

const cat_post = async (req, res, next) => {
  console.log("cat_post", req.body, req.file);
  const data = [
    req.body.name,
    req.body.birthdate,
    req.body.weight,
    req.body.owner,
    req.file.filename,
  ];
  const result = await addCat(data, next);
  console.log("addCat", result, data);
  if (result.affectedRows > 0) {
    res.json({
      message: "cat added",
      cat_id: result.insertId,
    });
  } else {
    res.send("error");
  }
};

const cat_update = async (req, res, next) => {
  console.log("cat_update", req.body);
  const data = [
    req.body.name,
    req.body.birthdate,
    req.body.weight,
    req.body.owner,
    req.body.id,
  ];
  const result = await updateCat(data, next);
  console.log("updateCat", result, data);
  if (result.affectedRows > 0) {
    res.json({
      message: "cat updated",
      cat_id: result.insertId,
    });
  } else {
    res.send("error");
  }
};

const cat_delete = async (req, res, next) => {
  const result = await deleteCat(req.params.id, next);
  console.log("deleteCat", result);
  if (result.affectedRows > 0) {
    res.json({
      message: "cat deleted",
      cat_id: result.insertId,
    });
  } else {
    res.send("error");
  }
};

module.exports = {
  cat_list_get,
  cat_get,
  cat_post,
  cat_update,
  cat_delete,
};
