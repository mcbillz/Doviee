import React from "react";
import { useParams } from "react-router-dom";
import Error from "../Components/Error";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Products from "../Products";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "../CSS/SingleProductPage.css";

const SingleProductPage = () => {
  const { productId } = useParams();
  const product = Products.find((product) => product.id === productId);

  if (!product) {
    return <Error errorMessage="Sorry, Product not found!" />;
  }

  return (
    <div className="cont">
      <Navbar />
      <div className="main-cont">
        <div className="single-slider-div">
          <Splide>
            {product.src.map((src, index) => (
              <SplideSlide>
                <img src={src} alt="product image" />
              </SplideSlide>
            ))}
          </Splide>
        </div>
        <div className="single-info-div">
          <h1 className="product-info-h1">{product.name}</h1>
          <h2 className="product-info-h2">Description</h2>
          <p className="description">{product.description}</p>
          <h3 className="product-info-h3">
            {product.price}
            <span>{product.oldPrice}</span>
          </h3>
          <form className="order-spec">
            <button className="increase">+</button>
            <input name="quantity" className="quantity" value={1} disabled />
            <button className="decrease">-</button>
            <select name="size" className="sizes">
              <option disabled selected className="size-option">
                Size
              </option>
              {product.sizes.map((size, index) => (
                <option className="size-option">{size}</option>
              ))}
            </select>
            <select name="colour" className="colours">
              <option disabled selected className="colour-option">
                Color
              </option>
              {product.colors.map((color, index) => (
                <option className="size-option">{color}</option>
              ))}
              <option className="colour-option">Yellow</option>
            </select>
            <button className="add-to-cart">Add to Cart</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SingleProductPage;
