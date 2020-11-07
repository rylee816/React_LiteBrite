import React, { useState } from "react";
import "./Box-container.css";

// const colorArray = ["red", "orange", "yello", "limegreen", "blue", "violet", "pink"];
// let rand = Math.round(Math.random() * colorArray.length)
// let randomColor = colorArray[rand]

function Box() {
  let r = Math.floor(Math.random() * 255) + 1;
  let g = Math.floor(Math.random() * 255) + 1;
  let b = Math.floor(Math.random() * 255) + 1;
  let randomColor = `rgb(${r}, ${g}, ${b})`;

  let [color, setColor] = useState("black");

  function pickColor() {
    setColor(randomColor);
  }

  function handleClick() {
    pickColor();
  }

  return (
    <div>
      <div
        style={{ background: color }}
        className="Box"
        onClick={handleClick}
      ></div>
    </div>
  );
}

export default Box;
