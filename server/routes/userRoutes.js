const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware')

const userController = require('../controller/userController')

router.post('/', userController.registerUser);

router.post('/login', userController.loginUser);

router.get('/me', protect, userController.getMe);

module.exports = router
