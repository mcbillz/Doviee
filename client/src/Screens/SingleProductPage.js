import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Error from "../Components/Error";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import axios from "axios";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "../CSS/SingleProductPage.css";
import formatCurrency from "format-currency";
import CartContext from "../context/cart/CartContext";

const SingleProductPage = () => {
  const { addToCart } = useContext(CartContext);
  let opts = { format: "%s%v", symbol: "$" };

  const { productId } = useParams();

  const [product, setProduct] = useState({});

  const [formData, setFormData] = useState({
    quantity: 1,
    size: "",
    color: "",
  });
  const [netPrice, setNetPrice] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get(
        `http://localhost:2000/api/Product/${productId}`
      );
      setProduct(data);
      setNetPrice(data.price);
    };
    fetchProducts();
  }, [productId]);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }

  function handleIncrease(event) {
    event.preventDefault();
    const newQuantity = formData.quantity + 1;
    setFormData({ ...formData, quantity: newQuantity });
    setNetPrice(newQuantity * product.price);
  }

  function handleDecrease(event) {
    event.preventDefault();
    if (formData.quantity > 1) {
      const newQuantity = formData.quantity - 1;
      setFormData({ ...formData, quantity: newQuantity });
      setNetPrice(newQuantity * product.price);
    }
  }
  if (!product) {
    return <Error errorMessage="Sorry, Product not found!" />;
  }

  return (
    <div className="cont">
      <Navbar />
      <div className="main-cont">
        <div className="single-slider-div">
          <Splide>
            {product?.src?.map((src, index) => (
              <SplideSlide>
                <img key={index} src={src} alt="product img" />
              </SplideSlide>
            ))}
          </Splide>
        </div>
        <div className="single-info-div">
          <h1 className="product-info-h1">{product.name}</h1>
          <h2 className="product-info-h2">Description</h2>
          <p className="description">{product.description}</p>
          <h3 className="product-info-h3">
            {formatCurrency(`${product.price}`, opts)}
            <span>{product.oldPrice}</span>
          </h3>
          <form
            className="order-spec"
            onSubmit={(event) => addToCart(product, event, formData, netPrice)}>
            <button className="increase" onClick={handleIncrease}>
              +
            </button>
            <input
              type="number"
              name="quantity"
              className="quantity"
              value={formData.quantity}
              onChange={handleInputChange}
              disabled
            />
            <button className="decrease" onClick={handleDecrease}>
              -
            </button>
            <select
              name="size"
              className="sizes"
              value={formData.size}
              onChange={handleInputChange}>
              <option disabled selected className="size-option">
                Size
              </option>
              {product?.sizes?.map((size, index) => (
                <option key={index} className="size-option">
                  {size}
                </option>
              ))}
            </select>
            <select
              name="colour"
              className="colours"
              value={formData.color}
              onChange={handleInputChange}>
              <option disabled selected className="colour-option">
                Color
              </option>
              {product?.colors?.map((color, index) => (
                <option key={index} className="size-option">
                  {color}
                </option>
              ))}
            </select>
            {product.availability ? (
              <button className="add-to-cart" type="submit">
                Add to Cart
              </button>
            ) : (
              <button
                style={{ backgroundColor: "gray" }}
                disabled
                className="add-to-cart"
                type="submit">
                Out of stock
              </button>
            )}
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SingleProductPage;
