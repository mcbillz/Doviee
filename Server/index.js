import express from "express";
import Products from "./data/Products.js";

const app = express();

app.get("/api/Products", (req, res) => {
  res.json(Products);
});
app.get("/api/Product/:productId", (req, res) => {
  const product = Products.find(
    (product) => product.id === req.params.productId
  );
  res.json(product);
});

app.listen(2000, console.log("server running on port 2000..."));
