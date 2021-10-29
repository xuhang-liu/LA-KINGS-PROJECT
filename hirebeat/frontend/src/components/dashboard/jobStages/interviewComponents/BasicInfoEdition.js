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
        console.log(data);
        this.props.updateApplicantBasicInfo(data);
        setTimeout(() => {
            let page = this.props.selectedPage + 1; // selectedPage is 0 indexed
            this.props.getPostedJobs(this.props.user.id, page, this.props.selectedCurrentStage);
            this.props.disableEdit();
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
                                wordBreak: "break-all",
                                color: "#090D3A",
                                width: "100%"
                            }}
                        >
                            {this.props.name.length > 14 ?
                                this.props.name.substring(0, 12) + "..." :
                                this.props.name
                            }
                        </h2>
                    </div>
                </div>
                <div style={{ marginTop: "1%", display: "flex", alignItems: "center", marginBottom: "1rem" }}>
                    <i className="bx bx-phone bx-sm"></i>
                    <input id="phone" className="basic-info-input" defaultValue={this.props.phone}></input>
                </div>
                <div className="mb-2" style={{ marginTop: "1%", display: "flex", alignItems: "center", marginBottom: "1rem" }}>
                    <i className="bx bx-location-plus bx-sm"></i>
                    <Autocomplete
                        id="location"
                        className="basic-info-input"
                        style={{width: "100%"}}
                        language="en"
                        apiKey={"AIzaSyDEplgwaPXJn38qEEnE5ENlytHezUfq56U"}
                        onPlaceSelected={(place, inputRef, autocomplete) => {
                            this.handleLocation(place.formatted_address);
                        }}
                        defaultValue={this.props.location}
                    />
                </div>
                <div className="mb-2" style={{ marginTop: "1%", display: "flex", alignItems: "center", marginBottom: "1rem" }}>
                    <i className="bx bxl-linkedin-square bx-sm"></i>
                    <input id="linkedin" className="basic-info-input" defaultValue={this.props.linkedin}></input>
                </div>
                <div className="d-flex justify-content-between" style={{marginTop: "1rem"}}>
                    <button className="default-btn" style={{paddingLeft: "25px"}} onClick={this.saveUpdate}>Save</button>
                    <button className="default-btn" style={{background: "#E5E5E5", color: "#090D3A", paddingLeft: "25px"}} onClick={this.props.disableEdit}>Cancel</button>
                </div>
            </div>
        )
    }
}

export default BasicInfoEdition;