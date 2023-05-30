import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LandingPage from "../Screens/Landingpage";
import Login from "../Screens/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
