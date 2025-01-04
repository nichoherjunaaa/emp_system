const express = require('express');
const {registerUser, loginUser,logoutUser, refreshToken, getUserById } = require('../controller/userController');
const { authenticateToken, isAdmin } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/refresh', refreshToken)
router.post('/logout', logoutUser)
router.get('/users/:id', authenticateToken, isAdmin, getUserById); 

module.exports = router;