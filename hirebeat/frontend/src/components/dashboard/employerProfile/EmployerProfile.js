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
import Autocomplete from "react-google-autocomplete";
import { IndustryOptions } from "./../../accounts/Constants";
import { MyModalShare } from "../DashboardComponents";

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
        companySize: { value: this.props.employerProfileDetail.company_size, label: this.props.employerProfileDetail.company_size },
        location: "",
        industry: { value: this.props.employerProfileDetail.company_type, label: this.props.employerProfileDetail.company_type },
        src: (this.props.employerProfileDetail.logo_url == null || this.props.employerProfileDetail.logo_url == "") ? "" : this.props.employerProfileDetail.logo_url,
        method_pop1: false,
        method_pop2: false,
    }

    customStyles = {
        control: styles => ({ ...styles, backgroundColor: '#ffffff' }),
        singleValue: styles => ({
            ...styles,
            color: '#4a6f8a',
            fontSize: '0.9375rem',
            fontFamily: 'Inter,Segoe UI, sans-serif',
            fontWeight: '500'
        }),
        menuPortal: provided => ({ ...provided, zIndex: 99 }),
        menu: provided => ({ ...provided, zIndex: 99 })
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

    selectIndustry = (industry) => {
        this.setState({ industry: industry });
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
        if (this.state.preview != null && this.state.preview != "") {
            this.handleUpload();
        }
        setTimeout(() => { this.getUpdatedData(); this.getUpdatedData() }, 300);
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
            setTimeout(() => { this.getUpdatedData() }, 300);
            this.cancelEditMedia();
        }
    }

    saveCompanyInfo = () => {
        let location = this.state.location;
        let email = document.getElementById("contactEmail").value;
        let data = {
            "user_id": this.props.userId,
            "company_type": this.state.industry.value,
            "contactEmail": email,
            "location": location,
            "company_size": (this.state.companySize.value == null || this.state.companySize.value == "") ? this.props.employerProfileDetail.company_size : this.state.companySize.value,
        }
        this.props.updateEmployerBasicInfo(data);
        setTimeout(() => { this.getUpdatedData() }, 300);
        this.cancelEditBasicInfo();
    }

    saveSummary = () => {
        let data = {
            "user_id": this.props.userId,
            "summary": this.state.overview.toString('html'),
        };
        this.props.updateEmployerSummary(data);
        setTimeout(() => { this.getUpdatedData() }, 300);
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
        this.setState({
            src: logo_url
        });
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

    handleLocation = (location) => {
        this.setState({ location: location });
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

    openMethod1 = () => {
        this.setState({ method_pop1: true });
    }

    openMethod2 = () => {
        this.setState({ method_pop2: true });
    }

    hideMethod1 = () => {
        this.setState({ method_pop1: false });
    }

    hideMethod2 = () => {
        this.setState({ method_pop2: false });
    }

    render() {
        return (
            <React.Fragment>
                <div className="profile-container">
                    <div className="row" style={{ marginBottom: "30px" }}>
                        <div className="ml-2"><h3><b style={{color:"#090d3a", fontSize:"1.2rem"}}><i className="bx-fw bx bxs-dashboard ard"></i><span className="ml-2">Company</span></b></h3></div>
                        <div><h3><b>
                            {this.props.profile.membership == "Premium" ?
                                <div style={{ marginLeft: "1.4rem", marginRight: "1.4rem" }}>
                                    {this.props.profile.plan_interval == "Pro" ?
                                        <div className="row">
                                            <div style={{ borderColor: "#fac046", borderWidth: "2px", borderRadius: "5px", borderStyle: "solid" }}>
                                                <p style={{ color: "#fac046", fontSize: "14px", paddingLeft: "3px", paddingRight: "3px" }}>
                                                    <i className="bx-fw bx bx-diamond bx-xs"></i>
                                                    {this.props.profile.position_limit == 5 &&
                                                        <span>Pro</span>}
                                                    {this.props.profile.position_limit == 1 &&
                                                        <span>Basic Plan</span>}
                                                    {this.props.profile.position_limit == 10 &&
                                                        <span>Pro Plus</span>}
                                                    {this.props.profile.position_limit == 50 &&
                                                        <span>Premium Lite</span>}
                                                </p>
                                            </div>
                                        </div> :
                                        <div className="row">
                                            <div style={{ borderColor: "#FF6B00", borderWidth: "2px", borderRadius: "5px", borderStyle: "solid" }}>
                                                <p style={{ color: "#FF6B00", fontSize: "14px", paddingLeft: "3px", paddingRight: "3px" }}>
                                                    <i className="bx-fw bx bx-diamond bx-xs"></i><span>Premium</span>
                                                </p>
                                            </div>
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
                                                    <p style={{ color: "#7D7D7D", fontSize: "14px", paddingLeft: "3px", paddingRight: "3px" }}>Free</p>
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
                                                        <h3 className="profile-h3" style={{ fontSize: '1.5rem' }}>
                                                            {this.props.companyName}
                                                            {/* (this.props.employerProfileDetail.name !== null && this.props.employerProfileDetail.name !== "") ? this.props.employerProfileDetail.name : "Company Name Here" */}
                                                        </h3>
                                                    </div>
                                                    <div className="col-4 profile-edit">
                                                        <div style={{ float: "right" }}>
                                                            <i onClick={this.editInfo} style={{ cursor: "pointer", color: "#7e8993" }} className="bx bx-edit-alt"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="profile-p" style={{ marginTop: "-0.8rem", color: "#7e8993" }}>
                                                    {(this.props.employerProfileDetail.website !== null && this.props.employerProfileDetail.website !== "") ? this.props.employerProfileDetail.website : "Company Website"}
                                                </p>
                                                <h3 className="profile-h3" style={{ fontSize: "1rem", marginBottom: "-0.1rem" }}>Job Portal</h3>
                                                <a className="profile-p" style={{ color: "#006dff" }} target="_blank" href={"https://app.hirebeat.co/company-branding/" + this.props.profile.company_name}>https://app.hirebeat.co/company-branding/{this.props.profile.company_name}<i class='bx-fw bx bx-link-external bx-xs'></i></a>
                                            </div>
                                        </div> :
                                        <div>
                                            <div className="row">
                                                <div className="col-12">
                                                    <h3 className="profile-h3">Information</h3>
                                                </div>
                                            </div>
                                            {/*<div>
                                                <p className="profile-p" style={{margin: "0rem"}}>Company Name</p>
                                                <input id="name" className="profile-input profile-p" defaultValue={this.props.employerProfileDetail.name} style={{width: "100%"}}></input>
                                            </div>*/}
                                            <div style={{ marginTop: "1rem" }}>
                                                <p className="profile-p" style={{ margin: "0rem" }}>Company Website</p>
                                                <textarea id="website" className="profile-input profile-p" style={{ width: "100%", border: "1px solid #7E8993", borderRadius: "3px", paddingLeft: "0.5rem" }} defaultValue={this.props.employerProfileDetail.website}></textarea>
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
                                                    src={this.state.src}
                                                />
                                                {/*<img src={this.state.preview} alt="Preview" />*/}
                                            </div>
                                            <div className="d-flex justify-content-end mt-3">
                                                <button className="default-btn" onClick={this.saveEmployerInfo} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "5px", paddingBottom: "5px" }}>Save</button>
                                                <button className="default-btn" onClick={this.cancelEditInfo} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "5px", paddingBottom: "5px", backgroundColor: "#c4c4c4", marginLeft: "0.5rem" }}>Cancel</button>
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

                            {/* Widget and URL */}
                            <div className="row" style={{ marginTop: "2rem" }}>
                                <div className="col-6">
                                    <div className="profile-bg" style={{ textAlign: "center" }}>
                                        <div style={{ padding: "2rem" }}>
                                            <div className="row">
                                                <div className="col">
                                                    <h3 className="profile-h3" style={{ fontSize: "0.9rem", fontWeight: "bold" }}>Method 1 - Careers Widget</h3>
                                                    <p className="profile-p" style={{ fontSize: "0.8rem", fontWeight: "normal", marginTop: "0.6rem" }}>Auto updating job list added to a dedicated page on your website, such as your careers page.</p>
                                                    <button className="default-btn" style={{ paddingLeft: "25px" }} onClick={this.openMethod1}>View Details</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="profile-bg" style={{ textAlign: "center" }}>
                                        <div style={{ padding: "2rem" }}>
                                            <div className="row">
                                                <div className="col">
                                                    <h3 className="profile-h3" style={{ fontSize: "0.9rem" }}>Method 2 - Website Link</h3>
                                                    <p className="profile-p" style={{ fontSize: "0.8rem", fontWeight: "normal", marginTop: "0.6rem" }}>Add a simple link to your HireBeat Job Portal from your website, such as in the header or footer.</p>
                                                    <button className="default-btn" style={{ paddingLeft: "25px" }} onClick={this.openMethod2}>View Details</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
                                                        <i className="bx bx-edit-alt" onClick={this.editMedia} style={{ cursor: "pointer", color: "#7e8993" }}></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row mt-2">
                                                <div className="col-4">
                                                    <p className="profile-p3" style={{ display: "flex", alignItems: "center" }}>
                                                        LinkedIn <i class='bx bxl-linkedin-square' style={{ color: "#006dff" }}></i>
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
                                                        Facebook <i class='bx bxl-facebook-square' style={{ color: "#006dff" }}></i>
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
                                                        Twitter <i class='bx bxl-twitter' style={{ color: "#006dff" }}></i>
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
                                                <div className="col-12">
                                                    <h3 className="profile-h3">Social Media</h3>
                                                </div>
                                            </div>
                                            <div>
                                                <p className="profile-p3" style={{ margin: "0rem" }}>LinkedIn <i class='bx-fw bx bxl-linkedin-square' style={{ color: "#090D3A" }}></i></p>
                                                <input id="linkedin" className="profile-input profile-p4" style={{ width: "100%", border: "1px solid #7E8993", borderRadius: "3px", paddingLeft: "0.5rem" }} defaultValue={this.props.employerProfileDetail.linkedin}></input>
                                            </div>
                                            <div style={{ marginTop: "1rem" }}>
                                                <p className="profile-p3" style={{ margin: "0rem" }}>Facebook <i class='bx-fw bx bxl-facebook-square' style={{ color: "#090D3A" }}></i></p>
                                                <input id="facebook" className="profile-input profile-p4" style={{ width: "100%", border: "1px solid #7E8993", borderRadius: "3px", paddingLeft: "0.5rem" }} defaultValue={this.props.employerProfileDetail.facebook}></input>
                                            </div>
                                            <div style={{ marginTop: "1rem" }}>
                                                <p className="profile-p3" style={{ margin: "0rem" }}>Twitter <i class='bx-fw bx bxl-twitter' style={{ color: "#090D3A" }}></i></p>
                                                <input id="twitter" className="profile-input profile-p4" style={{ width: "100%", border: "1px solid #7E8993", borderRadius: "3px", paddingLeft: "0.5rem" }} defaultValue={this.props.employerProfileDetail.twitter}></input>
                                            </div>
                                            <div className="d-flex justify-content-end mt-3">
                                                <button className="default-btn" onClick={this.saveSocialMedia} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "5px", paddingBottom: "5px" }}>Save</button>
                                                <button className="default-btn" onClick={this.cancelEditMedia} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "5px", paddingBottom: "5px", backgroundColor: "#c4c4c4", marginLeft: "0.5rem" }}>Cancel</button>
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
                                                        <i className="bx bx-edit-alt" onClick={this.editBasicInfo} style={{ cursor: "pointer", color: "#7e8993" }}></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-2">
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
                                                <div className="col-12">
                                                    <h3 className="profile-h3">Basic Info</h3>
                                                </div>
                                            </div>
                                            <div>
                                                <p className="profile-p3" style={{ margin: "0rem" }}>Location</p>
                                                <Autocomplete
                                                    className="profile-input profile-p4"
                                                    style={{ width: "100%", border: "1px solid #7E8993", borderRadius: "3px", height: '2.5rem', paddingLeft: "0.5rem" }}
                                                    language="en"
                                                    apiKey={"AIzaSyDEplgwaPXJn38qEEnE5ENlytHezUfq56U"}
                                                    onPlaceSelected={(place, inputRef, autocomplete) => {
                                                        this.handleLocation(place.formatted_address);
                                                    }}
                                                    defaultValue={this.props.employerProfileDetail.location}
                                                />
                                            </div>
                                            <div style={{ marginTop: "1rem" }}>
                                                <p className="profile-p3" style={{ margin: "0rem" }}>Company Size</p>
                                                <Select value={this.state.companySize} onChange={this.onFilter} options={this.options} styles={this.customStyles} placeholder={'Enter Company Size'} />
                                            </div>
                                            <div style={{ marginTop: "1rem" }}>
                                                <p className="profile-p3" style={{ margin: "0rem" }}>Industry</p>
                                                <Select value={this.state.industry} onChange={this.selectIndustry} options={IndustryOptions} styles={this.customStyles} placeholder={'Enter Company Industry'} />
                                            </div>
                                            <div style={{ marginTop: "1rem" }}>
                                                <p className="profile-p3" style={{ margin: "0rem" }}>Contact Email</p>
                                                <input id="contactEmail" className="profile-input profile-p4" style={{ width: "100%", border: "1px solid #7E8993", borderRadius: "3px", height: '2.5rem', paddingLeft: "0.5rem" }} defaultValue={this.props.employerProfileDetail.email}></input>
                                            </div>
                                            <div className="d-flex justify-content-end mt-3">
                                                <button className="default-btn" onClick={this.saveCompanyInfo} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "5px", paddingBottom: "5px" }}>Save</button>
                                                <button className="default-btn" onClick={this.cancelEditBasicInfo} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "5px", paddingBottom: "5px", backgroundColor: "#c4c4c4", marginLeft: "0.5rem" }}>Cancel</button>
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>

                        {/* Right Part */}
                        <div className="col-6" style={{ marginLeft: "2rem" }}>

                            {/* Summary */}
                            <div className="profile-bg" style={{ textAlign: "left" }}>
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
                                                        <i className="bx bx-edit-alt" onClick={this.editSummary} style={{ cursor: "pointer", color: "#7e8993" }}></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="profile-p4 mt-3" style={{ fontWeight: "400" }}>
                                                {(this.props.employerProfileDetail.summary !== null && this.props.employerProfileDetail.summary !== "") ?
                                                    parse("" + this.props.employerProfileDetail.summary + "") : "Company Overview Here"}
                                            </p>
                                        </div> :
                                        <div>
                                            <div className="row">
                                                <div className="col-12">
                                                    <h3 className="profile-h3">Company Overview</h3>
                                                </div>
                                            </div>
                                            <RichTextEditor
                                                value={this.state.overview}
                                                onChange={this.onChange}
                                                toolbarConfig={toolbarConfig}
                                            />
                                            <div className="d-flex justify-content-end mt-3">
                                                <button className="default-btn" onClick={this.saveSummary} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "5px", paddingBottom: "5px" }}>Save</button>
                                                <button className="default-btn" onClick={this.cancelEditSummary} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "5px", paddingBottom: "5px", backgroundColor: "#c4c4c4", marginLeft: "0.5rem" }}>Cancel</button>
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>

                            {/* Video */}
                            <div className="profile-bg" style={{ textAlign: "left", marginTop: "2rem" }}>
                                <Video
                                    updateEmployerVideo={this.props.updateEmployerVideo}
                                    userId={this.props.userId}
                                    videoURL={this.props.employerProfileDetail.video_url}
                                    setVideo={this.setVideo}
                                    getUpdatedData={this.getUpdatedData}
                                />
                            </div>

                            {/* Post */}
                            {/* <div className="profile-bg" style={{ textAlign: "left", marginTop: "2rem" }}>
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
                            </div> */}
                        </div>
                    </div>
                </div>
                <MyModalShare
                    show={this.state.method_pop1}
                    onHide={() => { this.hideMethod1() }}
                >
                    <div class="container p-4" style={{ textAlign: 'left' }}>
                        <h3 className="profile-h3" style={{ marginBottom: "2rem" }}>Method 1 - Careers Widget</h3>
                        <p className="profile-p5" style={{ fontSize: "0.8rem" }}>The career widget is a simple list of your jobs embeded on a dedicated page on your website, such as your career page. All you’ll need is access to the content Management System (CMS) of your website, then follow these steps:</p>
                        <ol style={{ color: "#090d3a", fontSize: "0.9rem", fontWeight: 'normal', fontFamily: "Inter, Segoe UI" }}>
                            <li className="pb-2">Access the HTML on the webpage where you want the jobs to display.</li>
                            <li className="pb-2">Copy the code snippet from the box below and paste it within your HTML where you want the job list to display.</li>
                            <li>Preview the page and publish.</li>
                        </ol>
                        <div className="profile-bg p-3" style={{ textAlign: "center", backgroundColor: "#F3F6F9" }}>
                            <p style={{ fontSize: "0.8rem", color: "#4f5e74" }}>{'<div '}<span style={{ color: "#009E7F" }}>class</span>=<span style={{ color: "#FF6B00" }}>"hirebeat-widget-job"</span><span style={{ color: "#009E7F" }}> data-company</span>=<span style={{ color: "#FF6B00" }}>"{(window?.btoa(this.props.companyName))}"</span>{'></div>'}</p>
                            <p style={{ fontSize: "0.8rem", color: "#4f5e74" }}>{'<script '}<span style={{ color: "#009E7F" }}>src</span>=<span style={{ color: "#FF6B00" }}>"https://classy-starburst-42df27.netlify.app/index.js"</span>{'></script>'}</p>
                            <p style={{ fontSize: "0.8rem", color: "#4f5e74" }}>{'<link '}<span style={{ color: "#009E7F" }}>href</span>=<span style={{ color: "#FF6B00" }}>"https://classy-starburst-42df27.netlify.app/index.css"</span><span style={{ color: "#009E7F" }}> rel</span>=<span style={{ color: "#FF6B00" }}>"stylesheet"</span>{'/>'}</p>
                        </div>
                    </div>
                </MyModalShare>
                <MyModalShare
                    show={this.state.method_pop2}
                    onHide={() => { this.hideMethod2() }}
                >
                    <div class="container p-4" style={{ textAlign: 'left' }}>
                        <h3 className="profile-h3" style={{ marginBottom: "2rem" }}>Method 2 - Job Portal Website Link</h3>
                        <p className="profile-p5" style={{ fontSize: "0.8rem" }}>Add a link to an existing page or website header/footer to directly link to your HireBeat Job Portal. This is a simple way of getting your jobs linked from your website, giving potential candidates a streamlined application process, and maximizing your reach to new applicants.</p>
                        <p className="profile-p5" style={{ fontSize: "0.8rem" }}>First, you will need access to the Content Management System (CMS) of your website, then, follow these steps:</p>
                        <ol style={{ color: "#090d3a", fontSize: "0.9rem", fontWeight: 'normal', fontFamily: "Inter, Segoe UI" }}>
                            <li className="pb-2">Type 'Careers', 'We are Hiring', or similar somewhere on the page, ideally the header or footer.</li>
                            <li className="pb-2">Highlight the text and select the option to add a hyperlink</li>
                            <li>Copy the link to your HireBeat Job Portal below and insert this as the hyperlink.</li>
                        </ol>
                        <div className="profile-bg p-3" style={{ textAlign: "center", backgroundColor: "#F3F6F9" }}>
                            <p style={{ fontSize: "0.8rem", color: "#4f5e74" }}>{'<a '}<span style={{ color: "#009E7F" }}>href</span>=<span style={{ color: "#FF6B00" }}>"https://app.hirebeat.co/company-branding/{this.props.companyName}/"</span>{'>Careers</a>'}</p>
                        </div>
                    </div>
                </MyModalShare>
            </React.Fragment>
        )
    };
}

export default EmployerProfile;