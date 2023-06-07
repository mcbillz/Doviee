import express from "express";
import Products from "./data/Products.js";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "https://doviee.vercel.app",
  })
);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"),
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE"),
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization"
    ),
    res.setHeader("Access-Control-Allow-Credentials", "true"),
    next();
});

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
