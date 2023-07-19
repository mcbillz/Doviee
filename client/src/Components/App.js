import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../Screens/Landingpage";
import Login from "../Screens/Login";
import Cart from "../Screens/Cart";
import Profile from "../Screens/Profile";
import Productspage from "../Screens/Productspage";
import Categories from "../Screens/Categories";
import SingleProductPage from "../Screens/SingleProductPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route />
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Productspage/:searchInput" element={<Productspage />} />
        <Route path="/Categories/:category" element={<Categories />} />
        <Route path="/Product/:productId" element={<SingleProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
