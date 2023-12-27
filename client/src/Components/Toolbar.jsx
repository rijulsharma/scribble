import React, { useState } from 'react'
import '../Component-Styles/Toolbar.css'
function Toolbar({ sendColour,sendEraser }) {
    const handleButtonClick = (color) => {
        sendColour(color);
      };
      const handleEraserClick = () => {
        sendEraser(true);
      };
      
      
  return (
    <div>
        <button  className ="colour-button" onClick={() => handleButtonClick('#000000')} style={{ backgroundColor: '#000000' }}></button>
        <button  className ="colour-button" onClick={() => handleButtonClick('#FFFFFF')} style={{ backgroundColor: '#FFFFFF' }}></button>
        <button  className ="colour-button" onClick={() => handleButtonClick('#7F7F7F')} style={{ backgroundColor: '#7F7F7F' }}></button>
        <button  className ="colour-button" onClick={() => handleButtonClick('#C3C3C3')} style={{ backgroundColor: '#C3C3C3' }}></button>
        <button  className ="colour-button" onClick={() => handleButtonClick('#880015')} style={{ backgroundColor: '#880015' }}></button>
        <button  className ="colour-button" onClick={() => handleButtonClick('#B97A57')} style={{ backgroundColor: '#B97A57' }}></button>
        <button  className ="colour-button" onClick={() => handleButtonClick('#ED1C24')} style={{ backgroundColor: '#ED1C24' }}></button>
        <button  className ="colour-button" onClick={() => handleButtonClick('#FFAEC9')} style={{ backgroundColor: '#FFAEC9' }}></button>
        <button  className ="colour-button" onClick={() => handleButtonClick('#FF7F27')} style={{ backgroundColor: '#FF7F27' }}></button>
        <button  className ="colour-button" onClick={() => handleButtonClick('#FFC90E')} style={{ backgroundColor: '#FFC90E' }}></button>
        <button  className ="colour-button" onClick={() => handleButtonClick('#FFF200')} style={{ backgroundColor: '#FFF200' }}></button>
        <button  className ="colour-button" onClick={() => handleButtonClick('#EFE4B0')} style={{ backgroundColor: '#EFE4B0' }}></button>
        <button  className ="colour-button" onClick={() => handleButtonClick('#22B14C')} style={{ backgroundColor: '#22B14C' }}></button>
        <button  className ="colour-button" onClick={() => handleButtonClick('#B5E61D')} style={{ backgroundColor: '#B5E61D' }}></button>
        <button  className ="colour-button" onClick={() => handleButtonClick('#00A2E8')} style={{ backgroundColor: '#00A2E8' }}></button>
        <button  className ="colour-button" onClick={() => handleButtonClick('#99D9EA')} style={{ backgroundColor: '#99D9EA' }}></button>
        <button  className ="colour-button" onClick={() => handleButtonClick('#3F48CC')} style={{ backgroundColor: '#3F48CC' }}></button>
        <button  className ="colour-button" onClick={() => handleButtonClick('#7092BE')} style={{ backgroundColor: '#7092BE' }}></button>
        <button  className ="colour-button" onClick={() => handleButtonClick('#A349A4')} style={{ backgroundColor: '#A349A4' }}></button>
        <button  className ="colour-button" onClick={() => handleButtonClick('#C8BFE7')} style={{ backgroundColor: '#C8BFE7' }}></button>
        
        <button onClick={() => handleEraserClick()}>Eraser</button>
        {/* <button onClick={handleFillBucket}>Fill Bucket</button> */}
    </div>
  )
}

export default Toolbar