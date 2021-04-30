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
  var blob = new Blob([ab], {type: mimeString});
  return blob;

}

const toolbarConfig = {
    // Optionally specify the groups to display (displayed in the order listed).
    display: ['INLINE_STYLE_BUTTONS', 'BLOCK_TYPE_BUTTONS', 'LINK_BUTTONS', 'BLOCK_TYPE_DROPDOWN', 'HISTORY_BUTTONS'],
    INLINE_STYLE_BUTTONS: [
      {label: 'Bold', style: 'BOLD', className: 'custom-css-class'},
      {label: 'Italic', style: 'ITALIC'},
      {label: 'Underline', style: 'UNDERLINE'}
    ],
    BLOCK_TYPE_DROPDOWN: [
      {label: 'Normal', style: 'unstyled'},
      {label: 'Heading Large', style: 'header-one'},
      {label: 'Heading Medium', style: 'header-two'},
      {label: 'Heading Small', style: 'header-three'}
    ],
    BLOCK_TYPE_BUTTONS: [
      {label: 'UL', style: 'unordered-list-item'},
      {label: 'OL', style: 'ordered-list-item'}
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
    }

    onChange = (overview) => {
        this.setState({overview});
    };

    onClose = () => {
        this.setState({preview: null})
    }

    onCrop = (preview) => {
        this.setState({preview})
    }

    onBeforeFileLoad = (elem) => {
        let docType = elem.target.files[0].type?.split("/")[1];
        let docSize = elem.target.files[0].size;
        console.log(docType);
        if(docSize > 2000000){
          this.alert("File is too big!", "Please upload a logo that less than 2MB");
          elem.target.value = "";
        }
        else if (docType !== "png" && docType !== "jpg" && docType !== "jpeg") {
            this.alert("Wrong File Type", "Please upload JPG, JPEG or PNG file");
            elem.target.value = "";
        }
        else {
            this.setState({docType: docType});
        }
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
        this.handleUpload();
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
        setTimeout(() => {this.getUpdatedData(); this.getUpdatedData();}, 300);
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
            const newLogo = new File([blob], fakeName, {type: blob.type});
            this.setState({fakeName: fakeName});
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

    render () {
        return (
            <React.Fragment>
                <div className="profile-container">
                <div className="row" style={{marginBottom: "30px"}}>
                    <div><h3><b><i className="bx bxs-dashboard ard"></i><span className="ml-2">Dashboard</span></b></h3></div>
                    <div><h3><b>
                        {this.props.profile.membership == "Premium" ?
                            <div style={{marginLeft:"1.4rem", marginRight:"1.4rem"}}>
                              {this.props.profile.plan_interval == "Pro" ?
                              <div className="row">
                                  <div style={{borderColor: "#FF6B00", borderWidth: "2px", borderRadius: "5px", borderStyle: "solid"}}>
                                      <p style={{color: "#FF6B00", fontSize: "14px", paddingLeft: "3px", paddingRight: "3px", display: "flex"}}>
                                          <i className="bx bx-diamond bx-sm"></i><span style={{marginLeft: "0.3rem"}}>Pro</span>
                                      </p>
                                  </div>
                                  <Link to="/employer-pricing" style={{textDecoration:"none", marginLeft: "1rem"}}><p style={{color:"#fac046", fontSize:"14px"}}>Upgrade</p></Link>
                              </div>:
                               <div className="row">
                                    <div style={{borderColor: "#fac046", borderWidth: "2px", borderRadius: "5px", borderStyle: "solid"}}>
                                        <p style={{color: "#fac046", fontSize: "14px", paddingLeft: "3px", paddingRight: "3px", display: "flex"}}>
                                            <i className="bx bx-diamond bx-sm"></i><span style={{marginLeft: "0.3rem"}}>Premium</span>
                                        </p>
                                    </div>
                             </div>}
                            </div>:
                            <div style={{marginLeft:"1.4rem", marginRight:"1.4rem"}}>
                              {this.props.profile.is_subreviwer ?
                              <div>
                                <div className="row">
                                    <div style={{borderColor: "#cad9fc", borderWidth: "2px", borderRadius: "5px", borderStyle: "solid"}}>
                                        <p style={{color: "#cad9fc", fontSize: "14px", paddingLeft: "3px", paddingRight: "3px"}}>Sub-Reviewer</p>
                                    </div>
                                </div>
                              </div> :
                              <div>
                                <div className="row" style={{width: "20rem"}}>
                                    <div style={{borderColor: "#7D7D7D", borderWidth: "2px", borderRadius: "5px", borderStyle: "solid"}}>
                                        <p style={{color: "7D7D7D", fontSize: "14px", paddingLeft: "3px", paddingRight: "3px"}}>Free Member</p>
                                    </div>
                                    <Link to="/employer-pricing" style={{textDecoration:"none", marginLeft: "1rem"}}><p style={{color:"#fac046", fontSize:"14px"}}>Upgrade</p></Link>
                                </div>
                            </div>}
                          </div>}
                    </b></h3></div>
                </div>
                    <div className="row">
                        <div className="col-5">
                            {/* Personal Information */}
                            <div className="profile-bg" style={{textAlign: "left"}}>
                                <div style={{padding: "2rem"}}>
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
                                            <div>
                                                <p className="profile-p" style={{margin: "0rem"}}>Company Logo</p>
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
                                            <ReactS3Uploader
                                              style={{display: "none"}}
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
                            <div className="profile-bg" style={{textAlign: "left", marginTop: "2rem"}}>
                                <div style={{padding: "2rem"}}>
                                    {!this.state.isEditSummary ?
                                        <div>
                                            <div className="row">
                                                <div className="col-8">
                                                    <h3 className="profile-h3">Company Overview</h3>
                                                </div>
                                                <div className="col-4 profile-edit">
                                                    <div style={{float: "right"}}>
                                                        <i className="bx bx-edit-alt"></i>
                                                        <span type="button" onClick={this.editSummary} style={{marginLeft: "0.5rem"}}>Edit</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="profile-p4">
                                                {(this.props.employerProfileDetail.summary !== null && this.props.employerProfileDetail.summary !== "") ?
                                                    parse(""+this.props.employerProfileDetail.summary+"") : "Company Overview Here"}
                                            </p>
                                        </div> :
                                        <div>
                                            <div className="row">
                                                <div className="col-7">
                                                    <h3 className="profile-h3">Company Overview</h3>
                                                </div>
                                                <div className="col-5 profile-edit">
                                                    <div style={{float: "right"}}>
                                                        <span type="button" onClick={this.cancelEditSummary}>Cancel</span>
                                                        <span type="button" onClick={this.saveSummary} style={{marginLeft: "1rem"}}>Save</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <RichTextEditor
                                                value={this.state.overview}
                                                onChange={this.onChange}
                                                toolbarConfig={toolbarConfig}
                                                editorClassName="editor-height"
                                            />
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