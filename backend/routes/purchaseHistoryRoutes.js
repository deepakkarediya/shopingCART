const express = require("express");
const router = express.Router();
const PurchaseHistory = require("../models/PurchaseHistory");

router.get("/", async (req, res) => {
  try {
    const history = await PurchaseHistory.find();
    res.json(history);
  } catch (error) {
    res.json({ message: error.message });
  }
});

module.exports = router;
