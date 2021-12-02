import React, { Component } from 'react';
import {withRouter, Link} from "react-router-dom";
import Quiz from 'react-quiz-component';
import { quiz } from './quiz';
import emailjs from 'emailjs-com';
import quizimg from "../../assets/quiz/quiz-img.png";
import shape13 from '../public/images/shape/shape13.png';
import shape14 from '../public/images/shape/shape14.png';
import shape15 from '../public/images/shape/shape15.png';
import shape16 from '../public/images/shape/shape16.png';
import shape17 from '../public/images/shape/shape17.png';

class Quizdetail1 extends Component {
    constructor(props) {
        super(props);
    };

    state = {
        showP: true,
        showS: false,
        showPIC: true,
        userInput: "",
        isEmail: true,
    };

    handleEmail (e) {
        let value = e.target.value;
        let reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
        if (!reg.test(value)) {
            this.setState({ ...this.state, isEmail: false })
        }
        else {
            this.setState({ ...this.state, isEmail: true })
        }
    }

    redirectToQuizResult = (e) => {
        // send email
        //this.sendEmail(e);
        this.sendEmail2(e);

        // redirect to quiz result
        const { history } = this.props;
        if (history) history.push({
            pathname: "/quizresult",
            params: {userInput: this.state.userInput}
        });
    };

    sendEmail1 (e) {
        e.preventDefault();

        emailjs.sendForm('service_s8700fg', 'template_992v1vd', e.target, 'user_5R8aVH2nC9mnh7SdUOC1S')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        e.target.reset()
    };

    sendEmail2 (e) {
        e.preventDefault();

        emailjs.sendForm('service_s8700fg', 'template_s3u4uvb', e.target, 'user_5R8aVH2nC9mnh7SdUOC1S')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        e.target.reset()
    };

    render() {
        const showP = this.state.showP;
        const showS = this.state.showS;
        const showPIC = this.state.showPIC;
        const onCompleteAction = (obj) => {
            console.log(obj.userInput);
            this.setState({ showP: false, showS: true, showPIC: false, userInput: obj.userInput });
            // YOUR LOGIC GOES HERE
        };
        return (
            <React.Fragment>
            {showS && <div className="features-box"><h3 style={{marginLeft:"10%"}}>Just one last step...</h3>
                <p className="read-more" style={{textDecoration: "none", marginLeft:"10%"}}>We need your email to save your progress and send your personalized evaluation !</p></div>}
            {showS &&
            <section className="subscribe-area">
            <div className="container">
                <div className="subscribe-content">
                    <h2>Enter your email to view your result on the next page</h2>

                    <form className="newsletter-form" onSubmit={this.redirectToQuizResult}>
                        <div className="row align-items-center">
                            <div className="col-lg-8 col-md-8">
                                <input type="email" onChange={this.handleEmail.bind(this)} className="input-newsletter" placeholder="example@email.com" name="email" required />
                            </div>

                            <div className="col-lg-4 col-md-4">
                                <button type="submit" disabled={this.state.isEmail ? null : "disabled"}>
                                    <i className="bx bxs-hot"></i>
                                    View Result Now
                                </button>
                            </div>
                            <div className="col-lg-4 col-md-12">
                            <input type="checkbox" required name="terms" style={{marginRight:'2%',display:'inline', marginTop:"8%", fontFamily:"Poppin", fontWeight:"400"}}></input>
                                I have read and agree to the 
                                <a  target="_blank"
                                rel="noreferrer"
                                href="https://app.hirebeat.co/term"
                                className="active d-flex"
                                style={{
                                textDecoration: "underline",
                                color: "orange",
                                fontWeight: "400",
                                display:'inline'
                            }}>
                                Terms & Conditions
                            </a>
                            </div>
                            {!this.state.isEmail ? (
                                <div className="col-lg-8 col-md-8 quiz-alert">
                                    Please Enter Your Email In Correct Format.
                                </div>) : null}
                        </div>
                    </form>

                    {/* Shape Images */}
                    <div className="shape14">
                        <img src={shape13} alt="image" />
                    </div>
                    <div className="shape15">
                        <img src={shape14} alt="image" />
                    </div>
                    <div className="shape16">
                        <img src={shape15} alt="image" />
                    </div>
                    <div className="shape17">
                        <img src={shape16} alt="image" />
                    </div>
                    <div className="shape18">
                        <img src={shape17} alt="image" />
                    </div>
                </div>
            </div>
            </section>}
            <section className="about-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        {showP && <div className="col-lg-8 col-md-12">
                            <Quiz quiz={quiz} showInstantFeedback={false} showDefaultResult={false} onComplete={onCompleteAction}/>
                            </div>
                        }
                        {showPIC &&
                        <div className="col-lg-4 col-md-12">
                            <div className="about-image" >
                                <img src={quizimg} alt="image" />
                            </div>
                        </div>
                        }
                    </div>
                </div>
            </section>
            </React.Fragment>
        );
    }
}

export default withRouter(Quizdetail1);