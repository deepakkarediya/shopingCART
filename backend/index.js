const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/productCart").then(() => {
  console.log("connected to mongoDB successfully");
});

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = 4000;

app.get("/", (req, res) => {
  res.send("hello get");
});

app.use("/api", require("./routes/product"));
app.use("/purchase-history", require("./routes/purchaseHistoryRoutes"));

app.listen(PORT, () => {
  console.log("server is running  started on port 4000");
});
