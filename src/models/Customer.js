const mongoose = require('mongoose');

const CustomerSchema = mongoose.Schema({
    firstName:{
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    address:{ 
        type: String,
        required: true,
    },
    employeeId: {
        type: Number,
        unique: true,
        required: true,
        integer: true,
        get: v => Math.round(v),
        set: v => Math.round(v),
    }
});

module.exports = mongoose.model('Customers', CustomerSchema);
