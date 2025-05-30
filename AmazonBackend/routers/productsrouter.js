var express = require('express');
const { getProducts } = require('../controllers/products.controller');
var productsRouter = express.Router();

productsRouter.get('/getProducts',getProducts);

module.exports = {productsRouter}