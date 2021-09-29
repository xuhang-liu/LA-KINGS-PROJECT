import React, { Component } from "react";
import * as pdfjsLib from 'pdfjs-dist';
import { confirmAlert } from 'react-confirm-alert';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addNewApplyCandidateByCv } from "./../../../../redux/actions/job_actions";
var ReactS3Uploader = require("react-s3-uploader");


export class NewCandidateAdditionForm extends Component {
    constructor(props) {
        super(props);
        this.uploader = null;
        this.handleUpload = this.handleUpload.bind(this);
    }

    state = {
        resumeSelected: false,
        candidates: [],
    }

    closeForm = () => {
        this.props.getAllJobs(this.props.user.id, 1, "");
        this.props.hideAdditionForm();
    };

    uploadResume = () => {
        // parse pdf from urls directly
        // let text = getTextByURL("https://hirebeat-resume.s3.amazonaws.com/CV_LiangXu.pdf")
        // console.log(text);

        // clear previous resumes first
        this.setState({candidates: []});

        let input = document.getElementById("resume");
        input.click();
        input.onchange = () => {
            let num = input.files.length;
            // limit 10 pdfs at one time
            if (num > 10) {
                return this.overwhelm();
            }
            // get selected files
            for (let i = 0; i < num; i++) {
                let pdf = input.files[i]
                // check file size
                if (pdf.size > 5000000) {
                    return this.sizeAlert();
                }
                let candidateInfo = new Object();
                candidateInfo.resume = pdf;
                candidateInfo.resumeName = pdf.name;
                let timestamp = Date.parse(new Date());
                candidateInfo.fakeResumeName = timestamp + pdf.name.split('.')[1];
                this.getTextByPdf(pdf, candidateInfo);
                setTimeout(() => {this.setState({candidates: [...this.state.candidates, candidateInfo]})}, 500);
            }
            // reset input value
            input.value = null;
            this.setState({resumeSelected: true});

        }
    }

    pdfToBase64 = (fileToLoad) => {
        return new Promise(resolve => {
            let fileReader = new FileReader();
            // Onload of file read the file content
            fileReader.onload = function(fileLoadedEvent) {
                 resolve(fileLoadedEvent.target.result);
            };
            // Convert data to base64
            fileReader.readAsDataURL(fileToLoad);
        });
    }

    handleUpload = (e) => {
        e.preventDefault();
        // check resume size
        if (this.state.candidates.length <= 0) {
            return this.noResumeAlert();
        }
        // get the most recent information
        let nameElements = document.getElementsByClassName("candidate-name");
        let emailElements = document.getElementsByClassName("candidate-email");
        let candidates = this.state.candidates;
        // todo bug below
        for (let i = 0; i < nameElements.length; i++) {
            let candidate = candidates[i];
            candidate.name = nameElements[i].value;
            if (!this.checkName(candidate.name)) {
                return this.nameError();
            }
            let value = emailElements[i].value;
            candidate.email = value.toLowerCase();
        }

        for (let i = 0; i < this.state.candidates.length; i++) {
            let candidate = candidates[i];
            this.pdfToBase64(candidate.resume).then(resume => {
                let names = candidate.name.split(" ");
                let data = {
                    job_id: this.props.jobId,
                    first_name: names.length >= 1 ? names[0] : "",
                    last_name: names.length >= 2 ? names[1] : "",
                    phone: "",
                    email: candidate.email.toLowerCase(),
                    location: "",
                    resume: resume.split(",")[1], // here to remove encoded header of resume
                    linkedinurl: "",
                };
                setTimeout(() => this.props.addNewApplyCandidateByCv(data), 1000);
            });

        }
        setTimeout(() => {this.props.getAllJobs(this.props.user.id, 1, ""); this.setState({candidates: []}); this.uploadSuccess()}, 500);
    };

    onUploadError = (err) => {
        console.log(err);
    };

    onUploadProgress = () => {
        console.log("In progress");
    };

    // parse resumes from url
    getTextByURL = (pdfUrl) => {
        // ensure workSrc version align with pdfjs version
        pdfjsLib.GlobalWorkerOptions.workerSrc = '//cdn.jsdelivr.net/npm/pdfjs-dist@2.6.347/build/pdf.worker.js';
        var pdf = pdfjsLib.getDocument(pdfUrl);
        return pdf.promise.then(function (pdf) { // get all pages text
            var maxPages = pdf.numPages;
            var countPromises = []; // collecting all page promises
            for (var j = 1; j <= maxPages; j++) {
                var page = pdf.getPage(j);

                var txt = "";
                countPromises.push(page.then(function (page) { // add page promise
                    var textContent = page.getTextContent();
                    return textContent.then(function (text) { // return content promise
                        return text.items.map(function (s) { return s.str; }).join(''); // value page text
                    });
                }));
            }
            // Wait for all pages and join text
            return Promise.all(countPromises).then(function (texts) {
                return texts.join('');
            });
        });
    }

    // parse resume from local PDF files, fake upload
    getTextByPdf = (pdf, candidateInfo) => {
        // step 1 read the file using file reader
        let fileReader = new FileReader();
        fileReader.onload = function () {
            // step 3 turn array buffer into typed array
            var typedArray = new Uint8Array(this.result);

            //Step 4 PDFJS should be able to read this
            // ensure workSrc version align with pdfjs version
            pdfjsLib.GlobalWorkerOptions.workerSrc = '//cdn.jsdelivr.net/npm/pdfjs-dist@2.6.347/build/pdf.worker.js';
            return pdfjsLib.getDocument(typedArray).promise.then(function (pdf) {
                // convert pdf to string
                var maxPages = pdf.numPages;
                var countPromises = []; // collecting all page promises
                for (var j = 1; j <= maxPages; j++) {
                    var page = pdf.getPage(j);

                    var txt = "";
                    countPromises.push(page.then(function (page) { // add page promise
                        var textContent = page.getTextContent();
                        return textContent.then(function (text) { // return content promise
                            return text.items.map(function (s) { return s.str; }).join(''); // value page text
                        });
                    }));
                }
                // Wait for all pages and join text
                return Promise.all(countPromises).then(function (texts) {
                    // extract email and name
                    let text = texts.join('');
                    let email = extractEmail(text);
                    let name = extractName(text);
                    candidateInfo.email = email[0];
                    candidateInfo.name = name;
                });
            });
        }

        // step2 read the file as ArrayBuffer
        fileReader.readAsArrayBuffer(pdf);
    }

    checkName = (text) => {
        // allow alphabets and space
        var regex = /^[A-Za-z ]+$/ig;
        return regex.test(text);
    }

    overwhelm = () => {
        confirmAlert({
            title: "Too Many Resumes",
            message: "You can only upload 10 resumes at most each time",
            buttons: [
                {
                    label: 'Ok'
                }
            ]
        });
    };

    noResumeAlert = () => {
        confirmAlert({
            title: "No Resume Selected",
            message: "Please select resume first",
            buttons: [
                {
                    label: 'Ok'
                }
            ]
        });
    };

    sizeAlert = () => {
        confirmAlert({
            title: "File size is too big",
            message: "The maximum size of a single resume file is 5MB!",
            buttons: [
                {
                    label: 'Ok'
                }
            ]
        });
    };

    uploadSuccess = () => {
        confirmAlert({
            title: "Upload Success",
            message: "You have uploaded the resumes successfully!",
            buttons: [
                {
                    label: 'Ok'
                }
            ]
        });
    };

    nameError = () => {
        confirmAlert({
            title: "Name Error",
            message: "The candidate name in the resume file is invalid, please type it manually",
            buttons: [
                {
                    label: 'Ok'
                }
            ]
        });
    };

    deleteResume = (index) => {
        let cache = this.state.candidates;
        cache.splice(index, 1);
        this.setState({candidates: cache});
    }

    deleteAlert = (index) => {
        confirmAlert({
            title: "Confirm to delete",
            message: "Are you sure to delete this resume?",
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => this.deleteResume(index)
                },
                {
                    label: 'No'
                }
            ]
        });
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    {this.state.resumeSelected ?
                        <div style={{ marginTop: "2rem", marginLeft: "8%", marginRight: "8%" }}>
                            <div className="row">
                                <div className="mt-3 mb-3">
                                    <button type="button" className="default-btn resume-upload" onClick={this.uploadResume}>
                                        <i className="bx bx-cloud-upload bx-sm"></i>
                                        Upload Resume
                                    </button>
                                </div>
                                <div style={{ marginLeft: "1rem", marginTop: "2rem" }}>
                                    <input id="resume" type="file" multiple style={{ display: "none" }} accept=".pdf" />
                                    <div>
                                        <span className="upload-txt">
                                            Bulk Upload (.pdf only; max:10)
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <form onSubmit={this.handleUpload}>
                                <div className="form-row">
                                    <div className="form-group col-2">
                                        <label className="candidate-txt1">
                                            Resume
                                        </label>
                                    </div>
                                    <div className="form-group col-3">
                                        <label className="candidate-txt1">
                                            Candidate Name
                                        </label>
                                    </div>
                                    <div className="form-group col-3">
                                        <label className="candidate-txt1">
                                            Candidate Email
                                        </label>
                                    </div>
                                </div>
                                {this.state.candidates.map((c, index) => {
                                    return(
                                        <div className="form-row">
                                            <div className="form-group col-2 align-center">
                                                <label className="candidate-txt2">{c.resumeName}</label>
                                            </div>
                                            <div className="form-group col-3">
                                                <input type="text" name="name2" defaultValue={c.name} className="form-control candidate-name candidate-txt2" />
                                            </div>
                                            <div className="form-group col-3">
                                                <input type="email" name="email2" defaultValue={c.email} className="form-control candidate-email candidate-txt2" />
                                            </div>
                                            <div className="form-group col-1 align-center">
                                                <i className="bx bx-trash bx-sm" style={{color: "#F36F67"}}></i>
                                                <span className="candidate-txt2" style={{ cursor: "pointer", color: "#F36F67" }} onClick={this.deleteAlert}>Delete</span>
                                            </div>
                                        </div>
                                    )
                                })}

                                <div className="form-row justify-items" style={{ marginBottom: "1rem" }}>
                                    <div className="d-flex justify-items">
                                        <button
                                            type="button"
                                            className="default-btn1"
                                            style={{ paddingLeft: "25px" }}
                                            onClick={this.closeForm}
                                        >
                                            Cancel
                                            <span></span>
                                        </button>
                                    </div>
                                    <div className="d-flex justify-items" style={{marginLeft: "2rem"}}>
                                        <button
                                            type="submit"
                                            className="default-btn1"
                                            style={{ marginBottom: "1.5%", paddingLeft: "25px" }}
                                        >
                                            + Add
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <ReactS3Uploader
                                style={{ display: "none" }}
                                id="uploadFile"
                                accept=".pdf, application/vnd.openxmlformats-officedocument.wordprocessingml.document"  // only accept pdf & docx files
                                signingUrl="/interview_resumes"
                                signingUrlMethod="GET"
                                onError={this.onUploadError}
                                onFinish={this.onUploadFinish}
                                uploadRequestHeaders={{ "x-amz-acl": "public-read" }} // this is the default
                                scrubFilename={(filename) => filename.replace(/[^\w\d_\-.]+/ig, '')}
                                inputRef={(cmp) => (this.uploadInput = cmp)}
                                ref={(uploader) => {
                                    this.uploader = uploader;
                                }}
                                autoUpload={true}
                                required
                            />
                        </div> :
                        <div style={{ marginTop: "2rem", paddingLeft: "2rem", paddingRight: "2rem" }}>
                            <div className="resume-bg center-items">
                                <div>
                                    <div className="row justify-content-center">
                                        <button type="button" className="default-btn resume-upload" onClick={this.uploadResume} style={{marginBottom: "1rem"}}>
                                            <i className="bx bx-cloud-upload bx-sm"></i>
                                            Upload Resume
                                        </button>
                                        <input id="resume" type="file" multiple style={{ display: "none" }} accept=".pdf" />
                                    </div>
                                    <div className="row">
                                        <label className="upload-txt">
                                            Bulk Upload (.pdf only; max:10)
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div style={{marginTop: "2rem"}} className="d-flex justify-content-center">
                                <button
                                    type="button"
                                    className="default-btn1"
                                    style={{ paddingLeft: "25px" }}
                                    onClick={this.closeForm}
                                >
                                    Cancel
                                    <span></span>
                                </button>
                            </div>
                        </div>
                    }
                </div>
            </React.Fragment>
        )
    }
}

function extractEmail(text) {
    return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
}

function extractName(text) {
    let array = text.split(" ");
    let name = "";
    let count = 0;
    for (let i = 0; i < 3; i++) {
        if (array[i] != "" && count < 1) {
            name += array[i] + " ";
            count++;
        }
        else if (array[i] != "" && count < 2) {
            name += array[i];
            count++
        }
    }
    return name;
}

export default withRouter(connect(null, {addNewApplyCandidateByCv})(
    NewCandidateAdditionForm
));