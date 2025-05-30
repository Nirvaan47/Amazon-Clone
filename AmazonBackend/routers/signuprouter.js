var express = require('express');
const { makeSignupData, getSignupData } = require('../controllers/products.controller');
var signUpRouter = express.Router();

signUpRouter.get('/getUser',getSignupData);
signUpRouter.post('/createUser',makeSignupData);


module.exports = {signUpRouter}