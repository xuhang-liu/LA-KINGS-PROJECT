import React, { Component } from "react";
import PropTypes from "prop-types";
import VideoImagePreview from "./VideoImagePreview";
import { connect } from "react-redux";
import {
  getVideos,
  sendVideoForReview,
  deleteVideo,
} from "../../../redux/actions/video_actions";

export class VideoPreviewList extends Component {
  static propTypes = {
    videos: PropTypes.array.isRequired,
    loaded: PropTypes.bool.isRequired,
    getVideos: PropTypes.func.isRequired,
    deleteVideo: PropTypes.func.isRequired,
    filter: PropTypes.string,
  };

  componentDidMount() {
    this.props.getVideos();
  }

  render() {
    return (
      <div className="container" style={{width: 1000}}>
        {this.props.loaded
          ? this.props.videos.map((v) => {
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
                <div key={v.id} style={{marginTop: "2rem"}}>
                  <VideoImagePreview
                    isAudio={(v.url.slice(-3) === "wav") ? true : false}
                    v={v}
                    key={v.id}
                    sendVideoForReview={
                        v.q_type === "Behavior Question" ? this.props.sendVideoForReview
                        : null}
                    isBQ={v.q_type === "Behavior Question" ? true : false}
                    deleteVideo={this.props.deleteVideo}
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
})(VideoPreviewList);
