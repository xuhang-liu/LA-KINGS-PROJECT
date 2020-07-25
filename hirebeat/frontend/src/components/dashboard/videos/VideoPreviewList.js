import React, { Component } from "react";
import PropTypes from "prop-types";
import VideoImagePreview from "./VideoImagePreview";
import { connect } from "react-redux";
import {
  getVideos,
  sendVideoForReview,
} from "../../../redux/actions/video_actions";

export class VideoPreviewList extends Component {
  static propTypes = {
    videos: PropTypes.array.isRequired,
    loaded: PropTypes.bool.isRequired,
    getVideos: PropTypes.func.isRequired,
    filter: PropTypes.string,
  };

  componentDidMount() {
    this.props.getVideos();
  }

  render() {
    return (
      <div className="container">
        {this.props.loaded
          ? this.props.videos.map((v) => {
              if (this.props.filter) {
                // filter videos according to review status
                switch (this.props.filter) {
                  case "all":
                    if (!v.is_expert_reviewed) {
                      if (!v.is_ai_reviewed) return null;
                    }
                    break;
                  case "expert":
                    if (!v.is_expert_reviewed) {
                      return null;
                    }
                    break;
                  case "ai":
                    if (!v.is_ai_reviewed) {
                      return null;
                    }
                    break;
                  default:
                    return null;
                }
              }
              return (
                <div key={v.id}>
                  <VideoImagePreview
                    v={v}
                    key={v.id}
                    sendVideoForReview={this.props.sendVideoForReview}
                  />
                  <br />
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
})(VideoPreviewList);
