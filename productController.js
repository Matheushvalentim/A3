const Product = require('../models/Product');

exports.getAllProducts = async (req, res) => {
  const products = await Product.findAll();
  res.json(products);
};

exports.createProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.json(product);
};