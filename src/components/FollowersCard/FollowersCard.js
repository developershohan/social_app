import React from 'react'
import { Followers } from '../../data/FollowersData' 
import './FollowersCard.css'
const FollowersCard = () => {
  return (
    <div className='followers_card'>
        <h3>Who is following you</h3>
        <div className="fc_list">

        {Followers.map((element)=>{
            return (
                <div className='followers'>
                    <div className="followers_details">
                        <img src={element.img} alt="" />
                        <div className="fc_name">

                        <h3>{element.name}</h3>
                        <p>@{element.username}</p>
                        </div>
                    </div>
                    <button className='btn_fc'>
                        Follow
                    </button>
                </div>
            )
        })}
        </div>
    </div>
  )
}

export default FollowersCard