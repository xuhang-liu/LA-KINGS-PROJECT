import React, { Component } from "react";
import { Link } from "react-router-dom";

export class ReceivedInterview extends Component {

    render() {
        var param = "email="+this.props.user.email+"&positionId="+this.props.received_interview.position_id;
        var encodedParam = window.btoa(param);
        var url = "/candidate-login?"+encodedParam;
        var d = this.props.received_interview.create_date;
        d = d.split('T')[0];
        return (
            <React.Fragment>
            <div className="container d-flex justify-content-start " style={{marginTop:"2%", backgroundColor: "white", "border-radius": "0.5rem"}}>
                <div className="col-12" style={{fontFamily: "Avenir Next" }}>
                    <div className="mt-4">
                        <div className="row">
                            <div className="col-2" style={{color:"#090D3A"}}>
                                <h3>{this.props.received_interview.company_name}</h3>
                            </div>
                            <div className="col-3" style={{color:"#56A3FA"}}>
                                <h3>{this.props.received_interview.job_title}</h3>
                            </div>
                            <div className="col-4">
                                {!this.props.received_interview.is_recorded ?
                                <h5 style={{color:"#ff6b00"}}><i className="bx bx-loader-circle bx-sm"></i> Pending</h5> :
                                <h5 style={{color:"#13C4A1"}}><i className="bx bx-check-double bx-sm"></i> Completed</h5>}
                            </div>
                            <div className="col-3 mt-2">
                            {!this.props.received_interview.is_recorded &&
                            <Link to={url}>
                            <button className="default-btn" style={{paddingLeft:"25px"}}>
                                Start Interview
                            </button>
                            </Link>}
                        </div>
                        </div>
                    </div>
                    <div className="row mb-2 mt-1">
                        <div className="col-2">
                            <p style={{color:"#4A6F8A"}}>{this.props.received_interview.iq_count} Questions</p>
                        </div>
                        <div className="col-7 mb-4" style={{color:"#4A6F8A", borderLeft:"outset"}}>
                            <p>Received Date: {d}</p>
                        </div>
                    </div>
                </div>
            </div>
            </React.Fragment>
        );
    };
}

export default (ReceivedInterview);