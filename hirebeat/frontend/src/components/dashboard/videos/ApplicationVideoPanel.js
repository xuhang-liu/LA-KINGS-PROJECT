import React from "react";
import ReactPlayer from 'react-player';


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
                <ReactPlayer id="rw-video" url={props.url} controls={true}
                // Disable download button
                config={{ file: { attributes: { controlsList: 'nodownload' } } }}
                // Disable right click
                onContextMenu={e => e.preventDefault()}
                width={"32rem"} height={"24rem"}/>
                </div>
            </div>
        </div>
    </div>
  );
}

export default ApplicationVideoPanel;
