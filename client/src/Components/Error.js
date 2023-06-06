import React from "react";
import "../CSS/Error.css";

function Error(props) {
  const { errorMessage } = props;
  return (
    <div className="error-div">
      <img
        className="error-img"
        src="https://res.cloudinary.com/dp6afxo4t/image/upload/v1685632045/doviee/crying_qot6gj.png"
        alt="Sorry!"
      />
      <h2 className="error-h2">{errorMessage}</h2>
    </div>
  );
}

export default Error;
