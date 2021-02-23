import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import VideoPlayer from "../../videos/VideoPlayer";
import AudioPlayer from "../../audios/AudioPlayer";

const ReviewVideoResult = (props) => {
    const [left, setLeft] = useState(true);
    console.log(props);
    return <div className="row">
        <div className="col-5">
            <h3 className="ml-4" style={{color:"#4A6F8A"}}>{props.v.q_description} </h3>
            <div className="ml-4" style={{maxWidth:"40rem"}}>
            {
            (props.isAudio) ?
                    <AudioPlayer url={props.v.url} />
                : <VideoPlayer url={props.v.url} />
            }
            </div>
            <h6 className="ml-5 my-5" style={{color:"#13C4A1"}}>
                You really aced this question!  You have scored higher than 90% of other candidates.
            </h6>
            <h6 className="ml-4" style={{color:"#4A6F8A"}}>
                Review your score breakdown by category to learn more about what you’re doing well what could be improved.
            </h6>
            <hr className="ml-4" style={{height:"1px", borderWidth:"2", color:"E8EDFC",backgroundColor:"E8EDFC"}}></hr>
            <h6 className="ml-4" style={{color:"#4A6F8A "}}>
                Check our personalized action plan to help you improve.
            </h6>
            <div className="row pl-4">
                <button className='default-btn ml-2 my-4' style={{paddingLeft:"25px"}}> My Action Plan</button>
                {left && 
                <button className='btn btn-secondary ml-5 my-4' style={{paddingLeft:"25px", paddingRight:"25px"}}><i class='bx bx-revision'></i>Re-practice</button>}
            </div>
        </div>

    </div>};

export default ReviewVideoResult;