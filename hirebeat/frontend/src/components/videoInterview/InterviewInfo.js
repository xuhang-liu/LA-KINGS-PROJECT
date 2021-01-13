import React, { Component } from 'react';
import PageTitleArea from './../Common/PageTitleArea';
import {getInterviewQuestions} from "../../redux/actions/question_actions";
import {getRecordStatus} from "../../redux/actions/auth_actions";
import {connect} from "react-redux";
import PropTypes from "prop-types";

class InterviewInfo extends Component {
    // data passed from login page
    email = typeof(this.props.location.params) == "undefined" ? null : this.props.location.params["email"];
    positionId = typeof(this.props.location.params) == "undefined" ? null : this.props.location.params["positionId"];
    companyName = typeof(this.props.location.params) == "undefined" ? null : this.props.location.params["companyName"];

    state = {
        email: this.email == null ? "" : this.email,
        positionId: this.positionId == null ? 0 : this.positionId,
        companyName: this.companyName == null ? "" : this.companyName,
    };

    static propTypes = {
        getInterviewQuestions: PropTypes.func.isRequired,
        getRecordStatus: PropTypes.func.isRequired,
    };

    componentDidMount() {
        // confirm user recorded videos or not
        this.props.getRecordStatus(this.state.positionId, this.state.email);
        // get interview questions
        this.props.getInterviewQuestions(this.state.positionId);
        // intercept reloading
        window.addEventListener('beforeunload', this.beforeunload);
    }

    componentWillUnmount () {
        // destroy reloading interception
        window.removeEventListener('beforeunload', this.beforeunload);
    }

    beforeunload = (e) => {
        // cancel the event
        e.preventDefault();
        // not support for custom message
        let confirmationMessage = 'All the data in current page will lose if you reload';
        (e || window.event).returnValue = confirmationMessage;
        return confirmationMessage;
    }

    redirectToRecord = () => {
        const { history } = this.props;
        if (history) history.push({
            pathname: "/video-interview",
            params: {
                email: this.state.email,
                positionId: this.state.positionId,
            }
        });
    };

    render() {
        return (
            <React.Fragment>
                {(!this.props.urlClicked && !this.props.isRecorded) ?
                    (<div>
                        <PageTitleArea
                            pageTitle={this.state.companyName}
                            pageDescription="Get to know more details and test everything before you start."
                        />
                        <div className="Container" style={{margin: "2% 3% 10rem 3%"}}>
                            <div className="row">
                                <div className="col-lg-5 col-md-5" style={{marginLeft: "5%", marginTop: "5%"}} >
                                    <h3 className="interview-txt1">Interview Information</h3>
                                    <h4 className="interview-txt2">
                                        Total: {this.props.interview_questions.length} Questions | Estimate Time: {this.props.interview_questions.length * 1.5} Minutes
                                    </h4>
                                    <ol className="interview-txt2" style={{color: "#4A6F8A", paddingLeft: "1rem"}}>
                                        <li>Once you start recording the video, you <span style={{color: "red"}}>cannot go back or re-record again.</span></li>
                                        <li>Please <span style={{color: "red"}}>do not refresh or exit the page</span> until you complete the interview.</li>
                                        <li>Before the actual interview, we provide a <span style={{color: "red"}}>sample question</span> for you to test your device.</li>
                                        <li>You have <span style={{color: "red"}}>30 seconds preparation</span> time for each question. You can take notes in that period.</li>
                                        <li>Your questions and answers will be kept confidential.</li>
                                    </ol>
                                    <button
                                        onClick={this.redirectToRecord}
                                        className="default-btn"
                                        style={{color:"white", backgroundColor:"#090D3A", paddingLeft: "25px", width: "12rem"}}
                                    >
                                         I'm Ready
                                        <span></span>
                                    </button>
                                </div>

                                <div className="col-lg-5 col-md-5" style={{marginLeft: "5%", marginTop: "5%"}} >
                                    <h4 className="interview-txt2" style={{marginTop: "2rem"}}>What will the process look like?</h4>
                                    {/*insert gif here*/}
                                    <div style={{marginTop: "1rem", width: "26.375rem", height: "16rem", backgroundColor: "#E8EDFC"}}></div>
                                </div>
                            </div>
                        </div>
                    </div>) :
                    <div>
                        <PageTitleArea
                            pageTitle={this.state.companyName}
                            pageDescription="Get to know more details and test everything before you start."
                        />
                        <div className="Container" style={{margin: "2% 3% 10rem 3%"}}>
                            <h4 className="interview-txt2" style={{textAlign: "center"}}>You've already finished this session!</h4>
                        </div>
                    </div>
                }
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
  interview_questions: state.question_reducer.interview_questions,
  isRecorded: state.auth_reducer.isRecorded,
  urlClicked: state.auth_reducer.urlClicked,
});

export default connect(mapStateToProps, {getInterviewQuestions, getRecordStatus})(InterviewInfo);
