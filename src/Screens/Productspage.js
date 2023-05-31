import { React, useState } from "react";
import ReactPaginate from "react-paginate";
import "../CSS/Productspage.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Card from "../Components/Card";
import Products from "../Products";

function Productspage() {
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  const productsArray = Products;
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
      <div className="display-products">
        {currentItems.map((item, index) => (
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

export default Productspage;
