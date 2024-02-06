const fs = require('fs');
const path = require('path');
const jsonFilePath = path.join(__dirname, '..', 'data', 'employees.json');

// Read employees data from JSON file
const readEmployeesData = () => {
    const data = fs.readFileSync(jsonFilePath, 'utf8');
    return JSON.parse(data);
};

// Write employees data to JSON file
const writeEmployeesData = (data) => {
    fs.writeFileSync(jsonFilePath, JSON.stringify(data));
};

module.exports = {
    readEmployeesData,
    writeEmployeesData,
};