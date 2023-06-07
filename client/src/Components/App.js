import React from "react";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import LandingPage from "../Screens/Landingpage";
import Login from "../Screens/Login";
import Cart from "../Screens/Cart";
import Profile from "../Screens/Profile";
import Productspage from "../Screens/Productspage";
import Categories from "../Screens/Categories";
import SingleProductPage from "../Screens/SingleProductPage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Productspage/:searchinput" element={<Productspage />} />
        <Route path="/Categories/:category" element={<Categories />} />
        <Route path="/Product/:productId" element={<SingleProductPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
