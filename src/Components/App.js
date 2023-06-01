import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LandingPage from "../Screens/Landingpage";
import Login from "../Screens/Login";
import Productspage from "../Screens/Productspage";
import Assesories from "../Screens/Assesories";
import FemaleFashion from "../Screens/FemaleFashion";
import MaleFashion from "../Screens/MaleFashion";
import Sneakers from "../Screens/Sneakers";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Productspage" element={<Productspage />} />
        <Route path="/Assesories" element={<Assesories />} />
        <Route path="/FemaleFashion" element={<FemaleFashion />} />
        <Route path="/MaleFashion" element={<MaleFashion />} />
        <Route path="/Sneakers" element={<Sneakers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
