import React, { useState, useEffect } from "react";
import "../CSS/Slider.css";

function Slider(props) {
  const fimages = [
    "https://res.cloudinary.com/dp6afxo4t/image/upload/v1685204038/doviee/female/freestocks-_3Q3tsJ01nc-unsplash_tmyesa.jpg",
    "https://res.cloudinary.com/dp6afxo4t/image/upload/v1685204036/doviee/female/tamara-bellis-IwVRO3TLjLc-unsplash_shbmvy.jpg",
    "https://res.cloudinary.com/dp6afxo4t/image/upload/v1685204033/doviee/female/force-majeure-00tlC0Clfrs-unsplash_n0hjtu.jpg",
  ];
  const mimages = [
    "https://res.cloudinary.com/dp6afxo4t/image/upload/v1685204076/doviee/male/andrew-neel-HqtYwlY9dxs-unsplash_ssde6y.jpg",
    "https://res.cloudinary.com/dp6afxo4t/image/upload/v1685204069/doviee/male/hunters-race-hNoSCxPWYII-unsplash_pd6akk.jpg",
    "https://res.cloudinary.com/dp6afxo4t/image/upload/v1685289601/doviee/male/david-lezcano-NfZiOJzZgcg-unsplash_edsrfc.jpg",
  ];
  const { gender } = props;
  const images = gender === "female" ? fimages : mimages;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

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
