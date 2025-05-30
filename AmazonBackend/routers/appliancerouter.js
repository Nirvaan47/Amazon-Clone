var express = require('express');
const { getProducts, getAppliances } = require('../controllers/products.controller');
var applianceRouter = express.Router();

applianceRouter.get('/getAppliances',getAppliances);

module.exports = {applianceRouter}