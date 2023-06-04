import { React, useState } from "react";
import "../CSS/Login.css";
import Footer from "../Components/Footer";

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
            <form action="post" className="formL">
              <h2>Login</h2>
              <input
                name="formAction"
                type="hidden"
                value="login"
                className="inputL"
              ></input>
              <label className="labelL">Email</label>
              <input name="email" className="inputL"></input>
              <label className="labelL">Password</label>
              <input type="password" name="password" className="inputL"></input>
              <p className="pL">
                <input name="remember" type="checkbox" className="ck" />{" "}
                Remember me
              </p>
              <button type="submit" className="buttonL">
                Login
              </button>
              <a href="" className="aL">
                <p className="pL">Forgot Password?</p>
              </a>
            </form>
          ) : (
            <form className="formL">
              <h2>Sign up</h2>
              <input
                name="formAction"
                type="hidden"
                value="Sign up"
                className="inputL"
              ></input>
              <label className="labelL">First name</label>
              <input name="fName" className="inputL"></input>
              <label className="labelL">Last name</label>
              <input name="lName" className="inputL"></input>
              <label className="labelL">Email</label>
              <input name="email" className="inputL"></input>
              <label className="labelL">Password</label>
              <input type="password" name="password" className="inputL"></input>
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
