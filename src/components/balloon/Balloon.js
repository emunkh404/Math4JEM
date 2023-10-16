import React from "react";
import "./Balloon.css";

function Balloon({ color, onClick, popped, answer }) {
  const handleBalloonClick = () => {
    if (!popped) {
      onClick(color);
    }
  };

  return (
    <div className="balloon-container">
      <div
        className={`balloon ${color} ${popped ? "pop" : ""}`}
        onClick={handleBalloonClick}
        style={{ fontSize: "15px", textAlign: "center" }}
      >
        <span className="balloon-text">{popped ? "X" : answer}</span>
        {popped && <div className="egg-crack" />}
      </div>
    </div>
  );
}

export default Balloon;
