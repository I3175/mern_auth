const express = require('express');
const router = express.Router();
const userController = require('../Controllers/UserController');

router.get('/', userController.getListUser);
router.get('/detail', userController.userDetail);

module.exports = router;