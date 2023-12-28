import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3001'); 

const Chat = ({ roomId }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Listen for incoming messages
    socket.on('message', (data) => {
      // Use a callback function to ensure that you have the latest state
      setMessages((prevMessages) => [...prevMessages, data]);
    });
  
    // Clean up on component unmount
    return () => {
      socket.disconnect();
    };
  }, []); 

 

  
const sendMessage = () => {
  socket.emit('message', { text: message });
  setMessage(''); 
  console.log('Sent message:', { text: message });
};


  return (
    <div>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>{msg.text}</div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chat;
