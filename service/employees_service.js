const { where } = require('sequelize');
const Employee = require('../models/employee');

// Add new employee
const addEmployeeService = async (employeeData) => {
  try {
    const newEmployee = await Employee.create(employeeData);
    return newEmployee;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Get all employees
const getAllEmployeesService = async () => {
  try {
    const employees = await Employee.findAll({where:{isActive:true}});
    return employees;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Get employee by ID
const getEmployeeByIdService = async (id) => {
  try {
    const employee = await Employee.findOne({where:{id:id,isActive:true}});
    if (!employee) {
      throw new Error('Employee not found');
    }
    return employee;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Update employee
const updateEmployeeService = async (id, employeeData) => {
  try {
    const employee = await Employee.findOne({where:{id:id,isActive:true}});
    if (!employee) {
      throw new Error('Employee not found');
    }
    Object.assign(employee, employeeData);
    await employee.save();0
    return employee;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Delete employee
const deleteEmployeeService = async (id) => {
  try {
    const employee = await Employee.findByPk(id);
    if (!employee) {
      throw new Error('Employee not found');
    }
    await employee.destroy();
    return;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
    addEmployeeService,
    getAllEmployeesService,
    getEmployeeByIdService,
    updateEmployeeService,
    deleteEmployeeService,
  };