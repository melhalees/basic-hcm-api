const {connection} = require("mongoose");
const connectDB = require('../db/conn');

const establishDBConnection = async (req, res, next) => {
    try {
        if (!connection.readyState) {
            await connectDB();
        }
        next();
    } catch (error) {
        console.error('Error establishing DB connection:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = establishDBConnection;