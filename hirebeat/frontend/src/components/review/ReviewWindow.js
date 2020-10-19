import React, { Component } from "react";
import { connect } from "react-redux";
import { getUnreviewedVideo } from "../../redux/actions/video_actions";
import PropTypes from "prop-types";
import VideoPlayer from "../videos/VideoPlayer";
import AudioPlayer from "../audios/AudioPlayer";
import Reviews from "./Reviews";
import { ReviewLabel } from "./ReviewLabel";

export class ReviewWindow extends Component {
  static propTypes = {
    q_type: PropTypes.string,
    q_category: PropTypes.string,
    q_description: PropTypes.string,
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
        <ReviewLabel />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  q_type: state.video_reducer.q_type,
  q_category: state.video_reducer.q_category,
  q_description: state.video_reducer.q_description,
  video: state.video_reducer.videos,
  loaded: state.video_reducer.loaded,
  review_count: state.video_reducer.review_count,
});

export default connect(mapStateToProps, { getUnreviewedVideo })(ReviewWindow);
