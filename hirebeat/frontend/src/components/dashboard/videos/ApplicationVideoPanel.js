import React from "react";
import VideoPlayer from "../../videos/VideoPlayer";


export function ApplicationVideoPanel (props) {
  return (
    <div className="mb-4">
        <div>
            <h4>
                <span style={{color:"#67A3F3"}}>Question: </span>{props.question}
            </h4>
        </div>
        <div>
            <div className="row">
                <div className="col-12">
                    <VideoPlayer url={props.url} />
                </div>
            </div>
        </div>
    </div>
  );
}

export default ApplicationVideoPanel;
