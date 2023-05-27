import React, { useState, useEffect } from "react";
import "../CSS/Slider.css";

function Slider(props) {
  const images = [
    "https://res.cloudinary.com/dp6afxo4t/image/upload/v1685204076/doviee/male/andrew-neel-HqtYwlY9dxs-unsplash_ssde6y.jpg",
    "https://res.cloudinary.com/dp6afxo4t/image/upload/v1685204069/doviee/male/hunters-race-hNoSCxPWYII-unsplash_pd6akk.jpg",
    // "https://res.cloudinary.com/dp6afxo4t/image/upload/v1685204064/doviee/male/istockphoto-638896006-612x612_vhommu.jpg",
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
          className={`slid2 ${index === currentImageIndex ? "active" : ""}`}
        />
      ))}
    </div>
  );
}

export default Slider;
