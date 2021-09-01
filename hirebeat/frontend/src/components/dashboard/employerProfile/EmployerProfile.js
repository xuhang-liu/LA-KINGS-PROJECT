import React, { Component } from "react";
import Video from "./Video";
import Post from "./Post";
import RichTextEditor from 'react-rte';
//import PropTypes from "prop-types";
import parse from 'html-react-parser';
import Avatar from 'react-avatar-edit';
//import { IconText } from "../DashboardComponents";
import { confirmAlert } from 'react-confirm-alert';
import { Link } from "react-router-dom";
import Select from 'react-select';
var ReactS3Uploader = require("react-s3-uploader");

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

const toolbarConfig = {
    // Optionally specify the groups to display (displayed in the order listed).
    display: ['INLINE_STYLE_BUTTONS', 'BLOCK_TYPE_BUTTONS', 'LINK_BUTTONS', 'BLOCK_TYPE_DROPDOWN', 'HISTORY_BUTTONS'],
    INLINE_STYLE_BUTTONS: [
        { label: 'Bold', style: 'BOLD', className: 'custom-css-class' },
        { label: 'Italic', style: 'ITALIC' },
        { label: 'Underline', style: 'UNDERLINE' }
    ],
    BLOCK_TYPE_DROPDOWN: [
        { label: 'Normal', style: 'unstyled' },
        { label: 'Heading Large', style: 'header-one' },
        { label: 'Heading Medium', style: 'header-two' },
        { label: 'Heading Small', style: 'header-three' }
    ],
    BLOCK_TYPE_BUTTONS: [
        { label: 'UL', style: 'unordered-list-item' },
        { label: 'OL', style: 'ordered-list-item' }
    ]
};

export class EmployerProfile extends Component {
    constructor(props) {
        super(props);
        this.uploader = null;
        this.handleUpload = this.handleUpload.bind(this);
    }
    state = {
        isEditInfo: false,
        isEditBasicInfo: false,
        isEditSummary: false,
        isEditMedia: false,
        isUploadVideo: false,
        isEditPost: false,
        selected: false,
        preview: null,
        fakeName: "",
        docType: "",
        overview: (this.props.employerProfileDetail.summary !== null && this.props.employerProfileDetail.summary !== "") ?
            RichTextEditor.createValueFromString(this.props.employerProfileDetail.summary, 'html') : RichTextEditor.createEmptyValue(),
        companySize: "",
    }

    customStyles = {
        control: styles => ({ ...styles, backgroundColor: '#ffffff' }),
        singleValue: styles => ({
            ...styles,
            color: '#4a6f8a',
            fontSize: '0.9375rem',
            fontFamily: 'Avenir Next,Segoe UI, sans-serif',
            fontWeight: '500'
        }),
    };

    options = [
        { value: '1-50 employees', label: '1-50 employees' },
        { value: '51-200 employees', label: '51-200 employees' },
        { value: '201-500 employees', label: '201-500 employees' },
        { value: '501-1,000 employees', label: '501-1,000 employees' },
        { value: '1,001-5,000 employees', label: '1,001-5,000 employees' },
        { value: '5,001-10,000 employees', label: '5,001-10,000 employees' },
        { value: '10,000+ employees', label: '10,000+ employees' },
    ];

    onFilter = (companySize) => {
        this.setState({ companySize: companySize })
    };

    onChange = (overview) => {
        this.setState({ overview });
    };

    onClose = () => {
        this.setState({ preview: null })
    }

    onCrop = (preview) => {
        this.setState({ preview })
    }

    onBeforeFileLoad = (elem) => {
        let docType = elem.target.files[0].type?.split("/")[1];
        let docSize = elem.target.files[0].size;
        if (docSize > 2000000) {
            this.alert("File is too big!", "Please upload a logo that less than 2MB");
            elem.target.value = "";
        }
        else if (docType !== "png" && docType !== "jpg" && docType !== "jpeg") {
            this.alert("Wrong File Type", "Please upload JPG, JPEG or PNG file");
            elem.target.value = "";
        }
        else {
            this.setState({ docType: docType });
        }
    }

    setVideo = () => {
        this.setState({ isUploadVideo: true });
    }

    getUpdatedData = () => {
        this.props.getEmployerProfileDetail(this.props.userId);
    }

    editInfo = () => {
        setTimeout(() => { this.setState({ isEditInfo: true }); }, 300);
    }

    cancelEditInfo = () => {
        this.getUpdatedData();
        setTimeout(() => this.setState({ isEditInfo: false }), 300);
    }

    editMedia = () => {
        setTimeout(() => this.setState({ isEditMedia: true }), 300);

    }

    cancelEditMedia = () => {
        this.getUpdatedData();
        setTimeout(() => this.setState({ isEditMedia: false }), 300);
    }

    editBasicInfo = () => {
        setTimeout(() => this.setState({ isEditBasicInfo: true }), 300);
    }

    cancelEditBasicInfo = () => {
        this.getUpdatedData();
        setTimeout(() => this.setState({ isEditBasicInfo: false }), 300);
    }

    editSummary = () => {
        setTimeout(() => this.setState({ isEditSummary: true }), 300);
    }

    cancelEditSummary = () => {
        this.getUpdatedData();
        setTimeout(() => this.setState({ isEditSummary: false }), 300);
    }

    editPost = () => {
        setTimeout(() => this.setState({ isEditPost: true }), 300);
    }

    cancelEditPost = () => {
        this.props.getEmployerPost(this.props.userId, 0);
        setTimeout(() => this.setState({ isEditPost: false }), 300);
    }

    saveEmployerInfo = () => {
        //        let name = document.getElementById("name").value;
        let website = document.getElementById("website").value;
        let data = {
            "user_id": this.props.userId,
            "name": this.props.companyName,
            "website": website,
        }
        this.props.updateEmployerInfo(data);
        this.handleUpload();
        this.getUpdatedData();
        this.cancelEditInfo();
    }

    saveSocialMedia = () => {
        let linkedin = document.getElementById("linkedin").value;
        let facebook = document.getElementById("facebook").value;
        let twitter = document.getElementById("twitter").value;
        if (((!linkedin.toLowerCase().includes("linkedin")) && (linkedin != "")) || ((!twitter.toLowerCase().includes("twitter")) && (twitter != ""))) {
            alert("Please Enter Correct URL");
        } else {
            let data = {
                "user_id": this.props.userId,
                "linkedin": linkedin,
                "facebook": facebook,
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
        let email = document.getElementById("contactEmail").value;
        let data = {
            "user_id": this.props.userId,
            "company_type": companyType,
            "contactEmail": email,
            "location": location,
            "company_size": (this.state.companySize.value == null || this.state.companySize.value == "") ? this.props.employerProfileDetail.company_size : this.state.companySize.value,
        }
        this.props.updateEmployerBasicInfo(data);
        this.getUpdatedData();
        this.cancelEditBasicInfo();
    }

    saveSummary = () => {
        let data = {
            "user_id": this.props.userId,
            "summary": this.state.overview.toString('html'),
        };
        this.props.updateEmployerSummary(data);
        this.getUpdatedData();
        this.cancelEditSummary()
    }

    onUploadFinish = () => {
        var fakeName = this.state.fakeName;
        var logo_url = "https://hirebeat-employer-logo.s3.amazonaws.com/" + fakeName;

        // insert MetaData to profile table
        const metaData = {
            user_id: this.props.userId,
            logo_url: logo_url,
        };
        this.props.updateEmployerLogo(metaData);
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

    alert = (title, message) => {
        confirmAlert({
            title: title,
            message: message,
            buttons: [
                {
                    label: 'Ok'
                }
            ]
        });
    }

    render() {
        return (
            <React.Fragment>
                <div className="profile-container">
                    <div className="row" style={{ marginBottom: "30px" }}>
                        <div className="ml-2"><h3><b><i className="bx-fw bx bxs-dashboard ard"></i><span className="ml-2">Dashboard</span></b></h3></div>
                        <div><h3><b>
                            {this.props.profile.membership == "Premium" ?
                                <div style={{ marginLeft: "1.4rem", marginRight: "1.4rem" }}>
                                    {this.props.profile.plan_interval == "Pro" ?
                                        <div className="row">
                                            <div style={{ borderColor: "#fac046", borderWidth: "2px", borderRadius: "5px", borderStyle: "solid" }}>
                                                <p style={{ color: "#fac046", fontSize: "14px", paddingLeft: "3px", paddingRight: "3px" }}>
                                                    <i className="bx-fw bx bx-diamond bx-xs"></i><span>Pro</span>
                                                </p>
                                            </div>
                                            <Link to="/employer-pricing" style={{ textDecoration: "none", marginLeft: "1rem" }}><p style={{ color: "#fac046", fontSize: "14px" }}>Upgrade</p></Link>
                                        </div> :
                                        <div className="row">
                                            <div style={{ borderColor: "#FF6B00", borderWidth: "2px", borderRadius: "5px", borderStyle: "solid" }}>
                                                <p style={{ color: "#FF6B00", fontSize: "14px", paddingLeft: "3px", paddingRight: "3px"}}>
                                                    <i className="bx-fw bx bx-diamond bx-xs"></i><span>Premium</span>
                                                </p>
                                            </div>
                                            {this.props.profile.is_freetrial && 
                                            <p className="ml-2">Free trial ends in {parseInt((new Date(this.props.profile.datejoined).getDate()+14) - (new Date().getDate()))>=0?parseInt((new Date(this.props.profile.datejoined).getDate()+14) - (new Date().getDate())):"0"} days</p>}
                                        </div>}
                                </div> :
                                <div style={{ marginLeft: "1.4rem", marginRight: "1.4rem" }}>
                                    {this.props.profile.is_subreviwer ?
                                        <div>
                                            <div className="row">
                                                <div style={{ borderColor: "#7D7D7D", borderWidth: "2px", borderRadius: "5px", borderStyle: "solid" }}>
                                                    <p style={{ color: "#7D7D7D", fontSize: "14px", paddingLeft: "3px", paddingRight: "3px" }}>Sub-Reviewer</p>
                                                </div>
                                            </div>
                                        </div> :
                                        <div>
                                            <div className="row" style={{ width: "20rem" }}>
                                                <div style={{ borderColor: "#7D7D7D", borderWidth: "2px", borderRadius: "5px", borderStyle: "solid" }}>
                                                    <p style={{ color: "#7D7D7D", fontSize: "14px", paddingLeft: "3px", paddingRight: "3px" }}>Expired</p>
                                                </div>
                                                <Link to="/employer-pricing" style={{ textDecoration: "none", marginLeft: "1rem" }}><p style={{ color: "#fac046", fontSize: "14px" }}>Upgrade</p></Link>
                                            </div>
                                        </div>}
                                </div>}
                        </b></h3></div>
                    </div>
                    <div className="row">
                        <div className="col-5">
                            {/* Personal Information */}
                            <div className="profile-bg" style={{ textAlign: "left" }}>
                                <div style={{ padding: "2rem" }}>
                                    {!this.state.isEditInfo ?
                                        <div className="row">
                                            <div className="col-3">
                                                {(this.props.employerProfileDetail.logo_url !== null && this.props.employerProfileDetail.logo_url !== "") ?
                                                    <img src={this.props.employerProfileDetail.logo_url} /> :
                                                    <img src="https://hirebeat-assets.s3.amazonaws.com/User-dash/bxs-user-circle-2.png" />
                                                }
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
                                                        <div style={{ float: "right" }}>
                                                            <i className="bx bx-edit-alt"></i>
                                                            <span onClick={this.editInfo} style={{ marginLeft: "0.5rem", cursor: "pointer" }}>Edit</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="profile-p">
                                                    {(this.props.employerProfileDetail.website !== null && this.props.employerProfileDetail.website !== "") ? this.props.employerProfileDetail.website : "Company Website"}
                                                </p>
                                            </div>
                                        </div> :
                                        <div>
                                            <div className="row">
                                                <div className="col-7">
                                                    <h3 className="profile-h3">Information</h3>
                                                </div>
                                                <div className="col-5 profile-edit">
                                                    <div style={{ float: "right" }}>
                                                        <span style={{ cursor: "pointer" }} onClick={this.cancelEditInfo}>Cancel</span>
                                                        <span onClick={this.saveEmployerInfo} style={{ marginLeft: "1rem", cursor: "pointer" }}>Save</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*<div>
                                                <p className="profile-p" style={{margin: "0rem"}}>Company Name</p>
                                                <input id="name" className="profile-input profile-p" defaultValue={this.props.employerProfileDetail.name} style={{width: "100%"}}></input>
                                            </div>*/}
                                            <div style={{ marginTop: "1rem" }}>
                                                <p className="profile-p" style={{ margin: "0rem" }}>Company Website</p>
                                                <textarea id="website" className="profile-input profile-p" style={{ width: "100%" }} defaultValue={this.props.employerProfileDetail.website}></textarea>
                                            </div>
                                            <div>
                                                <p className="profile-p" style={{ margin: "0rem" }}>Company Logo</p>
                                                <Avatar
                                                    imageWidth={205}
                                                    width={285}
                                                    height={200}
                                                    onCrop={this.onCrop}
                                                    onClose={this.onClose}
                                                    onBeforeFileLoad={this.onBeforeFileLoad}
                                                    mimeTypes={"image/jpeg,image/png,image/jpg"}
                                                />
                                                {/*<img src={this.state.preview} alt="Preview" />*/}
                                            </div>
                                            <ReactS3Uploader
                                                style={{ display: "none" }}
                                                id="uploadFile"
                                                accept="image/jpeg,image/png,image/jpg"
                                                signingUrl="/upload-employer-logo"
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
                                        </div>
                                    }
                                </div>
                            </div>

                            {/* Summary */}
                            <div className="profile-bg" style={{ textAlign: "left", marginTop: "2rem" }}>
                                <div style={{ padding: "2rem" }}>
                                    {!this.state.isEditSummary ?
                                        <div>
                                            <div className="row">
                                                <div className="col-8">
                                                    <h3 className="profile-h3">Company Overview
                                                        <span className="tool_tip ml-2">
                                                            <i class='bx-fw bx bxs-info-circle' style={{ color: "#dfdfdf" }}></i>
                                                            <p className="tool_submenu container" style={{ width: "14rem" }}>
                                                                <div>
                                                                    Company Overview will appear on the top section of your Job Posting.
                                                                </div>
                                                            </p>
                                                        </span>
                                                    </h3>
                                                </div>
                                                <div className="col-4 profile-edit">
                                                    <div style={{ float: "right" }}>
                                                        <i className="bx bx-edit-alt"></i>
                                                        <span onClick={this.editSummary} style={{ marginLeft: "0.5rem", cursor: "pointer" }}>Edit</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="profile-p4">
                                                {(this.props.employerProfileDetail.summary !== null && this.props.employerProfileDetail.summary !== "") ?
                                                    parse("" + this.props.employerProfileDetail.summary + "") : "Company Overview Here"}
                                            </p>
                                        </div> :
                                        <div>
                                            <div className="row">
                                                <div className="col-7">
                                                    <h3 className="profile-h3">Company Overview</h3>
                                                </div>
                                                <div className="col-5 profile-edit">
                                                    <div style={{ float: "right" }}>
                                                        <span style={{ cursor: "pointer" }} onClick={this.cancelEditSummary}>Cancel</span>
                                                        <span onClick={this.saveSummary} style={{ marginLeft: "1rem", cursor: "pointer" }}>Save</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <RichTextEditor
                                                value={this.state.overview}
                                                onChange={this.onChange}
                                                toolbarConfig={toolbarConfig}
                                            />
                                        </div>
                                    }
                                </div>
                            </div>

                            {/* Social Media */}
                            <div className="profile-bg" style={{ textAlign: "left", marginTop: "2rem" }}>
                                <div style={{ padding: "2rem" }}>
                                    {!this.state.isEditMedia ?
                                        <div>
                                            <div className="row">
                                                <div className="col-8">
                                                    <h3 className="profile-h3">Social Media
                                                        <span className="tool_tip ml-2">
                                                            <i class='bx-fw bx bxs-info-circle' style={{ color: "#dfdfdf" }}></i>
                                                            <p className="tool_submenu container" style={{ width: "14rem" }}>
                                                                <div>
                                                                    Social Media links will appear on your company branding page.
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
                                                    <p className="profile-p3" style={{ display: "flex", alignItems: "center" }}>
                                                        LinkedIn <i class='bx bxl-linkedin-square' style={{ color: "#67A3F3" }}></i>
                                                    </p>
                                                </div>
                                                <div className="col-8">
                                                    <p className="profile-p4" style={{ wordBreak: "break-word" }}>
                                                        {(this.props.employerProfileDetail.linkedin !== null && this.props.employerProfileDetail.linkedin !== "") ? this.props.employerProfileDetail.linkedin : "Link to your LinkedIn"}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-4">
                                                    <p className="profile-p3" style={{ display: "flex", alignItems: "center" }}>
                                                        Facebook <i class='bx bxl-facebook-square' style={{ color: "#67A3F3" }}></i>
                                                    </p>
                                                </div>
                                                <div className="col-8">
                                                    <p className="profile-p4" style={{ wordBreak: "break-word" }}>
                                                        {(this.props.employerProfileDetail.facebook !== null && this.props.employerProfileDetail.facebook !== "") ? this.props.employerProfileDetail.facebook : "Link to your facebook"}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-4">
                                                    <p className="profile-p3" style={{ display: "flex", alignItems: "center" }}>
                                                        Twitter <i class='bx bxl-twitter' style={{ color: "#67A3F3" }}></i>
                                                    </p>
                                                </div>
                                                <div className="col-8">
                                                    <p className="profile-p4" style={{ wordBreak: "break-word" }}>
                                                        {(this.props.employerProfileDetail.twitter !== null && this.props.employerProfileDetail.twitter !== "") ? this.props.employerProfileDetail.twitter : "Link to your Twitter"}
                                                    </p>
                                                </div>
                                            </div>
                                        </div> :
                                        <div>
                                            <div className="row">
                                                <div className="col-7">
                                                    <h3 className="profile-h3">Social Media</h3>
                                                </div>
                                                <div className="col-5 profile-edit">
                                                    <div style={{ float: "right" }}>
                                                        <span style={{ cursor: "pointer" }} onClick={this.cancelEditMedia}>Cancel</span>
                                                        <span onClick={this.saveSocialMedia} style={{ marginLeft: "1rem", cursor: "pointer" }}>Save</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <p className="profile-p3" style={{ margin: "0rem" }}>LinkedIn <i class='bx bxl-linkedin-square' style={{ color: "#090D3A" }}></i></p>
                                                <input id="linkedin" className="profile-input profile-p4" style={{ width: "100%" }} defaultValue={this.props.employerProfileDetail.linkedin}></input>
                                            </div>
                                            <div style={{ marginTop: "1rem" }}>
                                                <p className="profile-p3" style={{ margin: "0rem" }}>Facebook <i class='bx bxl-facebook-square' style={{ color: "#090D3A" }}></i></p>
                                                <input id="facebook" className="profile-input profile-p4" style={{ width: "100%" }} defaultValue={this.props.employerProfileDetail.facebook}></input>
                                            </div>
                                            <div style={{ marginTop: "1rem" }}>
                                                <p className="profile-p3" style={{ margin: "0rem" }}>Twitter <i class='bx bxl-twitter' style={{ color: "#090D3A" }}></i></p>
                                                <input id="twitter" className="profile-input profile-p4" style={{ width: "100%" }} defaultValue={this.props.employerProfileDetail.twitter}></input>
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>

                            {/* Basic info */}
                            <div className="profile-bg" style={{ textAlign: "left", marginTop: "2rem" }}>
                                <div style={{ padding: "2rem" }}>
                                    {!this.state.isEditBasicInfo ?
                                        <div>
                                            <div className="row">
                                                <div className="col-8">
                                                    <h3 className="profile-h3">Basic Info
                                                        <span className="tool_tip ml-2">
                                                            <i class='bx-fw bx bxs-info-circle' style={{ color: "#dfdfdf" }}></i>
                                                            <p className="tool_submenu container" style={{ width: "14rem" }}>
                                                                <div>
                                                                    Company basic information will appear on your company branding page.
                                                                </div>
                                                            </p>
                                                        </span>
                                                    </h3>
                                                </div>
                                                <div className="col-4 profile-edit">
                                                    <div style={{ float: "right" }}>
                                                        <i className="bx bx-edit-alt"></i>
                                                        <span onClick={this.editBasicInfo} style={{ marginLeft: "0.5rem", cursor: "pointer" }}>Edit</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <p className="profile-p3" style={{ margin: "0rem" }}>Location</p>
                                                <p className="profile-p4">
                                                    {(this.props.employerProfileDetail.location !== null && this.props.employerProfileDetail.location !== "") ? this.props.employerProfileDetail.location : "Company Location"}
                                                </p>
                                            </div>
                                            <div style={{ marginTop: "1rem" }}>
                                                <p className="profile-p3" style={{ margin: "0rem" }}>Company Size</p>
                                                <p className="profile-p4">
                                                    {(this.props.employerProfileDetail.company_size !== null && this.props.employerProfileDetail.company_size !== "") ? this.props.employerProfileDetail.company_size : "Employees"}
                                                </p>
                                            </div>
                                            <div style={{ marginTop: "1rem" }}>
                                                <p className="profile-p3" style={{ margin: "0rem" }}>Industry</p>
                                                <p className="profile-p4">
                                                    {(this.props.employerProfileDetail.company_type !== null && this.props.employerProfileDetail.company_type !== "") ? this.props.employerProfileDetail.company_type : "Company Field"}
                                                </p>
                                            </div>
                                            <div style={{ marginTop: "1rem" }}>
                                                <p className="profile-p3" style={{ margin: "0rem" }}>Contact Email</p>
                                                <p className="profile-p4">
                                                    {(this.props.employerProfileDetail.email !== null && this.props.employerProfileDetail.email !== "") ? this.props.employerProfileDetail.email : "Company Email"}
                                                </p>
                                            </div>
                                        </div> :
                                        <div>
                                            <div className="row">
                                                <div className="col-7">
                                                    <h3 className="profile-h3">Basic Info</h3>
                                                </div>
                                                <div className="col-5 profile-edit">
                                                    <div style={{ float: "right" }}>
                                                        <span style={{ cursor: "pointer" }} onClick={this.cancelEditBasicInfo}>Cancel</span>
                                                        <span onClick={this.saveCompanyInfo} style={{ marginLeft: "1rem", cursor: "pointer" }}>Save</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <p className="profile-p3" style={{ margin: "0rem" }}>Location</p>
                                                <input id="location" className="profile-input profile-p4" style={{ width: "100%" }} defaultValue={this.props.employerProfileDetail.location}></input>
                                            </div>
                                            <div style={{ marginTop: "1rem" }}>
                                                <p className="profile-p3" style={{ margin: "0rem" }}>Company Size</p>
                                                <Select value={this.state.companySize} defaultValue={this.props.employerProfileDetail.company_size} onChange={this.onFilter} options={this.options} styles={this.customStyles} />
                                            </div>
                                            <div style={{ marginTop: "1rem" }}>
                                                <p className="profile-p3" style={{ margin: "0rem" }}>Industry</p>
                                                <input id="companyType" className="profile-input profile-p4" style={{ width: "100%" }} defaultValue={this.props.employerProfileDetail.company_type}></input>
                                            </div>
                                            <div style={{ marginTop: "1rem" }}>
                                                <p className="profile-p3" style={{ margin: "0rem" }}>Contact Email</p>
                                                <input id="contactEmail" className="profile-input profile-p4" style={{ width: "100%" }} defaultValue={this.props.employerProfileDetail.email}></input>
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>

                        {/* Right Part */}
                        <div className="col-6" style={{ marginLeft: "2rem" }}>
                            {/* Video */}
                            <div className="profile-bg" style={{ textAlign: "left" }}>
                                <Video
                                    updateEmployerVideo={this.props.updateEmployerVideo}
                                    userId={this.props.userId}
                                    videoURL={this.props.employerProfileDetail.video_url}
                                    setVideo={this.setVideo}
                                    getUpdatedData={this.getUpdatedData}
                                />
                            </div>

                            {/* Post */}
                            <div className="profile-bg" style={{ textAlign: "left", marginTop: "2rem" }}>
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