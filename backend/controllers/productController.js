const Product = require("../models/Product");

let products = [
  { id: 1, name: "Product A", price: 10, category: "category 1" },
  { id: 2, name: "Product B", price: 20, category: "category 2" },
];

exports.Product = async (req, res) => {
  res.json(products);
};

// Create a new product
exports.createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    const savedProduct = await product.save();
    res.json(savedProduct);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

let cart = [];
exports.createProductCart = async (req, res) => {
  const { productId, quantity } = req.body;
  const product = products.find((p) => p.id == productId);
  if (!product) {
    return res.status(404).json({ error: "product not found" });
  }
  const cartItem = cart.find((item) => item.productId === productId);

  if (cartItem) {
    cartItem.quantity += quantity;
  } else {
    cart.push({ productId, quantity });
  }

  res.json({ success: true, cart });

  // res.send("createProductCart");
};
exports.updateProductCart = async (req, res) => {
  const productId = parseInt(req.params.productId);
  const { quantity } = req.body;

  const cartItem = cart.find((item) => item.productId === productId);

  if (!cartItem) {
    return res.status(404).json({ error: "Product not in the cart" });
  }

  cartItem.quantity = quantity;

  res.json({ success: true, cart });

  // res.send("createProductCart");
};
