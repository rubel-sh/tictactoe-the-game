import React from "react";
import "./ResetGame.css";
const ResetGame = ({ resetBoard }) => {
  return (
    <div className="resetbutton-wrapper">
      <button className="resetbutton" onClick={resetBoard}>
        Reset
      </button>
    </div>
  );
};

export default ResetGame;
