import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { useParams } from 'react-router-dom';
//import PageTitleArea from '../../Common/PageTitleArea';
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from "react-share";
//import { Link } from "react-router-dom";
import { register } from "../../../redux/actions/auth_actions";
import { createMessage } from "../../../redux/actions/message_actions";
import { addNewApplyCandidate, getCurrentJobs } from "../../../redux/actions/job_actions";
import parse from 'html-react-parser';
import MediaQuery from 'react-responsive';
import { confirmAlert } from 'react-confirm-alert';
var ReactS3Uploader = require("react-s3-uploader");
import RichTextEditor from 'react-rte';

const ApplyJob = (props) => {
    var uri = window.location.search;
    var job_id = uri.substring(1, uri.length).split("=")[1];
    var url = String(window.location);
    const { companyName } = useParams()
    useEffect(() => {
        if (job_id != null && job_id != "" && companyName != null && companyName != "") {
            props.getCurrentJobs(job_id, companyName);
        }
    }, []);
    const [Applied, setApplied] = useState(false);
    const [selected, setSelected] = useState(false);
    const [resume, setResume] = useState(null);
    const [resume_url, setResumeURL] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [fisrtname, setFristname] = useState("");
    const [lastname, setLastname] = useState("");
    const [phone, setPhone] = useState("");
    const [location, setLocation] = useState("");
    const [linkedinurl, setLinkedinurl] = useState("");

    function applySubmit(e) {
        e.preventDefault();
        let gender = null;
        let race = null;
        // get gender and race
        gender = document.querySelector('input[name="gender"]:checked')?.value;
        race = document.querySelector('input[name="race"]:checked')?.value;
        // check eeo form filling
        if (props.job.eeo_ques_req == "1" && (gender == null || race == null)) {
            return confirmAlert({
                title: "EEO Survey Required!",
                message: "Please fill out the EEO Survey.",
                buttons: [
                    {
                        label: 'Ok'
                    }
                ]
            });
        }
        // no eeo survey, set gender and race to empty string
        if (props.job.eeo_ques_req == "0") {
            gender = "";
            race = "";
        }
        if (resume_url == "") {
            return confirmAlert({
                title: "Resume Required!",
                message: "Please attach your resume to submit.",
                buttons: [
                    {
                        label: 'Ok'
                    }
                ]
            });
        }
        if (((job_id == null || job_id == "") ? "" : props.job.emails.map(v => v.toLowerCase())).includes(email.toLowerCase())) {
            return confirmAlert({
                title: "Already Applied!",
                message: "You have already applied this job.",
                buttons: [
                    {
                        label: 'Ok'
                    }
                ]
            });
        }
        if (fisrtname.trim() == null || fisrtname.trim() == "" || fisrtname.includes("@")
            || fisrtname.includes("!") || fisrtname.includes("#") || fisrtname.includes("0") || fisrtname.includes("1")
            || fisrtname.includes("2") || fisrtname.includes("3") || fisrtname.includes("4") || fisrtname.includes("5")
            || fisrtname.includes("6") || fisrtname.includes("7") || fisrtname.includes("8") || fisrtname.includes("9")
            || fisrtname.includes("/") || fisrtname.includes("(") || fisrtname.includes("%") || fisrtname.includes("-")
            || fisrtname.includes("+") || fisrtname.includes("=") || fisrtname.includes(";") || fisrtname.includes("^")) {
            return alert("Firstname Invalid Format!")
        }
        if (lastname.trim() == null || lastname.trim() == "" || lastname.includes("@")
            || lastname.includes("!") || lastname.includes("#") || lastname.includes("0") || lastname.includes("1")
            || lastname.includes("2") || lastname.includes("3") || lastname.includes("4") || lastname.includes("5")
            || lastname.includes("6") || lastname.includes("7") || lastname.includes("8") || lastname.includes("9")
            || lastname.includes("/") || lastname.includes("(") || lastname.includes("%") || lastname.includes("-")
            || lastname.includes("+") || lastname.includes("=") || lastname.includes(";") || lastname.includes("^")) {
            return alert("Lastname Invalid Format!")
        }
        if (username == "" || username == null) {
            let data = {
                job_id: props?.job?.id,
                firstname: fisrtname,
                lastname: lastname,
                phone: phone,
                email: email.toLowerCase(),
                location: location,
                resume_url: resume_url,
                linkedinurl: linkedinurl,
                gender: gender,
                race: race,
            };
            props.addNewApplyCandidate(data);
            props.uploader.uploadFile(resume);
        } else {
            if (passwordsMatch()) {
                props.register(
                    username,
                    email.toLowerCase(),
                    password
                );
                let data = {
                    job_id: props?.job?.id,
                    firstname: fisrtname,
                    lastname: lastname,
                    phone: phone,
                    email: email.toLowerCase(),
                    location: location,
                    resume_url: resume_url,
                    linkedinurl: linkedinurl,
                    gender: gender,
                    race: race,
                };
                setTimeout(() => { props.addNewApplyCandidate(data); }, 300);
                props.uploader.uploadFile(resume);
            }
        }
    }
    function applySubmit1(e) {
        e.preventDefault();
        let gender = null;
        let race = null;
        // get gender and race
        gender = document.querySelector('input[name="gender"]:checked')?.value;
        race = document.querySelector('input[name="race"]:checked')?.value;
        // check eeo form filling
        if (props.job.eeo_ques_req == "1" && (gender == null || race == null)) {
            return confirmAlert({
                title: "EEO Survey Required!",
                message: "Please fill out the EEO Survey.",
                buttons: [
                    {
                        label: 'Ok'
                    }
                ]
            });
        }
        // no EEO survey, set gender and race to empty string
        if (props.job.eeo_ques_req == "0") {
            gender = "";
            race = "";
        }
        if (resume_url == "") {
            return confirmAlert({
                title: "Resume Required!",
                message: "Please attach your resume to submit.",
                buttons: [
                    {
                        label: 'Ok'
                    }
                ]
            });
        }
        if (((job_id == null || job_id == "") ? "" : props.job.emails.map(v => v.toLowerCase())).includes(email.toLowerCase())) {
            return confirmAlert({
                title: "Already Applied!",
                message: "You have already applied this job.",
                buttons: [
                    {
                        label: 'Ok'
                    }
                ]
            });
        }
        if (fisrtname.trim() == null || fisrtname.trim() == "" || fisrtname.includes("@")
            || fisrtname.includes("!") || fisrtname.includes("#") || fisrtname.includes("0") || fisrtname.includes("1")
            || fisrtname.includes("2") || fisrtname.includes("3") || fisrtname.includes("4") || fisrtname.includes("5")
            || fisrtname.includes("6") || fisrtname.includes("7") || fisrtname.includes("8") || fisrtname.includes("9")
            || fisrtname.includes("/") || fisrtname.includes("(") || fisrtname.includes("%") || fisrtname.includes("-")
            || fisrtname.includes("+") || fisrtname.includes("=") || fisrtname.includes(";") || fisrtname.includes("^")) {
            return alert("Firstname Invalid Format!")
        }
        if (lastname.trim() == null || lastname.trim() == "" || lastname.includes("@")
            || lastname.includes("!") || lastname.includes("#") || lastname.includes("0") || lastname.includes("1")
            || lastname.includes("2") || lastname.includes("3") || lastname.includes("4") || lastname.includes("5")
            || lastname.includes("6") || lastname.includes("7") || lastname.includes("8") || lastname.includes("9")
            || lastname.includes("/") || lastname.includes("(") || lastname.includes("%") || lastname.includes("-")
            || lastname.includes("+") || lastname.includes("=") || lastname.includes(";") || lastname.includes("^")) {
            return alert("Lastname Invalid Format!")
        }
        let data = {
            job_id: props?.job?.id,
            firstname: fisrtname,
            lastname: lastname,
            phone: phone,
            email: email.toLowerCase(),
            location: location,
            resume_url: resume_url,
            linkedinurl: linkedinurl,
            gender: gender,
            race: race,
        };
        props.addNewApplyCandidate(data);
        props.uploader.uploadFile(resume);
    }
    function onChange1(e) {
        setUsername(e.target.value);
    };
    function onChange2(e) {
        setPassword(e.target.value);
    };
    function onChange3(e) {
        setPassword2(e.target.value);
    };
    function onChange4(e) {
        setFristname(e.target.value);
    };
    function onChange5(e) {
        setLastname(e.target.value);
    };
    function onChange6(e) {
        setPhone(e.target.value);
    };
    function onChange7(e) {
        setLocation(e.target.value);
    };
    function onChange8(e) {
        setEmail(e.target.value);
    };
    function onChange9(e) {
        setLinkedinurl(e.target.value);
    };
    function passwordsMatch() {
        if (password !== password2) {
            props.createMessage({ passwordsNotMatch: "Passwords don't match" });
            return false;
        }
        return true;
    };
    function selectFile() {
        // toggle input element
        let input = document.getElementById('uploadFile');
        input.click();

        // prune selected file
        input.onchange = () => {
            // get selected file
            let resume = input.files[0];
            let name = resume.name;
            let size = resume.size;

            // check file size
            if (size > 5000000) {
                alert("Please upload resume that less than 5MB!");
            }

            // check file type
            let docType = name.slice(-3);
            if (docType === "pdf") {
                setSelected(true);
                setLabel(name);
                //set cvName &　resume states
                let timestamp = Date.parse(new Date());
                let suffix = ".pdf";
                let cvName = timestamp + suffix;
                //                console.log("cvName is", cvName);
                const newResume = new File([resume], cvName, { type: resume.type });
                //                console.log("resume is", resume);
                setResume(newResume);
                let url = "https://hirebeat-interview-resume.s3.amazonaws.com/" + cvName;
                //let url = "https://hirebeat-test-video-bucket.s3.amazonaws.com/" + cvName;
                setResumeURL(url);
            } else {
                alert("Wrong File Type! Please upload PDF version of your resume");
            }
        }
    }
    function setLabel(name) {
        let label = document.getElementById('fileName');
        label.textContent = name;
    }
    function onUploadError(err) {
        console.log(err);
    };

    function onUploadFinish() {
        alert("Application submitted!");
        const { history } = props;
        if (history) history.push({
            pathname: "/dashboard"
        });
    };
    function copyAlert() {
        confirmAlert({
            title: "URL Coppied to Clipboard!",
            message: "",
            buttons: [
                {
                    label: 'Ok'
                }
            ]
        });
    }
    return (
        <React.Fragment>
            <MediaQuery minDeviceWidth={1224}>
                {(props?.job?.id == "" || props?.job?.id == null) ?
                    <div><h3>Please enter a valid job url!</h3></div> :
                    <div className="py-5" style={{ background: "#E8EDFC", minWidth: "1290px" }}>
                        <div style={{ marginLeft: "auto", marginRight: "auto", width: "70%", minHeight: "800px", borderRadius: "10px", background: "white", position: "relative" }}>
                            <img style={{ height: "12rem", width: "100%" }} src="https://hirebeat-assets.s3.amazonaws.com/Employer/Top-Section.png" alt="icon" />
                            <img style={{ width: "7rem", marginLeft: "2rem", marginTop: "-3.5rem" }} src={(job_id == null || job_id == "") ? "" : props.job.company_logo} alt="icon" />
                            <h1 className="ml-5 mt-5" style={{ fontWeight: "600", fontSize: "2.5rem", color: "#090D3A" }}>{(job_id == null || job_id == "") ? "" : props.job.job_title}</h1>
                            <h2 className="ml-5 mt-2" style={{ fontWeight: "600", fontSize: "1.5rem", color: "#67A3F3" }}>{(job_id == null || job_id == "") ? "" : props.job.company_name}
                                <a style={{ textDecoration: "none", color: "#7C94B5", fontSize: "0.9rem", marginLeft: "0.8rem" }} target="_blank" rel="noreferrer" href={"https://hirebeat.co/company-branding/" + ((job_id == null || job_id == "") ? "" : props.job.company_name)}>View all jobs posted <i class='bx-fw bx bx-link-external bx-xs'></i></a>
                            </h2>
                            <div className="row pl-3">
                                <div className="col-8 pl-5 mt-2 pb-5" style={{ paddingRight: "3.7rem" }}>
                                    <p style={{ fontWeight: "600", fontSize: "0.9rem", color: "#7C94B5", lineHeight: "0.6rem" }}>{(job_id == null || job_id == "") ? "" : props.job.job_level} • {(job_id == null || job_id == "") ? "" : props.job.job_type}</p>
                                    <p style={{ fontWeight: "600", fontSize: "0.9rem", color: "#7C94B5", lineHeight: "0.6rem" }}>{(job_id == null || job_id == "") ? "" : props.job.job_location.split(",")[0]} {(job_id == null || job_id == "") ? "" : props.job.job_location.split(",")[1]}</p>
                                    <p style={{ fontWeight: "600", fontSize: "0.9rem", color: "#7C94B5", lineHeight: "0.6rem" }}>{(props.job.job_id.length) > 0 ? ("Job ID:" + ((job_id == null || job_id == "") ? "" : props.job.job_id)) : ""}</p>
                                    <p className="mt-5" style={{ fontWeight: "600", fontSize: "0.9rem", color: "#7C94B5" }}>Posted on {(job_id == null || job_id == "") ? "" : (props.job.create_date?.split('T')[0])}</p>
                                    <div>
                                        <div>
                                            <h2 className="mb-3">Company Overview</h2>
                                            <div className="mb-3">
                                                {(job_id == null || job_id == "") ? null :
                                                    <RichTextEditor
                                                        value={RichTextEditor.createValueFromString(props.job.company_overview, 'html')}
                                                        onChange={() => { }}
                                                        readOnly={true}
                                                        className="text-editor"
                                                    />
                                                }
                                            </div>
                                        </div>
                                        <h2 className="mb-3 mt-5">Job Description</h2>
                                        <div className="mb-3">
                                            {(job_id == null || job_id == "") ? null :
                                                <RichTextEditor
                                                    value={RichTextEditor.createValueFromString(props.job.job_description, 'html')}
                                                    onChange={() => { }}
                                                    readOnly={true}
                                                    className="text-editor"
                                                />
                                            }
                                        </div>
                                        {props.job.eeo_req == "1" &&
                                            <div>
                                                <h2 className="mb-2 mt-3">EEO Statement</h2>
                                                <p className="mb-4 mt-1" style={{ color: "#090d3a" }}>{(job_id == null || job_id == "") ? "" : props.job.company_name} is an Equal Opportunity employer. We celebrate diversity and do not discriminate based on race, religion, color, national origin, sex, sexual orientation, age, veteran status, disability status, or any other applicable characteristics protected by law.</p>
                                            </div>}
                                    </div>
                                    {!Applied &&
                                        <div>
                                            {(props.profile.is_employer || props?.job?.id == "" || props?.job?.id == null) ?
                                                <div>
                                                    {((job_id == null || job_id == "") ? false : props.job.is_closed) ?
                                                        <button id="apply-now" className="default-btn" style={{ paddingLeft: "5rem", paddingRight: "5rem", backgroundColor: "#7d7d7d" }}>
                                                            Job Closed
                                                        </button> :
                                                        <button id="apply-now" className="default-btn" style={{ paddingLeft: "5rem", paddingRight: "5rem" }}>
                                                            Apply Now
                                                        </button>}
                                                </div> :
                                                <div>
                                                    {((job_id == null || job_id == "") ? false : props.job.is_closed) ?
                                                        <button className="default-btn" style={{ paddingLeft: "5rem", paddingRight: "5rem", backgroundColor: "#7d7d7d" }}>
                                                            Job Closed
                                                        </button> :
                                                        <button id="apply-now" className="default-btn" onClick={() => { setApplied(true) }} style={{ paddingLeft: "5rem", paddingRight: "5rem" }}>
                                                            Apply Now
                                                        </button>}
                                                </div>
                                            }
                                        </div>
                                    }
                                    {(Applied && !props.auth.isAuthenticated) &&
                                        <form onSubmit={applySubmit}>
                                            <div>
                                                <div className="px-5 pt-3 light-blue-border">
                                                    <h2 className="mt-3 mb-5" style={{ color: "#090D3A" }}>
                                                        Application
                                                    </h2>
                                                    <div class="form-row">
                                                        <div class="form-group col-md-6">
                                                            <label className="job-apply-char1" for="inputEmail4">First Name</label><span className="job-apply-char2">*</span>
                                                            <input type="text" class="form-control" id="inputEmail4" onChange={onChange4} required />
                                                        </div>
                                                        <div class="form-group col-md-6">
                                                            <label className="job-apply-char1" for="inputPassword4">Last Name</label><span className="job-apply-char2">*</span>
                                                            <input type="text" class="form-control" id="inputPassword4" onChange={onChange5} required />
                                                        </div>
                                                    </div>
                                                    <div class="form-row">
                                                        <div class="form-group col-md-6">
                                                            <label className="job-apply-char1" for="inputEmail4">Email</label><span className="job-apply-char2">*</span>
                                                            <input type="email" class="form-control" id="inputEmail4" onChange={onChange8} required />
                                                        </div>
                                                        {((job_id == null || job_id == "") ? "" : props.job.pho_req) == "0" &&
                                                            <div class="form-group col-md-6">
                                                                <label className="job-apply-char1" >Phone Number</label><span className="job-apply-char2">*</span>
                                                                <input type="text" class="form-control" onChange={onChange6} required />
                                                            </div>}
                                                        {((job_id == null || job_id == "") ? "" : props.job.pho_req) == "1" &&
                                                            <div class="form-group col-md-6">
                                                                <label className="job-apply-char1" >Phone Number</label>
                                                                <input type="text" class="form-control" onChange={onChange6} />
                                                            </div>}
                                                    </div>
                                                    {((job_id == null || job_id == "") ? "" : props.job.loc_req) == "0" &&
                                                        <div class="form-group">
                                                            <label className="job-apply-char1" for="inputAddress">Location</label><span className="job-apply-char2">*</span>
                                                            <input type="text" class="form-control" id="inputAddress" placeholder="City, State" onChange={onChange7} required />
                                                        </div>}
                                                    {((job_id == null || job_id == "") ? "" : props.job.loc_req) == "1" &&
                                                        <div class="form-group">
                                                            <label className="job-apply-char1" for="inputAddress">Location</label>
                                                            <input type="text" class="form-control" id="inputAddress" placeholder="City, State" onChange={onChange7} />
                                                        </div>}
                                                    {((job_id == null || job_id == "") ? "" : props.job.lin_req) == "0" &&
                                                        <div class="form-group">
                                                            <label className="job-apply-char1" for="inputAddress">LinkedIn URL</label><span className="job-apply-char2">*</span>
                                                            <input type="text" class="form-control" onChange={onChange9} required />
                                                        </div>}
                                                    {((job_id == null || job_id == "") ? "" : props.job.lin_req) == "1" &&
                                                        <div class="form-group">
                                                            <label className="job-apply-char1" for="inputAddress">LinkedIn URL</label>
                                                            <input type="text" class="form-control" onChange={onChange9} />
                                                        </div>}
                                                    <div class="form-row mt-4">
                                                        <div class="form-group col-md-6">
                                                            <label className="job-apply-char1" for="inputCity">Resume</label><span className="job-apply-char2">*</span>
                                                        </div>
                                                    </div>
                                                    <button onClick={selectFile} className="default-btn py-2 mb-4" type="button" style={{ fontSize: "1.2rem", color: "#090D3A", background: "#E8EDFC", paddingLeft: "50px", paddingRight: "50px" }}>
                                                        Attach
                                                    </button>
                                                    {
                                                        selected ? (
                                                            <div>
                                                                <i className="bx bxs-file-pdf resume-name"></i>
                                                                <label className="resume-name" id="fileName"></label>
                                                                <label className="resume-success" style={{ marginLeft: "0.5rem" }}>selected</label>
                                                                <i className="bx bxs-check-circle resume-success" style={{ marginLeft: "1rem" }}></i>
                                                            </div>
                                                        ) : <span className="ml-3 my-auto" style={{ color: "#ff0000" }}>Support .pdf only</span>
                                                    }
                                                    <div class="form-group row">
                                                        <div class="col-sm-10">
                                                            <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" id="gridCheck1" required />
                                                                <label style={{ color: "#B0B0B0" }} class="form-check-label mb-4" for="gridCheck1">
                                                                    I have read and agreed to the
                                                                </label><a style={{ color: "#ff612f" }} href="/term" target="_blank" rel="noreferrer"> Terms & Conditions</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/*  EEO Survey */}
                                                    {props.job.eeo_ques_req == "1" &&
                                                        <div class="form-group">
                                                            <h3 className="job-apply-char1">Help us be an equal opportunity employer</h3>
                                                            <p className="job-apply-char1" style={{ lineHeight: "20px", fontSize: "0.9375rem" }}>
                                                                You are requested to fill in the personal data below.
                                                                This information will only be used for government reporting purposes and
                                                                not as selection criteria for the hiring process.
                                                            </p>
                                                            <div class="form-group">
                                                                <label className="job-apply-char1">Gender</label><span className="job-apply-char2">*</span>
                                                                <div>
                                                                    <label className="job-apply-char1"><input type="radio" name="gender" value="Male" style={{ marginRight: "1rem" }}></input>Male</label>
                                                                </div>
                                                                <div>
                                                                    <label className="job-apply-char1"><input type="radio" name="gender" value="Female" style={{ marginRight: "1rem" }}></input>Female</label>
                                                                </div>
                                                                <div>
                                                                    <label className="job-apply-char1"><input type="radio" name="gender" value="N/A" style={{ marginRight: "1rem" }}></input>I do not wish to disclose</label>
                                                                </div>
                                                            </div>
                                                            <div class="form-group">
                                                                <label className="job-apply-char1">Race or ethnicity</label><span className="job-apply-char2">*</span>
                                                                <div>
                                                                    <label className="job-apply-char1">
                                                                        <input type="radio" name="race" value="Hispanic or Latino" style={{ marginRight: "1rem" }}></input>Hispanic or Latino
                                                                        <span className="tool_tip ml-2">
                                                                            <i class='bx-fw bx bxs-info-circle' style={{ color: "#dfdfdf" }}></i>
                                                                            <p className="tool_submenu container" style={{ width: "14rem" }}>
                                                                                <div>
                                                                                    A person of Cuban, Mexican, Puerto Rican,
                                                                                    South or Central American, or other Spanish
                                                                                    culture or origin regardless of race.
                                                                                </div>
                                                                            </p>
                                                                        </span>
                                                                    </label>
                                                                </div>
                                                                <div>
                                                                    <label className="job-apply-char1">
                                                                        <input type="radio" name="race" value="White" style={{ marginRight: "1rem" }}></input>White (Not Hispanic or Latino)
                                                                        <span className="tool_tip ml-2">
                                                                            <i class='bx-fw bx bxs-info-circle' style={{ color: "#dfdfdf" }}></i>
                                                                            <p className="tool_submenu container" style={{ width: "14rem" }}>
                                                                                <div>
                                                                                    A person having origins in any of the original
                                                                                    peoples of Europe, the Middle East or North Africa.
                                                                                </div>
                                                                            </p>
                                                                        </span>
                                                                    </label>
                                                                </div><div>
                                                                    <label className="job-apply-char1">
                                                                        <input type="radio" name="race" value="Black or African American" style={{ marginRight: "1rem" }}></input>Black or African American (Not Hispanic or Latino)
                                                                        <span className="tool_tip ml-2">
                                                                            <i class='bx-fw bx bxs-info-circle' style={{ color: "#dfdfdf" }}></i>
                                                                            <p className="tool_submenu container" style={{ width: "14rem" }}>
                                                                                <div>
                                                                                    A person having origins in any of the black racial groups of Africa.
                                                                                </div>
                                                                            </p>
                                                                        </span>
                                                                    </label>
                                                                </div>
                                                                <div>
                                                                    <label className="job-apply-char1">
                                                                        <input type="radio" name="race" value="Native Hawaiian or Pacific Islander" style={{ marginRight: "1rem" }}></input>Native Hawaiian or Pacific Islander (Not Hispanic or Latino)
                                                                        <span className="tool_tip ml-2">
                                                                            <i class='bx-fw bx bxs-info-circle' style={{ color: "#dfdfdf" }}></i>
                                                                            <p className="tool_submenu container" style={{ width: "14rem" }}>
                                                                                <div>
                                                                                    A person having origins in any of the peoples
                                                                                    of Hawaii, Guam, Samoa or other Pacific Islands.
                                                                                </div>
                                                                            </p>
                                                                        </span>
                                                                    </label>
                                                                </div>
                                                                <div>
                                                                    <label className="job-apply-char1">
                                                                        <input type="radio" name="race" value="Asian" style={{ marginRight: "1rem" }}></input>Asian  (Not Hispanic or Latino)
                                                                        <span className="tool_tip ml-2">
                                                                            <i class='bx-fw bx bxs-info-circle' style={{ color: "#dfdfdf" }}></i>
                                                                            <p className="tool_submenu container" style={{ width: "14rem" }}>
                                                                                <div>
                                                                                    A person having origins in any of the original
                                                                                    peoples of the Far East, Southeast Asia
                                                                                    or the Indian Subcontinent, including,
                                                                                    for example, Cambodia, China, India, Japan,
                                                                                    Korea, Malaysia, Pakistan, the Philippine
                                                                                    Islands, Thailand and Vietnam.
                                                                                </div>
                                                                            </p>
                                                                        </span>
                                                                    </label>
                                                                </div>
                                                                <div>
                                                                    <label className="job-apply-char1">
                                                                        <input type="radio" name="race" value="Native American or Alaska Native" style={{ marginRight: "1rem" }}></input>Native American or Alaska Native (Not Hispanic or Latino)
                                                                        <span className="tool_tip ml-2">
                                                                            <i class='bx-fw bx bxs-info-circle' style={{ color: "#dfdfdf" }}></i>
                                                                            <p className="tool_submenu container" style={{ width: "14rem" }}>
                                                                                <div>
                                                                                    A person having origins in any of the
                                                                                    original peoples of North and South America
                                                                                    (including Central America) and who maintains
                                                                                    tribal affiliation or community attachment.
                                                                                </div>
                                                                            </p>
                                                                        </span>
                                                                    </label>
                                                                </div>
                                                                <div>
                                                                    <label className="job-apply-char1">
                                                                        <input type="radio" name="race" value="Two or more races" style={{ marginRight: "1rem" }}></input>Two or more races (Not Hispanic or Latino)
                                                                        <span className="tool_tip ml-2">
                                                                            <i class='bx-fw bx bxs-info-circle' style={{ color: "#dfdfdf" }}></i>
                                                                            <p className="tool_submenu container" style={{ width: "14rem" }}>
                                                                                <div>
                                                                                    Person who identify with more than one of the above five races.
                                                                                </div>
                                                                            </p>
                                                                        </span>
                                                                    </label>
                                                                </div>
                                                                <div>
                                                                    <label className="job-apply-char1">
                                                                        <input type="radio" name="race" value="N/A" style={{ marginRight: "1rem" }}></input>I do not wish to disclose
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    }
                                                </div>
                                                <div className="light-blue-border mt-4 px-5" style={{ marginBottom: "6rem" }}>
                                                    <h2 className="mt-4 mb-5" style={{ color: "#090D3A" }}>
                                                        Create Account
                                                    </h2>
                                                    <div class="form-group">
                                                        <label className="job-apply-char1" for="inputAddress">Email/Username</label>
                                                        <input type="text" class="form-control" id="inputAddress" placeholder="Create a username" onChange={onChange1} />
                                                    </div>
                                                    <div class="form-group">
                                                        <label className="job-apply-char1" for="inputAddress">Password</label>
                                                        <input type="password" class="form-control" id="inputAddress" placeholder="At least 8 characters" onChange={onChange2} minLength="8" />
                                                    </div>
                                                    <div class="form-group">
                                                        <label className="job-apply-char1" for="inputAddress">Confirm Password</label>
                                                        <input type="password" class="form-control" id="inputAddress" placeholder="Enter your password again" onChange={onChange3} minLength="8" />
                                                    </div>
                                                </div>
                                                <button className="default-btn" style={{ position: "absolute", right: "3.7rem", bottom: "5rem", paddingLeft: "25px" }}>
                                                    Submit Application
                                                </button>
                                            </div>
                                        </form>
                                    }
                                    {(Applied && props.auth.isAuthenticated) &&
                                        <form onSubmit={applySubmit1}>
                                            <div>
                                                <div className="px-5 pt-3 light-blue-border">
                                                    <h2 className="mt-3 mb-5" style={{ color: "#090D3A" }}>
                                                        Application
                                                    </h2>
                                                    <div class="form-row">
                                                        <div class="form-group col-md-6">
                                                            <label className="job-apply-char1" for="inputEmail4">First Name</label><span className="job-apply-char2">*</span>
                                                            <input type="text" class="form-control" id="inputEmail4" onChange={onChange4} required />
                                                        </div>
                                                        <div class="form-group col-md-6">
                                                            <label className="job-apply-char1" for="inputPassword4">Last Name</label><span className="job-apply-char2">*</span>
                                                            <input type="text" class="form-control" id="inputPassword4" onChange={onChange5} required />
                                                        </div>
                                                    </div>
                                                    <div class="form-row">
                                                        <div class="form-group col-md-6">
                                                            <label className="job-apply-char1" for="inputEmail4">Email</label><span className="job-apply-char2">*</span>
                                                            <input type="email" class="form-control" id="inputEmail4" onChange={onChange8} required />
                                                        </div>
                                                        {((job_id == null || job_id == "") ? "" : props.job.pho_req) == "0" &&
                                                            <div class="form-group col-md-6">
                                                                <label className="job-apply-char1" >Phone Number</label><span className="job-apply-char2">*</span>
                                                                <input type="text" class="form-control" onChange={onChange6} required />
                                                            </div>}
                                                        {((job_id == null || job_id == "") ? "" : props.job.pho_req) == "1" &&
                                                            <div class="form-group col-md-6">
                                                                <label className="job-apply-char1" >Phone Number</label>
                                                                <input type="text" class="form-control" onChange={onChange6} />
                                                            </div>}
                                                    </div>
                                                    {((job_id == null || job_id == "") ? "" : props.job.loc_req) == "0" &&
                                                        <div class="form-group">
                                                            <label className="job-apply-char1" for="inputAddress">Location</label><span className="job-apply-char2">*</span>
                                                            <input type="text" class="form-control" id="inputAddress" placeholder="City, State" onChange={onChange7} required />
                                                        </div>}
                                                    {((job_id == null || job_id == "") ? "" : props.job.loc_req) == "1" &&
                                                        <div class="form-group">
                                                            <label className="job-apply-char1" for="inputAddress">Location</label>
                                                            <input type="text" class="form-control" id="inputAddress" placeholder="City, State" onChange={onChange7} />
                                                        </div>}
                                                    {((job_id == null || job_id == "") ? "" : props.job.lin_req) == "0" &&
                                                        <div class="form-group">
                                                            <label className="job-apply-char1" for="inputAddress">LinkedIn URL</label><span className="job-apply-char2">*</span>
                                                            <input type="text" class="form-control" onChange={onChange9} required />
                                                        </div>}
                                                    {((job_id == null || job_id == "") ? "" : props.job.lin_req) == "1" &&
                                                        <div class="form-group">
                                                            <label className="job-apply-char1" for="inputAddress">LinkedIn URL</label>
                                                            <input type="text" class="form-control" onChange={onChange9} />
                                                        </div>}
                                                    <div class="form-row mt-4">
                                                        <div class="form-group col-md-6">
                                                            <label className="job-apply-char1" for="inputCity">Resume</label><span className="job-apply-char2">*</span>
                                                        </div>
                                                    </div>
                                                    <button onClick={selectFile} className="default-btn py-2 mb-4" type="button" style={{ fontSize: "1.2rem", color: "#090D3A", background: "#E8EDFC", paddingLeft: "50px", paddingRight: "50px" }}>
                                                        Attach
                                                    </button>
                                                    {
                                                        selected ? (
                                                            <div>
                                                                <br />
                                                                <i className="bx bxs-file-pdf resume-name"></i>
                                                                <label className="resume-name" id="fileName"></label>
                                                                <label className="resume-success" style={{ marginLeft: "0.5rem" }}>selected</label>
                                                                <i className="bx bxs-check-circle resume-success" style={{ marginLeft: "1rem" }}></i>
                                                            </div>
                                                        ) : <span className="ml-3 my-auto" style={{ color: "#ff0000" }}>Support .pdf only</span>
                                                    }
                                                    <div class="form-group row">
                                                        <div class="col-sm-10">
                                                            <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" id="gridCheck1" required />
                                                                <label style={{ color: "#B0B0B0" }} class="form-check-label mb-4" for="gridCheck1">
                                                                    I have read and agreed to the
                                                                </label><a style={{ color: "#ff612f" }} href="/term" target="_blank" rel="noreferrer"> Terms & Conditions</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/*  EEO Survey */}
                                                    {props.job.eeo_ques_req == "1" &&
                                                        <div class="form-group">
                                                            <h3 className="job-apply-char1">Help us be an equal opportunity employer</h3>
                                                            <p className="job-apply-char1" style={{ lineHeight: "20px", fontSize: "0.9375rem" }}>
                                                                You are requested to fill in the personal data below.
                                                                This information will only be used for government reporting purposes and
                                                                not as selection criteria for the hiring process.
                                                            </p>
                                                            <div class="form-group">
                                                                <label className="job-apply-char1">Gender</label><span className="job-apply-char2">*</span>
                                                                <div>
                                                                    <label className="job-apply-char1"><input type="radio" name="gender" value="Male" style={{ marginRight: "1rem" }}></input>Male</label>
                                                                </div>
                                                                <div>
                                                                    <label className="job-apply-char1"><input type="radio" name="gender" value="Female" style={{ marginRight: "1rem" }}></input>Female</label>
                                                                </div>
                                                                <div>
                                                                    <label className="job-apply-char1"><input type="radio" name="gender" value="N/A" style={{ marginRight: "1rem" }}></input>I do not wish to disclose</label>
                                                                </div>
                                                            </div>
                                                            <div class="form-group">
                                                                <label className="job-apply-char1">Race or ethnicity</label><span className="job-apply-char2">*</span>
                                                                <div>
                                                                    <label className="job-apply-char1">
                                                                        <input type="radio" name="race" value="Hispanic or Latino" style={{ marginRight: "1rem" }}></input>Hispanic or Latino
                                                                        <span className="tool_tip ml-2">
                                                                            <i class='bx-fw bx bxs-info-circle' style={{ color: "#dfdfdf" }}></i>
                                                                            <p className="tool_submenu container" style={{ width: "14rem" }}>
                                                                                <div>
                                                                                    A person of Cuban, Mexican, Puerto Rican,
                                                                                    South or Central American, or other Spanish
                                                                                    culture or origin regardless of race.
                                                                                </div>
                                                                            </p>
                                                                        </span>
                                                                    </label>
                                                                </div>
                                                                <div>
                                                                    <label className="job-apply-char1">
                                                                        <input type="radio" name="race" value="White" style={{ marginRight: "1rem" }}></input>White (Not Hispanic or Latino)
                                                                        <span className="tool_tip ml-2">
                                                                            <i class='bx-fw bx bxs-info-circle' style={{ color: "#dfdfdf" }}></i>
                                                                            <p className="tool_submenu container" style={{ width: "14rem" }}>
                                                                                <div>
                                                                                    A person having origins in any of the original
                                                                                    peoples of Europe, the Middle East or North Africa.
                                                                                </div>
                                                                            </p>
                                                                        </span>
                                                                    </label>
                                                                </div><div>
                                                                    <label className="job-apply-char1">
                                                                        <input type="radio" name="race" value="Black or African American" style={{ marginRight: "1rem" }}></input>Black or African American (Not Hispanic or Latino)
                                                                        <span className="tool_tip ml-2">
                                                                            <i class='bx-fw bx bxs-info-circle' style={{ color: "#dfdfdf" }}></i>
                                                                            <p className="tool_submenu container" style={{ width: "14rem" }}>
                                                                                <div>
                                                                                    A person having origins in any of the black racial groups of Africa.
                                                                                </div>
                                                                            </p>
                                                                        </span>
                                                                    </label>
                                                                </div>
                                                                <div>
                                                                    <label className="job-apply-char1">
                                                                        <input type="radio" name="race" value="Native Hawaiian or Pacific Islander" style={{ marginRight: "1rem" }}></input>Native Hawaiian or Pacific Islander (Not Hispanic or Latino)
                                                                        <span className="tool_tip ml-2">
                                                                            <i class='bx-fw bx bxs-info-circle' style={{ color: "#dfdfdf" }}></i>
                                                                            <p className="tool_submenu container" style={{ width: "14rem" }}>
                                                                                <div>
                                                                                    A person having origins in any of the peoples
                                                                                    of Hawaii, Guam, Samoa or other Pacific Islands.
                                                                                </div>
                                                                            </p>
                                                                        </span>
                                                                    </label>
                                                                </div>
                                                                <div>
                                                                    <label className="job-apply-char1">
                                                                        <input type="radio" name="race" value="Asian" style={{ marginRight: "1rem" }}></input>Asian  (Not Hispanic or Latino)
                                                                        <span className="tool_tip ml-2">
                                                                            <i class='bx-fw bx bxs-info-circle' style={{ color: "#dfdfdf" }}></i>
                                                                            <p className="tool_submenu container" style={{ width: "14rem" }}>
                                                                                <div>
                                                                                    A person having origins in any of the original
                                                                                    peoples of the Far East, Southeast Asia
                                                                                    or the Indian Subcontinent, including,
                                                                                    for example, Cambodia, China, India, Japan,
                                                                                    Korea, Malaysia, Pakistan, the Philippine
                                                                                    Islands, Thailand and Vietnam.
                                                                                </div>
                                                                            </p>
                                                                        </span>
                                                                    </label>
                                                                </div>
                                                                <div>
                                                                    <label className="job-apply-char1">
                                                                        <input type="radio" name="race" value="Native American or Alaska Native" style={{ marginRight: "1rem" }}></input>Native American or Alaska Native (Not Hispanic or Latino)
                                                                        <span className="tool_tip ml-2">
                                                                            <i class='bx-fw bx bxs-info-circle' style={{ color: "#dfdfdf" }}></i>
                                                                            <p className="tool_submenu container" style={{ width: "14rem" }}>
                                                                                <div>
                                                                                    A person having origins in any of the
                                                                                    original peoples of North and South America
                                                                                    (including Central America) and who maintains
                                                                                    tribal affiliation or community attachment.
                                                                                </div>
                                                                            </p>
                                                                        </span>
                                                                    </label>
                                                                </div>
                                                                <div>
                                                                    <label className="job-apply-char1">
                                                                        <input type="radio" name="race" value="Two or more races" style={{ marginRight: "1rem" }}></input>Two or more races (Not Hispanic or Latino)
                                                                        <span className="tool_tip ml-2">
                                                                            <i class='bx-fw bx bxs-info-circle' style={{ color: "#dfdfdf" }}></i>
                                                                            <p className="tool_submenu container" style={{ width: "14rem" }}>
                                                                                <div>
                                                                                    Person who identify with more than one of the above five races.
                                                                                </div>
                                                                            </p>
                                                                        </span>
                                                                    </label>
                                                                </div>
                                                                <div>
                                                                    <label className="job-apply-char1">
                                                                        <input type="radio" name="race" value="N/A" style={{ marginRight: "1rem" }}></input>I do not wish to disclose
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    }
                                                </div>
                                                <button className="default-btn mt-3" style={{ paddingLeft: "25px", float: "right" }}>
                                                    Submit Application
                                                </button>
                                            </div>
                                        </form>
                                    }
                                    <ReactS3Uploader
                                        style={{ display: "none" }}
                                        id="uploadFile"
                                        accept=".pdf, application/vnd.openxmlformats-officedocument.wordprocessingml.document"  // only accept pdf & docx files
                                        signingUrl="/interview_resumes"
                                        signingUrlMethod="GET"
                                        onError={onUploadError}
                                        onFinish={onUploadFinish}
                                        uploadRequestHeaders={{ "x-amz-acl": "public-read" }} // this is the default
                                        scrubFilename={(filename) => filename.replace(/[^\w\d_\-.]+/ig, '')}
                                        inputRef={(cmp) => (props.uploadInput = cmp)}
                                        ref={(uploader) => {
                                            props.uploader = uploader;
                                        }}
                                        autoUpload={true}
                                        required
                                    />
                                </div>
                                <div className="col-4 mt-5">
                                    {((job_id == null || job_id == "") ? false : props.job.is_closed) ?
                                        <button className="default-btn" style={{ paddingLeft: "5rem", paddingRight: "5rem", backgroundColor: "#7d7d7d" }}>
                                            Job Closed
                                        </button> :
                                        <a className="default-btn" href="#apply-now" style={{ paddingLeft: "5rem", paddingRight: "5rem", textDecoration: "none" }}>
                                            Apply Now
                                        </a>}
                                    <p className="mt-5">Link to this job</p>
                                    <div className="row ml-0" style={{ position: "relative", background: "#E8EDFC", borderRadius: "5px", border: "2px solid #67A3F3", width: "90%", height: "3rem" }}>
                                        <div className="pt-2 pl-2" style={{ color: "#090D3A", fontSize: "1.4rem", fontWeight: "500", alignItems: "center" }}>
                                            <p style={{ fontSize: "0.8rem" }} onClick={() => { copyAlert(); navigator.clipboard.writeText(((job_id == null || job_id == "") ? "" : props.job.job_url)) }}>{(job_id == null || job_id == "") ? "" : props.job.job_url}</p>
                                        </div>
                                        <div className="py-1">
                                            <button onClick={() => { copyAlert(); navigator.clipboard.writeText(((job_id == null || job_id == "") ? "" : props.job.job_url)) }}
                                                className="default-btn pt-1" style={{ fontSize: "1.1rem", background: "#FF6B00", borderRadius: "5px", height: "2.2rem", alignItems: "center", paddingLeft: "2rem", paddingRight: "0.6rem", position: "absolute", right: "0.3rem" }}>
                                                <i className='bx bx-share-alt' style={{ left: "0.5rem" }}></i>Copy
                                            </button>
                                        </div>
                                    </div>
                                    <div className="single-footer-widget1">
                                        <ul className="social">
                                            <li>
                                                <FacebookShareButton
                                                    url={url}
                                                    quote={(job_id == null || job_id == "") ? "" : props.job.job_title + " at " + (job_id == null || job_id == "") ? "" : props.job.company_name}
                                                    hashtag={(job_id == null || job_id == "") ? "" : props.job.company_name}>
                                                    <a target="_blank" rel="noreferrer">
                                                        <i className="bx bxl-facebook"></i>
                                                    </a>
                                                </FacebookShareButton>
                                            </li>
                                            <li>
                                                <TwitterShareButton
                                                    url={url}
                                                    title={(job_id == null || job_id == "") ? "" : props.job.job_title + " at " + (job_id == null || job_id == "") ? "" : props.job.company_name}
                                                    via={(job_id == null || job_id == "") ? "" : props.job.company_name}
                                                    hashtag={(job_id == null || job_id == "") ? "" : props.job.company_name}>
                                                    <a target="_blank" rel="noreferrer">
                                                        <i className="bx bxl-twitter"></i>
                                                    </a>
                                                </TwitterShareButton>
                                            </li>
                                            <li>
                                                <LinkedinShareButton
                                                    url={url}
                                                    title={(job_id == null || job_id == "") ? "" : props.job.job_title + " at " + (job_id == null || job_id == "") ? "" : props.job.company_name}
                                                    source={(job_id == null || job_id == "") ? "" : props.job.company_name}>
                                                    <a target="_blank" rel="noreferrer">
                                                        <i className="bx bxl-linkedin"></i>
                                                    </a>
                                                </LinkedinShareButton>
                                            </li>
                                        </ul>
                                    </div>
                                    {props.job.company_website != null && props.job.company_website != "" &&
                                        <div className="single-footer-widget1 mt-2">
                                            <p style={{ marginBottom: "0rem" }}>Website</p>
                                            <a className="website" target="_blank" rel="noreferrer" href={props.job.company_website}>{props.job.company_website} <i class='bx-fw bx bx-link-external bx-xs'></i></a>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>}
            </MediaQuery>
            {/*Mobile View*/}
            <MediaQuery maxDeviceWidth={1223}>
                {(props?.job?.id == "" || props?.job?.id == null) ?
                    <div><h3>Please enter a valid job url!</h3></div> :
                    <div className="py-5" style={{ background: "#E8EDFC" }}>
                        <div style={{ marginLeft: "auto", marginRight: "auto", width: "90%", minHeight: "600px", borderRadius: "10px", background: "white", position: "relative" }}>
                            <img style={{ height: "12rem", width: "100%" }} src="https://hirebeat-assets.s3.amazonaws.com/Employer/Top-Section.png" alt="icon" />
                            <img style={{ width: "7rem", marginLeft: "34%", marginTop: "-3.5rem" }} src={(job_id == null || job_id == "") ? "" : props.job.company_logo} alt="icon" />
                            <h1 className="mt-3" style={{ fontWeight: "600", fontSize: "2.5rem", color: "#090D3A", textAlign: "center" }}>{(job_id == null || job_id == "") ? "" : props.job.job_title}</h1>
                            <h2 className="mt-2" style={{ fontWeight: "600", fontSize: "1.5rem", color: "#67A3F3", textAlign: "center" }}>{(job_id == null || job_id == "") ? "" : props.job.company_name}</h2>
                            <a style={{ textDecoration: "none", color: "#7C94B5", fontWeight: "600", fontSize: "0.9rem", marginLeft: "30%" }} target="_blank" rel="noreferrer" href={"https://hirebeat.co/company-branding/" + ((job_id == null || job_id == "") ? "" : props.job.company_name)}>View all jobs posted <i class='bx-fw bx bx-link-external bx-xs'></i></a>
                            <div className="row pl-3">
                                <div className="pl-5 mt-3 pb-5" style={{ paddingRight: "3.7rem" }}>
                                    <p style={{ fontWeight: "600", fontSize: "0.9rem", color: "#7C94B5", lineHeight: "0.6rem" }}>{(job_id == null || job_id == "") ? "" : props.job.job_level} • {(job_id == null || job_id == "") ? "" : props.job.job_type}</p>
                                    <p style={{ fontWeight: "600", fontSize: "0.9rem", color: "#7C94B5", lineHeight: "0.6rem" }}>{(job_id == null || job_id == "") ? "" : props.job.job_location.split(",")[0]} {(job_id == null || job_id == "") ? "" : props.job.job_location.split(",")[1]}</p>
                                    <p style={{ fontWeight: "600", fontSize: "0.9rem", color: "#7C94B5", lineHeight: "0.6rem" }}>{(props.job.job_id.length) > 0 ? ("Job ID:" + ((job_id == null || job_id == "") ? "" : props.job.job_id)) : ""}</p>
                                    <p className="mt-4" style={{ fontWeight: "600", fontSize: "0.9rem", color: "#7C94B5" }}>Posted on {(job_id == null || job_id == "") ? "" : (props.job.create_date?.split('T')[0])}</p>
                                    <div className="mt-2">
                                        {((job_id == null || job_id == "") ? false : props.job.is_closed) ?
                                            <button className="default-btn" style={{ paddingLeft: "5rem", paddingRight: "5rem", backgroundColor: "#7d7d7d" }}>
                                                Job Closed
                                            </button> :
                                            <a className="default-btn" href="#apply-now" style={{ paddingLeft: "5rem", paddingRight: "5rem", textDecoration: "none" }}>
                                                Apply Now
                                            </a>}
                                        <p className="mt-3">Link to this job</p>
                                        <div className="row ml-0" style={{ position: "relative", background: "#E8EDFC", borderRadius: "5px", border: "2px solid #67A3F3", width: "90%", height: "2.6rem" }}>
                                            <div className="pt-2 pl-2" style={{ color: "#090D3A", fontWeight: "500", alignItems: "center" }}>
                                                <p style={{ fontSize: "0.8rem" }} onClick={() => { copyAlert(); navigator.clipboard.writeText(((job_id == null || job_id == "") ? "" : props.job.job_url)) }}>{(job_id == null || job_id == "") ? "" : props.job.job_url}</p>
                                            </div>
                                            <div className="py-1 mt-3 mb-1">
                                                <button onClick={() => { copyAlert(); navigator.clipboard.writeText(((job_id == null || job_id == "") ? "" : props.job.job_url)) }}
                                                    className="default-btn pt-1" style={{ fontSize: "1rem", background: "#FF6B00", borderRadius: "5px", height: "2.2rem", alignItems: "center", paddingLeft: "2rem", paddingRight: "0.6rem" }}>
                                                    <i className='bx bx-share-alt' style={{ left: "0.5rem" }}></i>Copy
                                                </button>
                                            </div>
                                        </div>
                                        <div className="single-footer-widget1 row my-5 pl-3">
                                            <ul className="social">
                                                <li>
                                                    <FacebookShareButton
                                                        url={url}
                                                        quote={(job_id == null || job_id == "") ? "" : props.job.job_title + " at " + (job_id == null || job_id == "") ? "" : props.job.company_name}
                                                        hashtag={(job_id == null || job_id == "") ? "" : props.job.company_name}>
                                                        <a target="_blank" rel="noreferrer">
                                                            <i className="bx bxl-facebook"></i>
                                                        </a>
                                                    </FacebookShareButton>
                                                </li>
                                                <li>
                                                    <TwitterShareButton
                                                        url={url}
                                                        title={(job_id == null || job_id == "") ? "" : props.job.job_title + " at " + (job_id == null || job_id == "") ? "" : props.job.company_name}
                                                        via={(job_id == null || job_id == "") ? "" : props.job.company_name}
                                                        hashtag={(job_id == null || job_id == "") ? "" : props.job.company_name}>
                                                        <a target="_blank" rel="noreferrer">
                                                            <i className="bx bxl-twitter"></i>
                                                        </a>
                                                    </TwitterShareButton>
                                                </li>
                                                <li>
                                                    <LinkedinShareButton
                                                        url={url}
                                                        title={(job_id == null || job_id == "") ? "" : props.job.job_title + " at " + (job_id == null || job_id == "") ? "" : props.job.company_name}
                                                        source={(job_id == null || job_id == "") ? "" : props.job.company_name}>
                                                        <a target="_blank" rel="noreferrer">
                                                            <i className="bx bxl-linkedin"></i>
                                                        </a>
                                                    </LinkedinShareButton>
                                                </li>
                                            </ul>
                                        </div>
                                        {props.job.company_website != null && props.job.company_website != "" &&
                                            <div className="single-footer-widget1 mt-2">
                                                <p style={{ marginBottom: "0.1rem" }}>Website</p>
                                                <a className="website" target="_blank" rel="noreferrer" href={props.job.company_website}>{props.job.company_website} <i class='bx-fw bx bx-link-external bx-xs'></i></a>
                                            </div>
                                        }
                                    </div>
                                    <div>
                                        <div>
                                            <h2 className="mb-3 mt-5">Company Overview</h2>
                                            <div className="mb-3">
                                                {(job_id == null || job_id == "") ? null :
                                                    <RichTextEditor
                                                        value={RichTextEditor.createValueFromString(props.job.company_overview, 'html')}
                                                        onChange={() => { }}
                                                        readOnly={true}
                                                        className="text-editor"
                                                    />
                                                }
                                            </div>
                                        </div>
                                        <h2 className="mb-3 mt-3">Job Description</h2>
                                        <div className="mb-3">
                                            {(job_id == null || job_id == "") ? null :
                                                <RichTextEditor
                                                    value={RichTextEditor.createValueFromString(props.job.job_description, 'html')}
                                                    onChange={() => { }}
                                                    readOnly={true}
                                                    className="text-editor"
                                                />
                                            }
                                        </div>
                                        {props.job.eeo_req == "1" &&
                                            <div>
                                                <h2 className="mb-2 mt-3">EEO Statement</h2>
                                                <p className="mb-4 mt-1" style={{ color: "#090d3a" }}>{(job_id == null || job_id == "") ? "" : props.job.company_name} is an Equal Opportunity employer. We celebrate diversity and do not discriminate based on race, religion, color, national origin, sex, sexual orientation, age, veteran status, disability status, or any other applicable characteristics protected by law.</p>
                                            </div>}
                                    </div>
                                    {!Applied &&
                                        <div className="mt-3">
                                            {(props.profile.is_employer || props?.job?.id == "" || props?.job?.id == null) ?
                                                <div>
                                                    {((job_id == null || job_id == "") ? false : props.job.is_closed) ?
                                                        <button id="apply-now" className="default-btn" style={{ paddingLeft: "5rem", paddingRight: "5rem", backgroundColor: "#7d7d7d" }}>
                                                            Job Closed
                                                        </button> :
                                                        <button id="apply-now" className="default-btn" style={{ paddingLeft: "5rem", paddingRight: "5rem" }}>
                                                            Apply Now
                                                        </button>}
                                                </div> :
                                                <div>
                                                    {((job_id == null || job_id == "") ? false : props.job.is_closed) ?
                                                        <button className="default-btn" style={{ paddingLeft: "5rem", paddingRight: "5rem", backgroundColor: "#7d7d7d" }}>
                                                            Job Closed
                                                        </button> :
                                                        <button id="apply-now" className="default-btn" onClick={() => { setApplied(true) }} style={{ paddingLeft: "5rem", paddingRight: "5rem" }}>
                                                            Apply Now
                                                        </button>}
                                                </div>
                                            }
                                        </div>
                                    }
                                    {(Applied && !props.auth.isAuthenticated) &&
                                        <form onSubmit={applySubmit}>
                                            <div className="mt-3">
                                                <div className="px-5 pt-3 light-blue-border">
                                                    <h2 className="mt-3 mb-5" style={{ color: "#090D3A" }}>
                                                        Application
                                                    </h2>
                                                    <div class="form-row">
                                                        <div class="form-group col-md-6">
                                                            <label className="job-apply-char1" for="inputEmail4">First Name</label><span className="job-apply-char2">*</span>
                                                            <input type="text" class="form-control" id="inputEmail4" onChange={onChange4} required />
                                                        </div>
                                                        <div class="form-group col-md-6">
                                                            <label className="job-apply-char1" for="inputPassword4">Last Name</label><span className="job-apply-char2">*</span>
                                                            <input type="text" class="form-control" id="inputPassword4" onChange={onChange5} required />
                                                        </div>
                                                    </div>
                                                    <div class="form-row">
                                                        <div class="form-group col-md-6">
                                                            <label className="job-apply-char1" for="inputEmail4">Email</label><span className="job-apply-char2">*</span>
                                                            <input type="email" class="form-control" id="inputEmail4" onChange={onChange8} required />
                                                        </div>
                                                        {((job_id == null || job_id == "") ? "" : props.job.pho_req) == "0" &&
                                                            <div class="form-group col-md-6">
                                                                <label className="job-apply-char1" >Phone Number</label><span className="job-apply-char2">*</span>
                                                                <input type="text" class="form-control" onChange={onChange6} required />
                                                            </div>}
                                                        {((job_id == null || job_id == "") ? "" : props.job.pho_req) == "1" &&
                                                            <div class="form-group col-md-6">
                                                                <label className="job-apply-char1" >Phone Number</label>
                                                                <input type="text" class="form-control" onChange={onChange6} />
                                                            </div>}
                                                    </div>
                                                    {((job_id == null || job_id == "") ? "" : props.job.loc_req) == "0" &&
                                                        <div class="form-group">
                                                            <label className="job-apply-char1" for="inputAddress">Location</label><span className="job-apply-char2">*</span>
                                                            <input type="text" class="form-control" id="inputAddress" placeholder="City, State" onChange={onChange7} required />
                                                        </div>}
                                                    {((job_id == null || job_id == "") ? "" : props.job.loc_req) == "1" &&
                                                        <div class="form-group">
                                                            <label className="job-apply-char1" for="inputAddress">Location</label>
                                                            <input type="text" class="form-control" id="inputAddress" placeholder="City, State" onChange={onChange7} />
                                                        </div>}
                                                    {((job_id == null || job_id == "") ? "" : props.job.lin_req) == "0" &&
                                                        <div class="form-group">
                                                            <label className="job-apply-char1" for="inputAddress">LinkedIn URL</label><span className="job-apply-char2">*</span>
                                                            <input type="text" class="form-control" onChange={onChange9} required />
                                                        </div>}
                                                    {((job_id == null || job_id == "") ? "" : props.job.lin_req) == "1" &&
                                                        <div class="form-group">
                                                            <label className="job-apply-char1" for="inputAddress">LinkedIn URL</label>
                                                            <input type="text" class="form-control" onChange={onChange9} />
                                                        </div>}
                                                    <div class="form-row mt-4">
                                                        <div class="form-group col-md-6">
                                                            <label className="job-apply-char1" for="inputCity">Resume</label><span className="job-apply-char2">*</span>
                                                        </div>
                                                    </div>
                                                    <button onClick={selectFile} className="default-btn py-2 mb-4" type="button" style={{ fontSize: "1.2rem", color: "#090D3A", background: "#E8EDFC", paddingLeft: "50px", paddingRight: "50px" }}>
                                                        Attach
                                                    </button>
                                                    {
                                                        selected ? (
                                                            <div>
                                                                <i className="bx bxs-file-pdf resume-name"></i>
                                                                <label className="resume-name" id="fileName"></label>
                                                                <label className="resume-success" style={{ marginLeft: "0.5rem" }}>selected</label>
                                                                <i className="bx bxs-check-circle resume-success" style={{ marginLeft: "1rem" }}></i>
                                                            </div>
                                                        ) : <span className="ml-3 my-auto" style={{ color: "#ff0000" }}>Support .pdf only</span>
                                                    }
                                                    <div class="form-group row">
                                                        <div class="col-sm-10">
                                                            <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" id="gridCheck1" required />
                                                                <label style={{ color: "#B0B0B0" }} class="form-check-label mb-4" for="gridCheck1">
                                                                    I have read and agreed to the
                                                                </label><a style={{ color: "#ff612f" }} href="/term" target="_blank" rel="noreferrer"> Terms & Conditions</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/*  EEO Survey */}
                                                    {props.job.eeo_ques_req == "1" &&
                                                        <div class="form-group">
                                                            <h3 className="job-apply-char1">Help us be an equal opportunity employer</h3>
                                                            <p className="job-apply-char1" style={{ lineHeight: "20px", fontSize: "0.9375rem" }}>
                                                                You are requested to fill in the personal data below.
                                                                This information will only be used for government reporting purposes and
                                                                not as selection criteria for the hiring process.
                                                            </p>
                                                            <div class="form-group">
                                                                <label className="job-apply-char1">Gender</label><span className="job-apply-char2">*</span>
                                                                <div>
                                                                    <label className="job-apply-char1">
                                                                        <input type="radio" name="gender" value="Male" style={{ marginRight: "1rem" }} />
                                                                        Male
                                                                    </label>
                                                                </div>
                                                                <div>
                                                                    <label className="job-apply-char1">
                                                                        <input type="radio" name="gender" value="Female" style={{ marginRight: "1rem" }} />
                                                                        Female
                                                                    </label>
                                                                </div>
                                                                <div>
                                                                    <label className="job-apply-char1">
                                                                        <input type="radio" name="gender" value="N/A" style={{ marginRight: "1rem" }} />
                                                                        I do not wish to disclose
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div class="form-group">
                                                                <label className="job-apply-char1">Race or ethnicity</label><span className="job-apply-char2">*</span>
                                                                <div>
                                                                    <label className="job-apply-char1">
                                                                        <input type="radio" name="race" value="Hispanic or Latino" style={{ marginRight: "1rem" }} />
                                                                        Hispanic or Latino
                                                                        <span className="tool_tip ml-2">
                                                                            <i class='bx-fw bx bxs-info-circle' style={{ color: "#dfdfdf" }}></i>
                                                                            <p className="tool_submenu container" style={{ width: "14rem" }}>
                                                                                <div>
                                                                                    A person of Cuban, Mexican, Puerto Rican,
                                                                                    South or Central American, or other Spanish
                                                                                    culture or origin regardless of race.
                                                                                </div>
                                                                            </p>
                                                                        </span>
                                                                    </label>
                                                                </div>
                                                                <div>
                                                                    <label className="job-apply-char1">
                                                                        <input type="radio" name="race" value="White" style={{ marginRight: "1rem" }} />
                                                                        White (Not Hispanic or Latino)
                                                                        <span className="tool_tip ml-2">
                                                                            <i class='bx-fw bx bxs-info-circle' style={{ color: "#dfdfdf" }}></i>
                                                                            <p className="tool_submenu container" style={{ width: "14rem" }}>
                                                                                <div>
                                                                                    A person having origins in any of the original
                                                                                    peoples of Europe, the Middle East or North Africa.
                                                                                </div>
                                                                            </p>
                                                                        </span>
                                                                    </label>
                                                                </div><div>
                                                                    <label className="job-apply-char1">
                                                                        <input type="radio" name="race" value="Black or African American" style={{ marginRight: "1rem" }} />
                                                                        Black or African American (Not Hispanic or Latino)
                                                                        <span className="tool_tip ml-2">
                                                                            <i class='bx-fw bx bxs-info-circle' style={{ color: "#dfdfdf" }}></i>
                                                                            <p className="tool_submenu container" style={{ width: "14rem" }}>
                                                                                <div>
                                                                                    A person having origins in any of the black racial groups of Africa.
                                                                                </div>
                                                                            </p>
                                                                        </span>
                                                                    </label>
                                                                </div>
                                                                <div>
                                                                    <label className="job-apply-char1">
                                                                        <input type="radio" name="race" value="Native Hawaiian or Pacific Islander" style={{ marginRight: "1rem" }} />
                                                                        Native Hawaiian or Pacific Islander (Not Hispanic or Latino)
                                                                        <span className="tool_tip ml-2">
                                                                            <i class='bx-fw bx bxs-info-circle' style={{ color: "#dfdfdf" }}></i>
                                                                            <p className="tool_submenu container" style={{ width: "14rem" }}>
                                                                                <div>
                                                                                    A person having origins in any of the peoples
                                                                                    of Hawaii, Guam, Samoa or other Pacific Islands.
                                                                                </div>
                                                                            </p>
                                                                        </span>
                                                                    </label>
                                                                </div>
                                                                <div>
                                                                    <label className="job-apply-char1">
                                                                        <input type="radio" name="race" value="Asian" style={{ marginRight: "1rem" }} />
                                                                        Asian  (Not Hispanic or Latino)
                                                                        <span className="tool_tip ml-2">
                                                                            <i class='bx-fw bx bxs-info-circle' style={{ color: "#dfdfdf" }}></i>
                                                                            <p className="tool_submenu container" style={{ width: "14rem" }}>
                                                                                <div>
                                                                                    A person having origins in any of the original
                                                                                    peoples of the Far East, Southeast Asia
                                                                                    or the Indian Subcontinent, including,
                                                                                    for example, Cambodia, China, India, Japan,
                                                                                    Korea, Malaysia, Pakistan, the Philippine
                                                                                    Islands, Thailand and Vietnam.
                                                                                </div>
                                                                            </p>
                                                                        </span>
                                                                    </label>
                                                                </div>
                                                                <div>
                                                                    <label className="job-apply-char1">
                                                                        <input type="radio" name="race" value="Native American or Alaska Native" style={{ marginRight: "1rem" }} />
                                                                        Native American or Alaska Native (Not Hispanic or Latino)
                                                                        <span className="tool_tip ml-2">
                                                                            <i class='bx-fw bx bxs-info-circle' style={{ color: "#dfdfdf" }}></i>
                                                                            <p className="tool_submenu container" style={{ width: "14rem" }}>
                                                                                <div>
                                                                                    A person having origins in any of the
                                                                                    original peoples of North and South America
                                                                                    (including Central America) and who maintains
                                                                                    tribal affiliation or community attachment.
                                                                                </div>
                                                                            </p>
                                                                        </span>
                                                                    </label>
                                                                </div>
                                                                <div>
                                                                    <label className="job-apply-char1">
                                                                        <input type="radio" name="race" value="Two or more races" style={{ marginRight: "1rem" }} />
                                                                        Two or more races (Not Hispanic or Latino)
                                                                        <span className="tool_tip ml-2">
                                                                            <i class='bx-fw bx bxs-info-circle' style={{ color: "#dfdfdf" }}></i>
                                                                            <p className="tool_submenu container" style={{ width: "14rem" }}>
                                                                                <div>
                                                                                    Person who identify with more than one of the above five races.
                                                                                </div>
                                                                            </p>
                                                                        </span>
                                                                    </label>
                                                                </div>
                                                                <div>
                                                                    <label className="job-apply-char1">
                                                                        <input type="radio" name="race" value="N/A" style={{ marginRight: "1rem" }} />
                                                                        I do not wish to disclose
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    }
                                                </div>
                                                <div className="light-blue-border mt-4 px-5" style={{ marginBottom: "6rem" }}>
                                                    <h2 className="mt-4 mb-5" style={{ color: "#090D3A" }}>
                                                        Create Account
                                                    </h2>
                                                    <div class="form-group">
                                                        <label className="job-apply-char1" for="inputAddress">Email/Username</label>
                                                        <input type="text" class="form-control" id="inputAddress" placeholder="Create a username" onChange={onChange1} />
                                                    </div>
                                                    <div class="form-group">
                                                        <label className="job-apply-char1" for="inputAddress">Password</label>
                                                        <input type="password" class="form-control" id="inputAddress" placeholder="At least 8 characters" onChange={onChange2} minLength="8" />
                                                    </div>
                                                    <div class="form-group">
                                                        <label className="job-apply-char1" for="inputAddress">Confirm Password</label>
                                                        <input type="password" class="form-control" id="inputAddress" placeholder="Enter your password again" onChange={onChange3} minLength="8" />
                                                    </div>
                                                </div>
                                                <button className="default-btn" style={{ marginLeft: "20%", bottom: "5rem", paddingLeft: "25px" }}>
                                                    Submit Application
                                                </button>
                                            </div>
                                        </form>
                                    }
                                    {(Applied && props.auth.isAuthenticated) &&
                                        <form onSubmit={applySubmit1}>
                                            <div className="mt-3">
                                                <div className="px-5 pt-3 light-blue-border">
                                                    <h2 className="mt-3 mb-5" style={{ color: "#090D3A" }}>
                                                        Application
                                                    </h2>
                                                    <div class="form-row">
                                                        <div class="form-group col-md-6">
                                                            <label className="job-apply-char1" for="inputEmail4">First Name</label><span className="job-apply-char2">*</span>
                                                            <input type="text" class="form-control" id="inputEmail4" onChange={onChange4} required />
                                                        </div>
                                                        <div class="form-group col-md-6">
                                                            <label className="job-apply-char1" for="inputPassword4">Last Name</label><span className="job-apply-char2">*</span>
                                                            <input type="text" class="form-control" id="inputPassword4" onChange={onChange5} required />
                                                        </div>
                                                    </div>
                                                    <div class="form-row">
                                                        <div class="form-group col-md-6">
                                                            <label className="job-apply-char1" for="inputEmail4">Email</label><span className="job-apply-char2">*</span>
                                                            <input type="email" class="form-control" id="inputEmail4" onChange={onChange8} required />
                                                        </div>
                                                        {((job_id == null || job_id == "") ? "" : props.job.pho_req) == "0" &&
                                                            <div class="form-group col-md-6">
                                                                <label className="job-apply-char1" >Phone Number</label><span className="job-apply-char2">*</span>
                                                                <input type="text" class="form-control" onChange={onChange6} required />
                                                            </div>}
                                                        {((job_id == null || job_id == "") ? "" : props.job.pho_req) == "1" &&
                                                            <div class="form-group col-md-6">
                                                                <label className="job-apply-char1" >Phone Number</label>
                                                                <input type="text" class="form-control" onChange={onChange6} />
                                                            </div>}
                                                    </div>
                                                    {((job_id == null || job_id == "") ? "" : props.job.loc_req) == "0" &&
                                                        <div class="form-group">
                                                            <label className="job-apply-char1" for="inputAddress">Location</label><span className="job-apply-char2">*</span>
                                                            <input type="text" class="form-control" id="inputAddress" placeholder="City, State" onChange={onChange7} required />
                                                        </div>}
                                                    {((job_id == null || job_id == "") ? "" : props.job.loc_req) == "1" &&
                                                        <div class="form-group">
                                                            <label className="job-apply-char1" for="inputAddress">Location</label>
                                                            <input type="text" class="form-control" id="inputAddress" placeholder="City, State" onChange={onChange7} />
                                                        </div>}
                                                    {((job_id == null || job_id == "") ? "" : props.job.lin_req) == "0" &&
                                                        <div class="form-group">
                                                            <label className="job-apply-char1" for="inputAddress">LinkedIn URL</label><span className="job-apply-char2">*</span>
                                                            <input type="text" class="form-control" onChange={onChange9} required />
                                                        </div>}
                                                    {((job_id == null || job_id == "") ? "" : props.job.lin_req) == "1" &&
                                                        <div class="form-group">
                                                            <label className="job-apply-char1" for="inputAddress">LinkedIn URL</label>
                                                            <input type="text" class="form-control" onChange={onChange9} />
                                                        </div>}
                                                    <div class="form-row mt-4">
                                                        <div class="form-group col-md-6">
                                                            <label className="job-apply-char1" for="inputCity">Resume</label><span className="job-apply-char2">*</span>
                                                        </div>
                                                    </div>
                                                    <button onClick={selectFile} className="default-btn py-2 mb-4" type="button" style={{ fontSize: "1.2rem", color: "#090D3A", background: "#E8EDFC", paddingLeft: "50px", paddingRight: "50px" }}>
                                                        Attach
                                                    </button>
                                                    {
                                                        selected ? (
                                                            <div>
                                                                <br />
                                                                <i className="bx bxs-file-pdf resume-name"></i>
                                                                <label className="resume-name" id="fileName"></label>
                                                                <label className="resume-success" style={{ marginLeft: "0.5rem" }}>selected</label>
                                                                <i className="bx bxs-check-circle resume-success" style={{ marginLeft: "1rem" }}></i>
                                                            </div>
                                                        ) : <span className="ml-3 my-auto" style={{ color: "#ff0000" }}>Support .pdf only</span>
                                                    }
                                                    <div class="form-group row">
                                                        <div class="col-sm-10">
                                                            <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" id="gridCheck1" required />
                                                                <label style={{ color: "#B0B0B0" }} class="form-check-label mb-4" for="gridCheck1">
                                                                    I have read and agreed to the
                                                                </label><a style={{ color: "#ff612f" }} href="/term" target="_blank" rel="noreferrer"> Terms & Conditions</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/*  EEO Survey */}
                                                    {props.job.eeo_ques_req == "1" &&
                                                        <div class="form-group">
                                                            <h3 className="job-apply-char1">Help us be an equal opportunity employer</h3>
                                                            <p className="job-apply-char1" style={{ lineHeight: "20px", fontSize: "0.9375rem" }}>
                                                                You are requested to fill in the personal data below.
                                                                This information will only be used for government reporting purposes and
                                                                not as selection criteria for the hiring process.
                                                            </p>
                                                            <div class="form-group">
                                                                <label className="job-apply-char1">Gender</label><span className="job-apply-char2">*</span>
                                                                <div>
                                                                    <label className="job-apply-char1">
                                                                        <input type="radio" name="gender" value="Male" style={{ marginRight: "1rem" }} />
                                                                        Male
                                                                    </label>
                                                                </div>
                                                                <div>
                                                                    <label className="job-apply-char1">
                                                                        <input type="radio" name="gender" value="Female" style={{ marginRight: "1rem" }} />
                                                                        Female
                                                                    </label>
                                                                </div>
                                                                <div>
                                                                    <label className="job-apply-char1">
                                                                        <input type="radio" name="gender" value="N/A" style={{ marginRight: "1rem" }} />
                                                                        I do not wish to disclose
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div class="form-group">
                                                                <label className="job-apply-char1">Race or ethnicity</label><span className="job-apply-char2">*</span>
                                                                <div>
                                                                    <label className="job-apply-char1">
                                                                        <input type="radio" name="race" value="Hispanic or Latino" style={{ marginRight: "1rem" }} />
                                                                        Hispanic or Latino
                                                                        <span className="tool_tip ml-2">
                                                                            <i class='bx-fw bx bxs-info-circle' style={{ color: "#dfdfdf" }}></i>
                                                                            <p className="tool_submenu container" style={{ width: "14rem" }}>
                                                                                <div>
                                                                                    A person of Cuban, Mexican, Puerto Rican,
                                                                                    South or Central American, or other Spanish
                                                                                    culture or origin regardless of race.
                                                                                </div>
                                                                            </p>
                                                                        </span>
                                                                    </label>
                                                                </div>
                                                                <div>
                                                                    <label className="job-apply-char1">
                                                                        <input type="radio" name="race" value="White" style={{ marginRight: "1rem" }} />
                                                                        White (Not Hispanic or Latino)
                                                                        <span className="tool_tip ml-2">
                                                                            <i class='bx-fw bx bxs-info-circle' style={{ color: "#dfdfdf" }}></i>
                                                                            <p className="tool_submenu container" style={{ width: "14rem" }}>
                                                                                <div>
                                                                                    A person having origins in any of the original
                                                                                    peoples of Europe, the Middle East or North Africa.
                                                                                </div>
                                                                            </p>
                                                                        </span>
                                                                    </label>
                                                                </div><div>
                                                                    <label className="job-apply-char1">
                                                                        <input type="radio" name="race" value="Black or African American" style={{ marginRight: "1rem" }} />
                                                                        Black or African American (Not Hispanic or Latino)
                                                                        <span className="tool_tip ml-2">
                                                                            <i class='bx-fw bx bxs-info-circle' style={{ color: "#dfdfdf" }}></i>
                                                                            <p className="tool_submenu container" style={{ width: "14rem" }}>
                                                                                <div>
                                                                                    A person having origins in any of the black racial groups of Africa.
                                                                                </div>
                                                                            </p>
                                                                        </span>
                                                                    </label>
                                                                </div>
                                                                <div>
                                                                    <label className="job-apply-char1">
                                                                        <input type="radio" name="race" value="Native Hawaiian or Pacific Islander" style={{ marginRight: "1rem" }} />
                                                                        Native Hawaiian or Pacific Islander (Not Hispanic or Latino)
                                                                        <span className="tool_tip ml-2">
                                                                            <i class='bx-fw bx bxs-info-circle' style={{ color: "#dfdfdf" }}></i>
                                                                            <p className="tool_submenu container" style={{ width: "14rem" }}>
                                                                                <div>
                                                                                    A person having origins in any of the peoples
                                                                                    of Hawaii, Guam, Samoa or other Pacific Islands.
                                                                                </div>
                                                                            </p>
                                                                        </span>
                                                                    </label>
                                                                </div>
                                                                <div>
                                                                    <label className="job-apply-char1">
                                                                        <input type="radio" name="race" value="Asian" style={{ marginRight: "1rem" }} />
                                                                        Asian  (Not Hispanic or Latino)
                                                                        <span className="tool_tip ml-2">
                                                                            <i class='bx-fw bx bxs-info-circle' style={{ color: "#dfdfdf" }}></i>
                                                                            <p className="tool_submenu container" style={{ width: "14rem" }}>
                                                                                <div>
                                                                                    A person having origins in any of the original
                                                                                    peoples of the Far East, Southeast Asia
                                                                                    or the Indian Subcontinent, including,
                                                                                    for example, Cambodia, China, India, Japan,
                                                                                    Korea, Malaysia, Pakistan, the Philippine
                                                                                    Islands, Thailand and Vietnam.
                                                                                </div>
                                                                            </p>
                                                                        </span>
                                                                    </label>
                                                                </div>
                                                                <div>
                                                                    <label className="job-apply-char1">
                                                                        <input type="radio" name="race" value="Native American or Alaska Native" style={{ marginRight: "1rem" }} />
                                                                        Native American or Alaska Native (Not Hispanic or Latino)
                                                                        <span className="tool_tip ml-2">
                                                                            <i class='bx-fw bx bxs-info-circle' style={{ color: "#dfdfdf" }}></i>
                                                                            <p className="tool_submenu container" style={{ width: "14rem" }}>
                                                                                <div>
                                                                                    A person having origins in any of the
                                                                                    original peoples of North and South America
                                                                                    (including Central America) and who maintains
                                                                                    tribal affiliation or community attachment.
                                                                                </div>
                                                                            </p>
                                                                        </span>
                                                                    </label>
                                                                </div>
                                                                <div>
                                                                    <label className="job-apply-char1">
                                                                        <input type="radio" name="race" value="Two or more races" style={{ marginRight: "1rem" }} />
                                                                        Two or more races (Not Hispanic or Latino)
                                                                        <span className="tool_tip ml-2">
                                                                            <i class='bx-fw bx bxs-info-circle' style={{ color: "#dfdfdf" }}></i>
                                                                            <p className="tool_submenu container" style={{ width: "14rem" }}>
                                                                                <div>
                                                                                    Person who identify with more than one of the above five races.
                                                                                </div>
                                                                            </p>
                                                                        </span>
                                                                    </label>
                                                                </div>
                                                                <div>
                                                                    <label className="job-apply-char1">
                                                                        <input type="radio" name="race" value="N/A" style={{ marginRight: "1rem" }} />
                                                                        I do not wish to disclose
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    }
                                                </div>
                                                <button className="default-btn mt-3" style={{ paddingLeft: "25px", marginLeft: "20%" }}>
                                                    Submit Application
                                                </button>
                                            </div>
                                        </form>
                                    }
                                    <ReactS3Uploader
                                        style={{ display: "none" }}
                                        id="uploadFile"
                                        accept=".pdf, application/vnd.openxmlformats-officedocument.wordprocessingml.document"  // only accept pdf & docx files
                                        signingUrl="/interview_resumes"
                                        signingUrlMethod="GET"
                                        onError={onUploadError}
                                        onFinish={onUploadFinish}
                                        uploadRequestHeaders={{ "x-amz-acl": "public-read" }} // this is the default
                                        scrubFilename={(filename) => filename.replace(/[^\w\d_\-.]+/ig, '')}
                                        inputRef={(cmp) => (props.uploadInput = cmp)}
                                        ref={(uploader) => {
                                            props.uploader = uploader;
                                        }}
                                        autoUpload={true}
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    </div>}
            </MediaQuery>
        </React.Fragment>
    )
};

const mapStateToProps = (state) => ({
    auth: state.auth_reducer,
    user: state.auth_reducer.user,
    profile: state.auth_reducer.profile,
    job: state.job_reducer.job,
});

export default connect(mapStateToProps, { register, createMessage, addNewApplyCandidate, getCurrentJobs })(ApplyJob);