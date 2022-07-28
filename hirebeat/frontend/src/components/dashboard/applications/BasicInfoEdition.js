import React, { Component } from "react";
import Autocomplete from "react-google-autocomplete";

export class BasicInfoEdition extends Component {
    state = {
        location: this.props.location,
    }
    handleLocation = (location) => {
        this.setState({location: location});
    }

    saveUpdate = () => {
        let phone = document.getElementById("phone").value;
        let linkedin = document.getElementById("linkedin").value;
        let data = {
            "job_id": this.props.jobId,
            "email": this.props.email,
            "phone": phone,
            "location": this.state.location,
            "linkedinurl": linkedin,
        }
        this.props.updateApplicantBasicInfo(data);
        setTimeout(() => {
            let isSortByScore = this.props.isSortByScore || "";
            let page = this.props.selectedPage + 1; // selectedPage is 0 indexed
            this.props.getAllJobs(this.props.user.id, page, this.props.selectedCurrentStage, this.props.selectedStatus, isSortByScore, this.props.keyWords);
            this.props.setIsEdit(false);
        }, 300)

    }

    render() {
        return (
            <div className="resume-box p-4" style={{ background: "white", borderRadius: "10px", width: "100%", height: "35%" }}>
                <div className="row mb-3" style={{ marginBottom: "2%" }}>
                    <div className="col d-flex align-items-center">
                        <h2
                            style={{
                                fontWeight: "600",
                                marginRight: "0.8rem",
                                wordWrap: "break-word",
                                wordBreak: "break-word",
                                color: "#090D3A",
                                width: "100%",
                                fontSize: "1.5vw"
                            }}
                        >
                            {this.props.first_name + " " + this.props.last_name}
                        </h2>
                    </div>
                </div>
                <div style={{ marginTop: "1%", display: "flex", alignItems: "center", marginBottom: "1vw"}}>
                    <i className="bx bx-phone bx-sm"></i>
                    <input id="phone" className="basic-info-input" defaultValue={this.props.phone} style={{fontSize:"0.9vw"}}></input>
                </div>
                <div className="mb-2" style={{ marginTop: "1%", display: "flex", alignItems: "center", marginBottom: "1vw"}}>
                    <i className="bx bx-location-plus bx-sm"></i>
                    <Autocomplete
                        id="location"
                        className="basic-info-input"
                        style={{width: "100%", fontSize:"0.9vw"}}
                        language="en"
                        apiKey={"AIzaSyDEplgwaPXJn38qEEnE5ENlytHezUfq56U"}
                        onPlaceSelected={(place, inputRef, autocomplete) => {
                            this.handleLocation(place.formatted_address);
                        }}
                        defaultValue={this.props.location}
                    />
                </div>
                <div className="mb-2" style={{ marginTop: "1%", display: "flex", alignItems: "center", marginBottom: "1vw", fontSize:"0.9vw" }}>
                    <i className="bx bxl-linkedin-square bx-sm"></i>
                    <input id="linkedin" className="basic-info-input" defaultValue={this.props.linkedin} style={{fontSize:"0.9vw"}}></input>
                </div>
                <div className="d-flex justify-content-between" style={{marginTop: "1vw", paddingBottom:"1vw"}}>
                    <button className="default-btn" style={{paddingLeft: "25px"}} onClick={this.saveUpdate}>Save</button>
                    <button className="default-btn" style={{background: "#E5E5E5", color: "#090D3A", paddingLeft: "25px"}} onClick={() => this.props.setIsEdit(false)}>Cancel</button>
                </div>
            </div>
        )
    }
}

export default BasicInfoEdition;