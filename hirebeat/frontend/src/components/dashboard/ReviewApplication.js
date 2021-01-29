import React, {Component} from 'react';
import { IconText } from "./DashboardComponents";
import ApplicationVideo from "./videos/ApplicationVideo";
import { connect } from "react-redux";

class ReviewApplication extends Component{
    constructor(props) {
        super(props);
      }
    
    state = {
        case: this.props.comment_status,
    }

    updateStatus = (status) => {
        let data = {"email": this.props.email_candidate, "positionId": this.props.positionId, "status": status};
        this.props.updateCommentStatus(data);
        this.props.hide();
        this.props.set_comment_status(status);
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
                            <ApplicationVideo int_ques={this.props.int_ques}/>
                        </div>
                        <div className="col-2 container" style={{marginTop:"2.5%"}}>
                            <div className="container mt-3">
                                {this.state.case == 1 ? <button className="btn btn-success btn-block" style={{marginBottom:"10%"}} onClick={() => {this.updateStatus(1); this.setState({case: 1})}}>
                                    Accept
                                </button>
                                : <button className="btn btn-block" style={{color:"#090D3A", backgroundColor:"#E8EDFC", marginBottom:"10%"}} onClick={() => {this.updateStatus(1); this.setState({case: 1})}}>
                                    Accept
                                </button>
                                }
                                {this.state.case == 2 ? <button className="btn btn-warning btn-block" style={{marginBottom:"10%"}} onClick={() => {this.updateStatus(2); this.setState({case: 2})}}>
                                    On Hold
                                </button>
                                : <button className="btn btn-block" style={{color:"#090D3A", backgroundColor:"#E8EDFC", marginBottom:"10%"}} onClick={() => {this.updateStatus(2); this.setState({case: 2})}}>
                                    On Hold
                                </button>
                                }
                                {this.state.case == 3 ? <button className="btn btn-danger btn-block" style={{marginBottom:"10%"}} onClick={() => {this.updateStatus(3); this.setState({case: 3})}}>
                                    Reject
                                </button>
                                : <button className="btn btn-block" style={{color:"#090D3A", backgroundColor:"#E8EDFC", marginBottom:"10%"}} onClick={() => {this.updateStatus(3); this.setState({case: 3})}}>
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

export default connect(null)(ReviewApplication);