import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [childrenColor, setChildrenColor] = useState("#fff")
  function handleChange(newChildColor){
    const newRandomColor = getRandomColor();
    setColor(newRandomColor); //updates the value of the state
    setChildrenColor(newChildColor)
  }
  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child onChangeColor={handleChange} color={childrenColor}/>
      <Child onChangeColor={handleChange} color={childrenColor}/>
    </div>
  );
}

export default Parent;
