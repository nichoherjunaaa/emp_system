const express = require('express');
const { getDataById, insertEmployee, updateEmployee, deleteEmployee, getDataEmployees } = require('../controller/employeesController');
const router = express.Router();
const { authenticateToken, isAdmin } = require('../middleware/authMiddleware');

router.post('/insert', authenticateToken, isAdmin, insertEmployee)
router.put('/update/:id', updateEmployee)
router.get('/data', getDataEmployees)
router.get('/data/:id', getDataById)
router.delete('/delete/:id', deleteEmployee)

module.exports = router;