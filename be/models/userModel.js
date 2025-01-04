const { DataTypes } = require('sequelize');
const sequelize = require('../config/sqlConnect');

const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING(50), 
        allowNull: false,
        primaryKey: true,
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    role: {
        type: DataTypes.STRING(20), 
        allowNull: true,
        defaultValue: 'user',
    },
    refreshToken: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW,
        onUpdate: DataTypes.NOW,  
    }
}, {
    tableName: 'users',
    timestamps: false,
});

module.exports = User;
