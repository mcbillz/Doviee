import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import "../CSS/Productspage.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Card from "../Components/Card";
import axios from "axios";
import Error from "../Components/Error";
import { useParams } from "react-router-dom";

function Productspage() {
  const { searchInput } = useParams();
  const [Products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState(searchInput || "");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchProducts = () => {
      axios({
        method: "GET",
        withCredentials: true,
        url: "http://localhost:2000/api/Products",
      })
        .then(function (res) {
          setProducts(res.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const inSearch = () => {
      const filteredResults = Array.isArray(Products)
        ? Products.filter((item) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : [];
      setSearchResults(filteredResults);
    };

    inSearch();
  }, [searchQuery, Products]);

  const handleSearchInput = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    const filteredResults = Array.isArray(Products)
      ? Products.filter((item) =>
          item.name.toLowerCase().includes(query.toLowerCase())
        )
      : [];
    setSearchResults(filteredResults);
    setCurrentPage(0);
  };

  const productsArray = searchQuery === "" ? Products : searchResults;
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(0);

  const pageCount = Math.ceil(productsArray.length / itemsPerPage);

  const truncatedPageCount = pageCount > 10 ? 10 : pageCount;
  const isTruncated = pageCount > 10;

  const currentItems = productsArray.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };
  return (
    <div className="cont">
      <Navbar />
      <form>
        <input
          style={{ borderColor: "#e1cbbf" }}
          placeholder="Search products"
          className="search"
          value={searchQuery}
          onChange={handleSearchInput}></input>
        <button disabled className="search-btn">
          <img src="https://res.cloudinary.com/dp6afxo4t/image/upload/v1685206701/doviee/icons/search-line_umfkmq.png" />
        </button>
      </form>
      <div className="display-products">
        {currentItems.length === 0 ? (
          <Error errorMessage="Sorry! no products found" />
        ) : (
          currentItems.map((item, index) => (
            <Card
              key={item.id}
              pPage={`/Product/${item.id}`}
              pImg={item.src[0]}
              pName={item.name}
              pPrice={item.price}
              oldPrice={item.oldPrice}
            />
          ))
        )}
      </div>
      <ReactPaginate
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={isTruncated ? 5 : pageCount}
        onPageChange={handlePageChange}
        containerClassName="pagination"
        activeClassName="active"
        nextLabel={isTruncated ? "Next" : ""}
        breakLabel={isTruncated ? "..." : ""}
        breakClassName="break"
        activeClassName="active-page"
      />
      <Footer />
    </div>
  );
}

export default Productspage;
