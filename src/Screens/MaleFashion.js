import { React, useState } from "react";
import ReactPaginate from "react-paginate";
import "../CSS/Productspage.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Card from "../Components/Card";
import Products from "../Products";
import Error from "../Components/Error";

function MaleFashion() {
  const maleProducts = Products.filter((product) =>
    product.category.includes("maleProducts")
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchInput = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    // Perform the search logic here
    const filteredResults = maleProducts.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  const productsArray = searchQuery === "" ? maleProducts : searchResults;
  // PAGINATION
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(0);

  // Calculate the total number of pages
  const pageCount = Math.ceil(productsArray.length / itemsPerPage);

  const truncatedPageCount = pageCount > 10 ? 10 : pageCount;
  const isTruncated = pageCount > 10;

  // Get the current slice of items to display
  const currentItems = productsArray.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  // Handle page change
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
          onChange={handleSearchInput}
        ></input>
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
              pPage={item.url}
              pImg={item.src[0]}
              pName={item.name}
              pPrice={item.price}
              oldPrice={item.oldPrice}
            />
          ))
        )}
      </div>
      {/* Render pagination component */}
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

export default MaleFashion;
