import React, { useState } from 'react';
import '../Component-Styles/user.css';
import avatar1 from '../assets/IMG_2609.PNG';
import avatar2 from '../assets/IMG_2610.PNG';
import avatar3 from '../assets/IMG_2611.PNG';
import avatar4 from '../assets/IMG_2612.PNG';
import avatar5 from '../assets/IMG_2613.PNG';
import { useNavigate } from 'react-router-dom';

function User({isAdmin}) {
  const navigate = useNavigate();
  const [selectedAvatar, setSelectedAvatar] = useState(avatar1);

  const handleAvatarClick = (avatar) => {
    setSelectedAvatar(avatar);
  };

  function CreateRoomButtonClick({ isAdmin }) {
    if (isAdmin === true) {
      navigate('/createRoom');
    } else {
      navigate('/room');
    }
  }

  return (
    <div className='user'>
      <h1>Scribble</h1>
      <div className='avatars'>
        <img className='avatar' src={avatar1} onClick={() => handleAvatarClick(avatar1)} />
        <img className='avatar' src={avatar2} onClick={() => handleAvatarClick(avatar2)} />
        <img className='avatar' src={avatar3} onClick={() => handleAvatarClick(avatar3)} />
        <img className='avatar' src={avatar4} onClick={() => handleAvatarClick(avatar4)} />
        <img className='avatar' src={avatar5} onClick={() => handleAvatarClick(avatar5)} />
      </div>

      <input placeholder='Enter name' />
      <img className='selected-avatar' src={selectedAvatar} />
      {isAdmin === true ? (
        <button onClick={() => CreateRoomButtonClick({ isAdmin: true })}>Create Room</button>
      ) : (
        <button onClick={() => CreateRoomButtonClick({ isAdmin: false })}>Play!</button>
      )}
    </div>
  );
}

export default User;
