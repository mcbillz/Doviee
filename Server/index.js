import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { User, Product, Order, Payment } from "./schemas.js";
import session from "express-session";
import passport from "passport";
import requestIp from "request-ip";
import cookieParser from "cookie-parser";
import bcrypt from "bcryptjs";

dotenv.config();

const app = express();

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(cookieParser(process.env.SECRET));
app.use(passport.initialize());
app.use(passport.session());
import configurePassport from "./passportConfig.js";
configurePassport(passport);

mongoose
  .connect(
    "mongodb+srv://" +
      process.env.DB_USERNAME +
      ":" +
      process.env.DB_PASSWORD +
      "@doviee.r0xlx7u.mongodb.net/dovieedb?retryWrites=true&w=majority"
  )
  .catch((error) => console.log(`Mongo Error:${error.message}`));

app.post("/api/signup", async (req, res) => {
  const ip = requestIp.getClientIp(req);
  const { fName, lName, email, password } = req.body;

  try {
    const result = await User.findOne({ username: email });

    if (result) {
      res.send("User exists");
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({
        firstName: fName,
        lastName: lName,
        username: email,
        password: hashedPassword,
        ip: ip,
        date: new Date(Date.now()),
        isAdmin: false,
      });

      await newUser.save();
      res.send("Sign up Successful");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/api/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("No User Exists");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        const userInfo = {
          id: req.user._id,
          username: req.user.username,
          firstName: req.user.firstName,
          lastName: req.user.lastName,
          isAdmin: req.user.isAdmin,
        };
        res.json(userInfo);
      });
    }
  })(req, res, next);
});

app.get("/api/Products", async (req, res) => {
  try {
    const product = await Product.find().maxTimeMS(20000);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json(product);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/Product/:productId", async (req, res) => {
  try {
    const product = await Product.findOne({ id: req.params.productId });

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json(product);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/User", async (req, res) => {
  if (req.isAuthenticated()) {
    try {
      const user = await User.findOne({ username: req.user.username });

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      // Return the user information
      res.json(user);
    } catch (err) {
      console.error("Error:", err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(401).json({ error: "User not authenticated" });
  }
});

app.post("/api/edit-info", async (req, res) => {
  try {
    await User.updateOne(
      { username: req.body.initiatingUser },
      { number: req.body.edPhoneNumber, address: req.body.edAddress }
    );
    res.status(200).send("Successfully updated user information.");
  } catch (err) {
    console.log(err);
    res.status(500).send("An error occurred while updating user information.");
  }
});

app.get("/api/logout", (req, res) => {
  req.logout(function (err) {
    if (err) {
      console.log(err);
    }
  });
});

app.listen(2000, console.log("server running on port 2000..."));
