const mongoose = require("mongoose");

const purchaseHistorySchema = new mongoose.Schema({
  userId: String,
  products: [
    {
      productId: String,
      quantity: Number,
      price: Number,
    },
  ],
  purchaseDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("PurchaseHistory", purchaseHistorySchema);
