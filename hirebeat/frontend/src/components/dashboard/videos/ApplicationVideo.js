import React, { Component } from "react";
import PropTypes from "prop-types";
import ApplicationVideoPanel from "./ApplicationVideoPanel";
import { connect } from "react-redux";

export class ApplicationVideo extends Component {
//   static propTypes = {
//     videos: PropTypes.array.isRequired,
//     loaded: PropTypes.bool.isRequired,
//     getVideos: PropTypes.func.isRequired,
//     deleteVideo: PropTypes.func.isRequired,
//     filter: PropTypes.string,
//   };

  render() {
        return (
                <React.Fragment>
                    <div>
                    <ApplicationVideoPanel
                            question="This is the question 1"
                            url="https://test-hb-videos.s3.amazonaws.com/1599189185358.webm"
                    />
                    </div>
                    <div>
                    <ApplicationVideoPanel
                            question="This is the question 2"
                            url="https://test-hb-videos.s3.amazonaws.com/1599189185358.webm"
                    />
                    </div>
                    <div>
                    <ApplicationVideoPanel
                            question="This is the question 3"
                            url="https://test-hb-videos.s3.amazonaws.com/1599189185358.webm"
                    />
                    </div>
                </React.Fragment>
        );
  }
}


export default ApplicationVideo;
