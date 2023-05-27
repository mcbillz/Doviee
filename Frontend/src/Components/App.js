import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LandingPage from "../Screens/Landingpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
