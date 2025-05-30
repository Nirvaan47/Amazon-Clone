var express = require('express');
const { loginUser } = require('../controllers/products.controller');
var loginRouter = express.Router();


loginRouter.post('/loginUser',loginUser);


module.exports = {loginRouter}