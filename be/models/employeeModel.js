const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/sqlConnect'); // Pastikan jalur file koneksi benar
const Users = require('./userModel'); // Pastikan Anda memiliki model Users

const Employees = sequelize.define('Employees', {
    user_nip: {
        type: DataTypes.STRING(50),
        allowNull: false,
        primaryKey: true,
        references: {
            model: Users,
            key: 'username',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    },
    nama_lengkap: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
            isEmail: true,
        },
    },
    gender : {
        type: DataTypes.STRING(12),
        allowNull: true,
    },
    tanggal_lahir: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    tempat_lahir: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    nomor_telepon: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
            isNumeric: true,
        },
    },
    id_jabatan: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    alamat: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
}, {
    tableName: 'employees',
    timestamps: false,
});

module.exports = Employees;
