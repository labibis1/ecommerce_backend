const productModel = require("../../models/productModel");

async function CreateProductController(req, res) {
  let { title, description, color, stock, discountprice, sellingprice } =
    req.body;
  res.send(req.body);

try {
   let product = new productModel
} catch (error) {
   
}



}

module.exports = { CreateProductController };
