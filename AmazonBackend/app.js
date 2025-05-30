var express = require("express");
const { dbConfig } = require("./configurations/dbConfig");
var app = express();
var dotenv = require("dotenv");
var cors = require('cors');
const { Product } = require("./models/products.model");
const { getProducts } = require("./controllers/products.controller");
var {productsRouter} = require("./routers/productsrouter.js");
const { applianceRouter } = require("./routers/appliancerouter.js");
const { cartRouter } = require("./routers/cartRouter.js");
const { signUpRouter } = require("./routers/signuprouter.js");
const { loginRouter } = require("./routers/loginRouter.js");
var PORT = process.env.PORT;

app.use(express.json());
app.use(cors());



dotenv.config();
app.use("/products",productsRouter);
app.use("/appliances",applianceRouter);
app.use("/cart",cartRouter);
app.use("/signup",signUpRouter);
app.use("/login",loginRouter);


app.get('/',(req,res)=>{
    res.json({message:"You are in backend"})
})


app.listen(PORT, () => {
  dbConfig();
  console.log(`The server is listening at ${PORT}`);
});
