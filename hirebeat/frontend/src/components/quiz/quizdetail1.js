import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {FacebookShareButton, TwitterShareButton, LinkedinShareButton, WhatsappShareButton} from "react-share";
import BlogSidebar from '../blog/BlogSidebar';
import Quiz from 'react-quiz-component';
import { quiz } from './quiz';
import quizimg from "../../assets/quiz/quiz-img.jpg";

class Quizdetail1 extends Component {
    render() {
        const onCompleteAction = (obj) => {
            console.log(obj.correctPoints);
            // YOUR LOGIC GOES HERE
          }
        return (
            <section className="about-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-content">
                                <h2 id='quiz-detail-headline'>Find out what position is best suited for you</h2>
                                <p className='quiz-detail-headline-1'>12 questions</p>
                                <p className='quiz-detail-content'>As a job seeker, there are many processes, philosophies, companies and careers for you to explore. Whichever path you choose to take, understanding what makes you tick and how to work best with other people is going to have a big influence on how successful you will be.</p>
                            </div>
                            <div style={{
                                paddingTop: '3%',
                                paddingBottom: '3%'
                            }}>
                                <button className="start-btn">
                                    Start Your Quiz
                                </button>
                            </div>
                            <p>While it’s really just for referenece, this short quiz might help you work some of that out.</p>
                        </div>
                         



                        <div className="col-lg-6 col-md-12" style={{width: '25%'}}>
                            <div className="about-image" >
                                <img src={quizimg} alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Quizdetail1;