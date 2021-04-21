import React, { Component, useState } from "react";
import { MyModal } from "../DashboardComponents";
import ReviewCandidate from "../applications/ReviewCandidate";

export class ApplicantList extends Component{
    state = {
        keyWords: "",
    }

    onChange = (e) => {
        this.setState({keyWords: e.target.value});
    };

    render() {
        return(
            <React.Fragment>
                <div className="card container mt-3 pt-2 pb-3">
                    <div className="interview-txt7 interview-center" style={{color:"#56a3fa", fontSize:"1rem", display: "flex"}}>
                        <div style={{paddingTop: "0.5rem"}}><i className="bx bx-search bx-sm"></i></div>
                        <div>
                            <input placeholder="Search candidate" className="search-candidate-input" style={{height: "auto"}} value={this.state.keyWords} onChange={this.onChange}></input>
                        </div>
                    </div>
                    <div className="card container" style={{marginTop:"1.5rem"}}>
                        <div className="row interview-txt7 interview-center " style={{color: "#7D7D7D", height: "2rem", marginTop:"0.5rem", paddingBottom: "3rem"}}>
                            <div className="col-2">Name</div>
                            <div className="col-3">Email</div>
                            <div className="col-2">Applied Date</div>
                            <div className="col-2">Application</div>
                            <div className="col-1">Resume</div>
                            <div className="col-2">Interview</div>
                        </div>
                        {this.props.curJob.applicants.map((a) => {
                            if (this.state.keyWords != "") {
                                let name = a.first_name + " " + a.last_name;
                                if (!name.toLowerCase().includes(this.state.keyWords.toLowerCase())) return null;
                            }
                            return (
                                <ApplicantRow
                                    applicant={a}
                                />
                            )
                        })}
                    </div>
                </div>
            </React.Fragment>
        )
    }

}

const ApplicantRow = (props) => {
    const [showPreview, setShowPreview] = useState(false);
    return(
        <>
        <div className="row interview-txt7 interview-center " style={{color: "#7D7D7D", height: "2rem", marginTop:"0.5rem", paddingBottom: "3rem"}}>
            <div className="col-2 interview-txt9 mt-2">
                <input id={props.applicant.id} type="checkbox"/> &nbsp; {props.applicant.first_name + " " + props.applicant.last_name}
            </div>
            <div className="col-3 interview-txt9 mt-2">{props.applicant.email}</div>
            <div className="col-2 interview-txt9 mt-2">{props.applicant.apply_date.substring(0, 10)}</div>
            <div className="col-2 interview-txt9 mt-2" style={{cursor:"pointer"}} onClick={()=>{setShowPreview(true);}}>preview prompt</div>
            <div className="col-1 interview-txt9 mt-2">{props.applicant.resume_url}</div>
            <div className="col-2 center-items interview-txt9 mt-2">
                {props.applicant.is_invited &&
                    <button className="default-btn"
                        style={{backgroundColor: "#13C4A1", padding: "5px"}}
                    >
                        Invited
                    </button>
                }
            </div>
        </div>
        <div style={{background:"#E8EDFC"}}>
            <MyModal className="light-blue-modal" show={showPreview} onHide={()=>{setShowPreview(false)}}>
                    <ReviewCandidate  
                        phone={props.applicant.phone}
                        email={props.applicant.email}
                        location={props.applicant.location}
                        resume_url={props.applicant.resume_url}
                        first_name={props.applicant.first_name}
                        last_name={props.applicant.last_name}
                        style={{backgroundColor:"black"}} onHide={()=>{setShowPreview(false)}} />
            </MyModal>
        </div>
        </>
        
    )
}

export default ApplicantList;