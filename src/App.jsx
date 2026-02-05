// layout of the app 

import { useState } from "react";
import { initialCubeState } from "./features/solver/cubeState";

export default function App() {
  const [cubeData, setCubeData] = useState(initialCubeState);
  const [selectedColor, setSelectedColor] = useState("white");

  const handleStickerClick = (face, index) => {
    if (index === 4) {
      console.warn("Centers cannot be changed!");
      return;
    }

    setCubeData((previousCubeData) => {
      return {
        ...previousCubeData,
        [face]: previousCubeData[face].map((color, i) => 
          i === index ? selectedColor : color
        )
      };
    });
  };

  return (
    <div className="app">
      <h1>Rubik's Solver</h1>
    </div>
  );
}