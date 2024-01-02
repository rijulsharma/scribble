import React from 'react'
import User from '../Components/user'
function home({isAdmin}) {
  return (
    <div>
      <User isAdmin={isAdmin}></User>
      
        
    </div>
  )
}

export default home