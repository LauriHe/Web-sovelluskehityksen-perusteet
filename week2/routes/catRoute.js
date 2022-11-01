'use strict';
// catRoute

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('From this endpoint you can get cats.');
});

router.get('/:id', (req, res) => {
  console.log('Get cat :id', req.params);
  res.send('You requested a cat with id: ' + req.params.id);
});

router.post('/', (req, res) => {
  res.send('From this endpoint you can add cats.');
});

router.put('/', (req, res) => {
  res.send('From this endpoint you can edit cats.');
});

router.delete('/', (req, res) => {
  res.send('From this endpoint you can remove cats.');
});

module.exports = router;