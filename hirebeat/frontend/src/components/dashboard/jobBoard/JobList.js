import React, { Component, useEffect, useState } from "react";
import JobCard from "./JobCard";

export class JobList extends Component{
    state = {
        keyWords: "",
    }

    onChange = (e) => {
        this.setState({keyWords: e.target.value});
    };

    render() {
        return(
            <div className="card container mt-3 pt-2 pb-3">
                <div className="interview-txt7 interview-center" style={{color:"#56a3fa", fontSize:"1rem", display: "flex"}}>
                    <div style={{paddingTop: "0.5rem"}}><i className="bx bx-search bx-sm"></i></div>
                    <div>
                        <input placeholder="Search jobs" className="search-candidate-input" style={{height: "auto"}} value={this.state.keyWords} onChange={this.onChange}></input>
                    </div>
                </div>
                <div className="card container" style={{marginTop:"1.5rem"}}>
                    <div className="row interview-txt7 interview-center " style={{color: "#7D7D7D", height: "2rem", marginTop:"0.5rem", paddingBottom: "3rem"}}>
                        <div className="col-3">Job Title</div>
                        <div className="col-1">ID</div>
                        <div className="col-1">Status</div>
                        <div className="col-2">Received</div>
                        <div className="col-2">Create Date</div>
                        <div className="col-2">Job Page</div>
                        <div className="col-1">Action</div>
                    </div>
                    <JobCard />
                </div>
            </div>
        )
    }
}

export default JobList