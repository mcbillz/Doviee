import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/Landingpage.css";
import Navbar from "../Components/Navbar";
import Slider from "../Components/Slider";
import Card from "../Components/Card";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import axios from "axios";
import { BrownBtn } from "../Components/Btns";

function Landingpage() {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchInput.trim() !== "") {
      navigate(`/Productspage/${searchInput}`);
    }
  };

  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
  };

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const [Products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("http://localhost:2000/api/Products");
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const femaleProducts = Array.isArray(Products)
    ? Products.filter((product) => product.category.includes("femaleProducts"))
    : [];
  const maleProducts = Array.isArray(Products)
    ? Products.filter((product) => product.category.includes("maleProducts"))
    : [];

  const shuffledFArray = shuffleArray(femaleProducts);
  const randomFItems = shuffledFArray.slice(0, 4);

  const shuffledMArray = shuffleArray(maleProducts);
  const randomMItems = shuffledMArray.slice(0, 4);
  return (
    <div className="par">
      <Navbar />
      <form onSubmit={handleSearchSubmit}>
        <input
          style={{ borderColor: "#e1cbbf" }}
          placeholder="Search products"
          className="search"
          value={searchInput}
          onChange={handleSearchInput}></input>
        <button type="submit" className="search-btn">
          <img src="https://res.cloudinary.com/dp6afxo4t/image/upload/v1685206701/doviee/icons/search-line_umfkmq.png" />
        </button>
      </form>
      <div className="section1">
        <Slider gender="female" />
        <div className="sec1text">
          <h1>STYLE</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
            itaque quam omnis est, ex voluptatem tenetur accusamus soluta animi
            cupiditate incidunt eveniet sequi impedit. Accusantium facilis magni
            reprehenderit ex, similique ab quisquam in veritatis cum voluptatum
            facere fugit dicta ea vel recusandae aliquam laboriosam doloribus
            odit non necessitatibus eius ullam.
          </p>
          <BrownBtn text="Shop" />
        </div>
      </div>
      <div className="section1-5 section3">
        {randomMItems.map((item) => (
          <Card
            key={item.id}
            pPage={`/Product/${item.id}`}
            pImg={item.src[0]}
            pName={item.name}
            pPrice={item.price}
            oldPrice={item.oldPrice}
          />
        ))}
      </div>
      <div className="section2">
        <Slider gender="male" />
      </div>
      <div className="section3">
        {randomFItems.map((item) => (
          <Card
            key={item.id}
            pPage={`/Product/${item.id}`}
            pImg={item.src[0]}
            pName={item.name}
            pPrice={item.price}
            oldPrice={item.oldPrice}
          />
        ))}
      </div>
      <div className="section4">
        <Banner
          img="https://res.cloudinary.com/dp6afxo4t/image/upload/v1685204038/doviee/female/freestocks-_3Q3tsJ01nc-unsplash_tmyesa.jpg"
          url=""
        />
      </div>
      <div className="section5">
        <div className="subscribe">
          <input placeholder="Your E-mail" type="e-mail"></input>
          <button type="submit">Subcribe</button>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Landingpage;
