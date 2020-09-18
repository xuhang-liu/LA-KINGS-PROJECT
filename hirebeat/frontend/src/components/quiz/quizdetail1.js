import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {FacebookShareButton, TwitterShareButton, LinkedinShareButton, WhatsappShareButton} from "react-share";
import BlogSidebar from '../blog/BlogSidebar';
import Quiz from 'react-quiz-component';
import { quiz } from './quiz';

class Quizdetail1 extends Component {
    render() {
        const onCompleteAction = (obj) => {
            console.log(obj.correctPoints);
            // YOUR LOGIC GOES HERE
          }
        return (
            <React.Fragment>
            <section className="blog-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-12">
                            <div style={{margin:"auto"}}>
                            <Quiz quiz={quiz} showInstantFeedback={false} onComplete={onCompleteAction}/>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12">
                            <BlogSidebar /> 
                        </div>
                    </div>
                </div>
            </section>
            </React.Fragment>
        );
    }
}

export default Quizdetail1;