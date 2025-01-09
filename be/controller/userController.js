const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const { validateRegisterInput, validateLoginInput } = require('../utils/userValidator');

// Register User
const registerUser = asyncHandler(async (req, res) => {
    const { username, password } = req.body;

    const { error } = validateRegisterInput(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) {
        return res.status(400).json({ message: 'Username already taken' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
        username,
        password: hashedPassword,
        role: 'user',
    });

    res.status(201).json({
        id: user.id,
        username: user.username,
        role: user.role,
        message: 'User registered successfully',
    });
});

// Login User
const loginUser = asyncHandler(async (req, res) => {
    const { username, password } = req.body;

    const { error } = validateLoginInput(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    const user = await User.findOne({ where: { username } });
    if (!user) {
        return res.status(401).json({ message: 'Invalid username or password' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid username or password' });
    }

    const accessToken = jwt.sign(
        { id: user.id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
    );

    const refreshToken = jwt.sign(
        { id: user.id },
        process.env.JWT_REFRESH_SECRET,
        { expiresIn: '7d' }
    );

    await user.update({ refreshToken: refreshToken });

    res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        sameSite: 'Lax', // Ubah ke 'Lax' jika menggunakan HTTP
        secure: false, // Set true jika menggunakan HTTPS
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 hari
        path: '/',
    });

    res.json({
        id: user.id,
        username: user.username,
        role: user.role,
        token: accessToken,
        message: 'Login successful'
    });
});

// Refresh Access Token
const refreshTokenUser = asyncHandler(async (req, res) => {
    // console.log(req.cookies);
    const { refreshToken } = req.cookies;
    if (!refreshToken) {
        return res.status(401).json({ message: 'No refresh token provided' });
    }

    const user = await User.findOne({ where: { refreshToken } });
    if (!user) {
        return res.status(403).json({ message: 'Invalid refresh token' });
    }

    jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET, (err, decoded) => {
        if (err || user.id !== decoded.id) {
            return res.status(403).json({ message: 'Invalid refresh token' });
        }

        const accessToken = jwt.sign(
            { id: user.id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.json({ 
            message: 'Refresh token successful',
            token: accessToken,
        });
    });
});

const logoutUser = asyncHandler(async (req, res) => {
    // console.log(req.cookies);
    const { refreshToken } = req.cookies;
    if (!refreshToken) {
        return res.status(400).json({ message: 'No refresh token provided' });
    }

    res.clearCookie('refreshToken', {
        httpOnly: true,
        sameSite: 'Lax', // Harus sama dengan saat cookie di-set
        secure: false, // Harus sama dengan saat cookie di-set
        path: '/', // Harus sama dengan saat cookie di-set
    });

    const user = await User.findOne({ where: { refreshToken: refreshToken } });
    if (user) {
        await user.update({ refreshToken: null });
    }

    res.status(200).json({ message: 'Logged out successfully' });
});


// Get User By ID
const getUserById = asyncHandler(async (req, res) => {
    const user = await User.findByPk(req.params.id);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
});

module.exports = { registerUser, loginUser, getUserById, refreshTokenUser, logoutUser };
