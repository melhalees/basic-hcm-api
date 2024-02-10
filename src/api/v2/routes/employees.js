const express = require('express');
const employeesRouter = express.Router();

const employeeController = require('../controllers/employees');
const employeesValidation = require('../validations/employees');
const validateRequest = require('../middlewares/validateRequest');

employeesRouter.get('/', employeeController.getAllEmployees);

employeesRouter.get('/:id', employeeController.getEmployeeById);

employeesRouter.post(
    '/',
    employeesValidation.create,
    validateRequest,
    employeeController.addEmployee
);

employeesRouter.put(
    '/:id',
    employeesValidation.update,
    validateRequest,
    employeeController.updateEmployee
);

employeesRouter.delete('/:id', employeeController.deleteEmployee);

module.exports = employeesRouter;
