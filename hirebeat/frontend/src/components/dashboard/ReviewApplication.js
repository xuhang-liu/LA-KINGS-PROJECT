import React, {Component} from 'react';
import { IconText } from "./DashboardComponents";
import ApplicationVideo from "./videos/ApplicationVideo";
import { connect } from "react-redux";
import { getPostedJobs, getResumeURL, getReviewNote } from "../../redux/actions/question_actions";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import ReviewNote from "./applications/ReviewNote";

class ReviewApplication extends Component{
    constructor(props) {
        super(props);
        this.props.getResumeURL(this.props.positionId, this.props.id_candidate);
        this.props.getReviewNote(this.props.positionId, this.props.email_candidate);
        this.state = {
            viewResume: true,
            viewVideo: false,
            viewNotes: false,
        }
    }

    setViewResume = () => {
        this.setState({
            viewResume: true,
            viewVideo: false,
            viewNotes: false,
        })
    }

    setViewVideo = () => {
        this.setState({
            viewResume: false,
            viewVideo: true,
            viewNotes: false,
        })
    }

    setViewNotes = () => {
        this.setState({
            viewResume: false,
            viewVideo: false,
            viewNotes: true,
        })
    }

    updateStatus = (status) => {
        let data = {"email": this.props.email_candidate, "positionId": this.props.positionId, "status": status, "userId": this.props.user.id};
        this.props.updateCommentStatus(data);
        setTimeout(()=>{this.props.getPJobs()}, 200);
    }

    showResumeEva = () => {
        if(this.props.profile.membership == "Premium" || this.props.profile.is_external_reviewer){
            this.props.setShowEva(true);
        }else{
            this.props.getPJobs();
            this.props.hide();
            confirmAlert({
                title: 'Upgrade Now!',
                message: 'Upgrade to unlock Resume Evaluation.',
                buttons: [
                    {label: 'Upgrade Now', onClick: () => window.location.href = "/employer-pricing"},
                    {label: 'OK'},
                ]
            });
        }
    }

    render() {
        const recordTime = this.props.recordTime;
        const interviewResume = this.props.interviewResume;
        return(
            <div className="fluid-container ml-5 mb-5" style={{width:'95%'}}>
                <div style={{marginBottom: "30px"}}><h3><b><i className="bx bx-microphone"></i><span className="ml-2">Interview / Review Candidate</span></b></h3></div>
                <div className="col d-flex align-items-center pl-0">
                    <button
                        type="button"
                        className="panel-button"
                        onClick={this.props.hide}
                        style={{outline: "none", margin:"0%", padding:"0px", background:"#e8edfc"}}
                    >
                        <div className="center-items">
                            <i style={{color: "#67A3F3"}} className="bx bx-arrow-back bx-sm"></i>
                            <p style={{color: "#67A3F3", fontSize: "1.25rem"}}>Back To List</p>
                        </div>
                    </button>
                </div>
                <div className="row" style={{display:"flex"}}>
                    <div className="col-3 pl-3 mt-3 pr-2">
                        <div className="resume-box p-4" style={{background:"white", borderRadius:"10px", width:"100%", height:"25%", minHeight:"14rem"}}>
                            <div className="row mb-3" style={{marginBottom:"2%"}}>
                                <div className="col d-flex align-items-center">
                                    <h4
                                        style={{
                                        fontWeight: "bold",
                                        marginRight: "0.8rem",
                                        wordWrap: "break-word",
                                        wordBreak: "break-all",
                                        }}
                                    >
                                        {this.props.applicants[this.props.current].name.length > 14 ?
                                            this.props.applicants[this.props.current].name.substring(0,12)+"..." :
                                            this.props.applicants[this.props.current].name}
                                    </h4>
                                </div>
                            </div>
                            <div className="row mb-2" style={{marginTop:"1%"}}>
                                <div className="col d-flex align-items-center">
                                    <IconText
                                    iconName={"bx bx-phone bx-sm"}
                                    textDisplayed={this.props.phone_candidate}
                                    textSize={"12px"}
                                    textColor={"#0B3861"}
                                    iconMargin={"3px"}
                                    />
                                </div>
                            </div>
                            <div className="row mb-2" style={{marginTop:"1%"}}>
                                <div className="col d-flex align-items-center">
                                    <IconText
                                    iconName={"bx bx-envelope bx-sm"}
                                    textDisplayed={this.props.email_candidate}
                                    textSize={"12px"}
                                    textColor={"#0B3861"}
                                    iconMargin={"5px"}
                                    />
                                </div>
                            </div>
                            <div className="row mb-2" style={{marginTop:"1%"}}>
                                <div className="col d-flex align-items-center">
                                    <IconText
                                    iconName={"bx bx-location-plus bx-sm"}
                                    textDisplayed={this.props.location_candidate}
                                    textSize={"12px"}
                                    textColor={"#0B3861"}
                                    iconMargin={"3px"}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="resume-box mt-4 p-4" style={{background:"white", borderRadius:"10px", width:"100%", height:"50%", position:"relative", minHeight:"28rem"}}>
                            <h2
                                style={{
                                fontWeight: "600",
                                marginRight: "0.8rem",
                                wordWrap: "break-word",
                                wordBreak: "break-all",
                                color: "#090D3A",
                                }}
                            >
                                Evaluation Scale
                            </h2>
                            {((this.props.recordTime != "")&&(this.props.recordTime != null)) &&
                            <div>
                            {/*<div className="row mt-5 pl-3">
                                    Recorded on: {this.props.recordTime.substring(0, 10)}
                            </div>*/}
                            {((this.props.interviewResume.result_rate != "") && (this.props.interviewResume.result_rate != null)) &&
                            <div className="mt-5 px-4" style={{width:"75%", marginLeft: "auto", marginRight: "auto"}}>
                                {(((parseInt(this.props.interviewResume.result_rate, 10)) >= 0) && ((parseInt(this.props.interviewResume.result_rate, 10)) <= 24)) &&
                                <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/4.png" alt="pic"></img>}
                                {(((parseInt(this.props.interviewResume.result_rate, 10)) >= 25) && ((parseInt(this.props.interviewResume.result_rate, 10)) <= 50)) &&
                                <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/3.png" alt="pic"></img>}
                                {(((parseInt(this.props.interviewResume.result_rate, 10)) >= 51) && ((parseInt(this.props.interviewResume.result_rate, 10)) <= 75)) &&
                                <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/2.png" alt="pic"></img>}
                                {(((parseInt(this.props.interviewResume.result_rate, 10)) >= 76) && ((parseInt(this.props.interviewResume.result_rate, 10)) <= 100)) &&
                                <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/1.png" alt="pic"></img>}
                            </div>}
                            <div className="row" style={{justifyContent: "center"}}>
                                {((this.props.interviewResume.result_rate != "") && (this.props.interviewResume.result_rate != null)) &&
                                <button
                                    onClick={() => {setTimeout(()=>{this.showResumeEva()}, 200)}}
                                    className="interview-txt9 mt-3 ml-3"
                                    style={{color: "#67A3F3", border: "none", background: "white"}}
                                >
                                    <i className="bx bx-arrow-to-right interview-txt9" style={{color: "#67A3F3"}}></i> Resume Evaluation
                                </button>}
                            </div>
                            {/*<div className="row">
                                {((this.props.resumeURL != "")&&(this.props.resumeURL != null)) &&
                                <button className="default-btn mt-3 ml-3" onClick={() => {setTimeout(()=>{this.props.setShowResume(true);}, 200)}} >
                                    <i className="bx bx-file"></i>View Resume
                                </button>}
                            </div>*/}</div>}
                            {!this.props.profile.is_subreviwer &&
                                <div>
                                    {this.props.commentStatus == 1 ?
                                        <div className="row" style={{marginTop: "1rem", display:"flex", justifyContent:"center"}}>
                                            <button className="default-btn btn-success ml-2" style={{width:"8rem", fontSize:"0.8rem"}} onClick={() => {this.updateStatus(1);this.props.refresh();}}>
                                                <i class='bx bx-bookmark-plus'></i>Shortlist
                                            </button>
                                        </div>:
                                        <div className="row" style={{marginTop: "1rem", display:"flex", justifyContent:"center"}}>
                                            <button className="default-btn ml-2" style={{color:"#090D3A", backgroundColor:"#E8EDFC", width:"8rem", fontSize:"0.8rem"}} onClick={() => {this.updateStatus(1);this.props.refresh();}}>
                                                <i class='bx bx-bookmark-plus' style={{color:"#090D3A"}}></i>Shortlist
                                            </button>
                                        </div>
                                    }
                                    {this.props.commentStatus == 2 ?
                                        <div className="row" style={{marginTop: "1rem", display:"flex", justifyContent:"center"}}>
                                            <button className="default-btn btn-warning ml-2" style={{width:"8rem", fontSize:"0.8rem"}} onClick={() => {this.updateStatus(2);this.props.refresh();}}>
                                                <i class='bx bx-help-circle'></i>Hold
                                            </button>
                                        </div>:
                                        <div className="row" style={{marginTop: "1rem", display:"flex", justifyContent:"center"}}>
                                            <button className="default-btn ml-2" style={{color:"#090D3A", backgroundColor:"#E8EDFC", width:"8rem", fontSize:"0.8rem"}} onClick={() => {this.updateStatus(2);this.props.refresh();}}>
                                                <i class='bx bx-help-circle' style={{color:"#090D3A"}}></i>Hold
                                            </button>
                                        </div>
                                    }
                                    {this.props.commentStatus == 3 ?
                                        <div className="row" style={{marginTop: "1rem", display:"flex", justifyContent:"center"}}>
                                            <button className="default-btn btn-danger ml-2" style={{width:"8rem", fontSize:"0.8rem"}} onClick={() => {this.updateStatus(3);this.props.refresh();}}>
                                                <i class='bx bx-calendar-x'></i>Reject
                                            </button>
                                        </div> :
                                        <div className="row" style={{marginTop: "1rem", display:"flex", justifyContent:"center"}}>
                                            <button className="default-btn ml-2" style={{color:"#090D3A", backgroundColor:"#E8EDFC", width:"8rem", fontSize:"0.8rem"}} onClick={() => {this.updateStatus(3);this.props.refresh();}}>
                                                <i class='bx bx-calendar-x' style={{color:"#090D3A"}}></i>Reject
                                            </button>
                                        </div>
                                    }
                                </div>
                            }
                        </div>
                    </div>
                    <div className="col-9 mt-3 pl-3 pr-2" >
                        <div className="resume-box p-4" style={{background:"white", borderRadius:"10px"}}>
                            <div>
                                <h2
                                    className={this.state.viewResume ? "head-btn-selected" : "head-btn-unselected"}
                                    onClick={this.setViewResume}
                                >
                                    Resume
                                </h2>
                                <h2
                                    className={this.state.viewVideo ? "head-btn-selected" : "head-btn-unselected"}
                                    onClick={this.setViewVideo}
                                >
                                    Video Interview
                                </h2>
                                <h2
                                    className={this.state.viewNotes ? "head-btn-selected" : "head-btn-unselected"}
                                    onClick={this.setViewNotes}
                                >
                                    Interview Notes
                                </h2>
                            </div>
                            {this.state.viewResume && (
                                ((this.props.resumeURL != "")&&(this.props.resumeURL != null)) ?
                                <div class="iframe-container">
                                    <iframe className="responsive-iframe" src={this.props.resumeURL}/>
                                </div> :
                                <div>
                                    <h3 style={{marginTop:"10%", textAlign:"center", height: "38rem"}}>Candidate does not upload resume.</h3>
                                </div>)
                            }
                            {this.state.viewVideo &&
                                <ApplicationVideo
                                    int_ques={this.props.int_ques}
                                    positionId={this.props.positionId}
                                    quesiton_array = {this.props.quesiton_array}
                                    video_array = {this.props.video_array}
                                    stars = {this.props.stars}
                                    comments = {this.props.comments}
                                    pk = {this.props.pk}
                                    refresh={this.props.refresh}
                                    updateStatus={this.updateStatus}
                                    commentStatus={this.props.commentStatus}
                                    profile={this.props.profile}
                                    subreviewerUpdateComment={this.props.subreviewerUpdateComment}
                                    current={this.props.current}
                                    setCurrent={this.props.setCurrent}
                                    start={this.props.start}
                                    end={this.props.end}
                                    viewPrevResult={this.props.viewPrevResult}
                                    viewNextResult={this.props.viewNextResult}
                                    hasSwitch={this.props.hasSwitch}
                                />
                            }
                            {this.state.viewNotes &&
                                <ReviewNote
                                    reviews={this.props.reviews}
                                    positionId={this.props.positionId}
                                    applicantEmail={this.props.email_candidate}
                                    reviewer={this.props.user.username}
                                    profile={this.props.profile}
                                    reviewerEmail={this.props.user.email}
                                />
                            }
                        </div>
                    </div>
                </div>
                {this.props.hasSwitch &&
                    <div className="row" style={{marginTop: "1.5rem", marginBottom: "1rem"}}>
                        <div className="col-3"/>
                        <div className="col-9" style={{textAlign: "center"}}>
                            <button
                                className={this.props.current == this.props.start ? "disable-btn" : "enable-btn"}
                                disabled={this.props.current == this.props.start ? true : false}
                                onClick={() => this.props.viewPrevResult(this.props.current)}
                            >
                                &lt; Prev
                            </button>
                            <button
                                className={this.props.current == this.props.end ? "disable-btn" : "enable-btn"}
                                disabled={this.props.current == this.props.end ? true : false}
                                onClick={() => this.props.viewNextResult(this.props.current)}
                                style={{marginLeft: "2rem"}}
                            >
                                Next &gt;
                            </button>
                        </div>
                    </div>
                }
            </div>
        )
    };
};

const mapStateToProps = (state) => {
    var quesiton_array = [];
    var video_array = [];
    var stars = [];
    var comments = [];
    var pk = [];

    state.video_reducer.int_ques.map((i) => {
        stars.push(i.video_stars);
        comments.push(i.video_comment)
        quesiton_array.push(i.question_desc);
        video_array.push(i.url);
        pk.push(i.id)
    });

    return {
        quesiton_array: quesiton_array,
        video_array: video_array,
        stars: stars,
        comments: comments,
        pk: pk,
        user: state.auth_reducer.user,
        resumeURL: state.video_reducer.resumeURL,
        recordTime: state.video_reducer.recordTime,
        interviewResume: state.video_reducer.interviewResume,
        reviews: state.question_reducer.reviews}

};

export default connect(mapStateToProps, { getPostedJobs, getResumeURL, getReviewNote })(ReviewApplication);