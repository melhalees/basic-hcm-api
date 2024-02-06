const employeesService = require('../services/employees');

const getAllEmployees = (req, res) => {
    res.json(employeesService.indexEmployees());
};

const getEmployeeById = (req, res) => {
    const employee = employeesService.getEmployee(req.params.id);
    if (employee) {
        res.json(employee);
    } else {
        res.status(404).json({ message: 'Employee not found' });
    }
};

const addEmployee = (req, res) => {
    if (employeesService.createEmployee(req.body)) {
        res.status(201).json({ message: 'Employee added' });
    } else {
        res.status(400).json({ message: 'Error adding employee' });
    }
};

const updateEmployee = (req, res) => {
    if (employeesService.updateEmployee(req.params.id, req.body)) {
        res.json({ message: 'Employee updated' });
    } else {
        res.status(400).json({ message: 'Error updating employee' });
    }
};

const deleteEmployee = (req, res) => {
    if (employeesService.deleteEmployee(req.params.id)) {
        res.json({ message: 'Employee deleted' });
    } else {
        res.status(400).json({ message: 'Error deleting employee' });
    }
};

module.exports = {
    getAllEmployees,
    getEmployeeById,
    addEmployee,
    updateEmployee,
    deleteEmployee,
};