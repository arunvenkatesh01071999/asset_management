const express = require('express');
const {
    addEmployeeController,
    getAllEmployeesController,
    getEmployeeByIdController,
    updateEmployeeController,
    deleteEmployeeController,
  } = require('../controller/employees_controller');

  const router = express.Router();

// Add new employee
router.post('/add', addEmployeeController);

// Get all employees
router.get('/all', getAllEmployeesController);

// Get employee by ID
router.get('/:id', getEmployeeByIdController);

// Update employee
router.put('/:id', updateEmployeeController);

// Delete employee
router.delete('/:id', deleteEmployeeController);

module.exports = router;
