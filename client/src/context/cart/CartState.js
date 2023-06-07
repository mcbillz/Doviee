import { useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";
import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM } from "../Types";

const CartState = ({ children }) => {
  const initalState = {
    showCart: false,
    cartItems: [
      {
        id: "1",
        category: ["all", "femaleProducts"],
        src: [
          "https://res.cloudinary.com/dp6afxo4t/image/upload/v1685291087/doviee/female/amy-harrison-fZGiAepEgyw-unsplash_d7ykvw.jpg",
          "https://res.cloudinary.com/dp6afxo4t/image/upload/v1685291087/doviee/female/amy-harrison-fZGiAepEgyw-unsplash_d7ykvw.jpg",
        ],
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa ab officiis corporis totam et sed, magni voluptates non nostrum mollitia alias, eveniet sunt esse perferendis sint debitis modi illo blanditiis, eligendi aliquid. Veritatis nam iste placeat vitae nobis, quos tempora blanditiis fugiat, iusto cum voluptas. Facilis, quidem. Vero, quaerat quia accusamus ex soluta repellat id pariatur consequuntur sed, error eius veniam ducimus assumenda aut cumque praesentium voluptatem nostrum consequatur fuga nisi! Minus, rerum? Officia doloribus iusto numquam voluptate voluptatem voluptatum ab omnis, neque fugiat nobis rem perferendis beatae corrupti quisquam id, accusantium qui magni molestias eligendi incidunt magnam aperiam. Assumenda.",
        colors: ["black", "white", "brown", "yellow", "blue", "red"],
        sizes: ["S", "M", "L", "XL", "XXL", "XXXL"],
        name: "Knit Sweater product 1",
        price: "30",
        oldPrice: "45",
        netPrice: 30,
        formData: { color: "black", quantity: 1, size: "M" },
      },
    ],
  };

  const [state, dispatch] = useReducer(CartReducer, initalState);

  const addToCart = (product, event, formData, netPrice) => {
    event.preventDefault();
    const newItem = { ...product, formData, netPrice };
    dispatch({ type: ADD_TO_CART, payload: newItem });
  };

  const showHideCart = () => {
    dispatch({ type: SHOW_HIDE_CART });
  };

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: id });
  };

  return (
    <CartContext.Provider
      value={{
        showCart: state.showCart,
        cartItems: state.cartItems,
        addToCart,
        showHideCart,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
