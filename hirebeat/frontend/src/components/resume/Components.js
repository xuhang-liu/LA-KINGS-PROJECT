import React from "react";
import {Link} from "react-router-dom";

function SaveLeft(props) {
    var save_limit = props.profile.save_limit;
    var saved_video = props.profile.saved_video_count;
    var saves_left = Number(save_limit) - Number(saved_video);
    
    return (
        <div className="row">
          <div className="free-trial-content">
          {props.profile.membership == "Regular" &&
            <div className="row">
              <p style={{color:"#7D7D7D", fontSize:"12px"}}>Saves Left: {saves_left}</p>
              <Link to="/pricing" style={{marginLeft:"2rem"}}>
                <p style={{color:"#FF6B00", fontSize:"12px"}}>Upgrade -></p>
              </Link>
            </div>
          }
          </div>
        </div>   
    );
};

export default SaveLeft;
