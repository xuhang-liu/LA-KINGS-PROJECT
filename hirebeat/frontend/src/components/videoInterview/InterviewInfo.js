import React, { Component } from 'react';
import PageTitleArea from './../Common/PageTitleArea';
import {getInterviewQuestions} from "../../redux/actions/question_actions";
import {getRecordStatus} from "../../redux/actions/auth_actions";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import safariAlert from "./../basic/SafariAlert";
import Modal from "react-bootstrap/Modal";

class InterviewInfo extends Component {
    // data passed from login page
    email = typeof(this.props.location.params) == "undefined" ? null : this.props.location.params["email"];
    positionId = typeof(this.props.location.params) == "undefined" ? null : this.props.location.params["positionId"];
    companyName = typeof(this.props.location.params) == "undefined" ? null : this.props.location.params["companyName"];

    state = {
        email: this.email == null ? "" : this.email,
        positionId: this.positionId == null ? 0 : this.positionId,
        companyName: this.companyName == null ? "" : this.companyName,
        showFirst: false,
    };

    static propTypes = {
        getInterviewQuestions: PropTypes.func.isRequired,
        getRecordStatus: PropTypes.func.isRequired,
    };

    componentDidMount() {
        safariAlert();
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
        this.setState({
            showFirst: true,
        });
    };

    callSecond = () => {
        const { history } = this.props;
        if (history) history.push({
            pathname: "/video-interview",
            params: {
                email: this.state.email,
                positionId: this.state.positionId,
            }
        });
        this.setState({
            showFirst: false,
        });
    }

    render() {
        return (
            <React.Fragment>
                <SampleQuestion
                    show={this.state.showFirst}
                    hide={this.callSecond}
                    callSecond={this.callSecond}
                />
                {this.props.dataLoaded ?
                    !this.props.isRecorded ?
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
                                            Total: <span style={{color:"#13c4a1"}}>{this.props.interview_questions.length} Questions</span> | Estimate Time: <span style={{color:"#13c4a1"}}>{this.props.interview_questions.length * 1.5} Minutes</span>
                                        </h4>
                                        <ul className="interview-txt2" style={{color: "#4A6F8A", paddingLeft: "1rem"}}>
                                            <li style={{marginTop:"2rem"}}><span style={{color:"#ff6b00"}}>Practice with our sample question</span> before the interview starts.</li>
                                            <li style={{marginTop:"2rem"}}><span style={{color:"#ff6b00"}}>30 seconds preparation time</span> for each interview question.</li>
                                            <li style={{marginTop:"2rem", marginBottom:"1.5rem"}}><span style={{color:"#ff6b00"}}>Be mind of the time</span> while you are answering the question.</li>
                                        </ul>
                                        <button
                                            onClick={this.redirectToRecord}
                                            className="default-btn"
                                            style={{color:"white", backgroundColor:"#56a3fa", paddingLeft: "25px", width: "12rem"}}
                                        >
                                             I'm Ready
                                            <span></span>
                                        </button>
                                    </div>

                                    <div className="col-lg-5 col-md-5" style={{marginLeft: "5%", marginTop: "5%"}} >
                                        <h4 className="interview-txt2">What will the process look like?</h4>
                                        {/*insert gif here*/}
                                        <div style={{width: "100%", height: "100%"}}>
                                        <img src='https://hirebeat-assets.s3.amazonaws.com/guide.gif' alt="gif" />
                                        </div>
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
                        </div> : null
                }
            </React.Fragment>
        );
    }
}

const SampleQuestion = (props) => {
    return(
        <Modal show={props.show} onHide={props.hide} centered={true} size="lg">
                <div className="container mt-5" style={{textAlign:"center"}}>
                    <h3 style={{color:"#090D3A"}}>
                        <b>Prepare with a Sample Question</b>
                    </h3>
                </div>
                <div className='container mt-3 mb-3' style={{width:"69%"}}>
                    <div className="row">
                        <div className="col-1 mt-2">
                            <i className='bx bx-chevron-right'></i>
                        </div>
                        <div className="col-11">
                            <p style={{fontSize:"18px"}}>
                                Before the actual interview, we have a  sample question for you to test your device. 
                            </p>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-1 mt-2">
                            <i className='bx bx-chevron-right' style={{margin:"auto"}}></i>
                        </div>
                        <div className="col-11">
                            <p style={{fontSize:"18px"}}>
                                Relax! This will not be recorded or reviewed. 
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row mt-1 mb-4">
                    <div class="col text-center">
                        <button className="default-btn text-center" style={{paddingRight:"50px"}} onClick={props.callSecond}>
                            Begin
                        </button>
                    </div>
                </div>
            </Modal>
            )
  }

const mapStateToProps = (state) => ({
  dataLoaded: state.auth_reducer.dataLoaded,
  interview_questions: state.question_reducer.interview_questions,
  isRecorded: state.auth_reducer.isRecorded,
  urlClicked: state.auth_reducer.urlClicked,
});

export default connect(mapStateToProps, {getInterviewQuestions, getRecordStatus})(InterviewInfo);
