import React from "react";
import Cover from "../../images/cover.jpg";
import Logo from "../../images/logo.jpg";
import "./ProfileCard.css";

const Profilecard = () => {
  return (
    <div className="profile_Card">
      <div className="profile_img">
        <img src={Cover} alt="" className="profile_cover" />
        <img src={Logo} alt="" className="pofile_logo" />
      </div>
      <div className="profile_title">
        <h3 className="profile_username">shohan</h3>
        <p className="profile_bio">web developer</p>
      </div>
      <div className="follow_section">
        <hr />
        <div>
          <div className="follow">
            <span>6,890</span>
            <span>Followings</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>1</span>
            <span>Followers</span>
          </div>

          <div className="vl"></div>
          <div className="follow">
            <span>3</span>
            <span>Posts</span>
          </div>
        </div>
        <hr />
      </div>
      <span>My Profile</span>
    </div>
  );
};

export default Profilecard;
