const Customer = require('../models/Customer');

exports.getAllCustomers = async (req, res) => {
  const customers = await Customer.findAll();
  res.json(customers);
};

exports.createCustomer = async (req, res) => {
  const customer = await Customer.create(req.body);
  res.json(customer);
};