import "../CSS/Login.css";
import Footer from "../Components/Footer";
import React, { useState, useContext } from "react";
import axios from "axios";
import CartContext from "../context/cart/CartContext";
import { useNavigate } from "react-router-dom";

function Login() {
  var signUpStyle = { color: "", background: "" };
  var loginStyle = { color: "", background: "" };

  const [toggle, setToggle] = useState(true);
  if (toggle === true) {
    signUpStyle = { color: "#846d61", background: "#f5ede6" };
    loginStyle = { color: "#e1cbbf", background: "#846d61" };
  } else {
    loginStyle = { color: "#846d61", background: "#f5ede6" };
    signUpStyle = { color: "#e1cbbf", background: "#846d61" };
  }

  function handleSignUpClick() {
    setToggle(false);
  }
  function handleLoginClick() {
    setToggle(true);
  }

  // SIGNUP
  let [signUpFormData, setSignUpFormData] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
  });

  function handleSignUpInputChange(event) {
    const { name, value } = event.target;
    setSignUpFormData((prevData) => ({ ...prevData, [name]: value }));
  }

  const handleSignUpSubmit = async (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:2000/api/signup", signUpFormData)
      .then((response) => {
        if (response.status === 201) {
          console.log(response.data.message);
          alert("User registration successful. Please proceed to login.");
          window.location.href = "/Login";
        } else {
          console.log(response.data.message);
        }
      })
      .catch((error) => {
        console.error("An error occurred during user registration:", error);
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          alert(error.response.data.message);
        } else {
          alert(
            "An error occurred during user registration. Please try again."
          );
        }
      });
  };
  // LOGIN
  const { login, userInformation } = useContext(CartContext);
  const navigate = useNavigate();
  let [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  function handleLoginInputChange(event) {
    const { name, value, type, checked } = event.target;
    const inputValue = type === "checkbox" ? checked : value;
    setLoginFormData((prevData) => ({ ...prevData, [name]: inputValue }));
    console.log(loginFormData);
  }

  const handleloginSubmit = async (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:2000/api/login", loginFormData)
      .then((response) => {
        if (response.status === 201) {
          console.log(response.data.message);
          alert("successful login.");
        } else {
          console.log(response.data.message);
        }
      })
      .catch((error) => {
        console.error("An error occurred while logging in:", error);
        alert("An error occurred while logging in");
      });
  };

  return (
    <div className="Cont">
      <div className="login">
        <div className="infos">
          <div className="info-btn">
            <button onClick={handleSignUpClick} style={signUpStyle}>
              Sign up
            </button>
            <button onClick={handleLoginClick} style={loginStyle}>
              Login
            </button>
          </div>

          {toggle ? (
            <form onSubmit={handleloginSubmit} action="post" className="formL">
              <h2>Login</h2>
              <label className="labelL">Email</label>
              <input
                onChange={handleLoginInputChange}
                value={loginFormData.email}
                name="email"
                className="inputL"
              ></input>
              <label className="labelL">Password</label>
              <input
                onChange={handleLoginInputChange}
                value={loginFormData.password}
                type="password"
                name="password"
                className="inputL"
              ></input>
              <p className="pL">
                <input
                  onChange={handleLoginInputChange}
                  value={loginFormData.remember}
                  name="remember"
                  type="checkbox"
                  className="ck"
                />{" "}
                Remember me
              </p>
              <button type="submit" className="buttonL">
                Login
              </button>
              <a href="#" className="aL">
                <p className="pL">Forgot Password?</p>
              </a>
            </form>
          ) : (
            <form onSubmit={handleSignUpSubmit} className="formL">
              <h2>Sign up</h2>
              <label className="labelL">First name</label>
              <input
                onChange={handleSignUpInputChange}
                value={signUpFormData.fName}
                name="fName"
                className="inputL"
              ></input>
              <label className="labelL">Last name</label>
              <input
                onChange={handleSignUpInputChange}
                value={signUpFormData.lName}
                name="lName"
                className="inputL"
              ></input>
              <label className="labelL">Email</label>
              <input
                onChange={handleSignUpInputChange}
                value={signUpFormData.email}
                name="email"
                className="inputL"
              ></input>
              <label className="labelL">Password</label>
              <input
                onChange={handleSignUpInputChange}
                type="password"
                value={signUpFormData.password}
                name="password"
                className="inputL"
              ></input>
              <button type="submit" className="buttonL">
                Sign up
              </button>
            </form>
          )}
        </div>
        <div className="imgD">
          <img src="https://res.cloudinary.com/dp6afxo4t/image/upload/v1685485471/doviee/tamara-bellis-cvfHyRTBepA-unsplash_xc7t8q.jpg" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Login;
