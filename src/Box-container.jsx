import React from "react";
import Box from "./Box";
import "./Box-container.css";

function BoxContainer() {
  let componentArr = Array.from({ length: 2000 });

  return (
    <div className="Box-container">
      {componentArr.map((box, index) => {
        return <Box key={index} />;
      })}
    </div>
  );
}

export default BoxContainer;
