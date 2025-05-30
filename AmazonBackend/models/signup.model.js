var mongoose = require('mongoose');
let signupSchema = new mongoose.Schema({
    email:String,
    password:String
})
const Signup = mongoose.model("signups",signupSchema);
module.exports = {Signup}