import React, {Component} from "react";
import Select from 'react-select';
import { confirmAlert } from 'react-confirm-alert';
var ReactS3Uploader = require("react-s3-uploader");
import Avatar from 'react-avatar-edit';

export class ProfileForm extends Component {
    constructor(props) {
        super(props);
        this.uploader = null;
        this.handleUpload = this.handleUpload.bind(this);
        this.handleUpload2 = this.handleUpload2.bind(this);
    }
    state = {
        isStudent: false,
        jobType: "",
        selected: false,
        cvName: "",
        resume: null,
        fakeName: "",
        preview: null,
        fakeName2: "",
        docType: "",
        savePhoto: false,
    }

    // upload resume -> bgin
    setSelected = () => {
        this.setState({ ...this.state, selected: true });
    }

    setLabel = (name) => {
        let label = document.getElementById('fileName');
        label.textContent = name;
    }

    selectFile = () => {
        // toggle input element
        let input = document.getElementById('uploadFile');
        input.click();

        // prune selected file
        input.onchange = () => {
            let num = input.files.length;
            // limit 10 pdfs at one time
            if (num > 1) {
                return this.alert("Capacity Error", "Please only upload one resume");
            }
            // get selected file
            let resume = input.files[0];
            let name = resume.name;
            let size = resume.size;

            // check file size
            if (size > 5000000) {
                return this.alert("Wrong File Type", "Please upload resume that less than 5MB!");
            }

            // check file type
            let docType = name.slice(-3);
            if (docType === "pdf" || docType === "ocx") {
                this.setSelected();
                this.setLabel(name);

                //set cvName &　resume states
                let timestamp = Date.parse(new Date());
                let suffix = docType == "pdf" ? ".pdf" : ".docx";
                let fakeName = timestamp + suffix;
                const newResume = new File([resume], fakeName, {type: resume.type});
                this.setState({fakeName: fakeName});
                this.setState({cvName: name});
                this.setState({resume: newResume});
            } else {
                return this.alert("Wrong File Type", "Please upload PDF or DOCX version of your resume");
            }
            // reset input value
            input.value = null;
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

    onUploadFinish = () => {
        console.log("uploaded Resume Success")
    };

    onUploadError = (err) => {
        console.log(err);
    };

    onUploadProgress = () => {
        console.log("In progress");
    };

   handleUpload = () => {
        if (!this.state.selected) {
            this.alert("Empty file", "Please select your resume first");
        }
        else {
            this.uploader.uploadFile(this.state.resume);
            // update resumeUrl and resumeName states
            var fakeName = this.state.fakeName;
            var resumeUrl = "https://hirebeat-user-resume.s3.amazonaws.com/" + fakeName;
            this.props.setResumeUrl(resumeUrl);
            this.props.setResumeName(this.state.cvName);
        }
   }
   // upload resume -> end

    // profile photo upload -> begin
   onClose = () => {
       this.setState({preview: null})
   }

    onCrop = (preview) => {
        this.setState({preview})
    }

    onBeforeFileLoad = (elem) => {
        let docType = elem.target.files[0].type?.split("/")[1];
        let docSize = elem.target.files[0].size;
        if(docSize > 2000000){
          this.alert("File Size Error", "Please upload a logo that less than 2MB");
          elem.target.value = "";
        }
        else if (docType !== "png" && docType !== "jpg" && docType !== "jpeg") {
            this.alert("File Type Error", "Please upload JPG, JPEG or PNG file");
            elem.target.value = "";
        }
        else {
            this.setState({docType: docType});
        }
    }

   handleUpload2 = () => {
        if (this.state.preview != null) {
            var blob = dataURItoBlob(this.state.preview);
            let timestamp = Date.parse(new Date());
            let fakeName2 = timestamp + "." + this.state.docType;
            const newLogo = new File([blob], fakeName2, {type: blob.type});
            this.setState({fakeName2: fakeName2});
            this.uploader.uploadFile(newLogo);
            // update logoUrl state
            var logoUrl = "https://hirebeat-user-resume.s3.amazonaws.com/" + fakeName2;
            this.props.setLogoUrl(logoUrl);
        }
    }

   onUploadFinish2 = () => {
        console.log("Uploaded profile photo success");
   };
    // profile photo upload -> end

    checkStudent = () => {
        this.setState({isStudent: !this.state.isStudent});
        // clear input
        if (this.state.isStudent) {
            let element = document.getElementsByName("jobTitle");
            element[0].value = "";
        }
        this.props.setJobTitle("Student");
    }

    onFilter = (jobType) => {
        this.setState({ jobType: jobType });
        this.props.setJobType(jobType);
    };

    customStyles = {
        control: styles => ({ ...styles, backgroundColor: '#ffffff', boxShadow: "0px 0px 50px rgba(70, 137, 250, 0.1)", height: '55px' }),
        singleValue: styles => ({
            ...styles,
            color: '#4a6f8a',
            fontSize: '0.9375rem',
            fontFamily: 'Avenir Next,Segoe UI, sans-serif',
            fontWeight: '500'
        }),
        menuPortal: provided => ({ ...provided, zIndex: 2 }),
        menu: provided => ({ ...provided, zIndex: 2 })
    };

    options = [
        { value: 'Accounting', label: 'Accounting' },
        { value: 'Administrative', label: 'Administrative' },
        { value: 'Arts and Design', label: 'Arts and Design' },
        { value: 'Audit', label: 'Audit' },
        { value: 'Business Development', label: 'Business Development' },
        { value: 'Community and Social Services', label: 'Community and Social Services' },
        { value: 'Consulting', label: 'Consulting' },
        { value: 'Education', label: 'Education' },
        { value: 'Engineering', label: 'Engineering' },
        { value: 'Finance', label: 'Finance' },
        { value: 'Healthcare Services', label: 'Healthcare Services' },
        { value: 'Human Resources', label: 'Human Resources' },
        { value: 'Information Technology', label: 'Information Technology' },
        { value: 'Legal', label: 'Legal' },
        { value: 'Marketing', label: 'Marketing' },
        { value: 'Media and Communication', label: 'Media and Communication' },
        { value: 'Operations', label: 'Operations' },
        { value: 'Product Management', label: 'Product Management' },
        { value: 'Program and Project Management', label: 'Program and Project Management' },
        { value: 'Quality Assurance', label: 'Quality Assurance' },
        { value: 'Real Estate', label: 'Real Estate' },
        { value: 'Research', label: 'Research' },
        { value: 'Sales', label: 'Sales' },
        { value: 'Support', label: 'Support' },
        { value: 'Supply Chain', label: 'Supply Chain' },
        { value: 'Tax', label: 'Tax' },
    ];

    moveToNext = (e) => {
        e.preventDefault();
        // check job type
        if (this.state.jobType === "") {
            return this.alert("Form Incomplete", "Please select job type")
        }
        // upload resume
        if (this.state.resume !== null) {
            this.handleUpload();
        }
        // upload profile photo
        if (this.state.preview !== null) {
            this.handleUpload2();
        }
        // move to next step
        let nextStep = this.props.step + 1;
        this.props.setStep(nextStep);
    }

    handleJobTitle = (e) => {
        if (!this.state.isStudent) {
            let jobTitle = e.target.value;
            this.props.setJobTitle(jobTitle);
        }
        else {
            this.props.setJobTitle("Student");
        }

    }

    handleCompanyName = (e) => {
        let companyName = e.target.value;
        this.props.setCompanyName(companyName);
    }

    handleSavePhoto = () => {
        this.setState({savePhoto: true});
    }

    editSavePhoto = () => {
        this.setState({savePhoto: false, preview: null});

    }

    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.moveToNext}>
                      <h1 className="register-title" style={{paddingTop: "0.6rem", textAlign: "left"}}>Step3 &nbsp; <span style={{color: "#67A3F3"}}>Profile</span></h1>
                      <div style={{display: "flex"}}>
                          <img style={{width: "86%", height: "3vw"}} src="https://hirebeat-assets.s3.amazonaws.com/step3.png" alt="step flow" />
                      </div>

                      <div className="form-group">
                        <label className="register-label register-text">
                            Upload Resume
                        </label>
                        <button className="register-btn" type="button" onClick={this.selectFile}>
                            <i className="bx bx-cloud-upload bx-sm"></i>
                            &nbsp; Select File From Computer
                        </button>
                        <span className="register-label register-text2" style={{marginLeft: "0rem"}}>Support .pdf/.docx</span>
                        <ReactS3Uploader
                          style={{display: "none"}}
                          id="uploadFile"
                          accept=".pdf, .docx, application/vnd.openxmlformats-officedocument.wordprocessingml.document"  // only accept pdf & docx files
                          signingUrl="/upload-profile-resume"
                          signingUrlMethod="GET"
                          onError={this.onUploadError}
                          onFinish={this.onUploadFinish}
                          uploadRequestHeaders={{ "x-amz-acl": "public-read" }} // this is the default
                          scrubFilename={(filename) => filename.replace(/[^\w\d_\-.]+/gi, "")}
                          inputRef={(cmp) => (this.uploadInput = cmp)}
                          ref={(uploader) => {
                            this.uploader = uploader;
                          }}
                          autoUpload={true}
                        />
                        {
                          this.state.selected ? (
                            <div className="register-label">
                                <div style={{ marginTop: "1rem"}}>
                                  <i className="bx bxs-file-pdf resume-name"></i>
                                  <label className="resume-name" id="fileName"></label>
                                  <label className="resume-success" style={{marginLeft: "0.5rem"}}>selected <i className="bx-fw bx bxs-check-circle resume-success" style={{marginLeft: "0.5rem"}}></i></label>
                                </div>
                            </div>
                          ) : null
                        }
                      </div>

                      <div className="form-group">
                        <label className="register-label register-text">
                            Upload Profile Photo
                        </label>
                        <div>
                            {!this.state.savePhoto ?
                                <div>
                                    <Avatar
                                          width={285}
                                          height={200}
                                          onCrop={this.onCrop}
                                          onClose={this.onClose}
                                          onBeforeFileLoad={this.onBeforeFileLoad}
                                          mimeTypes={"image/jpeg,image/png,image/jpg"}
                                    />
                                </div> :
                                <div className="d-flex justify-content-left">
                                    {this.state.preview !== null && <img src={this.state.preview} alt="Preview" />}
                                </div>
                            }
                            {this.state.preview != null &&
                                <div className="d-flex justify-content-left" style={{marginTop: "0.5rem"}}>
                                    {this.state.savePhoto &&
                                        <span className="profile-edit" style={{cursor: "pointer"}} onClick={this.editSavePhoto}>Edit</span>
                                    }
                                    {!this.state.savePhoto &&
                                        <span className="profile-edit" style={{cursor: "pointer"}} onClick={this.handleSavePhoto}>Save</span>
                                    }
                                </div>
                            }
                            <span className="register-label register-text2" style={{marginLeft: "0rem"}}>Support .jpeg/.png</span>
                        </div>
                        <ReactS3Uploader
                          style={{display: "none"}}
                          id="uploadFile2"
                          accept="image/jpeg,image/png,image/jpg"
                          signingUrl="/upload-profile-resume"
                          signingUrlMethod="GET"
                          onError={this.onUploadError}
                          onFinish={this.onUploadFinish2}
                          uploadRequestHeaders={{ "x-amz-acl": "public-read" }} // this is the default
                          scrubFilename={(filename) => filename.replace(/[^\w\d_\-.]+/gi, "")}
                          inputRef={(cmp) => (this.uploadInput = cmp)}
                          ref={(uploader) => {
                            this.uploader = uploader;
                          }}
                          autoUpload={true}
                        />
                      </div>

                      <div className="form-group">
                        <label className="register-label register-text">
                            Most Recent Job Title<span className="job-apply-char2">*</span>
                            <span style={{marginLeft: "1rem"}}><input type="checkbox" id="isStudent" onClick={this.checkStudent}/> &nbsp; I'm a student</span>
                        </label>
                        {!this.state.isStudent ?
                            <input
                                type="text"
                                className="form-control register-form"
                                name="jobTitle"
                                onChange={this.handleJobTitle}
                                required
                            /> :
                            <input
                                type="text"
                                className="form-control register-form"
                                name="jobTitle"
                                value="Student"
                                required
                            />
                        }
                      </div>

                      <div className="form-group">
                        <label className="register-label register-text">
                            {!this.state.isStudent ? "Most Recent Company" : "School Name"}<span className="job-apply-char2">*</span>
                        </label>
                        <input
                            type="text"
                            className="form-control register-form"
                            name="companyName"
                            onChange={this.handleCompanyName}
                            required
                        />
                      </div>

                      <div className="form-group">
                        <label className="register-label register-text">
                            What type of job are you looking for<span className="job-apply-char2">*</span>
                        </label>
                        <div style={{textAlign: "left"}}>
                            <Select value={this.state.jobType} onChange={this.onFilter} options={this.options} styles={this.customStyles} menuPortalTarget={document.body}/>
                        </div>
                      </div>

                      <div className="form-group">
                        <button
                            type="submit"
                            className="default-btn"
                            style={{width:"100%", fontSize:'1rem', fontWeight:'bold', paddingLeft: "25px", zIndex: "0"}}
                        >
                          Next
                          <img src="https://sp.analytics.yahoo.com/spp.pl?a=10000&.yp=10145429&ea=HOC1" alt="icon"/>
                        </button>
                      </div>

                    </form>
            </React.Fragment>
        )
    }
}

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

export default ProfileForm;