import React, {Component} from 'react';
import { IconText } from "./DashboardComponents";
import ApplicationVideo from "./videos/ApplicationVideo";
import { connect } from "react-redux";
import { getPostedJobs, getResumeURL, updateSecondroundStatus} from "../../redux/actions/question_actions"

class SecondReview extends Component{
    constructor(props) {
        super(props);

        var quesiton_array = [];
        var video_array = [];
        var stars = [];
        var comments = [];
        var pk = [];

        this.props.int_ques.map((i) => {
                stars.push(i.video_stars);
                comments.push(i.video_comment)
                quesiton_array.push(i.question_desc);
                video_array.push(i.url);
                pk.push(i.id)
        });

        this.state = {
                quesiton_array: quesiton_array,
                video_array: video_array,
                stars: stars,
                comments: comments,
                pk: pk,
        };
        this.props.getResumeURL(this.props.positionId, this.props.id_candidate);
      }

    updateStatus = (status) => {
        let data = {"email": this.props.email_candidate, "positionId": this.props.positionId, "status": status, "userId": this.props.user.id};
        console.log("the data is ", data);
        this.props.updateSecondroundStatus(data);
        this.props.hide();
    }
    
    render() {
        return(
            <div className="container" style={{width:'95%'}}>
                <div className="card container mb-5" style={{marginTop:"1%"}}>
                    <div className="row">
                        <div className="col-3 container">
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
                                        {this.props.username_candidate}
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
                                {/*<div className="row">
                                    <button className="default-btn mt-3 ml-3" onClick={() => {setTimeout(()=>{this.props.setShowResume(true);}, 300)}} >
                                        <i className="bx bx-file"></i>View Resume
                                    </button>
                                    </div>*/}</div>}
                        </div>
                        <div className="col-7 container mt-4">
                            <ApplicationVideo   int_ques={this.props.int_ques} 
                                                positionId={this.props.positionId}
                                                quesiton_array = {this.state.quesiton_array}
                                                video_array = {this.state.video_array}
                                                stars = {this.state.stars}
                                                comments = {this.state.comments}
                                                pk = {this.state.pk}
                            />
                        </div>
                        <div className="col-2 container" style={{marginTop:"2.5%"}}>
                            <div className="container mt-3">
                                {this.props.secondround_status == 1 ? <button className="btn btn-success btn-block" style={{marginBottom:"10%"}} onClick={() => {this.updateStatus(1);}}>
                                    Approve
                                </button>
                                : <button className="btn btn-block" style={{color:"#090D3A", backgroundColor:"#E8EDFC", marginBottom:"10%"}} onClick={() => {this.updateStatus(1);}}>
                                    Approve
                                </button>
                                }
                                {this.props.secondround_status == 2 ? <button className="btn btn-danger btn-block" style={{marginBottom:"10%"}} onClick={() => {this.updateStatus(2);}}>
                                    Archive
                                </button>
                                : <button className="btn btn-block" style={{color:"#090D3A", backgroundColor:"#E8EDFC", marginBottom:"10%"}} onClick={() => {this.updateStatus(2);}}>
                                    Archive
                                </button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
};

const mapStateToProps = (state) => ({
    user: state.auth_reducer.user,
    recordTime: state.video_reducer.recordTime,
    resumeURL: state.video_reducer.resumeURL,
});

export default connect(mapStateToProps, { getPostedJobs, getResumeURL, updateSecondroundStatus})(SecondReview);