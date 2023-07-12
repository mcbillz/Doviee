import {
  SHOW_HIDE_CART,
  ADD_TO_CART,
  REMOVE_ITEM,
  USER_INFO,
  LOG,
  LOGOUT,
} from "../Types";

const CartReducer = (state, action) => {
  switch (action.type) {
    case SHOW_HIDE_CART: {
      return {
        ...state,
        showCart: !state.showCart,
      };
    }
    case ADD_TO_CART: {
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    }
    case REMOVE_ITEM: {
      const indexToRemove = action.payload;
      const updatedCartItems = [...state.cartItems];
      updatedCartItems.splice(indexToRemove, 1);
      return {
        ...state,
        cartItems: updatedCartItems,
      };
    }
    case USER_INFO: {
      return {
        ...state,
        userInfo: action.payload,
      };
    }
    case LOG: {
      return {
        ...state,
        isLoggedIn: true,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        isLoggedIn: false,
        userInfo: null,
      };
    }

    default:
      return state;
  }
};

export default CartReducer;
