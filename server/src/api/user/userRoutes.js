const express = require('express');
const router = express.Router();

// const checkAuth = require('../middleware/auth-check');
// const checkAdmin = require('../middleware/admin-check');

const userController = require('./controllers/userControllers');

router.get('/', userController.get_all_users);

module.exports = router;