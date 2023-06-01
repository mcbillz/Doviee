import React from "react";
import { useParams } from "react-router-dom";
import Error from "../Components/Error";
import Products from "../Products";

const SingleProductPage = () => {
  const { productId } = useParams();
  const product = Products.find((product) => product.id === productId);

  if (!product) {
    return <Error errorMessage="Sorry, Product not found!" />;
  }

  return (
    <div>
      <h1>Product Details</h1>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      {/* Render other product details */}
    </div>
  );
};

export default SingleProductPage;
