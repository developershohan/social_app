import React from "react";
import Cover from "../../images/cover.jpg";
import Logo from "../../images/logo.jpg";
import './ProfileCard.css'

const Profilecard = () => {
  return (
    <div className="profile_Card">
      <div className="profile_img">
        <img src={Cover} alt="" className="profile_cover" />
        <img src={Logo} alt="" className="pofile_logo"/>
      </div>
      <div className="profile_title">
        <div className="profile_username">
          <h3>shohan</h3>
        </div>
        <div className="profile_bio">
          <p>web developer</p>
        </div>
      </div>
    </div>
  );
};

export default Profilecard;
