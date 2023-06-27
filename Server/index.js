import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { Product, Cart, Order, Payment } from "./schemas.js";
import session from "express-session";
import passport from "passport";
import passportLocalMongoose from "passport-local-mongoose";
import requestIp from "request-ip";
import passportLocal from "passport-local";

dotenv.config();

const app = express();
const LocalStrategy = passportLocal.Strategy;

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

mongoose
  .connect(
    "mongodb+srv://" +
      process.env.DB_USERNAME +
      ":" +
      process.env.DB_PASSWORD +
      "@doviee.r0xlx7u.mongodb.net/dovieedb?retryWrites=true&w=majority"
  )
  .catch((error) => console.log(`Mongo Error:${error.message}`));

passport.use(
  new LocalStrategy(function (username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, { message: "Invalid username or password" });
      }
      if (!user.verifyPassword(password)) {
        return done(null, false, { message: "Invalid username or password" });
      }
      return done(null, user);
    });
  })
);

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
userSchema.plugin(passportLocalMongoose);
const User = mongoose.model("User", userSchema);
passport.use(User.createStrategy());
passport.serializeUser(function (user, done) {
  console.log("Serializing user:", user);
  done(null, user.id);
});
passport.deserializeUser(function (id, done) {
  console.log("Deserializing user ID:", id);
  User.findById(id, function (err, user) {
    console.log("Deserialized user:", user);
    done(err, user);
  });
});

app.post("/api/signup", (req, res) => {
  console.log(req.body);
  const ip = requestIp.getClientIp(req);

  const { fName, lName, email, password } = req.body;
  User.register(
    {
      firstName: fName,
      lastName: lName,
      username: email,
      ip: ip,
      date: new Date(Date.now()),
      isAdmin: false,
    },
    password,
    function (err, user) {
      if (err) {
        console.error(err.message);
        res.status(409).json({
          message: "A user with the given username is already registered",
        });
      } else {
        res.status(201).json({ message: "User registration successful" });
      }
    }
  );
});

app.post("/api/login", async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ username: email }).exec();

    if (!user) {
      return res.status(401).json({
        authenticated: false,
        message: "Invalid username or password",
      });
    }

    req.login(user, function (err) {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      console.log(user._id);
      passport.authenticate("local", function (err) {
        if (err) {
          console.log("Authentication error:", err);
          return res.status(500).json({ error: "Authentication Error" });
        }
        console.log("Authentication callback executed");
        const userInfo = {
          id: req.user._id,
          username: req.user.username,
          firstName: req.user.firstName,
          lastName: req.user.lastName,
          isAdmin: req.user.isAdmin,
        };
        console.log(userInfo);
        return res
          .status(201)
          .json({ message: "User authenticated", userInfo });
      });
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Internal Server Error" });
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

app.listen(2000, console.log("server running on port 2000..."));
