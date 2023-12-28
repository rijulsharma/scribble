import React, { useEffect } from 'react';
import Header from '../Components/Header';
import LeaderBoard from '../Components/LeaderBoard';
import Canvas from '../Components/Canvas';
import Chat from '../Components/Chat';
import { io } from 'socket.io-client';

const Room = ({ roomId }) => {
  useEffect(() => {
    const socket = io('http://localhost:3001');

    // Emit a message to notify the server that a new user has joined
    socket.emit('joinRoom', { roomId });

    // Listen for a message event from the server indicating a new user has connected
    socket.on('userConnected', (data) => {
      console.log(`User ${data.userId} connected to the room`);
      // You can display a message or perform any other action here
    });

    return () => {
      // Clean up when the component unmounts
      socket.disconnect();
    };
  }, [roomId]);

  return (
    <div>
      <Header></Header>
      <LeaderBoard></LeaderBoard>
      <Canvas></Canvas>
      <Chat roomId={roomId}></Chat>
    </div>
  );
};

export default Room;
