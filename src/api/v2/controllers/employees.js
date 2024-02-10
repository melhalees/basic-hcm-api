const employeesService = require('../services/employees');

const getAllEmployees = async (req, res) => {
    return await employeesService.indexEmployees(req, res);
};

const getEmployeeById = async (req, res) => {
    return employeesService.getEmployee(req, res);
};

const addEmployee = (req, res) => {
    return employeesService.createEmployee(req, res);
};

const updateEmployee = (req, res) => {
    return employeesService.updateEmployee(req, res);
};

const deleteEmployee = (req, res) => {
    return employeesService.deleteEmployee(req, res);
};

module.exports = {
    getAllEmployees,
    getEmployeeById,
    addEmployee,
    updateEmployee,
    deleteEmployee,
};