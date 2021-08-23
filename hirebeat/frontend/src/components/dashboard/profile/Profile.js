import React, { Component } from "react";
import { ProgressBar2 } from "./../../resume/Components";
import EducationForm from "./EducationForm";
import WorkExpForm from "./WorkExpForm";
import Resume from "./Resume";
import { confirmAlert } from 'react-confirm-alert';
import Education from "./Education";
import WorkExperience from "./WorkExperience";
import VideoPanel from "./VideoPanel";
import JobTypeSelection from "./JobTypeSelection";
import SkillEdition from "./SkillEdition";
import LanguageEdition from "./LanguageEdition";
var ReactS3Uploader = require("react-s3-uploader");
import Avatar from 'react-avatar-edit';
import Chart from "react-apexcharts";
import { infillBarDataPublicProfile } from "../../../constants/constants";
import ShareProfile from "./ShareProfile";
import ShareProfileEdition from "./ShareProfileEdition";
import { MyShareModal } from "./../DashboardComponents";
//import { Redirect } from "react-router-dom";

function dataURItoBlob(dataURI) {
    // convert base64 to raw binary data held in a string
    // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
    var byteString = atob(dataURI.split(',')[1]);

    // separate out the mime component
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]

    // write the bytes of the string to an ArrayBuffer
    var ab = new ArrayBuffer(byteString.length);

    // create a view into the buffer
    var ia = new Uint8Array(ab);

    // set the bytes of the buffer to the correct values
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }

    // write the ArrayBuffer to a blob, and you're done
    var blob = new Blob([ab], { type: mimeString });
    return blob;

}

const ProfileOverall = (props) => {
    var options = infillBarDataPublicProfile(props.percent);
    return (
        <Chart
            options={options.options}
            series={options.series}
            type="radialBar"
            height={180}
            key={"overall"}
        />
    );
};

export class Profile extends Component {
    state = {
        isEditInfo: false,
        isEditMedia: false,
        isEditWorkInfo: false,
        isEditJobPreference: false,
        isEditSkills: false,
        isEditLanguages: false,
        isEditSummary: false,
        isEditEducation: false,
        isEditWorkExp: false,
        showResume: false,
        show: false,
        isRecordVideo: false,
        isUploadResume: false,
        eduCount: [],  // todo initialization here need to think about
        worCount: [],
        preview: null,
        fakeName: "",
        docType: "",
        jobType: "",
        skills: null,
        languages: null,
        shareLink: "",
        showShare: false,
        isEditProfileShare: false,
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
        this.setState({ eduCount: array });
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
        this.setState({ worCount: array });
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
        this.setState({ isRecordVideo: true });
    }

    setResume = () => {
        this.setState({ isUploadResume: true });
    }

    getUpdatedData = () => {
        this.props.getProfileDetail(this.props.userId);
        setTimeout(() => { this.updateRate(); }, 300);
        setTimeout(() => { this.props.getProfileDetail(this.props.userId); }, 300);
    }

    editInfo = () => {
        //        this.getUpdatedData();
        setTimeout(() => { this.setState({ isEditInfo: true }); }, 300);
    }

    cancelEditInfo = () => {
        this.getUpdatedData();
        setTimeout(() => this.setState({ isEditInfo: false }), 300);
    }

    editMedia = () => {
        //        this.getUpdatedData();
        setTimeout(() => this.setState({ isEditMedia: true }), 300);

    }

    cancelEditMedia = () => {
        this.getUpdatedData();
        setTimeout(() => this.setState({ isEditMedia: false }), 300);
    }

    editJobPreference = () => {
        setTimeout(() => this.setState({isEditJobPreference: true}), 300);

    }

    cancelEditJobPreference = () => {
        this.getUpdatedData();
        setTimeout(() => this.setState({isEditJobPreference: false}), 300);
    }

    editSkills = () => {
        setTimeout(() => this.setState({isEditSkills: true}), 300);

    }

    cancelEditSkills = () => {
        this.getUpdatedData();
        setTimeout(() => this.setState({isEditSkills: false}), 300);
    }

    editLanguages = () => {
        setTimeout(() => this.setState({isEditLanguages: true}), 300);

    }

    cancelEditLanguages = () => {
        this.getUpdatedData();
        setTimeout(() => this.setState({isEditLanguages: false}), 300);
    }

    editWorkInfo = () => {
        //        this.getUpdatedData();
        setTimeout(() => this.setState({ isEditWorkInfo: true }), 300);

    }

    cancelEditWorkInfo = () => {
        this.getUpdatedData();
        setTimeout(() => this.setState({ isEditWorkInfo: false }), 300);
    }

    editSummary = () => {
        //        this.getUpdatedData();
        setTimeout(() => this.setState({ isEditSummary: true }), 300);
    }

    cancelEditSummary = () => {
        this.getUpdatedData();
        setTimeout(() => this.setState({ isEditSummary: false }), 300);
    }

    editEducation = () => {
        //        this.getUpdatedData();
        setTimeout(() => this.setState({ isEditEducation: true }), 300);
    }

    cancelEditEducation = () => {
        this.getUpdatedData();
        setTimeout(() => this.setState({ isEditEducation: false }), 300);
    }

    editWorkExp = () => {
        //        this.getUpdatedData();
        setTimeout(() => this.setState({ isEditWorkExp: true }), 300);
    }

    cancelEditWorkExp = () => {
        this.getUpdatedData();
        setTimeout(() => this.setState({ isEditWorkExp: false }), 300);

    }

    refresh = () => {
        window.location.reload();
    }

    savePersonalInfo = () => {
        let firstName = document.getElementById("firstName").value;
        let lastName = document.getElementById("lastName").value;
        let curJobTitle = document.getElementById("curJobTitle").value;
        let curCompany = document.getElementById("curCompany").value;
        let location = document.getElementById("location").value;
        let data = {
            "user_id": this.props.userId,
            "f_name": firstName,
            "l_name": lastName,
            "current_job_title": curJobTitle,
            "current_company": curCompany,
            "location": location,
        }
        this.props.updatePersonalInfo(data);
        this.handleUpload();
        this.getUpdatedData();
        this.cancelEditInfo();
    }

    saveSocialMedia = () => {
        let email = document.getElementById("email").value;
        let linkedin = document.getElementById("linkedin").value;
        let website = document.getElementById("website").value;
        let github = document.getElementById("github").value;
        if (((!linkedin.toLowerCase().includes("linkedin")) && (linkedin != "")) || ((!github.toLowerCase().includes("github")) && (github != ""))) {
            alert("Please Enter Correct URL");
        } else {
            let data = {
                "user_id": this.props.userId,
                "email": email,
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

    saveJobPreference = () => {
        let jobType = this.state.jobType;
        let data = {
            "user_id": this.props.userId,
            "job_type": jobType,
        }
        this.props.updateJobType(data);
        this.getUpdatedData();
        this.cancelEditJobPreference();
    }

    setJobType = (jobType) => {
        this.setState({jobType: jobType});
    }

    saveSkills = () => {
        let skills = this.state.skills;
        let data = {
            "user_id": this.props.userId,
            "skills": skills,
        }
        this.props.updateSkills(data);
        this.getUpdatedData();
        this.cancelEditSkills();
    }

    setSkills = (skills) => {
        this.setState({skills: skills});
    }

    saveLanguages = () => {
        let languages = this.state.languages;
        let data = {
            "user_id": this.props.userId,
            "languages": languages,
        }
        this.props.updateLanguages(data);
        this.getUpdatedData();
        this.cancelEditLanguages();
    }

    setLanguages = (languages) => {
        this.setState({languages: languages});
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

    onClose = () => {
        this.setState({ preview: null })
    }

    onCrop = (preview) => {
        this.setState({ preview })
    }

    onBeforeFileLoad = (elem) => {
        let docType = elem.target.files[0].type?.split("/")[1];
        let docSize = elem.target.files[0].size;
        if(docSize > 2000000){
          alert("Please upload a logo that less than 2MB");
          elem.target.value = "";
        }
        else if (docType !== "png" && docType !== "jpg" && docType !== "jpeg") {
            alert("Please upload JPG, JPEG or PNG file");
            elem.target.value = "";
        }
        else {
            this.setState({ docType: docType });
        }
    }

    onUploadFinish = () => {
        var fakeName = this.state.fakeName;
        var logo_url = "https://hirebeat-user-logo.s3.amazonaws.com/" + fakeName;

        // insert MetaData to profile table
        const metaData = {
            user_id: this.props.userId,
            logo_url: logo_url,
        };
        this.props.updateUserLogo(metaData);
        setTimeout(() => { this.getUpdatedData(); this.getUpdatedData(); }, 300);
    };

    onUploadError = (err) => {
        console.log(err);
    };

    onUploadProgress = () => {
        console.log("In progress");
    };

    handleUpload = () => {
        if (this.state.preview != null) {
            var blob = dataURItoBlob(this.state.preview);
            let timestamp = Date.parse(new Date());
            let fakeName = timestamp + "." + this.state.docType;
            const newLogo = new File([blob], fakeName, { type: blob.type });
            this.setState({ fakeName: fakeName });
            this.uploader.uploadFile(newLogo);
        }
    }

    enableShowShare = () => {
        this.setState({showShare: true});
    }

    disableShowShare = () => {
        this.setState({showShare: false});
    }

    enableProfileShare = () => {
        this.setState({isEditProfileShare: true});
    }

    disableProfileShare = () => {
        this.setState({isEditProfileShare: false});
    }

    previewProfile = () => {
        if (this.props.profileDetail.f_name === "" || this.props.profileDetail.l_name === "") {
            alert("Please fill out your full name to generate your personal profile link");
        }
        else {
            const name = this.props.profileDetail.f_name + "-" + this.props.profileDetail.l_name;
            const encodedUserId = btoa(this.props.userId);
            const url = "https://hirebeat.co/talent-profile?" + name + "&id=" + encodedUserId;
            //const url = "http://127.0.0.1:8000/talent-profile?" + name + "&id=" + encodedUserId;
            return window.open(url, '_blank');
        }
    };

    shareProfile = () => {
        if (this.props.profileDetail.f_name === "" || this.props.profileDetail.l_name === "") {
            alert("Please fill out your full name to generate your personal profile link");
        }
        else {
            this.generateShareLink();
            this.enableShowShare();
        }
    }

    generateShareLink = () => {
        const name = this.props.profileDetail.f_name + "-" + this.props.profileDetail.l_name;
        const encodedUserId = btoa(this.props.userId);
        const url = "https://hirebeat.co/talent-profile?" + name + "&id=" + encodedUserId;
        //const url = "http://127.0.0.1:8000/talent-profile?" + name + "&id=" + encodedUserId;
        this.setState({shareLink: url});
    }

    render () {
        const name = this.props.profileDetail.f_name + " " + this.props.profileDetail.l_name;
        const jobType = { value: this.props.profileDetail.job_type, label: this.props.profileDetail.job_type };
        // format skills
        let skills = [];
        for (let i = 0; i < this.props.profileDetail.skills?.length; i++) {
            let keyValue = {value: this.props.profileDetail.skills[i], label: this.props.profileDetail.skills[i]};
            skills.push(keyValue);
        }
        // format languages
        let languages = [];
        for (let i = 0; i < this.props.profileDetail.languages?.length; i++) {
            let keyValue = {value: this.props.profileDetail.languages[i], label: this.props.profileDetail.languages[i]};
            languages.push(keyValue);
        }
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
                    {/* Completion rate */}
                    <div className="row" style={{ marginBottom: "2rem" }}>
                        <div className="col-7">

                            <div className="profile-bg" style={{ textAlign: "left" }}>
                                <div className="row" style={{ padding: "2rem" }}>
                                    <div className="col-3">
                                        <ProfileOverall percent={(this.props.profileDetail.profile_rate / 100).toFixed(2)} />
                                    </div>
                                    <div className="col-9">
                                        <h3 className="profile-h3" style={{ paddingTop: "1rem" }}>Profile Completeness</h3>
                                        <div className="row" style={{ marginTop: "2rem" }}>
                                            <div style={{width: "50%"}}>
                                                <p className="profile-p">
                                                    <i className="bx-fw bx bx-check-circle" style={{ color: "#13C4A1" }}></i>
                                                    <span style={{ marginLeft: "1rem" }}>Verify email address</span>
                                                </p>
                                            </div>
                                            <div style={{width: "50%"}}>
                                                <p className="profile-p">
                                                    {this.props.profileDetail.resume_url != "" && this.props.profileDetail.resume_url != null ?
                                                        <i className="bx-fw bx bx-check-circle" style={{ color: "#13C4A1" }}></i> :
                                                        <i className="bx-fw bx bx-circle"></i>
                                                    }
                                                    <span style={{ marginLeft: "1rem" }}>Upload resume</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row" style={{ paddingTop: "1rem" }}>
                                            <div style={{width: "50%"}}>
                                                <p className="profile-p">
                                                    {this.props.profileDetail.video_url != "" && this.props.profileDetail.video_url != null ?
                                                        <i className="bx-fw bx bx-check-circle" style={{ color: "#13C4A1" }}></i> :
                                                        <i className="bx-fw bx bx-circle"></i>
                                                    }
                                                    <span style={{ marginLeft: "1rem" }}>Record self-introduction video</span>
                                                </p>
                                            </div>
                                            <div style={{width: "50%"}}>
                                                <p className="profile-p">
                                                    {this.props.profileDetail.info_rate == 25 ?
                                                        <i className="bx-fw bx bx-check-circle" style={{ color: "#13C4A1" }}></i> :
                                                        <i className="bx-fw bx bx-circle"></i>
                                                    }
                                                    <span style={{ marginLeft: "1rem" }}>Finish personal information</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            {/* Public share */}
                            <div className="profile-bg" style={{ textAlign: "left" }}>
                                <div style={{ padding: "2rem", paddingTop: "1rem" }}>
                                    <p className="profile-p" style={{marginBottom: "0.5rem"}}>
                                        {this.props.profileDetail.share_profile ?
                                            <div>
                                                <i style={{ color: "#13c4a1" }} className="bx-fw bx bx-check-circle"></i>
                                                Your profile is now public.
                                            </div>
                                            :
                                            <div>
                                                <i style={{ color: "#C4C4C4" }} className="bx-fw bx bx-minus-circle"></i>
                                                Your profile is not public.
                                            </div>
                                        }

                                    </p>
                                    <p className="profile-p" style={{marginBottom: "0.5rem"}}>
                                        {this.props.profileDetail.open_to_hr ?
                                            <div>
                                                <i style={{ color: "#13c4a1" }} className="bx-fw bx bx-check-circle"></i>
                                                Your profile is visible to recruiters.
                                            </div>
                                            :
                                            <div>
                                                <i style={{ color: "#C4C4C4" }} className="bx-fw bx bx-minus-circle"></i>
                                                Your profile is not visible to recruiters.
                                            </div>
                                        }
                                    </p>
                                    <p style={{ paddingLeft: "2rem", color: "#7C94B5", fontWeight: "500", fontSize: "0.85rem", marginBottom: "0.5rem" }} onClick={this.enableProfileShare}>
                                        These can be changed at anytime. <span style={{ marginLeft: "0.5rem", cursor: "pointer", color: "#67a3f3" }}>Edit</span>
                                    </p>
                                    <MyShareModal
                                        show={this.state.isEditProfileShare}
                                        onHide={()=>{this.disableProfileShare()}}
                                    >
                                        <div className="container" style={{padding: "2rem"}}>
                                            <ShareProfileEdition
                                                userId={this.props.userId}
                                                firstName={this.props.profileDetail.f_name}
                                                lastName={this.props.profileDetail.l_name}
                                                company={this.props.profileDetail.current_company}
                                                location={this.props.profileDetail.location}
                                                shareProfile={this.props.profileDetail.share_profile}
                                                openToHR={this.props.profileDetail.open_to_hr}
                                                updateProfileSharing={this.props.updateProfileSharing}
                                                onHide={()=>{this.disableProfileShare()}}
                                                getProfileDetail={this.props.getProfileDetail}
                                            />
                                        </div>
                                    </MyShareModal>
                                    <hr style={{ border: "1px solid #E5E5E5" }} />
                                    <div className="row d-flex justify-content-center">
                                        <button className="default-btn" style={{ paddingLeft:"25px", backgroundColor: "#4689FA", color: "#ffffff" }} onClick={this.previewProfile}>Preview</button>
                                        {this.props.profileDetail.share_profile ?
                                            <button className="default-btn" style={{ paddingLeft:"25px", backgroundColor: "#FF6B00", color: "#ffffff", marginLeft: "2rem" }} onClick={this.shareProfile}>Share</button> :
                                            <button className="default-btn" style={{ paddingLeft:"25px", backgroundColor: "#E5E5E5", color: "#ffffff", marginLeft: "2rem" }} >Share</button>
                                        }
                                    </div>
                                    <MyShareModal
                                        show={this.state.showShare}
                                        onHide={()=>{this.disableShowShare()}}
                                    >
                                        <div className="container" style={{padding: "2rem"}}>
                                            <ShareProfile
                                                disableShowShare={this.disableShowShare}
                                                shareLink={this.state.shareLink}
                                                firstName={this.props.profileDetail.f_name}
                                                lastName={this.props.profileDetail.l_name}
                                            />
                                        </div>
                                    </MyShareModal>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-5">
                            {/* Personal Information */}
                            <div className="profile-bg" style={{ textAlign: "left" }}>
                                <div style={{ padding: "2rem" }}>
                                    {!this.state.isEditInfo ?
                                        <div className="row">
                                            <div className="col-3">
                                                {(this.props.profileDetail.logo_url !== null && this.props.profileDetail.logo_url !== "") ?
                                                    <img src={this.props.profileDetail.logo_url} /> :
                                                    <img src="https://hirebeat-assets.s3.amazonaws.com/User-dash/bxs-user-circle-2.png" />
                                                }
                                            </div>
                                            <div className="col-9">
                                                <div className="row">
                                                    <div className="col-8">
                                                        <h3 className="profile-h3">
                                                            {name !== " " ? name : "Full Name Here"}
                                                        </h3>
                                                    </div>
                                                    <div className="col-4 profile-edit">
                                                        <div style={{ float: "right" }}>
                                                            <i className="bx bx-edit-alt"></i>
                                                            <span onClick={this.editInfo} style={{ marginLeft: "0.5rem", cursor: "pointer" }}>Edit</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                 <p className="profile-p" style={{margin: "0rem"}}>{this.props.profileDetail.current_job_title}</p>
                                                 <p className="profile-p">{this.props.profileDetail.current_company}</p>
                                                 <p className="profile-p4">{this.props.profileDetail.location}</p>
                                            </div>
                                        </div> :
                                        <div>
                                            <div className="row">
                                                <div className="col-7">
                                                    <h3 className="profile-h3">Information</h3>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-6">
                                                    <p className="profile-p" style={{margin: "0rem"}}>First Name</p>
                                                    <input id="firstName" className="profile-input profile-p" defaultValue={this.props.profileDetail.f_name} style={{width: "100%"}}></input>
                                                </div>
                                                <div className="col-6">
                                                    <p className="profile-p" style={{margin: "0rem"}}>Last Name</p>
                                                    <input id="lastName" className="profile-input profile-p" defaultValue={this.props.profileDetail.l_name} style={{width: "100%"}}></input>
                                                </div>
                                            </div>
                                            <div style={{marginTop: "1rem"}}>
                                                <p className="profile-p" style={{margin: "0rem"}}>Current Position</p>
                                                <textarea id="curJobTitle" className="profile-input profile-p" style={{width: "100%"}} placeholder="eg: Software Engineer at HireBeat" defaultValue={this.props.profileDetail.current_job_title}></textarea>
                                            </div>
                                            <div style={{marginTop: "1rem"}}>
                                                <p className="profile-p" style={{margin: "0rem"}}>Current Company/School</p>
                                                <textarea id="curCompany" className="profile-input profile-p" style={{width: "100%"}} placeholder="eg: HireBeat" defaultValue={this.props.profileDetail.current_company}></textarea>
                                            </div>
                                            <div style={{marginTop: "1rem"}}>
                                                <p className="profile-p" style={{margin: "0rem"}}>Location</p>
                                                <textarea id="location" className="profile-input profile-p" style={{width: "100%"}} defaultValue={this.props.profileDetail.location}></textarea>
                                            </div>
                                            <div>
                                                <p className="profile-p" style={{margin: "0rem"}}>User Logo</p>
                                                <div style={{display: "flex", justifyContent: "center"}}>
                                                    <Avatar
                                                      width={285}
                                                      height={200}
                                                      onCrop={this.onCrop}
                                                      onClose={this.onClose}
                                                      onBeforeFileLoad={this.onBeforeFileLoad}
                                                      mimeTypes={"image/jpeg,image/png,image/jpg"}
                                                    />
                                                    {/*<img src={this.state.preview} alt="Preview" />*/}
                                                </div>
                                            </div>
                                            <ReactS3Uploader
                                                style={{ display: "none" }}
                                                id="uploadFile"
                                                accept="image/jpeg,image/png,image/jpg"
                                                signingUrl="/upload-user-logo"
                                                signingUrlMethod="GET"
                                                onError={this.onUploadError}
                                                onFinish={this.onUploadFinish}
                                                contentDisposition="auto"
                                                uploadRequestHeaders={{ "x-amz-acl": "public-read" }} // this is the default
                                                scrubFilename={(filename) => filename.replace(/[^\w\d_\-.]+/gi, "")}
                                                inputRef={(cmp) => (this.uploadInput = cmp)}
                                                ref={(uploader) => {
                                                    this.uploader = uploader;
                                                }}
                                                autoUpload={true}
                                            />
                                            <div className="row" style={{marginTop: "1rem"}}>
                                                <div className="col-6" />
                                                <div className="col-3 profile-edit">
                                                    <button className="default-btn" style={{background: "#E5E5E5", color: "#090D3A", paddingLeft: "25px"}} onClick={this.cancelEditInfo}>Cancel</button>
                                                </div>
                                                <div className="col-3 profile-edit">
                                                    <button className="default-btn" style={{background: "#67A3F3", paddingLeft: "25px"}} onClick={this.savePersonalInfo}>Save</button>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>

                            {/* Contact Info */}
                            <div className="profile-bg" style={{textAlign: "left", marginTop: "2rem"}}>
                                <div style={{padding: "2rem"}}>
                                    {!this.state.isEditMedia ?
                                        <div>
                                            <div className="row">
                                                <div className="col-8">
                                                    <h3 className="profile-h3">
                                                        Contact Info
                                                        <span className="tool_tip ml-2">
                                                            <i class='bx-fw bx bxs-info-circle' style={{ color: "#dfdfdf" }}></i>
                                                            <p className="tool_submenu container" style={{ width: "14rem" }}>
                                                                <div>
                                                                    Your email will only be visible to recruiters on HireBeat
                                                                </div>
                                                            </p>
                                                        </span>
                                                    </h3>
                                                </div>
                                                <div className="col-4 profile-edit">
                                                    <div style={{ float: "right" }}>
                                                        <i className="bx bx-edit-alt"></i>
                                                        <span onClick={this.editMedia} style={{ marginLeft: "0.5rem", cursor: "pointer" }}>Edit</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-4">
                                                    <p className="profile-p3" style={{display: "flex", alignItems: "center"}}>
                                                        Email <i class='bx-fw bx bx-mail-send' style={{color: "#67A3F3"}}></i>
                                                    </p>
                                                </div>
                                                <div className="col-8">
                                                    <p className="profile-p4" style={{wordBreak: "break-word"}}>
                                                        {(this.props.profileDetail.email !== null && this.props.profileDetail.email !== "") ? this.props.profileDetail.email : "Your Email"}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-4">
                                                    <p className="profile-p3" style={{display: "flex", alignItems: "center"}}>
                                                        LinkedIn <i class='bx bxl-linkedin-square' style={{color: "#67A3F3"}}></i>
                                                    </p>
                                                </div>
                                                <div className="col-8">
                                                    <p className="profile-p4" style={{ wordBreak: "break-word" }}>
                                                        {(this.props.profileDetail.linkedin !== null && this.props.profileDetail.linkedin !== "") ? this.props.profileDetail.linkedin : "Link to your LinkedIn"}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-4">
                                                    <p className="profile-p3" style={{ display: "flex", alignItems: "center" }}>
                                                        Website <i class='bx bxs-network-chart' style={{ color: "#67A3F3" }}></i>
                                                    </p>
                                                </div>
                                                <div className="col-8">
                                                    <p className="profile-p4" style={{ wordBreak: "break-word" }}>
                                                        {(this.props.profileDetail.website !== null && this.props.profileDetail.website !== "") ? this.props.profileDetail.website : "Add your personal website"}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-4">
                                                    <p className="profile-p3" style={{ display: "flex", alignItems: "center" }}>
                                                        Github <i class='bx bxl-github' style={{ color: "#67A3F3" }}></i>
                                                    </p>
                                                </div>
                                                <div className="col-8">
                                                    <p className="profile-p4" style={{ wordBreak: "break-word" }}>
                                                        {(this.props.profileDetail.github !== null && this.props.profileDetail.github !== "") ? this.props.profileDetail.github : "Link to your Github"}
                                                    </p>
                                                </div>
                                            </div>
                                        </div> :
                                        <div>
                                            <div className="row">
                                                <div className="col-7">
                                                    <h3 className="profile-h3">Social Media</h3>
                                                </div>
                                            </div>
                                            <div>
                                                <p className="profile-p3" style={{margin: "0rem"}}>Email <i class='bx-fw bx bx-mail-send' style={{color: "#090D3A"}}></i></p>
                                                <input id="email" className="profile-input profile-p4" style={{width: "100%"}} defaultValue={this.props.profileDetail.email}></input>
                                            </div>
                                            <div>
                                                <p className="profile-p3" style={{ margin: "0rem" }}>LinkedIn <i class='bx bxl-linkedin-square' style={{ color: "#090D3A" }}></i></p>
                                                <input id="linkedin" className="profile-input profile-p4" style={{ width: "100%" }} defaultValue={this.props.profileDetail.linkedin}></input>
                                            </div>
                                            <div style={{ marginTop: "1rem" }}>
                                                <p className="profile-p3" style={{ margin: "0rem" }}>Website <i class='bx bxs-network-chart' style={{ color: "#090D3A" }}></i></p>
                                                <input id="website" className="profile-input profile-p4" style={{ width: "100%" }} defaultValue={this.props.profileDetail.website}></input>
                                            </div>
                                            <div style={{ marginTop: "1rem" }}>
                                                <p className="profile-p3" style={{ margin: "0rem" }}>Github <i class='bx bxl-github' style={{ color: "#090D3A" }}></i></p>
                                                <input id="github" className="profile-input profile-p4" style={{ width: "100%" }} defaultValue={this.props.profileDetail.github}></input>
                                            </div>
                                            <div className="row" style={{marginTop: "1rem"}}>
                                                <div className="col-6" />
                                                <div className="col-3 profile-edit">
                                                    <button className="default-btn" style={{background: "#E5E5E5", color: "#090D3A", paddingLeft: "25px"}} onClick={this.cancelEditMedia}>Cancel</button>
                                                </div>
                                                <div className="col-3 profile-edit">
                                                    <button className="default-btn" style={{background: "#67A3F3", paddingLeft: "25px"}} onClick={this.saveSocialMedia}>Save</button>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>

                            {/* Job Preference */}
                            <div className="profile-bg" style={{textAlign: "left", marginTop: "2rem"}}>
                                <div style={{padding: "2rem"}}>
                                    {!this.state.isEditJobPreference ?
                                        <div>
                                            <div className="row">
                                                <div className="col-8">
                                                    <h3 className="profile-h3">
                                                        Job Preference
                                                        <span className="tool_tip ml-2">
                                                            <i class='bx-fw bx bxs-info-circle' style={{ color: "#dfdfdf" }}></i>
                                                            <p className="tool_submenu container" style={{ width: "14rem" }}>
                                                                <div>
                                                                    This section will only be visible to recruiters on HireBeat.
                                                                </div>
                                                            </p>
                                                        </span>
                                                    </h3>
                                                </div>
                                                <div className="col-4 profile-edit">
                                                    <div style={{ float: "right" }}>
                                                        <i className="bx bx-edit-alt"></i>
                                                        <span onClick={this.editJobPreference} style={{marginLeft: "0.5rem", cursor:"pointer"}}>Edit</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <p className="profile-p4">
                                                    {(this.props.profileDetail.job_type !== "") ? this.props.profileDetail.job_type : ""}
                                                </p>
                                            </div>
                                        </div>:
                                        <div>
                                            <div className="row">
                                                <div className="col-7">
                                                    <h3 className="profile-h3">Job Preference</h3>
                                                </div>
                                            </div>
                                            <div>
                                                <JobTypeSelection jobType = {jobType} setJobType={this.setJobType}/>
                                            </div>
                                            <div className="row" style={{marginTop: "1rem"}}>
                                                <div className="col-6" />
                                                <div className="col-3 profile-edit">
                                                    <button className="default-btn" style={{background: "#E5E5E5", color: "#090D3A", paddingLeft: "25px"}} onClick={this.cancelEditJobPreference}>Cancel</button>
                                                </div>
                                                <div className="col-3 profile-edit">
                                                    <button className="default-btn" style={{background: "#67A3F3", paddingLeft: "25px"}} onClick={this.saveJobPreference}>Save</button>
                                                </div>
                                            </div>
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

                            {/* Skills */}
                            <div className="profile-bg" style={{textAlign: "left", marginTop: "2rem"}}>
                                <div style={{padding: "2rem"}}>
                                    {!this.state.isEditSkills ?
                                        <div>
                                            <div className="row">
                                                <div className="col-8">
                                                    <h3 className="profile-h3">
                                                        Skills
                                                    </h3>
                                                </div>
                                                <div className="col-4 profile-edit">
                                                    <div style={{float: "right"}}>
                                                        <i className="bx bx-edit-alt"></i>
                                                        <span onClick={this.editSkills} style={{marginLeft: "0.5rem", cursor:"pointer"}}>Edit</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                {(this.props.profileDetail?.skills)?.map((skill) => {
                                                    return (
                                                        <span className="circle-tags">{skill}</span>
                                                    )
                                                })
                                                }
                                            </div>
                                        </div> :
                                        <div>
                                            <div className="row">
                                                <div className="col-7">
                                                    <h3 className="profile-h3">Skills</h3>
                                                </div>
                                            </div>
                                            <div>
                                                <SkillEdition skills = {skills} setSkills={this.setSkills}/>
                                            </div>
                                            <div className="row" style={{marginTop: "1rem"}}>
                                                <div className="col-6" />
                                                <div className="col-3 profile-edit">
                                                    <button className="default-btn" style={{background: "#E5E5E5", color: "#090D3A", paddingLeft: "25px"}} onClick={this.cancelEditSkills}>Cancel</button>
                                                </div>
                                                <div className="col-3 profile-edit">
                                                    <button className="default-btn" style={{background: "#67A3F3", paddingLeft: "25px"}} onClick={this.saveSkills}>Save</button>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>

                            {/* Languages */}
                            <div className="profile-bg" style={{textAlign: "left", marginTop: "2rem"}}>
                                <div style={{padding: "2rem"}}>
                                    {!this.state.isEditLanguages ?
                                        <div>
                                            <div className="row">
                                                <div className="col-8">
                                                    <h3 className="profile-h3">
                                                        Languages
                                                    </h3>
                                                </div>
                                                <div className="col-4 profile-edit">
                                                    <div style={{float: "right"}}>
                                                        <i className="bx bx-edit-alt"></i>
                                                        <span onClick={this.editLanguages} style={{marginLeft: "0.5rem", cursor:"pointer"}}>Edit</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                {(this.props.profileDetail?.languages)?.map((language) => {
                                                    return (
                                                        <span className="circle-tags">{language}</span>
                                                    )
                                                })
                                                }
                                            </div>
                                        </div>:
                                        <div>
                                            <div className="row">
                                                <div className="col-7">
                                                    <h3 className="profile-h3">Languages</h3>
                                                </div>
                                            </div>
                                            <div>
                                                <LanguageEdition languages = {languages} setLanguages={this.setLanguages}/>
                                            </div>
                                            <div className="row" style={{marginTop: "1rem"}}>
                                                <div className="col-6" />
                                                <div className="col-3 profile-edit">
                                                    <button className="default-btn" style={{background: "#E5E5E5", color: "#090D3A", paddingLeft: "25px"}} onClick={this.cancelEditLanguages}>Cancel</button>
                                                </div>
                                                <div className="col-3 profile-edit">
                                                    <button className="default-btn" style={{background: "#67A3F3", paddingLeft: "25px"}} onClick={this.saveLanguages}>Save</button>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>

                        {/* Right Part */}
                        <div className="col-6" style={{marginLeft: "2rem"}}>
                            {/* Summary */}
                            <div className="profile-bg" style={{textAlign: "left"}}>
                                <div style={{padding: "2rem"}}>
                                    {!this.state.isEditSummary ?
                                        <div>
                                            <div className="row">
                                                <div className="col-8">
                                                    <h3 className="profile-h3">Summary</h3>
                                                </div>
                                                <div className="col-4 profile-edit">
                                                    <div style={{ float: "right" }}>
                                                        <i className="bx bx-edit-alt"></i>
                                                        <span onClick={this.editSummary} style={{ marginLeft: "0.5rem", cursor: "pointer" }}>Edit</span>
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
                                            </div>
                                            <textarea id="summary" className="profile-input profile-p" style={{width: "100%", height: "6rem"}} defaultValue={this.props.profileDetail.summary}></textarea>
                                            <div className="row" style={{marginTop: "1rem"}}>
                                                <div className="col-6" />
                                                <div className="col-3 profile-edit">
                                                    <button className="default-btn" style={{background: "#E5E5E5", color: "#090D3A", paddingLeft: "25px"}} onClick={this.cancelEditSummary}>Cancel</button>
                                                </div>
                                                <div className="col-3 profile-edit">
                                                    <button className="default-btn" style={{background: "#67A3F3", paddingLeft: "25px"}} onClick={this.saveSummary}>Save</button>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>

                            {/* Video Profile */}
                            <div className="profile-bg" style={{textAlign: "left", marginTop: "2rem"}}>
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

                            {/* Education */}
                            <div className="profile-bg" style={{ textAlign: "left", marginTop: "2rem" }}>
                                <div style={{ padding: "2rem" }}>
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
                            <div className="profile-bg" style={{ textAlign: "left", marginTop: "2rem" }}>
                                <div style={{ padding: "2rem" }}>
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
                        </div>
                    </div>
                </div>
            </React.Fragment >
        )
    };
}

export default Profile;