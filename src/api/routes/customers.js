import 'regenerator-runtime/runtime'
const express = require('express');
const Customer = require('../../models/Customer');
const router = express.Router();
const internalError = require('../../util/getResponses/internalServerError');

router.post('/', async (req, res) => {
    try {
        let customer = new Customer({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            address: req.body.address,
            employeeId: req.body.employeeId,
        });
        const newCustomer = await customer.save();
        if (newCustomer !== customer) {
            throw Error("did not save customer correctly");
        }
        res.status(201).send("Created successfully");
    } catch (err) {
        res.status(500).json(internalError);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const customer = await Customer.find({"employeeId": req.params.id});
        res.status(200).json(customer);
    } catch (err) {
        res.status(500).json(internalError);
    }
});
module.exports = router;