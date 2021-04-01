import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

const getProduct = asyncHandler(async (req, res) => {
  const products = await Product.find({});

  res.json(products);
});

const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
});

export { getProduct, getProductById };
