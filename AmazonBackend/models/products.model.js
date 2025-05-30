var mongoose = require('mongoose');
let productSchema = new mongoose.Schema({
    id:String,
    name:String,
    price:Number,
    quantity:Number,
    imageUrl:String
})
const Product = mongoose.model("products",productSchema);
module.exports = {Product}