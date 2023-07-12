import { useState, useEffect, useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";
import {
  SHOW_HIDE_CART,
  ADD_TO_CART,
  REMOVE_ITEM,
  USER_INFO,
  LOG,
  LOGOUT,
} from "../Types";

const CartState = ({ children }) => {
  const initialState = {
    showCart: false,
    cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
    isLoggedIn: localStorage.getItem("isLoggedIn") === false,
    userInfo: JSON.parse(localStorage.getItem("userInfo")) || null,
  };

  const [state, dispatch] = useReducer(CartReducer, initialState);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
  }, [state.cartItems]);

  useEffect(() => {
    localStorage.setItem("isLoggedIn", state.isLoggedIn);
  }, [state.isLoggedIn]);

  useEffect(() => {
    localStorage.setItem("userInfo", JSON.stringify(state.userInfo));
  }, [state.userInfo]);

  const userInformation = (theInformation) => {
    dispatch({ type: USER_INFO, payload: theInformation });
  };

  const login = () => {
    dispatch({ type: LOG });
  };

  const addToCart = (product, event, formData, netPrice) => {
    event.preventDefault();
    const newItem = { ...product, formData, netPrice };
    dispatch({ type: ADD_TO_CART, payload: newItem });
  };

  const showHideCart = () => {
    dispatch({ type: SHOW_HIDE_CART });
  };

  const removeItem = (index) => {
    dispatch({ type: REMOVE_ITEM, payload: index });
  };

  const logout = () => {
    dispatch({ type: LOGOUT });
  };

  return (
    <CartContext.Provider
      value={{
        showCart: state.showCart,
        cartItems: state.cartItems,
        isLoggedIn: state.isLoggedIn,
        userInfo: state.userInfo,
        addToCart,
        showHideCart,
        removeItem,
        userInformation,
        login,
        logout,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
