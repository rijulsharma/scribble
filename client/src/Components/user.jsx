import React, { useState } from 'react'
import '../Component-Styles/user.css'
import avatar1 from '../assets/IMG_2609.PNG'
import avatar2 from '../assets/IMG_2610.PNG'
import avatar3 from '../assets/IMG_2611.PNG'
import avatar4 from '../assets/IMG_2612.PNG'
import avatar5 from '../assets/IMG_2613.PNG'

function User() {
  const [selectedAvatar,setSelectedAvatar] = useState(avatar1);
  const handleAvatarClick  =(avatar) => {
    setSelectedAvatar(avatar);
  }
  return (
    <div >
      <h1>Scribble</h1>
      <div className='avatars'>
      <img className='avatar' src={avatar1} onClick={() => handleAvatarClick(avatar1)}></img>
      <img className='avatar' src={avatar2} onClick={() => handleAvatarClick(avatar2)}></img>
      <img className='avatar' src={avatar3} onClick={() => handleAvatarClick(avatar3)}></img>
      <img className='avatar' src={avatar4} onClick={() => handleAvatarClick(avatar4)}></img>
      <img className='avatar' src={avatar5} onClick={() => handleAvatarClick(avatar5)}></img>
      </div>

         
       
        <input placeholder='Enter name'></input>
        <img className='selected-avatar' src={selectedAvatar}></img>
        <button>create room</button>
        
    </div>
  )
}

export default User;