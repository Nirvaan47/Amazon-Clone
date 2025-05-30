var express = require('express');
const { sendCartProducts, getFromCart, removeFromCart } = require('../controllers/products.controller');

var cartRouter = express.Router();

cartRouter.post('/cartPost',sendCartProducts);
cartRouter.get('/cartPost',getFromCart);
cartRouter.delete('/removeCart',removeFromCart);

module.exports = {cartRouter}