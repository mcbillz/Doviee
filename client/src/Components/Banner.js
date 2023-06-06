import React from "react";
import "../CSS/Banner.css";

const Banner = (props) => {
  const { img } = props;
  const { url } = props;
  return (
    <div className="advert-banner">
      <div className="ad">
        <img src={img} alt="Slider Image 1" />
      </div>
      <a href={url}>
        <button className="shop-button">Shop</button>
      </a>
    </div>
  );
};

export default Banner;
