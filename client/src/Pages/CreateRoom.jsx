import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
function CreateRoom() {
  const [roomLink, setRoomLink] = useState('');
  const [isLinkCopied, setIsLinkCopied] = useState(false);

  const generateRoomLink = () => {
    const roomId = uuidv4();
    return `${window.location.origin}/room/${roomId}`;
  };

  useEffect(() => {
    setRoomLink(generateRoomLink());
  }, []); // Run only once on mount

  useEffect(() => {
    console.log(roomLink);
  }, [roomLink]); 


  function copy() {
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = roomLink;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextArea);
    setIsLinkCopied(true);
  }

  const navigate = useNavigate(); 
  const playButtonClick = () => {
    window.location.href = roomLink;
  };

  return (
    <div>
      <input />
      <input />
      <p>Invite your friends</p>
      <button onClick={copy}>Copy link to clipboard</button>
      <button onClick={() => playButtonClick()}>Play!</button>
    </div>
  );
}

export default CreateRoom;
