import React, { useRef, useState, useEffect } from 'react';
import CanvasDraw from 'react-canvas-draw';
import Toolbar from './Toolbar';

const Canvas = () => {
  const canvasRef = useRef(null);
  const [brushColor, setBrushColor] = useState('#000000');

  const handleColorChange = (color) => {
    setBrushColor(color);
  };

  const handleEraser = () => {
  
    canvasRef.current.clear();
  };
  const handleFillBucket = () => {
   
    console.log("Fill Bucket Clicked");
  };

  return (
    <div>
      <div>
      <Toolbar sendColour={handleColorChange} sendEraser={handleEraser}></Toolbar>
      </div>
      <CanvasDraw
        ref={canvasRef}
        canvasWidth={1000}
        canvasHeight={500}
        brushColor={brushColor}
        backgroundColor={'#FFFFFF'}
        brushRadius={2}
        hideGrid={true}
      />
    </div>
  );
};

export default Canvas;
