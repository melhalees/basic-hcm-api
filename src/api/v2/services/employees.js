const Employee = require('../models/employeeModel');

// GET /api/v2/employees?page=1&limit=10
const indexEmployees = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const employeeCount = await Employee.countDocuments();

        const employees = await Employee.find()
            .skip((page - 1) * limit)
            .limit(limit);

        const result = {
            data: employees,
            total: employeeCount,
            per_page: limit,
            current_page: page,
            last_page: Math.ceil(employeeCount / limit),
        }

        res.json(result);
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};

const getEmployee = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);

        if (employee) {
            res.status(200).json(employee);
        } else {
            res.status(404).json({ message: "Employee not found"});
        }

    } catch(error) {
        res.status(500).json({ message: "Internal server error"});
    }
};

const createEmployee = async (req, res) => {
    const newEmployee = new Employee(req.body);
    try {
        await newEmployee.save().then((result) => {
            res.send({
                message: "Employee created successfully!!",
                employee: result
            });
        });
    } catch (error) {
        res.status(400).json({ message: "Error adding employee" });
    }
};

const updateEmployee = async (req, res) => {
    await Employee.findByIdAndUpdate(req.params.id, req.body).then(data => {
        if (!data) {
            res.status(404).send({
                message: "Employee not found."
            });
        } else {
            res.send({ message: "Employee updated successfully." })
        }
    }).catch(err => {
        res.status(500).send({
            message: "Internal server error"
        });
    });
};

const deleteEmployee = async (req, res) => {
    // TODO: handle checking id format
    await Employee.findByIdAndDelete(req.params.id).then(data => {
        if (!data) {
            res.status(404).send({
                message: "Employee not found."
            });
        } else {
            res.send({
                message: "Employee deleted successfully!"
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};

module.exports = {
    indexEmployees,
    getEmployee,
    createEmployee,
    updateEmployee,
    deleteEmployee,
};