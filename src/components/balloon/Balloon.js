import React from "react";
import "./Balloon.css";

function Balloon({ color, onClick, popped, answer }) {
  return (
    <div className="balloon-container">
      <div
        className={`balloon ${color} ${popped ? "pop" : ""}`}
        onClick={onClick}
        style={{fontSize: "15px", textAlign: "center"}}
      >
         <span className="balloon-text">{popped ? "X" : answer}</span>
      </div>
    </div>
  );
}

export default Balloon;