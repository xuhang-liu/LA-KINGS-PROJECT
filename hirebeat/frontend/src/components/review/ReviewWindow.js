import React, { Component } from "react";
import { connect } from "react-redux";
import { getUnreviewedVideo } from "../../redux/actions/video_actions";
import PropTypes from "prop-types";
import VideoPlayer from "../videos/VideoPlayer";
import Reviews from "./Reviews";

export class ReviewWindow extends Component {
  static propTypes = {
    video: PropTypes.object,
    loaded: PropTypes.bool.isRequired,
    review_count: PropTypes.number.isRequired,
  };

  componentDidMount() {
    this.props.getUnreviewedVideo();
  }

  nextVideo = () => {
    this.setState({ video: null, loaded: false });
    //window.location.reload();
  };

  render() {
    return (
      <div className="container" style={{marginBottom:"10%"}}>
        This is review page. Number of videos reviewed by this reviewer:
        {this.props.review_count}
        {this.props.loaded ? (
          this.props.video.url == "" ? (
            <h2>No video needs to be reviewed</h2>
          ) : (
            <div style={{width: "60%"}}>
              <div>
              <VideoPlayer url={this.props.video.url} /></div>
              <Reviews
                videoID={this.props.video.id}
                nextVideo={this.nextVideo}
                needed_ai_review={this.props.video.needed_ai_review}
                is_ai_reviewed={this.props.video.is_ai_reviewed}
                needed_expert_review={this.props.video.needed_expert_review}
                is_expert_reviewed={this.props.video.is_expert_reviewed}
              />
            </div>
          )
        ) : (
          <h2>Loading</h2>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  video: state.video_reducer.videos,
  loaded: state.video_reducer.loaded,
  review_count: state.video_reducer.review_count,
});

export default connect(mapStateToProps, { getUnreviewedVideo })(ReviewWindow);
