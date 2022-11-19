import React from 'react'
import LogoSearch from '../LogoSearch/LogoSearch'
import Profilecard from '../ProfileCard/Profilecard'
import './ProfileSide.css'
const ProfileSide = () => {
  return (
    <div className='profileSide'>
        <LogoSearch/>
        <Profilecard/>
    </div>
  )
}

export default ProfileSide