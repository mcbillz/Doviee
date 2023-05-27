import React, { useState, useEffect } from "react";
import "../CSS/Slider.css";

function Slider(props) {
  const images = [
    "https://res.cloudinary.com/dp6afxo4t/image/upload/v1685204038/doviee/female/freestocks-_3Q3tsJ01nc-unsplash_tmyesa.jpg",
    "https://res.cloudinary.com/dp6afxo4t/image/upload/v1685204036/doviee/female/tamara-bellis-IwVRO3TLjLc-unsplash_shbmvy.jpg",
    "https://res.cloudinary.com/dp6afxo4t/image/upload/v1685204033/doviee/female/force-majeure-00tlC0Clfrs-unsplash_n0hjtu.jpg",
  ]; // Replace with your image URLs
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the image index, or reset to 0 when reaching the end
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change the duration (in milliseconds) between each image

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  return (
    <div className="slider">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          className={`slider-image ${
            index === currentImageIndex ? "active" : ""
          }`}
        />
      ))}
    </div>
  );
}

export default Slider;
