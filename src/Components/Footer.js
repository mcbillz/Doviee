import React from "react";
import "../CSS/Footer.css";

const year = new Date().getFullYear();
function Footer() {
  return (
    <div className="footer-div">
      <div className="footer-div-1">
        <h1>Got Questions for us?</h1>
        <p>
          "I've been using this marketplace for several months now and it's been
          a game-changer for my business"
        </p>
        <button>Contact us</button>
      </div>
      <div className="footer-list">
        <div className="footer-list-a">
          <img src="https://res.cloudinary.com/dp6afxo4t/image/upload/v1685205592/doviee/doviee_wu9jrs.png" />
          <p>Have discover your luxurious new home in the heart of the city</p>
        </div>
        <div>
          <h5>Sell</h5>
          <p>Sell now</p>
          <p>Add Listings</p>
          <p>Reviews</p>
        </div>
        <div>
          <h5>Category</h5>
          <p>
            EUR-Pall A 12 Artikel 1010. Stl 1200 x 800. Virkestjocklek 22 mm.
          </p>
          <p>
            EUR-Pall A 12 Artikel 1010. Stl 1200 x 800. Virkestjocklek 22 mm.
          </p>
          <p>
            EUR-Pall A 12 Artikel 1010. Stl 1200 x 800. Virkestjocklek 22 mm.
          </p>
          <p>
            EUR-Pall A 12 Artikel 1010. Stl 1200 x 800. Virkestjocklek 22 mm.
          </p>
          <p>
            EUR-Pall A 12 Artikel 1010. Stl 1200 x 800. Virkestjocklek 22 mm.
          </p>
        </div>
        <div>
          <h5>Buy</h5>
          <p>Buy Listing</p>
          <p>Sell Listing</p>
        </div>
        <div>
          <h5>Contact</h5>
          <p>Contact customer support</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
      </div>
      <hr />
      <div className="footer-div-3">
        <p>&copy;{year} -Palletecos</p>
        <p>PrivacyPolicy - Terms & Conditions</p>
      </div>
    </div>
  );
}

export default Footer;
