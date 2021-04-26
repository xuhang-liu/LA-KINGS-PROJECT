import React, { Component } from "react";
import Video from "./Video";
import Post from "./Post";

export class EmployerProfile extends Component {
    state = {
        isEditInfo: false,
        isEditBasicInfo: false,
        isEditSummary: false,
        isEditMedia: false,
        isUploadVideo: false,
        isEditPost: false,
    }

    setVideo = () => {
        this.setState({isUploadVideo: true});
    }

    getUpdatedData = () => {
        this.props.getEmployerProfileDetail(this.props.userId);
    }

    editInfo = () => {
        setTimeout(() => {this.setState({isEditInfo: true});}, 300);
    }

    cancelEditInfo = () => {
        this.getUpdatedData();
        setTimeout(() => this.setState({isEditInfo: false}), 300);
    }

    editMedia = () => {
        setTimeout(() => this.setState({isEditMedia: true}), 300);

    }

    cancelEditMedia = () => {
        this.getUpdatedData();
        setTimeout(() => this.setState({isEditMedia: false}), 300);
    }

    editBasicInfo = () => {
        setTimeout(() => this.setState({isEditBasicInfo: true}), 300);
    }

    cancelEditBasicInfo = () => {
        this.getUpdatedData();
        setTimeout(() => this.setState({isEditBasicInfo: false}), 300);
    }

    editSummary = () => {
        setTimeout(() => this.setState({isEditSummary: true}), 300);
    }

    cancelEditSummary = () => {
        this.getUpdatedData();
        setTimeout(() => this.setState({isEditSummary: false}), 300);
    }

    editPost = () => {
        setTimeout(() => this.setState({isEditPost: true}), 300);
    }

    cancelEditPost = () => {
        this.props.getEmployerPost(this.props.userId, 0);
        setTimeout(() => this.setState({isEditPost: false}), 300);
    }

    saveEmployerInfo = () => {
//        let name = document.getElementById("name").value;
        let selfDescription = document.getElementById("selfDescription").value;
        let data = {
            "user_id": this.props.userId,
            "name": this.props.companyName,
            "self_description": selfDescription,
        }
        this.props.updateEmployerInfo(data);
        this.getUpdatedData();
        this.cancelEditInfo();
    }

    saveSocialMedia = () => {
        let linkedin = document.getElementById("linkedin").value;
        let website = document.getElementById("website").value;
        let twitter = document.getElementById("twitter").value;
        if(((!linkedin.toLowerCase().includes("linkedin")) && (linkedin != "")) || ((!twitter.toLowerCase().includes("twitter")) && (twitter != ""))) {
            alert("Please Enter Correct URL");
        }else{
            let data = {
                "user_id": this.props.userId,
                "linkedin": linkedin,
                "website": website,
                "twitter": twitter,
            }
            this.props.updateEmployerSocialMedia(data);
            this.getUpdatedData();
            this.cancelEditMedia();
        }
    }

    saveCompanyInfo = () => {
        let companyType = document.getElementById("companyType").value;
//        let email = document.getElementById("email").value;
        let location = document.getElementById("location").value;
        let data = {
            "user_id": this.props.userId,
            "company_type": companyType,
            "email": this.props.email,
            "location": location,
        }
        this.props.updateEmployerBasicInfo(data);
        this.getUpdatedData();
        this.cancelEditBasicInfo();
    }

    saveSummary = () => {
        let summary = document.getElementById("summary").value;
        let data = {
            "user_id": this.props.userId,
            "summary": summary
        };
        this.props.updateEmployerSummary(data);
        this.getUpdatedData();
        this.cancelEditSummary()
    }

    render () {
        return (
            <React.Fragment>
                <div className="profile-container">
                <div style={{marginBottom: "30px"}}><h3><b><i className="bx bxs-dashboard"></i><span className="ml-2">Dashboard</span></b></h3></div>
                    <div className="row">
                        <div className="col-5">
                            {/* Personal Information */}
                            <div className="profile-bg" style={{textAlign: "left"}}>
                                <div style={{padding: "2rem"}}>
                                    {!this.state.isEditInfo ?
                                        <div className="row">
                                            <div className="col-3">
                                                <img src="https://hirebeat-assets.s3.amazonaws.com/User-dash/bxs-user-circle-2.png" />
                                            </div>
                                            <div className="col-9">
                                                <div className="row">
                                                    <div className="col-8">
                                                        <h3 className="profile-h3">
                                                            {this.props.companyName}
                                                            {/* (this.props.employerProfileDetail.name !== null && this.props.employerProfileDetail.name !== "") ? this.props.employerProfileDetail.name : "Company Name Here" */}
                                                        </h3>
                                                    </div>
                                                    <div className="col-4 profile-edit">
                                                        <div style={{float: "right"}}>
                                                            <i className="bx bx-edit-alt"></i>
                                                            <span type="button" onClick={this.editInfo} style={{marginLeft: "0.5rem"}}>Edit</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="profile-p">
                                                    {(this.props.employerProfileDetail.self_description !== null && this.props.employerProfileDetail.self_description !== "") ? this.props.employerProfileDetail.self_description : "Company Introduction"}
                                                </p>
                                            </div>
                                        </div> :
                                        <div>
                                            <div className="row">
                                                <div className="col-7">
                                                    <h3 className="profile-h3">Information</h3>
                                                </div>
                                                <div className="col-5 profile-edit">
                                                    <div style={{float: "right"}}>
                                                        <span type="button" onClick={this.cancelEditInfo}>Cancel</span>
                                                        <span type="button" onClick={this.saveEmployerInfo} style={{marginLeft: "1rem"}}>Save</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*<div>
                                                <p className="profile-p" style={{margin: "0rem"}}>Company Name</p>
                                                <input id="name" className="profile-input profile-p" defaultValue={this.props.employerProfileDetail.name} style={{width: "100%"}}></input>
                                            </div>*/}
                                            <div style={{marginTop: "1rem"}}>
                                                <p className="profile-p" style={{margin: "0rem"}}>Company Headline</p>
                                                <textarea id="selfDescription" className="profile-input profile-p" style={{width: "100%"}} defaultValue={this.props.employerProfileDetail.self_description}></textarea>
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>

                            {/* Summary */}
                            <div className="profile-bg" style={{textAlign: "left", marginTop: "2rem"}}>
                                <div style={{padding: "2rem"}}>
                                    {!this.state.isEditSummary ?
                                        <div>
                                            <div className="row">
                                                <div className="col-8">
                                                    <h3 className="profile-h3">Summary</h3>
                                                </div>
                                                <div className="col-4 profile-edit">
                                                    <div style={{float: "right"}}>
                                                        <i className="bx bx-edit-alt"></i>
                                                        <span type="button" onClick={this.editSummary} style={{marginLeft: "0.5rem"}}>Edit</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="profile-p4">
                                                {(this.props.employerProfileDetail.summary !== null && this.props.employerProfileDetail.summary !== "") ? this.props.employerProfileDetail.summary : "Company Summary Here"}
                                            </p>
                                        </div> :
                                        <div>
                                            <div className="row">
                                                <div className="col-7">
                                                    <h3 className="profile-h3">Summary</h3>
                                                </div>
                                                <div className="col-5 profile-edit">
                                                    <div style={{float: "right"}}>
                                                        <span type="button" onClick={this.cancelEditSummary}>Cancel</span>
                                                        <span type="button" onClick={this.saveSummary} style={{marginLeft: "1rem"}}>Save</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <textarea id="summary" className="profile-input profile-p" style={{width: "100%", height: "6rem"}} defaultValue={this.props.employerProfileDetail.summary}></textarea>
                                        </div>
                                    }
                                </div>
                            </div>

                            {/* Social Media */}
                            <div className="profile-bg" style={{textAlign: "left", marginTop: "2rem"}}>
                                <div style={{padding: "2rem"}}>
                                    {!this.state.isEditMedia ?
                                        <div>
                                            <div className="row">
                                                <div className="col-8">
                                                    <h3 className="profile-h3">Social Media</h3>
                                                </div>
                                                <div className="col-4 profile-edit">
                                                    <div style={{float: "right"}}>
                                                        <i className="bx bx-edit-alt"></i>
                                                        <span type="button" onClick={this.editMedia} style={{marginLeft: "0.5rem"}}>Edit</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-4">
                                                    <p className="profile-p3" style={{display: "flex", alignItems: "center"}}>
                                                        LinkedIn <i class='bx bxl-linkedin-square' style={{color: "#67A3F3"}}></i>
                                                    </p>
                                                </div>
                                                <div className="col-8">
                                                    <p className="profile-p4" style={{wordBreak: "break-word"}}>
                                                        {(this.props.employerProfileDetail.linkedin !== null && this.props.employerProfileDetail.linkedin !== "") ? this.props.employerProfileDetail.linkedin : "Link to your LinkedIn"}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-4">
                                                    <p className="profile-p3" style={{display: "flex", alignItems: "center"}}>
                                                        Website <i class='bx bxs-network-chart' style={{color: "#67A3F3"}}></i>
                                                    </p>
                                                </div>
                                                <div className="col-8">
                                                    <p className="profile-p4" style={{wordBreak: "break-word"}}>
                                                        {(this.props.employerProfileDetail.website !== null && this.props.employerProfileDetail.website !== "") ? this.props.employerProfileDetail.website : "Link to your Website"}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-4">
                                                    <p className="profile-p3" style={{display: "flex", alignItems: "center"}}>
                                                        Twitter <i class='bx bxl-twitter' style={{color: "#67A3F3"}}></i>
                                                    </p>
                                                </div>
                                                <div className="col-8">
                                                    <p className="profile-p4" style={{wordBreak: "break-word"}}>
                                                        {(this.props.employerProfileDetail.twitter !== null && this.props.employerProfileDetail.twitter !== "") ? this.props.employerProfileDetail.twitter : "Link to your Twitter"}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>:
                                        <div>
                                            <div className="row">
                                                <div className="col-7">
                                                    <h3 className="profile-h3">Social Media</h3>
                                                </div>
                                                <div className="col-5 profile-edit">
                                                    <div style={{float: "right"}}>
                                                        <span type="button" onClick={this.cancelEditMedia}>Cancel</span>
                                                        <span type="button" onClick={this.saveSocialMedia} style={{marginLeft: "1rem"}}>Save</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <p className="profile-p3" style={{margin: "0rem"}}>LinkedIn <i class='bx bxl-linkedin-square' style={{color: "#090D3A"}}></i></p>
                                                <input id="linkedin" className="profile-input profile-p4" style={{width: "100%"}} defaultValue={this.props.employerProfileDetail.linkedin}></input>
                                            </div>
                                            <div style={{marginTop: "1rem"}}>
                                                <p className="profile-p3" style={{margin: "0rem"}}>Website <i class='bx bxs-network-chart' style={{color: "#090D3A"}}></i></p>
                                                <input id="website" className="profile-input profile-p4" style={{width: "100%"}} defaultValue={this.props.employerProfileDetail.website}></input>
                                            </div>
                                             <div style={{marginTop: "1rem"}}>
                                                <p className="profile-p3" style={{margin: "0rem"}}>Twitter <i class='bx bxl-twitter' style={{color: "#090D3A"}}></i></p>
                                                <input id="twitter" className="profile-input profile-p4" style={{width: "100%"}} defaultValue={this.props.employerProfileDetail.twitter}></input>
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>

                            {/* Basic info */}
                            <div className="profile-bg" style={{textAlign: "left", marginTop: "2rem"}}>
                                <div style={{padding: "2rem"}}>
                                    {!this.state.isEditBasicInfo ?
                                        <div>
                                            <div className="row">
                                                <div className="col-8">
                                                    <h3 className="profile-h3">Basic Info</h3>
                                                </div>
                                                <div className="col-4 profile-edit">
                                                    <div style={{float: "right"}}>
                                                        <i className="bx bx-edit-alt"></i>
                                                        <span type="button" onClick={this.editBasicInfo} style={{marginLeft: "0.5rem"}}>Edit</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <p className="profile-p3" style={{margin: "0rem"}}>Field</p>
                                                <p className="profile-p4">
                                                    {(this.props.employerProfileDetail.company_type !== null && this.props.employerProfileDetail.company_type !== "") ? this.props.employerProfileDetail.company_type : "Company Field"}
                                                </p>
                                            </div>
                                            <div>
                                                <p className="profile-p3" style={{margin: "0rem"}}>Email</p>
                                                <p className="profile-p4">
                                                    {this.props.email}
                                                    {/* (this.props.employerProfileDetail.email !== null && this.props.employerProfileDetail.email !== "") ? this.props.employerProfileDetail.email : "Company Email" */}
                                                </p>
                                            </div>
                                            <div>
                                                <p className="profile-p3" style={{margin: "0rem"}}>Location</p>
                                                <p className="profile-p4">
                                                    {(this.props.employerProfileDetail.location !== null && this.props.employerProfileDetail.location !== "") ? this.props.employerProfileDetail.location : "Company Location"}
                                                </p>
                                            </div>
                                        </div>:
                                        <div>
                                            <div className="row">
                                                <div className="col-7">
                                                    <h3 className="profile-h3">Basic Info</h3>
                                                </div>
                                                <div className="col-5 profile-edit">
                                                    <div style={{float: "right"}}>
                                                        <span type="button" onClick={this.cancelEditBasicInfo}>Cancel</span>
                                                        <span type="button" onClick={this.saveCompanyInfo} style={{marginLeft: "1rem"}}>Save</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <p className="profile-p3" style={{margin: "0rem"}}>Field</p>
                                                <input id="companyType" className="profile-input profile-p4" style={{width: "100%"}} defaultValue={this.props.employerProfileDetail.company_type}></input>
                                            </div>
                                            {/*<div style={{marginTop: "1rem"}}>
                                                <p className="profile-p3" style={{margin: "0rem"}}>Email</p>
                                                <input id="email" className="profile-input profile-p4" style={{width: "100%"}} defaultValue={this.props.employerProfileDetail.email}></input>
                                            </div>*/}
                                             <div style={{marginTop: "1rem"}}>
                                                <p className="profile-p3" style={{margin: "0rem"}}>Location Based</p>
                                                <input id="location" className="profile-input profile-p4" style={{width: "100%"}} defaultValue={this.props.employerProfileDetail.location}></input>
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>

                        {/* Right Part */}
                        <div className="col-6" style={{marginLeft: "2rem"}}>
                            {/* Video */}
                            <div className="profile-bg" style={{textAlign: "left"}}>
                                <Video
                                    updateEmployerVideo={this.props.updateEmployerVideo}
                                    userId={this.props.userId}
                                    videoURL={this.props.employerProfileDetail.video_url}
                                    setVideo={this.setVideo}
                                    getUpdatedData={this.getUpdatedData}
                                />
                            </div>

                            {/* Post */}
                            <div className="profile-bg" style={{textAlign: "left", marginTop: "2rem"}}>
                                <Post
                                    userId={this.props.userId}
                                    editPost={this.editPost}
                                    cancelEditPost={this.cancelEditPost}
                                    isEditPost={this.state.isEditPost}
                                    getEmployerPost={this.props.getEmployerPost}
                                    addEmployerPost={this.props.addEmployerPost}
                                    updateEmployerPost={this.props.updateEmployerPost}
                                    deleteEmployerPost={this.props.deleteEmployerPost}
                                    employerPost={this.props.employerPost}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    };
}

export default EmployerProfile;