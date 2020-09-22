import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Quiz from 'react-quiz-component';
import { quiz } from './quiz';
import quizimg from "../../assets/quiz/quiz-img.png";
import shape13 from '../public/images/shape/shape13.png';
import shape14 from '../public/images/shape/shape14.png';
import shape15 from '../public/images/shape/shape15.png';
import shape16 from '../public/images/shape/shape16.png';
import shape17 from '../public/images/shape/shape17.png';

class Quizdetail1 extends Component {
    state = {
        showP: true,
        showS: false,
        showPIC: true,
        userInput: "",
        isEmail: false,
    };

    handleEmail (e) {
        let value = e.target.value;
        if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(value)) {
            this.setState({ ...this.state, isEmail: false })
        }
        else {
            this.setState({ ...this.state, isEmail: true })
        }
    }

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
                    <h2>Enter your email to get your free results</h2>

                    <form className="newsletter-form"> 
                        <div className="row align-items-center">
                            <div className="col-lg-8 col-md-8">
                                <input type="email" onChange={this.handleEmail.bind(this)} className="input-newsletter" placeholder="hello@example.com" name="email" required />
                            </div>

                            <div className="col-lg-4 col-md-4">
                                <Link to={{
                                    pathname: "/quizresult",
                                    state: {userInput: this.state.userInput} // your data array of objects
                                    }}
                                    style={{textDecoration: "none"}}>
                                <button type="submit" disabled={this.state.isEmail ? null : "disabled"}>
                                    <i className="bx bxs-hot"></i>
                                    View Result Now
                                </button>
                                </Link>
                            </div>
                            {!this.state.isEmail ? (
                                <div className="col-lg-8 col-md-8 quiz-alert">
                                    Please Enter Correct Email Address.
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
                            <p>While it’s really just for referenece, this short quiz might help you work some of that out.</p>
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

export default Quizdetail1;