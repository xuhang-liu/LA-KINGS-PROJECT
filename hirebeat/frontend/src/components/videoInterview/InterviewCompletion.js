import React, { Component, useState } from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import PageTitleArea from '../Common/PageTitleArea';
import Rating from 'react-simple-star-rating';
import { MyModal } from "../../components/dashboard/DashboardComponents";
import ModalVideo from 'react-modal-video';
//import videobg from "../public/images/video-bg.jpg"

export class InterviewCompletion extends Component {
    state = {
        show: true,
    }

    hide = () => {
        this.setState({
            show: false,
        })
    }

    render() {
        return (
            <React.Fragment>
                <CustomerFeedback
                    show={this.state.show}
                    hide={this.hide}
                />
                <PageTitleArea 
                    pageTitle="Congratulations!" 
                    pageDescription="Your interview videos have been sucessfully sent to the employer" 
                />
                <div style={{marginBottom:"7%"}}>
                    <FeedbackVideo />
                </div>
            </React.Fragment>
        )
    }
}

const CustomerFeedback = (props) => {
    const [rating, setRating] = useState(0) // initial rating value
 
    const handleRating = (rate) => {
        setRating(rate)
    }
    return(
        <MyModal show={props.show} onHide={props.hide}>
        <div className='container' style={{width:"60%"}}>
          <p style={{color:"#67A3F3"}}>send your feedback</p>
          <p>You are almost there! Before you leave, tell us about your experience! Your answer will not affect your interview evaluation.</p>
          <h3>Please rate your interview experience</h3>
          <div className="mt-3 mb-3" style={{margin:"auto"}}>
            <Rating
                onClick={handleRating}
                ratingValue={rating}
                size={55}
                label={false}    
                transition={true}
                fillColor='#67A3F3'
                emptyColor='gray'
            />
          </div>
          <h3>Any additional comment?</h3>
          <div className="row">
              <textarea className="col-11 ml-3"></textarea>
          </div>
          <div className="row mb-5">
              <div className="col-12">
                  <button className="default-btn mt-4 mr-2 float-right"
                          style={{paddingLeft:"25px"}}
                  >
                  Submit 
                  </button>
              </div>
          </div>
        </div>
      </MyModal>
    );
}

class FeedbackVideo extends Component {

    state = {
        isOpen: false,
    }
    openModal = () => {
        this.setState({isOpen: true})
    }

    render() {
        return (
            <React.Fragment>
                {/* Popup Modal Video If you want to change the video need to update below videoID */}
                <ModalVideo 
                    channel='youtube' 
                    youtube={{
                        autoplay: 1,
                        mute: 1
                      }}
                    isOpen={this.state.isOpen} 
                    videoId='Uja3ZefBRe8' 
                    onClose={() => this.setState({isOpen: false})} 
                />

                <section className="video-presentation-area ptb-100">
                    <div className="container">
                        <div className="section-title">
                            <h2>Do you feel confident for your next interview?</h2>
                            <p>HireBeat can help! We provide AI-powered interview training and resume optimization tool that helps you get hired.</p>
                       </div>

                        <div className="video-box" id="id-video2">
                            <img src="https://hirebeat-assets.s3.amazonaws.com/home_bg.png" className="main-image" alt="image" />

                            <Link href="#play-video">
                                <a
                                    onClick={e => {e.preventDefault(); this.openModal()}}
                                    className="video-btn popup-youtube"
                                    style={{top:"45%"}}
                                > 
                                    <i className="bx bx-play" style={{color:"white"}}></i>
                                </a>
                            </Link>
                        </div>
                    </div>
                </section>
                <div className="container" style={{width:"56%"}}>
                    <div className="row">
                        <div className="col-5">
                            <button className="default-btn btn-block" style={{paddingLeft:"25px"}}>
                                Learn How Hirebeat Works
                            </button>
                        </div>
                        <div className ="col-2" />
                        <div className="col-5 float-right">
                            <button className="default-btn btn-block" style={{paddingLeft:"25px"}}>
                                Go to Dashboard
                            </button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default connect(null)(InterviewCompletion);