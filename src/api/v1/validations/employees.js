const { body } = require('express-validator');

const create = [
    body('firstName')
        .isAlpha()
        .withMessage('First name must contain only alphabetic characters'),
    body('lastName')
        .isAlpha()
        .withMessage('Last name must contain only alphabetic characters'),
    body('birthDate')
        .isDate()
        .withMessage('birthDate must contain a valid date'),
    body('bio')
        .optional()
        .isString()
        .isLength({ min: 10, max: 1024 })
        .withMessage('bio must contain a string'),
];

const update = [
    body('firstName')
        .optional()
        .isAlpha()
        .withMessage('First name must contain only alphabetic characters'),
    body('lastName')
        .optional()
        .isAlpha()
        .withMessage('Last name must contain only alphabetic characters'),
    body('birthDate')
        .optional()
        .isDate()
        .withMessage('birthDate must contain a valid date'),
    body('bio')
        .optional()
        .isString()
        .isLength({ min: 10, max: 1024 })
        .withMessage('bio must contain a string'),
];

module.exports = { create, update };