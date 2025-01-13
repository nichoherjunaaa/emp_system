const Employees = require('../models/employeeModel')
const asyncHandler = require('express-async-handler')

const insertEmployee = asyncHandler(async (req, res) => {
    const { user_nip, nama_lengkap, email, gender, tanggal_lahir, tempat_lahir, nomor_telepon, id_jabatan, alamat } = req.body;

    if (!user_nip || !nama_lengkap || !email || !gender || !tanggal_lahir || !tempat_lahir || !nomor_telepon || !id_jabatan || !alamat) {
        return res.status(400).json({
            status: 'error',
            message: 'All fields are required'
        });
    }

    const existingEmployee = await Employees.findOne({
        where: { user_nip }
    });

    if (existingEmployee) {
        return res.status(400).json({
            status: 'error',
            message: `Employee with NIP ${user_nip} already exists`
        });
    }

    try {
        const employee = await Employees.create({
            user_nip, nama_lengkap, email, gender, tanggal_lahir, tempat_lahir, nomor_telepon, id_jabatan, alamat
        });

        res.status(201).json({
            status: 'success',
            data: employee
        });

    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Server error, failed to insert employee',
            error: error.message
        });
    }
});

const updateEmployee = asyncHandler(async (req, res) => {
    const { user_nip, nama_lengkap, email, gender, tanggal_lahir, tempat_lahir, nomor_telepon, id_jabatan, alamat } = req.body;

    try {
        const employee = await Employees.update({
            user_nip, nama_lengkap, email, gender, tanggal_lahir, tempat_lahir, nomor_telepon, id_jabatan, alamat
        }, {
            where: { user_nip: req.params.id }
        });

        if (employee[0] === 0) {
            return res.status(404).json({
                status: 'error',
                message: 'Employee not found'
            });
        }

        res.status(200).json({
            status: 'success',
            message: 'Employee updated successfully'
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Server error, failed to update employee',
            error: error.message
        });
    }
});

const getDataById = asyncHandler(async (req, res) => {
    console.log(req.cookies);
    try {
        const employee = await Employees.findOne({
            where: { user_nip: req.params.id }
        });

        if (!employee) {
            return res.status(404).json({
                status: 'error',
                message: 'Employee not found'
            });
        }

        res.status(200).json({
            status: 'success',
            data: employee
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Server error, failed to fetch employee data',
            error: error.message
        });
    }
});

const deleteEmployee = asyncHandler(async (req, res) => {
    try {
        const employee = await Employees.destroy({
            where: { user_nip: req.params.id }
        });

        if (employee === 0) {
            return res.status(404).json({
                status: 'error',
                message: 'Employee not found'
            });
        }

        res.status(200).json({
            status: 'success',
            message: 'Employee deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Server error, failed to delete employee',
            error: error.message
        });
    }
});

const getDataEmployees = asyncHandler(async (req, res) => {
    // console.log(req.params.id);
    try {
        const employees = await Employees.findAll();
        res.status(200).json({
            status: 'success',
            data: employees
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Server error, failed to fetch employee data',
            error: error.message
        });
    }
});

module.exports = { getDataById, insertEmployee, updateEmployee, deleteEmployee, getDataEmployees };