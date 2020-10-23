import React, { Component } from "react";
import { connect } from "react-redux";
import { useEffect } from "react";
import { getUnreviewedVideo } from "../../redux/actions/video_actions";
import PropTypes from "prop-types";
import VideoPlayer from "../videos/VideoPlayer";
import AudioPlayer from "../audios/AudioPlayer";
import Reviews from "./Reviews";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

export class ReviewWindow extends Component {
  static propTypes = {
    q_type: PropTypes.string,
    q_category: PropTypes.string,
    q_description: PropTypes.string,
    video: PropTypes.object,
    loaded: PropTypes.bool.isRequired,
    review_count: PropTypes.number.isRequired,
  };

  componentWillMount() {
    this.props.getUnreviewedVideo();
  }

  nextVideo = () => {
    this.setState({q_type: null, video: null, loaded: false });
    //window.location.reload();
  };

  render() {
    return (
      <React.Fragment>
      <ScrollToTopOnMount />
      <div style={{padding: "2%", margin: "auto", background: "#E5E5E5", marginBottom: "10%"}}>
        <div className="row" style={{margin: "4% auto 1%"}}>
          <p className="review-text" style={{fontSize:"20px", color:"#090D3A", marginLeft: "5rem"}}>Number of videos reviewed: </p>
          <p className="review-text" style={{fontSize:"20px", marginLeft:"1%"}}>{this.props.review_count}</p>
        </div>
        {this.props.loaded ? (
          this.props.video.url == "" ? (
          <h2>No video needs to be reviewed</h2>
          ) : (
          <div>
            {/* <div style={{marginBottom:"2%"}}><h3>Question Type: {this.props.q_type}</h3></div>
            <div style={{marginBottom:"2%"}}><h3>Question Category: {this.props.q_category}</h3></div> */}
            <div style={{marginBottom:"2%"}}>
              <h4 className="review-text" style={{fontSize:"25px", color:"#090D3A", marginLeft: "5rem"}}>
                Under Review
              </h4>
            </div>
            <div className="row" style={{margin:"auto"}}>
              <p className="review-text" style={{fontSize:"20px", marginLeft: "5rem"}}>Q1</p>
              <p className="review-text" style={{fontSize:"20px" ,color:"#4A6F8A", marginLeft:"2%"}}>{this.props.q_description}</p>
            </div>
            <div className="row" style={{justifyContent: "center", marginBottom: "2rem"}}>
              <div className="col-5" style={{padding:"0px"}}>
                {
                  this.props.video.url.slice(-3) === "wav" ? <AudioPlayer url={this.props.video.url} />
                  : <VideoPlayer url={this.props.video.url} />
                }
              </div>
            </div>
            <div className="row" style={{justifyContent: "center", padding:"0px"}}>
                <Reviews
                  videoID={this.props.video.id}
                  q_category={this.props.q_category}
                  nextVideo={this.nextVideo}
                  needed_ai_review={this.props.video.needed_ai_review}
                  is_ai_reviewed={this.props.video.is_ai_reviewed}
                  needed_expert_review={this.props.video.needed_expert_review}
                  is_expert_reviewed={this.props.video.is_expert_reviewed}
                  ai_review_categories={this.props.video.ai_review_categories}
                  expert_review_categories={this.props.video.expert_review_categories}
                />
            </div>
          </div>
          )
        ) : (
          <h2>Loading</h2>
        )}
      </div>
      </React.Fragment>
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
