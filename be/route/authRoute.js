const express = require('express');
const {registerUser, loginUser,logoutUser, refreshTokenUser, getUserById } = require('../controller/userController');
const { authenticateToken, isAdmin } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/register', registerUser)
router.post('/login', loginUser)
router.post('/logout', logoutUser)
router.get('/refresh', refreshTokenUser)
router.get('/users/:id', authenticateToken, isAdmin, getUserById); 

module.exports = router;