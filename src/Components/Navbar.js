import { React, useState } from "react";
import { Link } from "react-router-dom";
import "../CSS/Navbar.css";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  let mobilenavStyle = {};
  if (toggle === true) {
    mobilenavStyle = {
      width: "50%",
      height: "100vh",
      position: "fixed",
      top: "0px",
      right: "0",
      left: "0",
      backgroundColor: "#fff",
      boxShadow: "0px 40px 80px rgba(170, 170, 170, 0.25)",
      padding: "20px",
      zIndex: "99",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    };
  } else {
    mobilenavStyle = { display: "none" };
  }

  return (
    <div>
      <div className="nav">
        <div className="socials none-mob">
          <a>
            <img src="https://res.cloudinary.com/dp6afxo4t/image/upload/v1685203944/doviee/icons/twitter-line_sqkx1b.png" />
          </a>
          <a>
            <img src="https://res.cloudinary.com/dp6afxo4t/image/upload/v1685203944/doviee/icons/facebook-fill_vlkvvo.png" />
          </a>
          <a>
            <img src="https://res.cloudinary.com/dp6afxo4t/image/upload/v1685203944/doviee/icons/instagram-line_jb1i6e.png" />
          </a>
        </div>
        <div className="nav-mid">
          <img
            className="nav-logo"
            src="https://res.cloudinary.com/dp6afxo4t/image/upload/v1685205592/doviee/doviee_wu9jrs.png"
          />
          <div className="hamburger-menu" onClick={() => setToggle(!toggle)}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
        <div className="user-cart-div none-mob">
          <div class="dropdown">
            <button class="dropdown-btn">User</button>
            <div class="dropdown-content">
              <Link to="/Login">Login</Link>
            </div>
          </div>
          <div>
            <a>
              <img src="https://res.cloudinary.com/dp6afxo4t/image/upload/v1685203944/doviee/icons/shopping-cart-2-line_c3dvo5.png" />
            </a>
          </div>
        </div>
      </div>

      <form>
        <input placeholder="Search products" className="search"></input>
        <button className="search-btn" type="submit">
          <img src="https://res.cloudinary.com/dp6afxo4t/image/upload/v1685206701/doviee/icons/search-line_umfkmq.png" />
        </button>
      </form>
      <div class="container">
        <div class="dropdown">
          <button class="dropdown-btn">Categories</button>
          <div class="dropdown-content">
            <a href="#">All</a>
            <a href="#">Men fashion</a>
            <a href="#">Women fashion</a>
            <a href="#">Sneakers</a>
            <a href="#">Assesories</a>
            <a href="#">Gift cards</a>
          </div>
        </div>
        <a href="#">About us</a>
        <a href="#">Support</a>
      </div>

      {/* mobilenav */}

      <div style={mobilenavStyle} className="mobile-nav">
        <div>
          <div className="mob">
            <div class="dropdown">
              <button class="dropdown-btn">User</button>
              <div class="dropdown-content">
                <Link to="/Login">Login</Link>
              </div>
            </div>
            <div>
              <a>
                <img src="https://res.cloudinary.com/dp6afxo4t/image/upload/v1685203944/doviee/icons/shopping-cart-2-line_c3dvo5.png" />
              </a>
            </div>
          </div>
          <div className="mobsc">
            <a>
              <img src="https://res.cloudinary.com/dp6afxo4t/image/upload/v1685203944/doviee/icons/twitter-line_sqkx1b.png" />
            </a>
            <a>
              <img src="https://res.cloudinary.com/dp6afxo4t/image/upload/v1685203944/doviee/icons/facebook-fill_vlkvvo.png" />
            </a>
            <a>
              <img src="https://res.cloudinary.com/dp6afxo4t/image/upload/v1685203944/doviee/icons/instagram-line_jb1i6e.png" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
