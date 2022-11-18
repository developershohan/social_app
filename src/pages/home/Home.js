import React from 'react'
import ProfileSide from '../../components/ProfileSide/ProfileSide'
import "./Home.css"
const Home = () => {
  return (
    <div className='home'>
      <ProfileSide/>
      <div className="postSide">postside</div>
      <div className="rightSide">rightside</div>
    </div>
  )
}

export default Home