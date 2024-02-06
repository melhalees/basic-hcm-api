const employeesHelper = require('../helpers/employees');

const indexEmployees = () => {
    return employeesHelper.readEmployeesData();
};

const getEmployee = (id) => {
    const employees = employeesHelper.readEmployeesData();
    return employees.find((employee) => employee._id === id);
};

const createEmployee = (employee) => {
    employee._id = Math.random().toString(36).substr(2, 9);
    const employees = employeesHelper.readEmployeesData();
    employees.push(employee);
    employeesHelper.writeEmployeesData(employees);
    return true;
};

const updateEmployee = (id, updatedEmployee) => {
    const employees = employeesHelper.readEmployeesData();
    const index = employees.findIndex((employee) => employee._id === id);
    if (index !== -1) {
        employees[index] = { ...employees[index], ...updatedEmployee };
        employeesHelper.writeEmployeesData(employees);
        return true;
    }
    return false;
};

const deleteEmployee = (id) => {
    const employees = employeesHelper.readEmployeesData();
    const index = employees.findIndex((employee) => employee._id === id);
    if (index !== -1) {
        employees.splice(index, 1);
        employeesHelper.writeEmployeesData(employees);
        return true;
    }
    return false;
};

module.exports = {
    indexEmployees,
    getEmployee,
    createEmployee,
    updateEmployee,
    deleteEmployee,
};