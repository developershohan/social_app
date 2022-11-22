import React, { useRef } from "react";
import "./SharePost.css";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { useState } from "react";

//import { UilTimes } from "@iconscout/react-unicons";

const SharePost = () => {
  const [image, setimage] = useState(null);
  const imageRef = useRef();

  const onImageChange = (e) => {
    let img = e.target.files[0];
    if (e.target.files && img) {
      setimage({
        image: URL.createObjectURL(img),
      });
    }
  };
  return (
    <div className="sp_container">
      <img src="https://scontent.fcgp3-1.fna.fbcdn.net/v/t39.30808-6/281131677_3276080232623317_2642556171099570208_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGsmHP6HIksHQ5KK4gg8GmwkXfeWk_wPOqRd95aT_A86hz-EB2Rw4bKIEavh_WLiX3mkeeQcgwSW6i3ViY6RXf9&_nc_ohc=jJimlnWaWssAX_q_k7e&_nc_ht=scontent.fcgp3-1.fna&oh=00_AfBEsJh4yDAE8ja4z3u89KC-3X_nhmOw8ix84O4cUb8x_Q&oe=637F80C3" alt="" />

      <div className="sp_inputs">
        <input type="text" placeholder="What's  on your mind " className="sp_input_field" />
        <div className="sp_options">
          <div
            className="option photo_btn"
            onClick={() => {
              imageRef.current.click();
            }}
          >
            <UilScenery />
            Photo
          </div>
          <div className="option video_btn">
            <UilPlayCircle />
            Video
          </div>
          <div className="option loc_btn">
            <UilLocationPoint />
            Location
          </div>
          <div className="option shedule_btn">
            <UilSchedule />
            Shedule
          </div>
          <button className="button ps_btn">Share</button>
          <div style={{ display: "none" }}>
            <input type="file" name="myImage" ref={imageRef} onChange={onImageChange} />
          </div>
        </div>
        {image && (
          <div className="sp_preview">
            <UilTimes
            className="sp_close"
              onClick={() => {
                setimage(null);

              }}
            />
            <img src={image.image} alt="" className="sp_img"/>
          </div>
        )}
      </div>
    </div>
  );
};

export default SharePost;
