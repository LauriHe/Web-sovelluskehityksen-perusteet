'use strict';
// user route

const express = require('express');
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
const {user_list_get, user_get, user_post} = require('../controllers/userController');
const router = express.Router();

router.get('/', user_list_get);
router.get('/:id', user_get);

router.post('/', upload.single('user'), user_post);

module.exports = router;