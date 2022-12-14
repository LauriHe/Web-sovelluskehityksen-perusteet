"use strict";
const pool = require("../database/db");
const promisePool = pool.promise();

const getAllUsers = async () => {
  try {
    const [rows] = await promisePool.execute(`SELECT user_id, name, email, role FROM wop_user;`);
    return rows;
  } catch (e) {
    console.error("error", e.message);
  }
};

const getUser = async (userId) => {
  try {
    const [rows] = await promisePool.execute(
      `SELECT user_id, name, email, role FROM wop_user WHERE user_id = ?;`,
      [userId]
    );
    return rows;
  } catch (e) {
    console.error("error", e.message);
  }
};

const addUser = async (data) => {
  try {
    const [rows] = await promisePool.execute(`INSERT INTO wop_user (name, email, password) VALUES (?, ?, ?);`, data);
    return rows;
  } catch (e) {
    console.error("error", e.message);
  }
};

const getUserLogin = async (params, next) => {
  try {
    console.log(params);
    const [rows] = await promisePool.execute(
        'SELECT * FROM wop_user WHERE email = ?;',
        params);
    return rows;
  } catch (e) {
    console.log('getUserLogin', e.message);
    next(httpError('Database error', 500));
  }
};

module.exports = {
  getAllUsers,
  getUser,
  addUser,
  getUserLogin,
};