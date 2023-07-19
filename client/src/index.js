import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import CartState from "./context/cart/CartState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartState>
      <App />
    </CartState>
  </React.StrictMode>
);
