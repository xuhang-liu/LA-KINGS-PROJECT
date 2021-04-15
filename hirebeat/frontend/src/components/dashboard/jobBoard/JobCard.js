import React, { Component, useEffect, useState } from "react";

export class JobCard extends Component{

    render() {
        return(
            <div>
                <hr
                    style={{
                        color: "#E8EDFC",
                        backgroundColor: "#E8EDFC",
                        height: 3,
                        marginBottom: "0.5rem",
                        marginTop: "0rem"
                    }}
                />
                <div className="row interview-txt7 interview-center " style={{color: "#7D7D7D", height: "2rem", marginTop:"0.5rem", paddingBottom: "3rem"}}>
                    <div className="col-3 interview-txt9 mt-2">Software Engineer</div>
                    <div className="col-1 interview-txt9 mt-2">123456</div>
                    <div className="col-2 interview-txt9 mt-2">Received</div>
                    <div className="col-2 interview-txt9 mt-2">Create Date</div>
                    <div className="col-2 interview-txt9 mt-2">Job Page</div>
                    <div className="col-2 interview-txt9 mt-2">Action</div>
                </div>
            </div>
        )
    }
}

export default JobCard