import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LandingPage from "../Screens/Landingpage";
import Login from "../Screens/Login";
import Productspage from "../Screens/Productspage";
import Categories from "../Screens/Categories";
import SingleProductPage from "../Screens/SingleProductPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Productspage/:searchinput" element={<Productspage />} />
        <Route path="/Categories/:category" element={<Categories />} />
        <Route
          path="/Productspage/:productId"
          element={<SingleProductPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
