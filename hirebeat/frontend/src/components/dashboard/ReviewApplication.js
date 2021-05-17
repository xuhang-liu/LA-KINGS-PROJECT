import React, {Component} from 'react';
import { IconText } from "./DashboardComponents";
import ApplicationVideo from "./videos/ApplicationVideo";
import { connect } from "react-redux";
import { getPostedJobs, getResumeURL } from "../../redux/actions/question_actions";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

class ReviewApplication extends Component{
    constructor(props) {
        super(props);
        this.props.getResumeURL(this.props.positionId, this.props.id_candidate);
      }

    updateStatus = (status) => {
        let data = {"email": this.props.email_candidate, "positionId": this.props.positionId, "status": status, "userId": this.props.user.id};
        this.props.updateCommentStatus(data);
        this.props.getPJobs();
        this.props.hide();
    }

    showResumeEva = () => {
        if(this.props.profile.membership == "Premium"){
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
            <div className="container-fluid" style={{width:"95%"}}>
                <div className="card container-fluid mb-5" style={{marginTop:"1%"}}>
                    <div className="row">
                        <div className="col-3">
                                <div className="row" style={{marginTop:"10%", marginBottom:"2%"}}>
                                    <div className="col d-flex align-items-center">
                                    <h4
                                        style={{
                                        fontWeight: "bold",
                                        marginRight: "0.8rem",
                                        wordWrap: "break-word",
                                        wordBreak: "break-all",
                                        }}
                                    >
                                        {this.props.username_candidate.length>14?this.props.username_candidate.substring(0,12)+"..." : this.props.username_candidate}
                                    </h4>
                                    </div>
                                </div>
                                <div className="row" style={{marginTop:"1%"}}>
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
                                <div className="row" style={{marginTop:"1%"}}>
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
                                <div className="row" style={{marginTop:"1%"}}>
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
                                {((this.props.recordTime != "")&&(this.props.recordTime != null)) &&
                                <div>
                                <div className="row mt-5 pl-3">
                                        Recorded on: {this.props.recordTime.substring(0, 10)}
                                </div>
                                {((this.props.interviewResume.result_rate != "") && (this.props.interviewResume.result_rate != null)) &&
                                <div className="row mt-3 pl-4" style={{width:"20vmin"}}>
                                    {(((parseInt(this.props.interviewResume.result_rate, 10)) >= 0) && ((parseInt(this.props.interviewResume.result_rate, 10)) <= 24)) && 
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/4.png" alt="pic"></img>}
                                    {(((parseInt(this.props.interviewResume.result_rate, 10)) >= 25) && ((parseInt(this.props.interviewResume.result_rate, 10)) <= 50)) && 
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/3.png" alt="pic"></img>}
                                    {(((parseInt(this.props.interviewResume.result_rate, 10)) >= 51) && ((parseInt(this.props.interviewResume.result_rate, 10)) <= 75)) && 
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/2.png" alt="pic"></img>}
                                    {(((parseInt(this.props.interviewResume.result_rate, 10)) >= 76) && ((parseInt(this.props.interviewResume.result_rate, 10)) <= 100)) && 
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/1.png" alt="pic"></img>}
                                </div>}
                                <div className="row">
                                    {((this.props.interviewResume.result_rate != "") && (this.props.interviewResume.result_rate != null)) &&
                                    <button
                                        onClick={() => {setTimeout(()=>{this.showResumeEva()}, 200)}}
                                        className="interview-txt9 mt-3 ml-3"
                                        style={{color: "#67A3F3", border: "none", background: "white"}}
                                    >
                                        <i className="bx bx-arrow-to-right interview-txt9" style={{color: "#67A3F3"}}></i> Resume Evaluation
                                    </button>}
                                </div>
                                <div className="row">
                                    {((this.props.resumeURL != "")&&(this.props.resumeURL != null)) &&
                                    <button className="default-btn mt-3 ml-3" onClick={() => {setTimeout(()=>{this.props.setShowResume(true);}, 200)}} >
                                        <i className="bx bx-file"></i>View Resume
                                    </button>}
                                </div></div>}
                        </div>
                        <div className="col-9 mt-4">
                            <ApplicationVideo   int_ques={this.props.int_ques} 
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
                            />
                        </div>
                    </div>
                </div>
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
        interviewResume: state.video_reducer.interviewResume}
};

export default connect(mapStateToProps, { getPostedJobs, getResumeURL })(ReviewApplication);