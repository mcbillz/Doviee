import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";
import passport from "passport";

const userSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  username: { type: String, unique: true },
  number: String,
  address: String,
  password: { type: String },
  googleId: String,
  ip: { type: String },
  date: Date,
  isAdmin: Boolean,
});

const User = mongoose.model("User", userSchema);

const productSchema = new mongoose.Schema({
  id: Number,
  category: Array,
  src: Array,
  description: String,
  colors: Array,
  sizes: Array,
  name: String,
  price: Number,
  oldPrice: Number,
  availability: Boolean,
});
const Product = mongoose.model("Product", productSchema);

const orderSchema = new mongoose.Schema({
  orderId: Number,
  username: String,
  phNumber: String,
  address: String,
  orderAmount: Number,
  orderDetails: Array,
  paymentStatus: Boolean,
  orderStatus: String,
  date: Date,
});
const Order = mongoose.model("Order", orderSchema);

const paymentSchema = new mongoose.Schema({
  orderId: Number,
  transactionId: String,
  paymentStatus: Boolean,
  date: Date,
});
const Payment = mongoose.model("Payment", paymentSchema);

export { User, Product, Order, Payment };
