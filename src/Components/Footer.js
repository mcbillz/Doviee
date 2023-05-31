import React from "react";
import "../CSS/Footer.css";

const year = new Date().getFullYear();
function Footer() {
  return (
    <div className="footer-div">
      <div className="footer-div-1">
        <h1>Got Questions for us?</h1>
        <p>
          "I've been using this store for several months now and it's been a
          game-changer for my shopping experience"
        </p>
        <button>Contact us</button>
      </div>
      <div className="footer-list">
        <div className="footer-list-a">
          <img src="https://res.cloudinary.com/dp6afxo4t/image/upload/v1685205592/doviee/doviee_wu9jrs.png" />
          <p>
            Take a different approach to shopping and enjoy and experience to
            die for.
          </p>
        </div>
        <div>
          <h5>Categories</h5>
          <p>All</p>
          <p>Men fashion</p>
          <p>Women fashion</p>
          <p>Sneakers</p>
          <p>Assesories</p>
          <p>Gift cards</p>
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
        <p>&copy;{year} -Doviee & Co</p>
        <p>PrivacyPolicy - Terms & Conditions</p>
      </div>
    </div>
  );
}

export default Footer;
