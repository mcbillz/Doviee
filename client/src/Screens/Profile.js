import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../CSS/Profile.css";

function Profile() {
  const [toggle, setToggle] = useState(false);
  const [edPhoneNumber, setEdPhoneNumber] = useState("+18761230987");
  const [edAddress, setEdAddress] = useState(
    "no 765 morgan blvd San diego, CA"
  );

  function handleToggle() {
    setToggle(!toggle);
  }
  function handleSubmit() {
    setToggle(!toggle);
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
          <h4>email@gmail.com</h4>
        </div>
        <div className="user-info">
          <h3>Name: </h3>
          <h4>Jack Bauer</h4>
        </div>
        <div className="user-info">
          <h3>Phone No: </h3>
          <h4>{edPhoneNumber}</h4>
        </div>
        <div className="user-info">
          <h3>Address: </h3>
          <h4>{edAddress}</h4>
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
