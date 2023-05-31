import { React, useState } from "react";
import "../CSS/Productspage.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Card from "../Components/Card";
import {
  femaleProducts,
  maleProducts,
  Sneakers,
  Assesories,
  giftCards,
} from "../Products";

function Productspage() {
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  const productsTotal = femaleProducts
    .concat(maleProducts)
    .concat(Sneakers)
    .concat(Assesories);
  const productsArray = shuffleArray(productsTotal);
  return (
    <div className="cont">
      <Navbar />
      <div className="display-products">
        {productsArray.map((item) => (
          <Card
            key={item.id}
            pPage={item.url}
            pImg={item.src[0]}
            pName={item.name}
            pPrice={item.price}
            oldPrice={item.oldPrice}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Productspage;
