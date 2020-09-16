import React, { Component } from "react";
import { connect } from "react-redux";
import { getUnreviewedVideo } from "../../redux/actions/video_actions";
import PropTypes from "prop-types";
import VideoPlayer from "../videos/VideoPlayer";
import AudioPlayer from "../audios/AudioPlayer";
import Reviews from "./Reviews";

export class ReviewWindow extends Component {
  static propTypes = {
    q_type: PropTypes.object,
    q_category: PropTypes.string,
    video: PropTypes.object,
    loaded: PropTypes.bool.isRequired,
    review_count: PropTypes.number.isRequired,
  };

  componentDidMount() {
    this.props.getUnreviewedVideo();
  }

  nextVideo = () => {
    this.setState({q_type: null, video: null, loaded: false });
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
              <div style={{marginBottom:"2%"}}><h3>Question: {this.props.q_type}</h3></div>
              <div style={{marginBottom:"2%"}}><h3>Question Category: {this.props.q_category}</h3></div>
              <div>
              {
                this.props.video.url.slice(-3) === "wav" ? <AudioPlayer url={this.props.video.url} />
                  : <VideoPlayer url={this.props.video.url} />
              }
            </div>
              <Reviews
                videoID={this.props.video.id}
                nextVideo={this.nextVideo}
                needed_ai_review={this.props.video.needed_ai_review}
                is_ai_reviewed={this.props.video.is_ai_reviewed}
                needed_expert_review={this.props.video.needed_expert_review}
                is_expert_reviewed={this.props.video.is_expert_reviewed}
                ai_review_categories={this.props.video.ai_review_categories}
                expert_review_categories={this.props.video.expert_review_categories}
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
  q_type: state.video_reducer.q_type,
  q_category: state.video_reducer.q_category,
  video: state.video_reducer.videos,
  loaded: state.video_reducer.loaded,
  review_count: state.video_reducer.review_count,
});

export default connect(mapStateToProps, { getUnreviewedVideo })(ReviewWindow);
