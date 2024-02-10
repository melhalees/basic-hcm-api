const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Please provide a first name"],
        trim: [true, "First name cannot contain leading or trailing spaces"]
    },
    lastName: {
        type: String,
        required: [true, "Please provide a last name"],
        trim: [true, "Last name cannot contain leading or trailing spaces"]
    },
    birthDate: {
        type: Date,
        required: [true, "Please provide a birth date"],
        validate: {
            validator: function(v) {
                return v instanceof Date;
            },
            message: "Birth date must be a valid date"
        }
    },
    bio: {
        type: String,
        required: false,
        trim: true,
        default: "",
        maxlength: [5000, "Bio cannot exceed 5000 characters"]
    }
}, {timestamps: true, collection: 'employees'});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;