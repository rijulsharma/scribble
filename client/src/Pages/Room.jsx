import React from 'react';
import Header from '../Components/Header';
import LeaderBoard from '../Components/LeaderBoard';
import Canvas from '../Components/Canvas';
import Chat from '../Components/Chat';
const Room = ({ roomId }) => {
  

  return (
    <div>
      <Header></Header>
      <LeaderBoard></LeaderBoard>
      <Canvas></Canvas>
      <Chat></Chat>
      
    </div>
  );
};

export default Room;