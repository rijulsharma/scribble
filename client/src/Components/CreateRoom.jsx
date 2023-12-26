import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
function CreateRoom() {
    const [roomLink, setRoomLink] = useState('');
    const [isLinkCopied, setIsLinkCopied] = useState(false);
    const generateRoomLink = () => {
        const roomId = uuidv4();
        const link = `${window.location.origin}/room/${roomId}`;
        setRoomLink(link);
      };
      function copy(){
         const tempTextArea = document.createElement('textarea');
         tempTextArea.value = link;
         document.body.appendChild(tempTextArea);
         tempTextArea.select();
         document.execCommand('copy');
         document.body.removeChild(tempTextArea);
         setIsLinkCopied(true);
      }
      const navigate = useNavigate;
  return (
    <div>
        <input ></input>
        <input></input>
        <p>Invite your friends</p>
        <button onClick={copy}>copy link to clipboard</button>
        <button >Play!</button>
    </div>
  )
}

export default CreateRoom