
const {
    addEmployeeService,
    getAllEmployeesService,
    getEmployeeByIdService,
    updateEmployeeService,
    deleteEmployeeService,
  } = require('../service/employees_service');

// Add new employee
const addEmployeeController = async (req, res) => {
  try {
    const employeeData = req.body;
    const newEmployee = await addEmployeeService(employeeData);
    res.status(201).json(newEmployee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all employees
const getAllEmployeesController = async (req, res) => {
  try {
    const employees = await getAllEmployeesService();
    res.status(200).json(employees);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get employee by ID
const getEmployeeByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await getEmployeeByIdService(id);
    res.status(200).json(employee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update employee
const updateEmployeeController = async (req, res) => {
  try {
    const { id } = req.params;
    const employeeData = req.body;
    const updatedEmployee = await updateEmployeeService(id, employeeData);
    res.status(200).json(updatedEmployee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete employee
const deleteEmployeeController = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteEmployeeService(id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
    addEmployeeController,
    getAllEmployeesController,
    getEmployeeByIdController,
    updateEmployeeController,
    deleteEmployeeController,
  };
