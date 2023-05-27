import React from "react";
import "../CSS/Btn.css";

function BrownBtn(props) {
  return <button className="brown-btn">{props.text}</button>;
}

function BoarderBrownBtn(props) {
  return <button className="boarder-brown-btn">{props.text}</button>;
}

export { BrownBtn, BoarderBrownBtn };
