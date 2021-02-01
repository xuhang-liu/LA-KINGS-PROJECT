import React, {Component} from 'react';
import { IconText } from "./DashboardComponents";
import ApplicationVideo from "./videos/ApplicationVideo";
import { connect } from "react-redux";
import { getPostedJobs } from "../../redux/actions/question_actions"

class ReviewApplication extends Component{
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
      }

    updateStatus = (status) => {
        let data = {"email": this.props.email_candidate, "positionId": this.props.positionId, "status": status, "userId": this.props.user.id};
        this.props.updateCommentStatus(data);
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
                                {this.props.comment_status == 1 ? <button className="btn btn-success btn-block" style={{marginBottom:"10%"}} onClick={() => {this.updateStatus(1);}}>
                                    Accept
                                </button>
                                : <button className="btn btn-block" style={{color:"#090D3A", backgroundColor:"#E8EDFC", marginBottom:"10%"}} onClick={() => {this.updateStatus(1);}}>
                                    Accept
                                </button>
                                }
                                {this.props.comment_status == 2 ? <button className="btn btn-warning btn-block" style={{marginBottom:"10%"}} onClick={() => {this.updateStatus(2);}}>
                                    On Hold
                                </button>
                                : <button className="btn btn-block" style={{color:"#090D3A", backgroundColor:"#E8EDFC", marginBottom:"10%"}} onClick={() => {this.updateStatus(2);}}>
                                    On Hold
                                </button>
                                }
                                {this.props.comment_status == 3 ? <button className="btn btn-danger btn-block" style={{marginBottom:"10%"}} onClick={() => {this.updateStatus(3);}}>
                                    Reject
                                </button>
                                : <button className="btn btn-block" style={{color:"#090D3A", backgroundColor:"#E8EDFC", marginBottom:"10%"}} onClick={() => {this.updateStatus(3);}}>
                                    Reject
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
});

export default connect(mapStateToProps, { getPostedJobs })(ReviewApplication);