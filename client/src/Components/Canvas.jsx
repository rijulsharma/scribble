import React from 'react'
import CanvasDraw from 'react-canvas-draw';
function Canvas() {
  return (
    <div>
        <CanvasDraw
          // You can add props and customize the canvas here
          canvasWidth={1000}
          canvasHeight={500}
        />
    </div>
  )
}

export default Canvas