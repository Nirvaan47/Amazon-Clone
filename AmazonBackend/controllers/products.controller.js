const { CartProduct } = require("../models/cart.model");
const { HomeAppliances } = require("../models/homeappliances.model");
const { Product } = require("../models/products.model");
const { Signup } = require("../models/signup.model");

function getProducts(req,res){
    Product.find({})
    .then((response)=>{
        res.json({Message:"Products are here", response:response});
    })
}

function getAppliances(req,res){
    HomeAppliances.find({}) 
    .then((response)=>{
        console.log(response);
        res.json({Message:"Home appliances are here", response:response});
    })
}

function sendCartProducts(req,res){
    console.log(req.body);
    CartProduct.create(req.body)
    .then(()=>{
        console.log("Cart item is created");
        res.json({Message:"Home appliances are here"});
    })
}

function getFromCart(req,res){
    console.log(req.body);
    CartProduct.find({})
    .then((response)=>{
        console.log("Cart items are here");
        res.json({Message:"Cart items are here", response:response});
    })
}
function removeFromCart(req,res){
    console.log("req body is", req.body);
    CartProduct.deleteOne({id:req.body.id})
    .then(()=>{
        console.log("Cart item is removed");
        res.json({Message:"Item is removed"});
    })
}

function makeSignupData(req,res){
    console.log(req.body);
    Signup.create(req.body)
    .then(()=>{
        console.log("User is added");
        res.json({Message:"User is created", response:req.body});
    })
}

function getSignupData(req,res){
    console.log(req.body);
    Signup.find({})
    .then((response)=>{
        console.log("Users are here");
        res.json({Message:"Users are here", response:req.body});
    })
}

function loginUser(req,res){
    console.log(req.body,"req.body");
    Signup.findOne({email:req.body.email})
    .then((response)=>{
        if(response == null){
           return res.json({Message:"Enter valid Email"});
        }
       console.log(response, "response");
       if(response.password == req.body.password){
       return res.json({Message:"Users are here", response:response});
       }
       else{
        return res.json({Message:"Enter valid credentials"})
       }
    })
}



module.exports = {getProducts,getAppliances, sendCartProducts,getFromCart,removeFromCart,makeSignupData,getSignupData,loginUser}