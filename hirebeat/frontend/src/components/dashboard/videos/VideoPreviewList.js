import React, { Component } from "react";
import PropTypes from "prop-types";
import VideoImagePreview from "./VideoImagePreview";
import { connect } from "react-redux";
import {
  getVideos,
  sendVideoForReview,
  deleteVideo,
  addTQVideoLimit,
} from "../../../redux/actions/video_actions";

export class VideoPreviewList extends Component {
  static propTypes = {
    videos: PropTypes.array.isRequired,
    loaded: PropTypes.bool.isRequired,
    getVideos: PropTypes.func.isRequired,
    deleteVideo: PropTypes.func.isRequired,
    addTQVideoLimit: PropTypes.func.isRequired,
    filter: PropTypes.string,
  };

  componentDidMount() {
    this.props.getVideos();
  }

  render() {
    return (
      <div className="container-xl pl-3 pr-3 pb-5" style={{backgroundColor: "white", "border-radius": "0.5rem"}}>
        <div className="row pt-4 pb-2">
          <div className="col-2 interview-txt8 interview-center">
            Question
          </div>
          <div className="col-2 interview-txt8 interview-center">
            Recorded on
          </div>
          <div className="col-1 interview-txt8 interview-center">
            Score
          </div>
          <div className="col-2 interview-txt8 interview-center">
            Performance
          </div>
          {this.props.filter == "bq" ?
          <div className="col-4 interview-txt8 interview-center">
            In-depth Review
          </div>:
          <div className="col-3 interview-txt8 interview-center">
            Sample Answer
          </div>}
          {this.props.filter == "bq" ?
          <div className="col-1 interview-txt8 interview-center">
          </div>:
          <div className="col-2 interview-txt8 interview-center">
            Actions
          </div>}
        </div>
        <hr style={{border:"2px solid #E8EDFC"}}></hr>
        {this.props.loaded
          ?
          this.props.videos.map((v) => {
              if (this.props.filter) {
                // filter videos according to question type
                switch (this.props.filter) {
                  case "bq":
                    if (v.q_type === "Technique Question") return null;
                    break;
                  case "tq":
                    if (v.q_type === "Behavior Question") return null;
                    break;

                    // filter videos according to review status
//                  case "all":
//                    if (!v.is_expert_reviewed) {
//                      if (!v.is_ai_reviewed) return null;
//                    }
//                    break;
//                  case "expert":
//                    if (!v.is_expert_reviewed) {
//                      return null;
//                    }
//                    break;
//                  case "ai":
//                    if (!v.is_ai_reviewed) {
//                      return null;
//                    }
//                    break;
                  default:
                    return null;
                }
              }
              return (
                <div key={v.id} style={{marginTop: "2rem","border-radius": "1rem"}}>
                  <VideoImagePreview
                    isAudio={(v.url.slice(-3) === "wav") ? true : false}
                    v={v}
                    key={v.id}
                    sendVideoForReview={
                        v.q_type === "Behavior Question" ? this.props.sendVideoForReview
                        : null}
                    isBQ={v.q_type === "Behavior Question" ? true : false}
                    deleteVideo={this.props.deleteVideo}
                    addTQVideoLimit={this.props.addTQVideoLimit}
                  />
                </div>
              );
            })
          : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  videos: state.video_reducer.videos,
  loaded: state.video_reducer.loaded,
});

export default connect(mapStateToProps, {
  getVideos,
  sendVideoForReview,
  deleteVideo,
  addTQVideoLimit,
})(VideoPreviewList);
