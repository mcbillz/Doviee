import React, { useContext } from "react";
import Navbar from "../Components/Navbar";
import Error from "../Components/Error";
import Footer from "../Components/Footer";
import CartItem from "../Components/CartItem";
import CartContext from "../context/cart/CartContext";
import formatCurrency from "format-currency";
import "../CSS/Cart.css";

function Cart() {
  const { cartItems } = useContext(CartContext);
  let opts = { format: "%s%v", symbol: "$" };

  const cartTotal = formatCurrency(
    cartItems.reduce((amount, item) => item.netPrice + amount, 0),
    opts
  );
  return (
    <div>
      <Navbar />
      <div id="cart-display">
        {cartItems.length === 0 ? (
          <Error errorMessage="Sorry, Your cart is Empty" />
        ) : (
          cartItems.map((item, index) => (
            <CartItem key={item.id} index={index} item={item} />
          ))
        )}
      </div>
      {cartItems.length === 0 ? (
        <div></div>
      ) : (
        <div>
          <div className="cartTotal">
            <h2>Cart Total:</h2>
            <div style={{ marginLeft: "1vw" }}>{cartTotal}</div>
          </div>
          <div className="cartTotal">
            <a href="/Profile">Edit shipping details</a>
          </div>
          <div className="cartTotal">
            <a href="">
              <button>Proceed to payment</button>
            </a>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Cart;
