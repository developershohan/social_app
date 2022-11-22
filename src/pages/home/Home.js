import React from 'react'
import PostSide from '../../components/PostSide/PostSide'
//import Profilecard from '../../components/ProfileCard/Profilecard'
import ProfileSide from '../../components/ProfileSide/ProfileSide'
import "./Home.css"
const Home = () => {
  return (
    <div className='home'>
      <ProfileSide/>
      <PostSide/>
      <div className="rightSide">rightside</div>
    </div>
  )
}

export default Home