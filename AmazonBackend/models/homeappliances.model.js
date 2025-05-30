var mongoose = require('mongoose');
let applianceSchema = new mongoose.Schema({
    itemTitle:String,
    imgs:[{type:String}],
},{collection:"homeAppliances"})
const HomeAppliances = mongoose.model("homeAppliances",applianceSchema);
module.exports = {HomeAppliances}