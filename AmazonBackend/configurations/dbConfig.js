var mongoose = require("mongoose");
var dotenv = require('dotenv');
dotenv.config();
function dbConfig() {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("db connection successful");
    })
    .catch((err) => {
      console.log(err);
    });
}
module.exports = { dbConfig };