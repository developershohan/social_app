import React from 'react'
import "./LogoSearch.css"
import { AiOutlineUser } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";

const LogoSearch = () => {
  return (
    <div className='logoSearch'>
        <div className="profileLogo">
            <h3>Shohan's Chat</h3>
            <AiOutlineUser/>
        </div>
        <div className="search">
        <input type="text" placeholder='#Explore' />
           <div className="s_icon">
               <BiSearchAlt/>
           </div>
        </div>
    </div>
  )
}

export default LogoSearch