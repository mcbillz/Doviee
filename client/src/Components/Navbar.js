import { React, useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "../CSS/Navbar.css";
import CartContext from "../context/cart/CartContext";
import axios from "axios";

function Navbar() {
  const { login, logout, userInformation, cartItems, isLoggedIn, userInfo } =
    useContext(CartContext);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("http://localhost:2000/api/User", {
          withCredentials: true,
        });
        if (response.status === 200) {
          login();
          userInformation(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();
  }, []);

  function handleLogout() {
    axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:2000/api/logout",
    })
      .then(function () {
        logout();
        userInformation({});
      })
      .catch(function (error) {
        console.log(error);
      });
  }

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
          <a href="/">
            <img
              alt="img"
              className="nav-logo"
              src="https://res.cloudinary.com/dp6afxo4t/image/upload/v1685205592/doviee/doviee_wu9jrs.png"
            />
          </a>

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
              {isLoggedIn ? (
                <div>
                  <Link to="/Profile">{userInfo.firstName}</Link>
                  <Link to="/" onClick={handleLogout}>
                    Logout
                  </Link>
                </div>
              ) : (
                <Link to="/Login">Login</Link>
              )}
            </div>
          </div>
          <div>
            <a href="/Cart" id="cart">
              <img
                alt="img"
                id="cart-img"
                src="https://res.cloudinary.com/dp6afxo4t/image/upload/v1685203944/doviee/icons/shopping-cart-2-line_c3dvo5.png"
              />
              {cartItems.length > 0 && (
                <span id="cart-no">{cartItems.length}</span>
              )}
            </a>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="dropdown">
          <button class="dropdown-btn">Categories</button>
          <div class="dropdown-content">
            <a href="/Categories/all">All</a>
            <a href="/Categories/maleProducts">Men fashion</a>
            <a href="/Categories/femaleProducts">Women fashion</a>
            <a href="/Categories/sneakers">Sneakers</a>
            <a href="/Categories/assesories">Assesories</a>
          </div>
        </div>
        <a href="#">About us</a>
        <a href="#">Support</a>
      </div>

      <div style={mobilenavStyle} className="mobile-nav">
        <div>
          <div className="mob">
            <div class="dropdown">
              <button class="dropdown-btn">User</button>
              <div class="dropdown-content">
                {isLoggedIn ? (
                  <div>
                    <Link to="/Profile">{userInfo.firstName}</Link>
                    <Link to="/">Logout</Link>
                  </div>
                ) : (
                  <Link to="/Login">Login</Link>
                )}
              </div>
            </div>
            <div>
              <a href="/Cart" id="cart">
                <img
                  id="cart-img"
                  src="https://res.cloudinary.com/dp6afxo4t/image/upload/v1685203944/doviee/icons/shopping-cart-2-line_c3dvo5.png"
                />
                {cartItems.length > 0 && (
                  <span id="cart-no">{cartItems.length}</span>
                )}
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
