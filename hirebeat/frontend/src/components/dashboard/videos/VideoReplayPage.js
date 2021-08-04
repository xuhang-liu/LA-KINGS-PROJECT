import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom"; // get params from url
import VideoPlayer from "../../videos/VideoPlayer";
import { ExpertReview } from "./ExpertReview";

export class VideoReplayPage extends Component {
  state = {
    video: {
      title: "loading",
      created_at: "None",
      url: "http://media.w3.org/2010/05/bunny/movie.mp4",
    },
  };

  componentDidMount() {
    let v_id = this.props.match.params.id;
    let v = this.props.videos.filter((v) => v.id == v_id);
    this.setState({
      video: v[0],
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.video.q_description}</h1>
        <h2>{this.state.video.created_at.substring(0, 10)}</h2>
        <VideoPlayer url={this.state.video.url} />
        {this.state.video.is_expert_reviewed ? (
          <ExpertReview
            score={this.state.video.score}
            comments={this.state.video.comments}
          />
        ) : (
          <h2>Expert Reviews Coming Soon</h2>
        )}
        {this.state.video.is_ai_reviewed ? (
          <AIReview />
        ) : (
          <h2>AI Reviews Coming Soon</h2>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  // map initial state to props of this video component
  videos: state.video_reducer.videos,
});

export default connect(mapStateToProps)(withRouter(VideoReplayPage));
