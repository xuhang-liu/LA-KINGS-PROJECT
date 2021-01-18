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
                    <ReactPlayer id="rw-video" url={props.url} controls={true} width={"600px"} height={"450px"}/>
                </div>
            </div>
        </div>
    </div>
  );
}

export default ApplicationVideoPanel;
