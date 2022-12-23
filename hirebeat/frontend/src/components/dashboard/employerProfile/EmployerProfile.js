import React, { Component } from "react";
import Video from "./Video";
// import Post from "./Post";
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
// import { MyModalShare } from "../DashboardComponents";
import { Box, Heading, Text, Textarea, Input, Stack, Spacer, useColorModeValue, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, Tooltip, HStack, Button } from '@chakra-ui/react';
import { FiInfo } from 'react-icons/fi';

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

const customStyles = {
    control: styles => ({ ...styles, background: useColorModeValue("#ffffff", "#1a202c"), borderRadius: "5px" }),
    singleValue: styles => ({
        ...styles,
        color: useColorModeValue("#090d3a", "#ffffff"),
        fontSize: '0.9375rem',
        fontFamily: 'Inter,Segoe UI, sans-serif',
        fontWeight: '500',
        background: useColorModeValue("#ffffff", "#1a202c")
    }),
    menuList: styles => ({
        ...styles,
        backgroundColor: useColorModeValue('#ffffff', '#090d3a'),
        color: useColorModeValue('#090d3a', '#7a7a7a'),
    }),
    indicatorSeparator: styles => ({ ...styles, visibility: "hidden" }),
    menuPortal: provided => ({ ...provided, zIndex: 99 }),
    menu: provided => ({ ...provided, zIndex: 99 })
}

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
                <Box px='24' mt='12' mb='14' alignItems='center'>
                    <div className="row">
                        <Heading as='h5' size='sm' color="muted"><i className="bx-fw bx bxs-dashboard pl-3"></i><span style={{ marginLeft: "1.2rem" }}>Company</span></Heading>
                        <div><h3 style={{ paddingTop: "0.4rem" }}><b>
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
                    <div className="row mt-5">
                        <div className="col-5">
                            {/* Personal Information */}
                            <Box
                                bg="bg-surface"
                                boxShadow='sm'
                                borderRadius="lg"
                                p={{
                                    base: '4',
                                    md: '6',
                                }}
                                textAlign="left"
                            >
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
                                                        <Text fontSize='xl' color="muted">{this.props.companyName}</Text>
                                                    </div>
                                                    <div className="col-4 profile-edit">
                                                        <div style={{ float: "right" }}>
                                                            <i onClick={this.editInfo} style={{ cursor: "pointer", color: "#7e8993" }} className="bx bx-edit-alt"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="profile-p pt-2" style={{ marginTop: "-0.8rem", color: "#7e8993" }}>
                                                    {(this.props.employerProfileDetail.website !== null && this.props.employerProfileDetail.website !== "") ? this.props.employerProfileDetail.website : "Company Website"}
                                                </p>
                                                <Text fontSize='md' color="muted">Job Portal</Text>
                                                <a className="profile-p pt-2 px-2" style={{ color: "#006dff" }} target="_blank" href={"https://app.hirebeat.co/company-branding/" + this.props.profile.company_name}>https://app.hirebeat.co/company-branding/{this.props.profile.company_name}<i class='bx-fw bx bx-link-external bx-xs'></i></a>
                                            </div>
                                        </div> :
                                        <div>
                                            <div className="row">
                                                <div className="col-12">
                                                    <Text fontSize='xl' color="muted">Information</Text>
                                                </div>
                                            </div>
                                            {/*<div>
                                                <p className="profile-p" style={{margin: "0rem"}}>Company Name</p>
                                                <input id="name" className="profile-input profile-p" defaultValue={this.props.employerProfileDetail.name} style={{width: "100%"}}></input>
                                            </div>*/}
                                            <div style={{ marginTop: "1rem" }}>
                                                <Text fontSize='md' color="muted">Company Website</Text>
                                                <Textarea id="website" style={{ width: "100%", border: "1px solid #7E8993", borderRadius: "3px", paddingLeft: "0.5rem" }} defaultValue={this.props.employerProfileDetail.website} />
                                            </div>
                                            <div>
                                                <Text fontSize='md' color="muted">Company Logo</Text>
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
                            </Box>

                            {/* Widget and URL */}
                            <Stack direction='row' style={{ marginTop: "2rem" }}>
                                <Box
                                    bg="bg-surface"
                                    boxShadow='sm'
                                    borderRadius="lg"
                                    p={{
                                        base: '4',
                                        md: '6',
                                    }}
                                    textAlign="center"
                                >
                                    <div style={{ padding: "2rem" }}>
                                        <div className="row">
                                            <div className="col">
                                                <Text fontSize='lg' color="muted" style={{ fontSize: "0.9rem", fontWeight: "bold" }}>Method 1 - Careers Widget</Text>
                                                <Text fontSize='md' style={{ fontSize: "0.8rem", fontWeight: "normal", marginTop: "0.6rem", marginBottom: "0.6rem" }}>Auto updating job list added to a dedicated page on your website, such as your careers page.</Text>
                                                <Button _hover={{ bg: "orange.500" }} colorScheme='blue' onClick={this.openMethod1}>View Details</Button>
                                            </div>
                                        </div>
                                    </div>
                                </Box>
                                <Spacer />
                                <Box
                                    bg="bg-surface"
                                    boxShadow='sm'
                                    borderRadius="lg"
                                    p={{
                                        base: '4',
                                        md: '6',
                                    }}
                                    textAlign="center"
                                >
                                    <div style={{ padding: "2rem" }}>
                                        <div className="row">
                                            <div className="col">
                                                <Text fontSize='lg' color="muted" style={{ fontSize: "0.9rem", fontWeight: "bold" }}>Method 2 - Website Link</Text>
                                                <Text fontSize='md' style={{ fontSize: "0.8rem", fontWeight: "normal", marginTop: "0.6rem", marginBottom: "0.6rem" }}>Add a simple link to your HireBeat Job Portal from your website, such as in the header or footer.</Text>
                                                <Button _hover={{ bg: "orange.500" }} colorScheme='blue' onClick={this.openMethod2}>View Details</Button>
                                            </div>
                                        </div>
                                    </div>
                                </Box>
                            </Stack>

                            {/* Social Media */}
                            <Box
                                bg="bg-surface"
                                boxShadow='sm'
                                borderRadius="lg"
                                p={{
                                    base: '4',
                                    md: '6',
                                }}
                                textAlign="left"
                                mt='8'
                            >
                                <div style={{ padding: "2rem" }}>
                                    {!this.state.isEditMedia ?
                                        <div>
                                            <div className="row">
                                                <div className="col-8">
                                                    <Tooltip label='Social Media links will appear on your company branding page.' aria-label='A tooltip' fontSize='sm'>
                                                        <HStack>
                                                            <Text color="muted" fontSize='xl' fontWeight='bold'>
                                                                Team Review
                                                            </Text>
                                                            <FiInfo style={{ color: "#dfdfdf" }} size='20' />
                                                        </HStack>
                                                    </Tooltip>
                                                </div>
                                                <div className="col-4 profile-edit">
                                                    <div style={{ float: "right" }}>
                                                        <i className="bx bx-edit-alt" onClick={this.editMedia} style={{ cursor: "pointer", color: "#7e8993" }}></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row mt-2 px-2">
                                                <div className="col-4">
                                                    <Text fontSize='md' color="muted" style={{ display: "flex", alignItems: "center" }}>
                                                        LinkedIn <i class='bx bxl-linkedin-square' style={{ color: "#006dff" }}></i>
                                                    </Text>
                                                </div>
                                                <div className="col-8">
                                                    <Text style={{ wordBreak: "break-word" }}>
                                                        {(this.props.employerProfileDetail.linkedin !== null && this.props.employerProfileDetail.linkedin !== "") ? this.props.employerProfileDetail.linkedin : "Link to your LinkedIn"}
                                                    </Text>
                                                </div>
                                            </div>
                                            <div className="row px-2">
                                                <div className="col-4">
                                                    <Text fontSize='md' color="muted" style={{ display: "flex", alignItems: "center" }}>
                                                        Facebook <i class='bx bxl-facebook-square' style={{ color: "#006dff" }}></i>
                                                    </Text>
                                                </div>
                                                <div className="col-8">
                                                    <Text style={{ wordBreak: "break-word" }}>
                                                        {(this.props.employerProfileDetail.facebook !== null && this.props.employerProfileDetail.facebook !== "") ? this.props.employerProfileDetail.facebook : "Link to your facebook"}
                                                    </Text>
                                                </div>
                                            </div>
                                            <div className="row px-2">
                                                <div className="col-4">
                                                    <Text fontSize='md' color="muted" style={{ display: "flex", alignItems: "center" }}>
                                                        Twitter <i class='bx bxl-twitter' style={{ color: "#006dff" }}></i>
                                                    </Text>
                                                </div>
                                                <div className="col-8">
                                                    <Text style={{ wordBreak: "break-word" }}>
                                                        {(this.props.employerProfileDetail.twitter !== null && this.props.employerProfileDetail.twitter !== "") ? this.props.employerProfileDetail.twitter : "Link to your Twitter"}
                                                    </Text>
                                                </div>
                                            </div>
                                        </div> :
                                        <div>
                                            <div className="row">
                                                <div className="col-12">
                                                    <Text fontSize='xl' color="muted">Social Media</Text>
                                                </div>
                                            </div>
                                            <div className="px-2">
                                                <Text fontSize='md' color="muted" style={{ margin: "0rem" }}>
                                                    LinkedIn <i class='bx-fw bx bxl-linkedin-square' style={{ color: "#006dff" }}></i>
                                                </Text>
                                                <Input id="linkedin" style={{ width: "100%", border: "1px solid #7E8993", borderRadius: "3px", paddingLeft: "0.5rem" }} defaultValue={this.props.employerProfileDetail.linkedin}></Input>
                                            </div>
                                            <div className="px-2" style={{ marginTop: "1rem" }}>
                                                <Text fontSize='md' color="muted" style={{ margin: "0rem" }}>
                                                    Facebook <i class='bx-fw bx bxl-facebook-square' style={{ color: "#006dff" }}></i>
                                                </Text>
                                                <Input id="facebook" style={{ width: "100%", border: "1px solid #7E8993", borderRadius: "3px", paddingLeft: "0.5rem" }} defaultValue={this.props.employerProfileDetail.facebook}></Input>
                                            </div>
                                            <div className="px-2" style={{ marginTop: "1rem" }}>
                                                <Text fontSize='md' color="muted" style={{ margin: "0rem" }}>
                                                    Twitter <i class='bx-fw bx bxl-twitter' style={{ color: "#006dff" }}></i>
                                                </Text>
                                                <Input id="twitter" style={{ width: "100%", border: "1px solid #7E8993", borderRadius: "3px", paddingLeft: "0.5rem" }} defaultValue={this.props.employerProfileDetail.twitter}></Input>
                                            </div>
                                            <div className="d-flex justify-content-end mt-3">
                                                <button className="default-btn" onClick={this.saveSocialMedia} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "5px", paddingBottom: "5px" }}>Save</button>
                                                <button className="default-btn" onClick={this.cancelEditMedia} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "5px", paddingBottom: "5px", backgroundColor: "#c4c4c4", marginLeft: "0.5rem" }}>Cancel</button>
                                            </div>
                                        </div>
                                    }
                                </div>
                            </Box>

                            {/* Basic info */}
                            <Box
                                bg="bg-surface"
                                boxShadow='sm'
                                borderRadius="lg"
                                p={{
                                    base: '4',
                                    md: '6',
                                }}
                                textAlign="left"
                                mt='8'
                            >
                                <div style={{ padding: "2rem" }}>
                                    {!this.state.isEditBasicInfo ?
                                        <div>
                                            <div className="row">
                                                <div className="col-8">
                                                    <Tooltip label='Company basic information will appear on your company branding page.' aria-label='A tooltip' fontSize='sm'>
                                                        <HStack>
                                                            <Text color="muted" fontSize='xl' fontWeight='bold'>
                                                                Basic Info
                                                            </Text>
                                                            <FiInfo style={{ color: "#dfdfdf" }} size='20' />
                                                        </HStack>
                                                    </Tooltip>
                                                </div>
                                                <div className="col-4 profile-edit">
                                                    <div style={{ float: "right" }}>
                                                        <i className="bx bx-edit-alt" onClick={this.editBasicInfo} style={{ cursor: "pointer", color: "#7e8993" }}></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-2 px-2">
                                                <Text fontSize='md' color="muted" style={{ margin: "0rem" }}>Location</Text>
                                                <Text>
                                                    {(this.props.employerProfileDetail.location !== null && this.props.employerProfileDetail.location !== "") ? this.props.employerProfileDetail.location : "Company Location"}
                                                </Text>
                                            </div>
                                            <div className="px-2" style={{ marginTop: "1rem" }}>
                                                <Text fontSize='md' color="muted" style={{ margin: "0rem" }}>Company Size</Text>
                                                <Text>
                                                    {(this.props.employerProfileDetail.company_size !== null && this.props.employerProfileDetail.company_size !== "") ? this.props.employerProfileDetail.company_size : "Employees"}
                                                </Text>
                                            </div>
                                            <div className="px-2" style={{ marginTop: "1rem" }}>
                                                <Text fontSize='md' color="muted" style={{ margin: "0rem" }}>Industry</Text>
                                                <Text>
                                                    {(this.props.employerProfileDetail.company_type !== null && this.props.employerProfileDetail.company_type !== "") ? this.props.employerProfileDetail.company_type : "Company Field"}
                                                </Text>
                                            </div>
                                            <div className="px-2" style={{ marginTop: "1rem" }}>
                                                <Text fontSize='md' color="muted" style={{ margin: "0rem" }}>Contact Email</Text>
                                                <Text>
                                                    {(this.props.employerProfileDetail.email !== null && this.props.employerProfileDetail.email !== "") ? this.props.employerProfileDetail.email : "Company Email"}
                                                </Text>
                                            </div>
                                        </div> :
                                        <div>
                                            <div className="row">
                                                <div className="col-12">
                                                    <Text fontSize='xl' color="muted">Basic Info</Text>
                                                </div>
                                            </div>
                                            <div className="px-2">
                                                <Text fontSize='md' color="muted" style={{ margin: "0rem" }}>Location</Text>
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
                                            <div className="px-2" style={{ marginTop: "1rem" }}>
                                                <Text fontSize='md' color="muted" style={{ margin: "0rem" }}>Company Size</Text>
                                                <Select value={this.state.companySize} onChange={this.onFilter} options={this.options} styles={customStyles} placeholder={'Enter Company Size'} />
                                            </div>
                                            <div className="px-2" style={{ marginTop: "1rem" }}>
                                                <Text fontSize='md' color="muted" style={{ margin: "0rem" }}>Industry</Text>
                                                <Select value={this.state.industry} onChange={this.selectIndustry} options={IndustryOptions} styles={customStyles} placeholder={'Enter Company Industry'} />
                                            </div>
                                            <div className="px-2" style={{ marginTop: "1rem" }}>
                                                <Text fontSize='md' color="muted" style={{ margin: "0rem" }}>Contact Email</Text>
                                                <Input id="contactEmail" style={{ width: "100%", border: "1px solid #7E8993", borderRadius: "3px", height: '2.5rem', paddingLeft: "0.5rem" }} defaultValue={this.props.employerProfileDetail.email}></Input>
                                            </div>
                                            <div className="d-flex justify-content-end mt-3">
                                                <button className="default-btn" onClick={this.saveCompanyInfo} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "5px", paddingBottom: "5px" }}>Save</button>
                                                <button className="default-btn" onClick={this.cancelEditBasicInfo} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "5px", paddingBottom: "5px", backgroundColor: "#c4c4c4", marginLeft: "0.5rem" }}>Cancel</button>
                                            </div>
                                        </div>
                                    }
                                </div>
                            </Box>
                        </div>

                        {/* Right Part */}
                        <div className="col-6" style={{ marginLeft: "2rem" }}>

                            {/* Summary */}
                            <Box
                                bg="bg-surface"
                                boxShadow='sm'
                                borderRadius="lg"
                                p={{
                                    base: '4',
                                    md: '6',
                                }}
                                textAlign="left"
                            >
                                <div style={{ padding: "2rem" }}>
                                    {!this.state.isEditSummary ?
                                        <div>
                                            <div className="row">
                                                <div className="col-8">
                                                    <Tooltip label='Company Overview will appear on the top section of your Job Posting.' aria-label='A tooltip' fontSize='sm'>
                                                        <HStack>
                                                            <Text color="muted" fontSize='xl' fontWeight='bold'>
                                                                Company Overview
                                                            </Text>
                                                            <FiInfo style={{ color: "#dfdfdf" }} size='20' />
                                                        </HStack>
                                                    </Tooltip>
                                                </div>
                                                <div className="col-4 profile-edit">
                                                    <div style={{ float: "right" }}>
                                                        <i className="bx bx-edit-alt" onClick={this.editSummary} style={{ cursor: "pointer", color: "#7e8993" }}></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <Text mt='5' px='3' style={{ fontWeight: "500" }}>
                                                {(this.props.employerProfileDetail.summary !== null && this.props.employerProfileDetail.summary !== "") ?
                                                    parse("" + this.props.employerProfileDetail.summary + "") : "Company Overview Here"}
                                            </Text>
                                        </div> :
                                        <div>
                                            <div className="row mb-3">
                                                <div className="col-12">
                                                    <Text fontSize='xl' color="muted">Company Overview</Text>
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
                            </Box>

                            {/* Video */}
                            <Box
                                bg="bg-surface"
                                boxShadow='sm'
                                borderRadius="lg"
                                p={{
                                    base: '4',
                                    md: '6',
                                }}
                                textAlign="left"
                                mt='8'
                            >
                                <Video
                                    updateEmployerVideo={this.props.updateEmployerVideo}
                                    userId={this.props.userId}
                                    videoURL={this.props.employerProfileDetail.video_url}
                                    setVideo={this.setVideo}
                                    getUpdatedData={this.getUpdatedData}
                                />
                            </Box>

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
                </Box>
                <Modal onClose={() => { this.hideMethod1() }} size={"5xl"} isOpen={this.state.method_pop1} isCentered>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalCloseButton />
                        <ModalBody>
                            <Box textAlign='left' p='6'>
                                <Text color='muted' fontSize='lg' fontWeight='bold' style={{ marginBottom: "2rem" }}>Method 1 - Careers Widget</Text>
                                <Text mb='2' style={{ fontSize: "0.8rem" }}>The career widget is a simple list of your jobs embeded on a dedicated page on your website, such as your career page. All you’ll need is access to the content Management System (CMS) of your website, then follow these steps:</Text>
                                <ol className="profile-p5" style={{ fontSize: "0.9rem", paddingLeft: "1rem" }}>
                                    <li className="pb-2">Access the HTML on the webpage where you want the jobs to display.</li>
                                    <li className="pb-2">Copy the code snippet from the box below and paste it within your HTML where you want the job list to display.</li>
                                    <li>Preview the page and publish.</li>
                                </ol>
                                <Box
                                    bg="bg-canvas"
                                    boxShadow='sm'
                                    borderRadius="lg"
                                    p={{
                                        base: '4',
                                        md: '6',
                                    }}
                                    textAlign="center"
                                    mt='3'
                                >
                                    <Text style={{ fontSize: "0.8rem" }}>{'<div '}<span style={{ color: "#009E7F" }}>class</span>=<span style={{ color: "#FF6B00" }}>"hirebeat-widget-job"</span><span style={{ color: "#009E7F" }}> data-company</span>=<span style={{ color: "#FF6B00" }}>"{(window?.btoa(this.props.companyName))}"</span>{'></div>'}</Text>
                                    <Text style={{ fontSize: "0.8rem" }}>{'<script '}<span style={{ color: "#009E7F" }}>src</span>=<span style={{ color: "#FF6B00" }}>"https://widget.hirebeat.co/widget/index.js"</span>{'></script>'}</Text>
                                    <Text style={{ fontSize: "0.8rem" }}>{'<link '}<span style={{ color: "#009E7F" }}>href</span>=<span style={{ color: "#FF6B00" }}>"https://widget.hirebeat.co/widget/index.css"</span><span style={{ color: "#009E7F" }}> rel</span>=<span style={{ color: "#FF6B00" }}>"stylesheet"</span>{'/>'}</Text>
                                </Box>
                            </Box>
                        </ModalBody>
                    </ModalContent>
                </Modal>
                <Modal onClose={() => { this.hideMethod2() }} size={"5xl"} isOpen={this.state.method_pop2} isCentered>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalCloseButton />
                        <ModalBody>
                            <Box textAlign='left' p='6'>
                                <Text color='muted' fontSize='lg' fontWeight='bold' style={{ marginBottom: "2rem" }}>Method 2 - Job Portal Website Link</Text>
                                <Text style={{ fontSize: "0.8rem" }}>Add a link to an existing page or website header/footer to directly link to your HireBeat Job Portal. This is a simple way of getting your jobs linked from your website, giving potential candidates a streamlined application process, and maximizing your reach to new applicants.</Text>
                                <Text mb='2' style={{ fontSize: "0.8rem" }}>First, you will need access to the Content Management System (CMS) of your website, then, follow these steps:</Text>
                                <ol className="profile-p5" style={{ fontSize: "0.9rem", paddingLeft: "1rem" }}>
                                    <li className="pb-2">Type 'Careers', 'We are Hiring', or similar somewhere on the page, ideally the header or footer.</li>
                                    <li className="pb-2">Highlight the text and select the option to add a hyperlink</li>
                                    <li>Copy the link to your HireBeat Job Portal below and insert this as the hyperlink.</li>
                                </ol>
                                <Box
                                    bg="bg-canvas"
                                    boxShadow='sm'
                                    borderRadius="lg"
                                    p={{
                                        base: '4',
                                        md: '6',
                                    }}
                                    textAlign="center"
                                    mt='3'
                                >
                                    <Text style={{ fontSize: "0.8rem" }}>{'<a '}<span style={{ color: "#009E7F" }}>href</span>=<span style={{ color: "#FF6B00" }}>"https://app.hirebeat.co/company-branding/{this.props.companyName}"</span>{'>Careers</a>'}</Text>
                                </Box>
                            </Box>
                        </ModalBody>
                    </ModalContent>
                </Modal>
            </React.Fragment >
        )
    };
}

export default EmployerProfile;