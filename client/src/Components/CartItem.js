import { useContext } from "react";
import "../CSS/CartItem.css";
import CartContext from "../context/cart/CartContext";
import formatCurrency from "format-currency";

function CartItem({ item, index }) {
  const { removeItem } = useContext(CartContext);
  let opts = { format: "%s%v", symbol: "$" };
  console.log(item);
  return (
    <div className="cart-item-div">
      <div>
        <img className="cart-item-img" src={item.src[0]} alt="product image" />
      </div>

      <div className="cart-item-details">
        <p>{item.name}</p>
        <p>{formatCurrency(`${item.price}`, opts)}</p>
        <p>x {item.formData.quantity}</p>
        <p>{item.formData.size}</p>
        <p>{item.formData.color}</p>
      </div>

      <div className="cart-item-net-price">
        <h2>{formatCurrency(`${item.netPrice}`, opts)}</h2>
      </div>

      <button className="cart-item-remove" onClick={() => removeItem(index)}>
        <img
          src="https://res.cloudinary.com/dp6afxo4t/image/upload/v1685887032/doviee/close-circle-line_ltmeep.png"
          alt="product image"
        />
      </button>
    </div>
  );
}

export default CartItem;
