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
import { infillBarDataPublicProfile2 } from "../../../constants/constants";
import ShareProfile from "./ShareProfile";
import ShareProfileEdition from "./ShareProfileEdition";
import { MyShareModal } from "./../DashboardComponents";
import Autocomplete from "react-google-autocomplete";
import StepProgressBar from "./StepProgressBar";
import Reminder from "./Reminder";

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
    var options = infillBarDataPublicProfile2(props.percent);
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
    constructor(props) {
        super(props);
        this.state = {
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
            preview: null,
            fakeName: "",
            docType: "",
            jobType: "",
            skills: this.props.profileDetail.skills,
            languages: this.props.profileDetail.languages,
            shareLink: "",
            showShare: false,
            isEditProfileShare: false,
            photoSelected: false,
            location: this.props.profileDetail.location,
            invalidPersonalInfo: false,
            showPhotoSelection: false,
            delPhoto: false,
            hideUpload: this.props.profileDetail.logo_url?.length > 0 ? true : false,
        }
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
        this.editEducation();
    }

    addWorkExp = () => {
        this.editWorkExp();
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
        setTimeout(() => {
            let hideUpload = this.props.profileDetail.logo_url?.length > 0 ? true : false;
            this.setState({ isEditInfo: false, invalidPersonalInfo: false, delPhoto: false, preview: null, hideUpload: hideUpload, photoSelected: false, showPhotoSelection: false });
        }, 500);
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
        this.setState({eduEditId: -1});
        this.getUpdatedData();
        setTimeout(() => this.setState({ isEditEducation: false }), 300);
    }

    editWorkExp = () => {
        //        this.getUpdatedData();
        setTimeout(() => this.setState({ isEditWorkExp: true }), 300);
    }

    cancelEditWorkExp = () => {
        this.setState({expEditId: -1});
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
        // validate input with profile sharing
        let enabledSharing = this.props.profileDetail.share_profile || this.props.profileDetail.open_to_hr;
        if (enabledSharing && (firstName == "" || lastName == "" || curJobTitle == "" || curCompany == "" || location == "")) {
            return this.setState({invalidPersonalInfo: true});
        }
        let data = {
            "user_id": this.props.userId,
            "f_name": firstName,
            "l_name": lastName,
            "current_job_title": curJobTitle,
            "current_company": curCompany,
            "location": location,
            "logo_url": this.state.delPhoto ? "" : this.props.profileDetail.logo_url,
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
        let rate = 5;
        let infoRate = 0;
        let educations = this.props.profileDetail.educations;
        let experiences = this.props.profileDetail.experiences;

        if (this.props.profileDetail.video_url != "" && this.props.profileDetail.video_url != null) {
            rate += 20;
        }
        if (this.props.profileDetail.resume_url != "" && this.props.profileDetail.resume_url != null) {
            rate += 10;
        }
        if (this.props.profileDetail.logo_url != "" && this.props.profileDetail.logo_url != null) {
            rate += 5;
            infoRate += 5;
        }
        if (this.props.profileDetail.f_name != "" && this.props.profileDetail.f_name != null) {
            rate += 2;
            infoRate += 2;
        }
        if (this.props.profileDetail.l_name != "" && this.props.profileDetail.l_name != null) {
            rate += 2;
            infoRate += 2;
        }
        if (this.props.profileDetail.current_job_title != "" && this.props.profileDetail.current_job_title != null) {
            rate += 2;
            infoRate += 2;
        }
        if (this.props.profileDetail.current_company != "" && this.props.profileDetail.current_company != null) {
            rate += 2;
            infoRate += 2;
        }
        if (this.props.profileDetail.location != "" && this.props.profileDetail.location != null) {
            rate += 2;
            infoRate += 2;
        }
        if (this.props.profileDetail.summary != "" && this.props.profileDetail.summary != null) {
            rate += 10;
            infoRate += 10;
        }
        if ((this.props.profileDetail.linkedin != "" && this.props.profileDetail.linkedin != null) ||
            (this.props.profileDetail.website != "" && this.props.profileDetail.website != null) ||
            (this.props.profileDetail.github != "" && this.props.profileDetail.github != null)
        ) {
            rate += 5;
            infoRate += 5;
        }
        if (educations.length > 0 && educations[0].school != "" && educations[0].school != null) {
            rate += 2;
            infoRate += 2;
        }
        if (educations.length > 0 && educations[0].graduation_date != "" && educations[0].graduation_date != null) {
            rate += 2;
            infoRate += 2;
        }
        if (educations.length > 0 && educations[0].major != "" && educations[0].major != null) {
            rate += 2;
            infoRate += 2;
        }
        if (educations.length > 0 && educations[0].degree != "" && educations[0].degree != null) {
            rate += 2;
            infoRate += 2;
        }
        if (educations.length > 0 && educations[0].gpa != "" && educations[0].gpa != null) {
            rate += 2;
            infoRate += 2;
        }
        if (experiences.length > 0 && experiences[0].company != "" && experiences[0].company != null) {
            rate += 2;
            infoRate += 2;
        }
        if (experiences.length > 0 && experiences[0].title != "" && experiences[0].title != null) {
            rate += 2;
            infoRate += 2;
        }
        if (experiences.length > 0 && experiences[0].start_date != "" && experiences[0].start_date != null) {
            rate += 2;
            infoRate += 2;
        }
        if (experiences.length > 0 && experiences[0].end_date != "" && experiences[0].end_date != null) {
            rate += 2;
            infoRate += 2;
        }
        if (experiences.length > 0 && experiences[0].work_description != "" && experiences[0].work_description != null) {
            rate += 2;
            infoRate += 2;
        }
        if (this.props.profileDetail?.skills?.length > 0) {
            rate += 10;
            infoRate += 10;
        }
        if (this.props.profileDetail?.languages?.length > 0) {
            rate += 2;
            infoRate += 2;
        }
        if (this.props.profileDetail.job_type != "" && this.props.profileDetail.job_type != null) {
            rate += 3;
            infoRate += 3;
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
            const url = "https://app.hirebeat.co/talent-profile?" + name + "&id=" + encodedUserId;
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
        const url = "https://app.hirebeat.co/talent-profile?" + name + "&id=" + encodedUserId;
        //const url = "http://127.0.0.1:8000/talent-profile?" + name + "&id=" + encodedUserId;
        this.setState({shareLink: url});
    }

    handleSavePhoto = () => {
        this.setState({photoSelected: true});
    }

    editSavePhoto = () => {
        this.setState({photoSelected: false, preview: null});
    }

    handleLocation = (location) => {
        this.setState({location: location});
    }

    setEduEditId = (eduEditId) => {
        this.setState({eduEditId: eduEditId});
    }

    setExpEditId = (expEditId) => {
        this.setState({expEditId: expEditId});
    }

    renderProfileLevel = () => {
        let res = "";
        let rate = this.props.profileDetail.profile_rate;
        if (rate >= 0 && rate <= 25) {
            res = "Beginner";
        }
        else if (rate >= 26 && rate <= 50) {
            res = "Intermediate";
        }
        else if (rate >= 51 && rate <= 75) {
            res = "Advanced";
        }
        else if (rate >= 76 && rate <= 99) {
            res = "Expert";
        }
        else {
            res = "All-Star"
        }
        return res;
    }

    getChecklist = () => {
        let res = {
            basicInfoFilled: false,
            photoUploaded: false,
            videoRecorded: false,
            skillsFilled: false,
            summaryFilled: false,
            profileCompleted: false,
        };
        let detail = this.props.profileDetail;
        // basic info
        if (detail.f_name != "" && detail.f_name != null &&
            detail.l_name != "" && detail.l_name != null &&
            detail.current_job_title != "" && detail.current_job_title != null &&
            detail.current_company != "" && detail.current_company != null &&
            detail.location != "" && detail.location != null
        ) {
            res.basicInfoFilled = true;
        }
        if (detail.logo_url != "" && detail.logo_url != null) {
            res.photoUploaded = true;
        }
        if (detail.video_url != "" && detail.video_url != null) {
            res.videoRecorded = true;
        }
        if (detail.skills?.length > 0) {
            res.skillsFilled = true;
        }
        if (detail.summary != "" && detail.summary != null) {
            res.summaryFilled = true;
        }
        if (detail.profile_rate === 100) {
            res.profileCompleted = true;
        }
        return res;
    }

    renderRecommendation = () => {
        let recommendations = {
            title: "",
            msg: "",
            img: "",
        };
        const checklist = this.getChecklist();
        if (!checklist.basicInfoFilled) {
            recommendations.title = "Complete Your Basic Information";
            recommendations.msg = "Make your profile more accessible by providing your full name, current position, current company, and location.";
            recommendations.img = "https://hirebeat-assets.s3.amazonaws.com/profile-advocation-1.png";
        }
        else if (!checklist.photoUploaded) {
            recommendations.title = "Add a Profile Photo to Help Others Recognize You";
            recommendations.msg = "Members with a photo get up to 20x more profile views.";
            recommendations.img = "https://hirebeat-assets.s3.amazonaws.com/profile-advocation-2.png";
        }
        else if (!checklist.videoRecorded) {
            recommendations.title = "Record a Short Video to Pitch Yourself";
            recommendations.msg = "Standout from other applicants and let the recruiter remember you.";
            recommendations.img = "https://hirebeat-assets.s3.amazonaws.com/profile-advocation-3.png";
        }
        else if (!checklist.skillsFilled) {
            recommendations.title = "Add Skills to Showcase What You Are Great At";
            recommendations.msg = "Members with 5 or more skills are 25x more likely to be discovered in search by recruiters.";
            recommendations.img = "https://hirebeat-assets.s3.amazonaws.com/profile-advocation-4.png";
        }
        else if (!checklist.summaryFilled) {
            recommendations.title = "Add a Summary About Your Expertise and Interests";
            recommendations.msg = "Summary is one of the key section that recruiters look at.";
            recommendations.img = "https://hirebeat-assets.s3.amazonaws.com/profile-advocation-5.png";
        }
        else if (!checklist.profileCompleted) {
            recommendations.title = "Complete Your Profile";
            recommendations.msg = "Complete the rest of your profile so recruiters can know you better.";
            recommendations.img = "https://hirebeat-assets.s3.amazonaws.com/profile-advocation-6.png";
        }
        return recommendations;
    }

    openPhotoSelection = () => {
        this.setState({showPhotoSelection: true});
    }


    removePhoto = () => {
        this.setState({delPhoto: true, hideUpload: false});
    }

    uploadPhoto = () => {
        this.setState({showPhotoSelection: true, hideUpload: true});
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

        const checklist = this.getChecklist();
        const recommendations = this.renderRecommendation();

        return (
            <React.Fragment>
                <div className="profile-container">
                    {/* Completion rate */}
                    <div className="row" style={{ marginBottom: "2rem" }}>
                        <div className="col-7">
                            <div className="profile-bg" style={{ textAlign: "left" }}>
                                <div style={{ padding: "2rem", paddingTop: "1rem" }}>
                                    <h3 className="profile-h3" style={{ paddingTop: "1rem", paddingBottom: "1rem" }}>Profile Strength: <span style={{color: "#006dff"}}>{this.renderProfileLevel()}</span></h3>
                                    <div style={{paddingLeft: "0.5rem", paddingRight: "0.5rem"}}>
                                        <span className="tool_tip ml-2">
                                            <StepProgressBar
                                                percent={this.props.profileDetail.profile_rate}
                                            />
                                            <Reminder  checklist={checklist}/>
                                        </span>
                                    </div>
                                    <div className="row align-center" style={{marginTop: "1rem"}}>
                                        <div className="col-2 justify-items">
                                            <img src={recommendations.img}/>
                                        </div>
                                        <div className="col">
                                            <h4 className="profile-h4">{recommendations.title}</h4>
                                            <p className="profile-p7">{recommendations.msg}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4" style={{marginLeft:"2rem"}}>
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
                                        These can be changed at anytime. <span style={{ marginLeft: "0.5rem", cursor: "pointer", color: "#006dff" }}>Edit</span>
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
                                                position={this.props.profileDetail.current_job_title}
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

                    {/* profile detail begins here */}
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
                                            <div style={{marginBottom: "1rem"}}>
                                                <p className="profile-p" style={{margin: "0rem"}}>User Profile</p>
                                                {/* show original photo here */}
                                                {(this.props.profileDetail.logo_url !== null && this.props.profileDetail.logo_url !== "" && !this.state.showPhotoSelection && !this.state.delPhoto) &&
                                                    <div>
                                                        <div className="d-flex justify-content-center">
                                                            <img src={this.props.profileDetail.logo_url} />
                                                        </div>
                                                        <div className="d-flex justify-content-center" style={{marginTop: "0.5rem"}}>
                                                            <span className="profile-edit" style={{cursor: "pointer", color: "#7D7D7D", textDecoration: "underline"}} onClick={this.removePhoto}>Remove</span>
                                                            <span className="profile-edit" style={{cursor: "pointer", textDecoration: "underline", marginLeft: "0.5rem"}} onClick={this.openPhotoSelection} >Update</span>
                                                        </div>
                                                    </div>
                                                }
                                                {(!this.state.hideUpload) &&
                                                    <div>
                                                        <div className="d-flex justify-content-center" style={{marginTop: "0.5rem"}}>
                                                            <span className="profile-edit" style={{cursor: "pointer"}} onClick={this.uploadPhoto} >
                                                                <img style={{width: "110px", height: "110px"}} src="https://hirebeat-assets.s3.amazonaws.com/User-dash/bxs-user-circle-2.png" />
                                                            </span>
                                                        </div>
                                                    </div>
                                                }
                                                {(this.state.showPhotoSelection && !this.state.photoSelected) ?
                                                    <div className="d-flex justify-content-center">
                                                        <Avatar
                                                              width={285}
                                                              height={200}
                                                              onCrop={this.onCrop}
                                                              onClose={this.onClose}
                                                              onBeforeFileLoad={this.onBeforeFileLoad}
                                                              mimeTypes={"image/jpeg,image/png,image/jpg"}
                                                        />
                                                    </div> :
                                                    <div className="d-flex justify-content-center">
                                                        {this.state.preview !== null && <img src={this.state.preview} alt="Preview" />}
                                                    </div>
                                                }
                                                {this.state.preview != null &&
                                                    <div className="d-flex justify-content-center" style={{marginTop: "0.5rem"}}>
                                                        {this.state.photoSelected &&
                                                            <span className="profile-edit" style={{cursor: "pointer"}} onClick={this.editSavePhoto}>Cancel</span>
                                                        }
                                                        {!this.state.photoSelected &&
                                                            <span className="profile-edit" style={{cursor: "pointer"}} onClick={this.handleSavePhoto}>Save</span>
                                                        }
                                                    </div>
                                                }
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
                                                <textarea id="curJobTitle" className="profile-input profile-p" style={{width: "100%"}} placeholder="eg: Software Engineer" defaultValue={this.props.profileDetail.current_job_title}></textarea>
                                            </div>
                                            <div style={{marginTop: "1rem"}}>
                                                <p className="profile-p" style={{margin: "0rem"}}>Current Company/School</p>
                                                <textarea id="curCompany" className="profile-input profile-p" style={{width: "100%"}} placeholder="eg: HireBeat" defaultValue={this.props.profileDetail.current_company}></textarea>
                                            </div>
                                            <div style={{marginTop: "1rem"}}>
                                                <p className="profile-p" style={{margin: "0rem"}}>Location</p>
                                                <Autocomplete
                                                    id="location"
                                                    className="profile-input profile-p"
                                                    style={{width: "100%"}}
                                                    language="en"
                                                    apiKey={"AIzaSyDEplgwaPXJn38qEEnE5ENlytHezUfq56U"}
                                                    onPlaceSelected={(place, inputRef, autocomplete) => {
                                                        this.handleLocation(place.formatted_address);
                                                    }}
                                                    defaultValue={this.props.profileDetail.location}
                                                />
                                            </div>
                                            <div style={{marginTop: "0.5rem"}}>
                                                {this.state.invalidPersonalInfo && <p className="share-p4">Please fill out all blanks since you've enabled profile sharing</p>}
                                            </div>
                                            <div className="row" style={{marginTop: "1rem"}}>
                                                <div className="col-6" />
                                                <div className="col-3 profile-edit">
                                                    <button className="default-btn" style={{background: "#E5E5E5", color: "#090D3A", paddingLeft: "25px"}} onClick={this.cancelEditInfo}>Cancel</button>
                                                </div>
                                                <div className="col-3 profile-edit">
                                                    <button className="default-btn" style={{background: "#006dff", paddingLeft: "25px"}} onClick={this.savePersonalInfo}>Save</button>
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
                                                        <i class='bx-fw bx bx-mail-send' style={{color: "#006dff"}}></i> Email
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
                                                        <i class='bx bxl-linkedin-square' style={{color: "#006dff"}}></i> &nbsp; LinkedIn
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
                                                        <i class='bx bxs-network-chart' style={{ color: "#006dff" }}></i> &nbsp; Website
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
                                                        <i class='bx bxl-github' style={{ color: "#006dff" }}></i> &nbsp; Github
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
                                                <p className="profile-p3" style={{margin: "0rem", display: "flex", alignItems: "center"}}><i class='bx-fw bx bx-mail-send' style={{color: "#006dff"}}></i>   Email</p>
                                                <input id="email" className="profile-input profile-p4" style={{width: "100%"}} defaultValue={this.props.profileDetail.email}></input>
                                            </div>
                                            <div style={{ marginTop: "1rem" }}  >
                                                <p className="profile-p3" style={{margin: "0rem", display: "flex", alignItems: "center"}}><i class='bx bxl-linkedin-square' style={{ color: "#006dff" }}></i> &nbsp; LinkedIn</p>
                                                <input id="linkedin" className="profile-input profile-p4" style={{ width: "100%" }} defaultValue={this.props.profileDetail.linkedin}></input>
                                            </div>
                                            <div style={{ marginTop: "1rem" }}>
                                                <p className="profile-p3" style={{margin: "0rem", display: "flex", alignItems: "center"}}><i class='bx bxs-network-chart' style={{ color: "#006dff" }}></i> &nbsp; Website</p>
                                                <input id="website" className="profile-input profile-p4" style={{ width: "100%" }} defaultValue={this.props.profileDetail.website}></input>
                                            </div>
                                            <div style={{ marginTop: "1rem" }}>
                                                <p className="profile-p3" style={{margin: "0rem", display: "flex", alignItems: "center"}}><i class='bx bxl-github' style={{ color: "#006dff" }}></i> &nbsp; Github</p>
                                                <input id="github" className="profile-input profile-p4" style={{ width: "100%" }} defaultValue={this.props.profileDetail.github}></input>
                                            </div>
                                            <div className="row" style={{marginTop: "1rem"}}>
                                                <div className="col-6" />
                                                <div className="col-3 profile-edit">
                                                    <button className="default-btn" style={{background: "#E5E5E5", color: "#090D3A", paddingLeft: "25px"}} onClick={this.cancelEditMedia}>Cancel</button>
                                                </div>
                                                <div className="col-3 profile-edit">
                                                    <button className="default-btn" style={{background: "#006dff", paddingLeft: "25px"}} onClick={this.saveSocialMedia}>Save</button>
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
                                                    <button className="default-btn" style={{background: "#E5E5E5", color: "#090D3A", paddingLeft: "25px", zIndex: "0"}} onClick={this.cancelEditJobPreference}>Cancel</button>
                                                </div>
                                                <div className="col-3 profile-edit">
                                                    <button className="default-btn" style={{background: "#006dff", paddingLeft: "25px", zIndex: "0"}} onClick={this.saveJobPreference}>Save</button>
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
                                                <SkillEdition skills={skills} setSkills={this.setSkills}/>
                                            </div>
                                            <div className="row" style={{marginTop: "1rem"}}>
                                                <div className="col-6" />
                                                <div className="col-3 profile-edit">
                                                    <button className="default-btn" style={{background: "#E5E5E5", color: "#090D3A", paddingLeft: "25px", zIndex: "0"}} onClick={this.cancelEditSkills}>Cancel</button>
                                                </div>
                                                <div className="col-3 profile-edit">
                                                    <button className="default-btn" style={{background: "#006dff", paddingLeft: "25px", zIndex: "0"}} onClick={this.saveSkills}>Save</button>
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
                                                    <button className="default-btn" style={{background: "#E5E5E5", color: "#090D3A", paddingLeft: "25px", zIndex: "0"}} onClick={this.cancelEditLanguages}>Cancel</button>
                                                </div>
                                                <div className="col-3 profile-edit">
                                                    <button className="default-btn" style={{background: "#006dff", paddingLeft: "25px", zIndex: "0"}} onClick={this.saveLanguages}>Save</button>
                                                </div>
                                            </div>
                                        </div>
                                    }
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
                                                    <button className="default-btn" style={{background: "#006dff", paddingLeft: "25px"}} onClick={this.saveSummary}>Save</button>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>

                            {/* Education */}
                            <div className="profile-bg" style={{ textAlign: "left", marginTop: "2rem" }}>
                                <div style={{ padding: "2rem" }}>
                                    <div className="row">
                                        <div className="col-8">
                                            <h3 className="profile-h3">Education</h3>
                                        </div>
                                    </div>
                                    <div>
                                        {this.props.profileDetail?.educations?.map((edu) => {
                                            if (edu.school != "" && edu.school != null) {
                                                return (
                                                    <Education
                                                        education={edu}
                                                        userId={this.props.userId}
                                                        updateEducation={this.props.updateEducation}
                                                        getUpdatedData={this.getUpdatedData}
                                                        cancelEditEducation={this.cancelEditEducation}
                                                        deleteProfileEducation={this.props.deleteProfileEducation}
                                                    />
                                                )
                                            }
                                        })}
                                        <hr />
                                        <span style={{cursor:"pointer"}} className="profile-edit" onClick={this.addEducation}>
                                            + Add School
                                        </span>
                                    </div>
                                    {this.state.isEditEducation &&
                                        <div>
                                            <EducationForm
                                                cancelEditEducation={this.cancelEditEducation}
                                                userId={this.props.userId}
                                                updateEducation={this.props.updateEducation}
                                                getUpdatedData={this.getUpdatedData}
                                            />
                                        </div>
                                    }
                                </div>
                            </div>

                            {/* Work Experience */}
                            <div className="profile-bg" style={{ textAlign: "left", marginTop: "2rem" }}>
                                <div style={{ padding: "2rem" }}>
                                    <div className="row">
                                        <div className="col-8">
                                            <h3 className="profile-h3">Experience</h3>
                                        </div>
                                    </div>
                                    <div>
                                        {this.props.profileDetail?.experiences?.map((exp) => {
                                            if (exp.company != "" && exp.company != null) {
                                                return (
                                                    <WorkExperience
                                                        workExp={exp}
                                                        userId={this.props.userId}
                                                        updateWorkExp={this.props.updateWorkExp}
                                                        getUpdatedData={this.getUpdatedData}
                                                        cancelEditWorkExp={this.cancelEditWorkExp}
                                                        deleteProfileWorkExp={this.props.deleteProfileWorkExp}
                                                    />
                                                )
                                            }
                                        })}
                                        <hr />
                                        <span style={{cursor:"pointer"}} className="profile-edit" onClick={this.addWorkExp}>
                                            + Add Experience
                                        </span>
                                    </div>
                                    {this.state.isEditWorkExp &&
                                        <div>
                                            <WorkExpForm
                                                cancelEditWorkExp={this.cancelEditWorkExp}
                                                userId={this.props.userId}
                                                updateWorkExp={this.props.updateWorkExp}
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