import React from "react";
import {Link} from "react-router-dom";

function SaveLeft(props) {
    var save_resume_limit = props.profile.save_resume_limit;
    var saved_resume = props.profile.saved_resume_count;
    var saves_left = Number(save_resume_limit) - Number(saved_resume);
    if(saves_left>900){
      saves_left = "unlimited";
    };

    return (
        <div className="row">
          <div className="free-trial-content">
          {props.profile.membership == "Regular" &&
            <div className="row">
              <p style={{color:"#7D7D7D", fontSize:"0.75rem"}}>Saves Left: {saves_left<0 ? 0:saves_left}</p>
              <Link to="/pricing" style={{marginLeft:"2rem", textDecoration: "none"}}>
                <p style={{color:"#FF6B00", fontSize:"0.75rem"}}>Upgrade -></p>
              </Link>
            </div>
          }
          </div>
        </div>
    );
};

export default SaveLeft;