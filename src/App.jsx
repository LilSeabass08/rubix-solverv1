// layout of the app 

import { useState } from "react";
import { initialCubeState } from "./features/solver/cubeState";
import ColorPicker from "./components/colorPicker.jsx";
import GridFace from "./components/gridFace.jsx";
import StatusPanel from "./components/validationPanel.jsx";
import GridLayout from "./components/cubeGridLayout.jsx";


export default function App() {
  const [cubeData, setCubeData] = useState(initialCubeState);
  const [selectedColor, setSelectedColor] = useState("white");

  const handleReset = () => {
    setCubeData(initialCubeState);
    setSelectedColor("white");
  };


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
      <ColorPicker
        activeColor = {selectedColor}
        onColorClick = {setSelectedColor}
      />
      <StatusPanel
        onReset={handleReset}
      />
      <div style={{ marginTop: '50px', display: 'flex', justifyContent: 'center' }}>
      <GridLayout 
        cubeData={cubeData}
        onStickerClick={handleStickerClick}
      />
      </div>
    </div>
  );
}