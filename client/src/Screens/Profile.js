import React, { useState, useContext, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../CSS/Profile.css";
import CartContext from "../context/cart/CartContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Profile() {
  const { login, userInformation, userInfo } = useContext(CartContext);
  const [toggle, setToggle] = useState(false);
  const [edPhoneNumber, setEdPhoneNumber] = useState(userInfo.number);
  const [edAddress, setEdAddress] = useState(userInfo.address);
  const [displayEmail, setDisplayEmail] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [displayPhoneNumber, setDisplayPhoneNumber] = useState("");
  const [displayAddress, setDisplayAddress] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("http://localhost:2000/api/User", {
          withCredentials: true,
        });

        if (response.status === 200) {
          login();
          userInformation(response.data);
          setDisplayPhoneNumber(userInfo.number);
          setDisplayAddress(userInfo.address);
          setDisplayEmail(userInfo.username);
          setDisplayName(userInfo.firstName + " " + userInfo.lastName);
        } else {
          navigate("/Login");
        }
      } catch (error) {
        navigate("/Login");
      }
    };
    fetchUser();
  }, [login, userInfo, userInformation, navigate]);

  function handleToggle() {
    setToggle(!toggle);
  }
  function handleSubmit() {
    const initiatingUser = userInfo.username;
    setToggle(!toggle);
    axios({
      method: "POST",
      data: { edPhoneNumber, edAddress, initiatingUser },
      withCredentials: true,
      url: "http://localhost:2000/api/edit-info",
    })
      .then(function (res) {
        // window.location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
  }
  function handledPh(event) {
    setEdPhoneNumber(event.target.value);
  }
  function handledAd(event) {
    setEdAddress(event.target.value);
  }
  return (
    <div className="Prof">
      <Navbar />
      <div className="Prof-div">
        <div className="user-info">
          <h3>Email: </h3>
          <h4>{displayEmail}</h4>
        </div>
        <div className="user-info">
          <h3>Name: </h3>
          <h4>{displayName}</h4>
        </div>
        <div className="user-info">
          <h3>Phone No: </h3>
          <h4>{displayPhoneNumber}</h4>
        </div>
        <div className="user-info">
          <h3>Address: </h3>
          <h4>{displayAddress}</h4>
        </div>
        <button onClick={handleToggle} className="ed-btn">
          Edit
        </button>
      </div>
      {toggle ? (
        <div>
          <form className="ed-frm">
            <label>Phone number</label>
            <input onChange={handledPh} value={edPhoneNumber}></input>
            <label>Address</label>
            <input onChange={handledAd} value={edAddress}></input>
            <button onClick={handleSubmit} className="ed-btn">
              Submit
            </button>
          </form>
        </div>
      ) : (
        <div></div>
      )}

      <Footer />
    </div>
  );
}

export default Profile;
