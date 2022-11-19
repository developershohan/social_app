import React from 'react'
import { BsPencilSquare } from "react-icons/bs";
const InfoCard = () => {
  return (
    <div className='info_card' >
        <div className="info_header">
                <h2 className='info_title'>Your Info</h2>
                <BsPencilSquare/>
        </div>
    </div>
  )
}

export default InfoCard