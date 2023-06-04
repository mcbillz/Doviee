import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../CSS/Profile.css";

function Profile() {
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
          <h4>+18761234098</h4>
        </div>
        <div className="user-info">
          <h3>Address: </h3>
          <h4>No 233 morgan john blvd 6778 San Diego, CA</h4>
        </div>
        {/* <div className="user-info">
          <h3>Email: </h3>
          <h4>email@gmail.com</h4>
        </div> */}
      </div>

      <Footer />
    </div>
  );
}

export default Profile;
