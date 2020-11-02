import React, { Component } from "react";
import { connect } from "react-redux";
import { useEffect } from "react";
import { getReviewCount } from "../../redux/actions/video_actions";
import PropTypes from "prop-types";
//import VideoPlayer from "../videos/VideoPlayer";
import AudioPlayer from "../audios/AudioPlayer";
import ReactPlayer from 'react-player';
//import '../../../../../node_modules/video-react/dist/video-react.css';
//import { Player } from 'video-react';
import Reviews from "./Reviews";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

export class ReviewWindow extends Component {
  static propTypes = {
      review_count: PropTypes.number.isRequired,
  };
  constructor(props) {
      super(props);
  }

  componentDidMount() {
      this.props.getReviewCount();
  }

  render() {
    return (
      <React.Fragment>
      <ScrollToTopOnMount />
      <div style={{padding: "2%", margin: "auto", background: "#E5E5E5"}}>
        <div className="row" style={{margin: "4% auto 1%"}}>
          <p className="review-text" style={{fontSize:"20px", color:"#090D3A", marginLeft: "5rem"}}>Number of videos reviewed: </p>
          <p className="review-text" style={{fontSize:"20px", marginLeft:"1%"}}>{this.props.review_count}</p>
        </div>
        {this.props.loaded ? (
          this.props.video.url == "" ? (
          <h2>No video needs to be reviewed</h2>
          ) : (
          <div>
            <div style={{marginBottom:"2%"}}>
              <h4 className="review-text" style={{fontSize:"25px", color:"#090D3A", marginLeft: "5rem"}}>
                Under Review
              </h4>
            </div>
            <div className="row" style={{margin:"auto"}}>
              <p className="review-text" style={{fontSize:"20px", marginLeft: "5rem"}}>Q:</p>
              <p className="review-text" style={{fontSize:"16px" ,color:"#4A6F8A", marginLeft:"1%"}}>{this.props.q_description}</p>
            </div>
            <div className="row" style={{justifyContent: "center", marginBottom: "2rem"}}>
              <div className="col-5" style={{padding:"0px"}}>
                {
                  this.props.video.url.slice(-3) === "wav" ? <AudioPlayer url={this.props.video.url} />
                      : <ReactPlayer url={this.props.video.url} controls={true}/>
                }
              </div>
            </div>
            <div className="row" style={{justifyContent: "center", padding:"0px"}}>
                <Reviews
                  videoID={this.props.video.id}
                  needed_ai_review={this.props.video.needed_ai_review}
                  is_ai_reviewed={this.props.video.is_ai_reviewed}
                  needed_expert_review={this.props.video.needed_expert_review}
                  is_expert_reviewed={this.props.video.is_expert_reviewed}
                  ai_review_categories={this.props.video.ai_review_categories}
                  expert_review_categories={this.props.video.expert_review_categories}
                  sentences={this.props.sentences}
                  subcategories={this.props.subcategories}
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
  review_count: state.video_reducer.review_count,
});

export default connect(mapStateToProps, { getReviewCount })(ReviewWindow);
