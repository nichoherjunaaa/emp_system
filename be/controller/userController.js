const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const { validateRegisterInput, validateLoginInput } = require('../utils/userValidator');

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

    await user.update({ refreshToken: refreshToken });  // Pastikan nama kolom sesuai

    res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 7 * 24 * 60 * 60 * 1000
    });

    res.json({
        id: user.id,
        username: user.username,
        role: user.role,
        token: accessToken,
        message: 'Login successful'
    });
});

const refreshToken = asyncHandler(async (req, res) => {
    const { refreshToken } = req.cookies;
    if (!refreshToken) {
        return res.status(401).json({ message: 'No refresh token provided' });
    }

    const user = await User.findOne({ where: { refresh_token: refreshToken } }); // Sesuaikan nama kolom
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

        res.json({ token: accessToken });
    });
});

const logoutUser = asyncHandler(async (req, res) => {
    console.log(req.cookies);
    const { refreshToken } = req.cookies;  // Ambil refreshToken dari cookie

    if (!refreshToken) {
        return res.status(400).json({ message: 'No refresh token provided' });
    }

    // Cari user berdasarkan refresh_token di database
    const user = await User.findOne({ where: { refreshToken: refreshToken } });  // Sesuaikan nama kolom
    if (!user) {
        res.clearCookie('refreshToken');  // Hapus cookie jika user tidak ditemukan
        return res.status(400).json({ message: 'No matching user found for refresh token' });
    }

    // Update user dengan null-kan refresh_token
    await user.update({ refreshToken: null });

    // Hapus cookie refreshToken dari browser
    res.clearCookie('refreshToken');

    res.status(200).json({ message: 'Logged out successfully' });
});

const getUserById = asyncHandler(async (req, res) => {
    const user = await User.findByPk(req.params.id);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
});

module.exports = { registerUser, loginUser, getUserById, refreshToken, logoutUser };
