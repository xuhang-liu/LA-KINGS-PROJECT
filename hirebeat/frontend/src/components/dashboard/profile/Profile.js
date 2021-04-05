import React, { Component } from "react";
import { ProgressBar2 } from "./../../resume/Components";
import EducationForm from "./EducationForm";
import WorkExpForm from "./WorkExpForm";
import Resume from "./Resume";
//import { confirmAlert } from 'react-confirm-alert';
import Education from "./Education";
import WorkExperience from "./WorkExperience";
import VideoPanel from "./VideoPanel";

export class Profile extends Component {
    state = {
        isEditInfo: false,
        isEditMedia: false,
        isEditWorkInfo: false,
        isEditSummary: false,
        isEditEducation: false,
        isEditWorkExp: false,
        showResume: false,
        show: false,
        isRecordVideo: false,
        isUploadResume: false,
        eduCount: [],  // todo initialization here need to think about
        worCount: [],
    }

    componentDidMount() {
        this.setCount();
    }

    exceedError1 = () => {
        confirmAlert({
          title: "Maximum Education Reached",
          message: "You can add three universities at most.",
          buttons: [
            {
              label: 'Ok'
            }
          ]
        });
    };

    exceedError2 = () => {
        confirmAlert({
          title: "Maximum Work Experience Reached",
          message: "You can add five work experience at most.",
          buttons: [
            {
              label: 'Ok'
            }
          ]
        });
    };

    addEducation = () => {
        // max 3 education
        let size = this.state.eduCount.length;
        if (size < 3) {
            this.setState(prevState => ({
                eduCount: [...prevState.eduCount, 1]
            }));
        } else {
            return this.exceedError1();
        }
    }

    removeEducation = (index) => {
        let array = [...this.state.eduCount];
        array.splice(index, 1);
        this.setState({eduCount: array});
    }

    addWorkExp = () => {
        // max 5 work experience
        let size = this.state.worCount.length;
        if (size < 5) {
            this.setState(prevState => ({
                worCount: [...prevState.worCount, 1]
            }));
        } else {
            return this.exceedError2();
        }
    }

    removeWorkExp = (index) => {
        let array = [...this.state.worCount];
        array.splice(index, 1);
        this.setState({worCount: array});
    }

    setCount = () => {
        const schools = ["school1", "school2", "school3"];
        const companies = ["company1", "company2", "company3", "company4", "company5"];

        let eduCount = [];
        let worCount = [];

        for (let i = 0; i < schools.length; i++) {
            if (this.props.profileDetail[schools[i]] != "" && this.props.profileDetail[schools[i]] != null) {
                eduCount.push(1);
            }
        }

        for (let i = 0; i < companies.length; i++) {
            if (this.props.profileDetail[companies[i]] != "" && this.props.profileDetail[companies[i]] != null) {
                worCount.push(1);
            }
        }
        this.setState({
            eduCount: eduCount,
            worCount: worCount,
        });
    }

    setVideo = () => {
        this.setState({isRecordVideo: true});
    }

    setResume = () => {
        this.setState({isUploadResume: true});
    }

    getUpdatedData = () => {
        this.props.getProfileDetail(this.props.userId);
        setTimeout(() => {this.updateRate();}, 300);
        setTimeout(() => {this.props.getProfileDetail(this.props.userId);}, 300);
    }

    editInfo = () => {
//        this.getUpdatedData();
        setTimeout(() => {this.setState({isEditInfo: true});}, 300);
    }

    cancelEditInfo = () => {
        this.getUpdatedData();
        setTimeout(() => this.setState({isEditInfo: false}), 300);
    }

    editMedia = () => {
//        this.getUpdatedData();
        setTimeout(() => this.setState({isEditMedia: true}), 300);

    }

    cancelEditMedia = () => {
        this.getUpdatedData();
        setTimeout(() => this.setState({isEditMedia: false}), 300);
    }

    editWorkInfo = () => {
//        this.getUpdatedData();
        setTimeout(() => this.setState({isEditWorkInfo: true}), 300);

    }

    cancelEditWorkInfo = () => {
        this.getUpdatedData();
        setTimeout(() => this.setState({isEditWorkInfo: false}), 300);
    }

    editSummary = () => {
//        this.getUpdatedData();
        setTimeout(() => this.setState({isEditSummary: true}), 300);
    }

    cancelEditSummary = () => {
        this.getUpdatedData();
        setTimeout(() => this.setState({isEditSummary: false}), 300);
    }

    editEducation = () => {
//        this.getUpdatedData();
        setTimeout(() => this.setState({isEditEducation: true}), 300);
    }

    cancelEditEducation = () => {
        this.getUpdatedData();
        setTimeout(() => this.setState({isEditEducation: false}), 300);
    }

    editWorkExp = () => {
//        this.getUpdatedData();
        setTimeout(() => this.setState({isEditWorkExp: true}), 300);
    }

    cancelEditWorkExp = () => {
        this.getUpdatedData();
        setTimeout(() => this.setState({isEditWorkExp: false}), 300);

    }

    refresh = () => {
        window.location.reload();
    }

    savePersonalInfo = () => {
        let name = document.getElementById("name").value;
        let selfDescription = document.getElementById("selfDescription").value;
        let data = {
            "user_id": this.props.userId,
            "name": name,
            "self_description": selfDescription,
        }
        this.props.updatePersonalInfo(data);
        this.getUpdatedData();
        this.cancelEditInfo();
    }

    saveSocialMedia = () => {
        let linkedin = document.getElementById("linkedin").value;
        let website = document.getElementById("website").value;
        let github = document.getElementById("github").value;
        if(((!linkedin.toLowerCase().includes("linkedin")) && (linkedin != "")) || ((!github.toLowerCase().includes("github")) && (github != ""))) {
            alert("Please Enter Correct URL");
        }else{
            let data = {
                "user_id": this.props.userId,
                "linkedin": linkedin,
                "website": website,
                "github": github,
            }
            this.props.updateSocialMedia(data);
            this.getUpdatedData();
            this.cancelEditMedia();
        }
    }

    saveWorkInfo = () => {
        let yoe = document.getElementById("yoe").value;
        let curCompany = document.getElementById("curCompany").value;
        let location = document.getElementById("location").value;
        let data = {
            "user_id": this.props.userId,
            "year_of_exp": yoe,
            "current_company": curCompany,
            "location": location,
        }
        this.props.updateBasicInfo(data);
        this.getUpdatedData();
        this.cancelEditWorkInfo();
    }

    saveSummary = () => {
        let summary = document.getElementById("summary").value;
        let data = {
            "user_id": this.props.userId,
            "summary": summary
        };
        this.props.updateSummary(data);
        this.getUpdatedData();
        this.cancelEditSummary()
    }

    updateRate = () => {
        let userId = this.props.userId;
        let rate = 25;
        let infoRate = 0;

        if (this.props.profileDetail.video_url != "" && this.props.profileDetail.video_url != null) {
            rate += 25;
        }
        if (this.props.profileDetail.resume_url != "" && this.props.profileDetail.resume_url != null) {
            rate += 25;
        }
        if (this.props.profileDetail.name != "" && this.props.profileDetail.name != null) {
            rate += 2;
            infoRate += 2;
        }
        if (this.props.profileDetail.self_description != "" && this.props.profileDetail.self_description != null) {
            rate += 1;
            infoRate += 1;
        }
        if (this.props.profileDetail.summary != "" && this.props.profileDetail.summary != null) {
            rate += 2;
            infoRate += 2;
        }
        if ((this.props.profileDetail.linkedin != "" && this.props.profileDetail.linkedin != null) ||
            (this.props.profileDetail.website != "" && this.props.profileDetail.website != null) ||
            (this.props.profileDetail.github != "" && this.props.profileDetail.github != null)
        ) {
            rate += 5;
            infoRate += 5;
        }
        if ((this.props.profileDetail.year_of_exp != "" && this.props.profileDetail.year_of_exp != null) ||
            (this.props.profileDetail.current_company != "" && this.props.profileDetail.current_company != null) ||
            (this.props.profileDetail.location != "" && this.props.profileDetail.location != null)
        ) {
            rate += 5;
            infoRate += 5;
        }
        if (this.props.profileDetail.school1 != "" && this.props.profileDetail.school1 != null) {
            rate += 1;
            infoRate += 1;
        }
        if (this.props.profileDetail.graduation_date1 != "" && this.props.profileDetail.graduation_date1 != null) {
            rate += 1;
            infoRate += 1;
        }
        if (this.props.profileDetail.major1 != "" && this.props.profileDetail.major1 != null) {
            rate += 1;
            infoRate += 1;
        }
        if (this.props.profileDetail.degree1 != "" && this.props.profileDetail.degree1 != null) {
            rate += 1;
            infoRate += 1;
        }
        if (this.props.profileDetail.gpa1 != "" && this.props.profileDetail.gpa1 != null) {
            rate += 1;
            infoRate += 1;
        }
        if (this.props.profileDetail.company1 != "" && this.props.profileDetail.company1 != null) {
            rate += 1;
            infoRate += 1;
        }
        if (this.props.profileDetail.title1 != "" && this.props.profileDetail.title1 != null) {
            rate += 1;
            infoRate += 1;
        }
        if (this.props.profileDetail.start_date1 != "" && this.props.profileDetail.start_date1 != null) {
            rate += 1;
            infoRate += 1;
        }
        if (this.props.profileDetail.end_date1 != "" && this.props.profileDetail.end_date1 != null) {
            rate += 1;
            infoRate += 1;
        }
        if (this.props.profileDetail.work_description1 != "" && this.props.profileDetail.work_description1 != null) {
            rate += 1;
            infoRate += 1;
        }
        let data = {
            "user_id": userId,
            "profile_rate": rate,
            "info_rate": infoRate,
        }
        this.props.updateProfileRate(data);
    }

    render () {
        const schools = ["school1", "school2", "school3"];
        const graduationDates = ["graduation_date1", "graduation_date2", "graduation_date3"];
        const majors = ["major1", "major2", "major3"];
        const extraMajors = ["extra_major1", "extra_major2", "extra_major3"];
        const degrees = ["degree1", "degree2", "degree3"];
        const gpas = ["gpa1", "gpa2", "gpa3"];

        const companies = ["company1", "company2", "company3", "company4", "company5"];
        const titles = ["title1", "title2", "title3", "title4", "title5"];
        const startDates = ["start_date1", "start_date2", "start_date3", "start_date4", "start_date5"];
        const endDates = ["end_date1", "end_date2", "end_date3", "end_date4", "end_date5"];
        const workDescriptions = ["work_description1", "work_description2", "work_description3", "work_description4", "work_description5"];

        return (
            <React.Fragment>
                <div className="profile-container">
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
                                                            {(this.props.profileDetail.name !== null && this.props.profileDetail.name !== "") ? this.props.profileDetail.name : "Full Name Here"}
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
                                                    {(this.props.profileDetail.self_description !== null && this.props.profileDetail.self_description !== "") ? this.props.profileDetail.self_description : "Heading here"}
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
                                                        <span type="button" onClick={this.savePersonalInfo} style={{marginLeft: "1rem"}}>Save</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <p className="profile-p" style={{margin: "0rem"}}>Name</p>
                                                <input id="name" className="profile-input profile-p" defaultValue={this.props.profileDetail.name} style={{width: "100%"}}></input>
                                            </div>
                                            <div style={{marginTop: "1rem"}}>
                                                <p className="profile-p" style={{margin: "0rem"}}>Job Title</p>
                                                <textarea id="selfDescription" className="profile-input profile-p" style={{width: "100%"}} placeholder="eg: Software Engineer at HireBeat" defaultValue={this.props.profileDetail.self_description}></textarea>
                                            </div>
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
                                                        {(this.props.profileDetail.linkedin !== null && this.props.profileDetail.linkedin !== "") ? this.props.profileDetail.linkedin : "Link to your LinkedIn"}
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
                                                        {(this.props.profileDetail.website !== null && this.props.profileDetail.website !== "") ? this.props.profileDetail.website : "Add your personal website"}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-4">
                                                    <p className="profile-p3" style={{display: "flex", alignItems: "center"}}>
                                                        Github <i class='bx bxl-github' style={{color: "#67A3F3"}}></i>
                                                    </p>
                                                </div>
                                                <div className="col-8">
                                                    <p className="profile-p4" style={{wordBreak: "break-word"}}>
                                                        {(this.props.profileDetail.github !== null && this.props.profileDetail.github !== "") ? this.props.profileDetail.github : "Link to your Github"}
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
                                                <input id="linkedin" className="profile-input profile-p4" style={{width: "100%"}} defaultValue={this.props.profileDetail.linkedin}></input>
                                            </div>
                                            <div style={{marginTop: "1rem"}}>
                                                <p className="profile-p3" style={{margin: "0rem"}}>Website <i class='bx bxs-network-chart' style={{color: "#090D3A"}}></i></p>
                                                <input id="website" className="profile-input profile-p4" style={{width: "100%"}} defaultValue={this.props.profileDetail.website}></input>
                                            </div>
                                             <div style={{marginTop: "1rem"}}>
                                                <p className="profile-p3" style={{margin: "0rem"}}>Github <i class='bx bxl-github' style={{color: "#090D3A"}}></i></p>
                                                <input id="github" className="profile-input profile-p4" style={{width: "100%"}} defaultValue={this.props.profileDetail.github}></input>
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>

                            {/* Basic info */}
                            <div className="profile-bg" style={{textAlign: "left", marginTop: "2rem"}}>
                                <div style={{padding: "2rem"}}>
                                    {!this.state.isEditWorkInfo ?
                                        <div>
                                            <div className="row">
                                                <div className="col-8">
                                                    <h3 className="profile-h3">Basic Info</h3>
                                                </div>
                                                <div className="col-4 profile-edit">
                                                    <div style={{float: "right"}}>
                                                        <i className="bx bx-edit-alt"></i>
                                                        <span type="button" onClick={this.editWorkInfo} style={{marginLeft: "0.5rem"}}>Edit</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <p className="profile-p3" style={{margin: "0rem"}}>Years of Experience</p>
                                                <p className="profile-p4">
                                                    {(this.props.profileDetail.year_of_exp !== null && this.props.profileDetail.year_of_exp !== "") ? this.props.profileDetail.year_of_exp : "Enter years"}
                                                </p>
                                            </div>
                                            <div>
                                                <p className="profile-p3" style={{margin: "0rem"}}>Current Company</p>
                                                <p className="profile-p4">
                                                    {(this.props.profileDetail.current_company !== null && this.props.profileDetail.current_company !=="") ? this.props.profileDetail.current_company : "Enter company"}
                                                </p>
                                            </div>
                                            <div>
                                                <p className="profile-p3" style={{margin: "0rem"}}>Location</p>
                                                <p className="profile-p4">
                                                    {(this.props.profileDetail.location !== null && this.props.profileDetail.location !== "") ? this.props.profileDetail.location : "Enter location"}
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
                                                        <span type="button" onClick={this.cancelEditWorkInfo}>Cancel</span>
                                                        <span type="button" onClick={this.saveWorkInfo} style={{marginLeft: "1rem"}}>Save</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <p className="profile-p3" style={{margin: "0rem"}}>Years of Experience</p>
                                                <input id="yoe" className="profile-input profile-p4" style={{width: "100%"}} defaultValue={this.props.profileDetail.year_of_exp}></input>
                                            </div>
                                            <div style={{marginTop: "1rem"}}>
                                                <p className="profile-p3" style={{margin: "0rem"}}>Current Company</p>
                                                <input id="curCompany" className="profile-input profile-p4" style={{width: "100%"}} defaultValue={this.props.profileDetail.current_company}></input>
                                            </div>
                                             <div style={{marginTop: "1rem"}}>
                                                <p className="profile-p3" style={{margin: "0rem"}}>Location Based</p>
                                                <input id="location" className="profile-input profile-p4" style={{width: "100%"}} defaultValue={this.props.profileDetail.location}></input>
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>

                            {/* Completion Rate */}
                            <div className="profile-bg" style={{textAlign: "left", marginTop: "2rem"}}>
                                <div style={{padding: "2rem"}}>
                                    <h3 className="profile-h3">Completeness Rate</h3>
                                    <p className="profile-p">Your Profile is {this.props.profileDetail.profile_rate}% Complete</p>
                                    <ProgressBar2 percent={this.props.profileDetail.profile_rate == null ? 25 : this.props.profileDetail.profile_rate} max={100} height={15} />
                                    <div className="row" style={{marginTop: "1rem"}}>
                                        <div className="col-5">
                                            {this.props.profileDetail.profile_rate == 100 ?
                                                <img src="https://hirebeat-assets.s3.amazonaws.com/User-dash/unlock.png" /> :
                                                <img src="https://hirebeat-assets.s3.amazonaws.com/User-dash/lock.png" />
                                            }
                                        </div>
                                        <div className="col-7">
                                            {this.props.profileDetail.profile_rate == 100 ?
                                                <span className="profile-p2">
                                                    You’ve successfully unlocked HireBeat Premium features! Enjoy your practice!
                                                </span> :
                                                <span className="profile-p2">
                                                    Unlock unlimited access to resume review and interview practice by completing the profile.
                                                </span>
                                            }
                                        </div>
                                    </div>
                                    <p className="profile-p" style={{display: "flex", alignItems: "center"}}>
                                        <i className="bx bx-check-circle" style={{color: "#13C4A1"}}></i>
                                        <span style={{marginLeft: "1rem"}}>Verify email address</span>
                                    </p>
                                    <p className="profile-p" style={{display: "flex", alignItems: "center"}}>
                                        {this.props.profileDetail.video_url != "" && this.props.profileDetail.video_url != null ?
                                            <i className="bx bx-check-circle" style={{color: "#13C4A1"}}></i> :
                                            <i className="bx bx-circle"></i>
                                        }
                                        <span style={{marginLeft: "1rem"}}>Record self-introduction video</span>
                                    </p>
                                    <p className="profile-p" style={{display: "flex", alignItems: "center"}}>
                                        {this.props.profileDetail.resume_url != "" && this.props.profileDetail.resume_url != null ?
                                            <i className="bx bx-check-circle" style={{color: "#13C4A1"}}></i> :
                                            <i className="bx bx-circle"></i>
                                        }
                                        <span style={{marginLeft: "1rem"}}>Upload resume</span>
                                    </p>
                                    <p className="profile-p" style={{display: "flex", alignItems: "center"}}>
                                        {this.props.profileDetail.info_rate == 25 ?
                                            <i className="bx bx-check-circle" style={{color: "#13C4A1"}}></i> :
                                            <i className="bx bx-circle"></i>
                                        }
                                        <span style={{marginLeft: "1rem"}}>Finish personal information</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Part */}
                        <div className="col-6" style={{marginLeft: "2rem"}}>
                            {/* Video Profile */}
                            <div className="profile-bg" style={{textAlign: "left"}}>
                                <div style={{padding: "2rem"}}>
                                    <VideoPanel
                                        videoURL={this.props.profileDetail.video_url}
                                        userId={this.props.userId}
                                        updateVideo={this.props.updateVideo}
                                        setVideo={this.setVideo}
                                        getUpdatedData={this.getUpdatedData}
                                    />
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
                                                {(this.props.profileDetail.summary !== null && this.props.profileDetail.summary !== "") ? this.props.profileDetail.summary : "Add your bio in a few sentences"}
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
                                            <textarea id="summary" className="profile-input profile-p" style={{width: "100%", height: "6rem"}} defaultValue={this.props.profileDetail.summary}></textarea>
                                        </div>
                                    }
                                </div>
                            </div>

                            {/* Education */}
                            <div className="profile-bg" style={{textAlign: "left", marginTop: "2rem"}}>
                                <div style={{padding: "2rem"}}>
                                    {!this.state.isEditEducation ?
                                        <div>
                                            {schools.map((s, index) => {
                                                if (index == 0 || (this.props.profileDetail[schools[index]] != "" && this.props.profileDetail[schools[index]] != null)) {
                                                    return (
                                                        <Education
                                                            editEducation={this.editEducation}
                                                            school={this.props.profileDetail[schools[index]]}
                                                            major1={this.props.profileDetail[majors[index]]}
                                                            gpa={this.props.profileDetail[gpas[index]]}
                                                            graduationDate={this.props.profileDetail[graduationDates[index]]}
                                                            index={index}
                                                        />
                                                    )
                                                }
                                            })}
                                        </div> :
                                        <div>
                                            <EducationForm
                                                cancelEditEducation={this.cancelEditEducation}
                                                userId={this.props.userId}
                                                updateEducation={this.props.updateEducation}
                                                profileDetail={this.props.profileDetail}
                                                count={this.state.eduCount}
                                                addEducation={this.addEducation}
                                                removeEducation={this.removeEducation}
                                                getUpdatedData={this.getUpdatedData}
                                            />
                                        </div>
                                    }
                                </div>
                            </div>

                            {/* Work Experience */}
                            <div className="profile-bg" style={{textAlign: "left", marginTop: "2rem"}}>
                                <div style={{padding: "2rem"}}>
                                        {!this.state.isEditWorkExp ?
                                        <div>
                                            {companies.map((c, index) => {
                                                if (index == 0 || (this.props.profileDetail[companies[index]] != "" && this.props.profileDetail[companies[index]] != null)) {
                                                    return (
                                                        <WorkExperience
                                                            editWorkExp={this.editWorkExp}
                                                            title={this.props.profileDetail[titles[index]]}
                                                            company={this.props.profileDetail[companies[index]]}
                                                            startDate={this.props.profileDetail[startDates[index]]}
                                                            endDate={this.props.profileDetail[endDates[index]]}
                                                            workDescription={this.props.profileDetail[workDescriptions[index]]}
                                                            index={index}
                                                        />
                                                    )
                                                }
                                            })}
                                        </div> :
                                        <div>
                                            <WorkExpForm
                                                cancelEditWorkExp={this.cancelEditWorkExp}
                                                userId={this.props.userId}
                                                updateWorkExp={this.props.updateWorkExp}
                                                profileDetail={this.props.profileDetail}
                                                count={this.state.worCount}
                                                addWorkExp={this.addWorkExp}
                                                removeWorkExp={this.removeWorkExp}
                                                getUpdatedData={this.getUpdatedData}
                                            />
                                        </div>
                                    }
                                </div>
                            </div>

                            {/* Resume */}
                            <div className="profile-bg" style={{textAlign: "left", marginTop: "2rem"}}>
                                <Resume
                                    updateResume={this.props.updateResume}
                                    userId={this.props.userId}
                                    resumeName={this.props.profileDetail.resume_name}
                                    resumeURL={this.props.profileDetail.resume_url}
                                    setResume={this.setResume}
                                    getUpdatedData={this.getUpdatedData}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    };
}

export default Profile;