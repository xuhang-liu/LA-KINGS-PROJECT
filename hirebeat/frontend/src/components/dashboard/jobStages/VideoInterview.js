import React, { Component } from "react";

export class VideoInterview extend Component {
    state = {
        invite: false,
        showQForm: false,
        showQEditForm: false,
        expire: {value: 7, label: "7 days"},
        videoCategory: { value: 'All', label: 'All' },
        stageCategory: { value: 'All', label: 'All' },
        keyWords: "",
    }

    // filter selections
    const videoOptions = [
        { value: 'Uninvited', label: 'Not Invited' },
        { value: 'Completed', label: 'Completed' },
        { value: 'Pending', label: 'Pending' },
        { value: 'Withdrawn', label: 'N/A' },
        { value: 'All', label: 'All' },
    ];

    const stageOptions = [
        { value: 'Unreviewed', label: 'Unreviewed' },
        { value: 'Shortlist', label: 'Shortlist' },
        { value: 'Hold', label: 'Hold' },
        { value: 'Reject', label: 'Reject' },
        { value: 'All', label: 'All' },
    ];

    const customStyles = {
        control: styles => ({ ...styles, backgroundColor: '#E8EDFC' }),
        singleValue: styles => ({
            ...styles,
            color: '#090D3A',
            fontSize: '0.9375rem',
            fontFamily: 'Avenir Next,Segoe UI, sans-serif',
            fontWeight: '500'
        }),
    }

    render() {
        return (
            <React.Fragment>
                {/* Job Applications */}
                {!this.state.invite &&
                    <div className="container-fluid" style={{paddingLeft:"0px", paddingRight:"0px"}}>
                        <div className="d-flex align-items-center">
                            <button
                                type="button"
                                className="panel-button"
                                onClick={() => { props.hideView(); props.getPJobs(); sessionStorage.removeItem("intAppPage"); props.getPostedJobs(props.user.id, 1)}}
                                style={{ outline: "none", margin: "0%", padding: "0px", background: "#e8edfc" }}
                            >
                                <div className="center-items back-to-text">
                                    <p className="back-to-text"><i className="bx-fw bx bx-arrow-back"></i> Back to Interviews</p>
                                </div>
                            </button>
                        </div>
                        <div className="chart-bg1 container mt-4 pt-3 pb-3">
                            <div className="row">
                                <div className="col-6 interview-center mt-2">
                                    <h3 className="interview-txt5" style={{ wordWrap: "break-word", wordBreak: "break-all", }}>{props.jobTitle}</h3>
                                </div>
                                {(!props.profile.is_subreviwer && props.filter=="active") &&
                                    <div className="col-2 interview-txt7 mt-2" style={{textAlign:"right"}}>
                                        <button
                                            type="button"
                                            className="read-more"
                                            style={{ border: "none", backgroundColor: "#ffffff", fontSize: "0.9rem", fontWeight: "500"}}
                                            onClick={editQuestions}
                                        >
                                            <i className="bx bx-info-circle pr-1"></i> Edit Questions
                                        </button>
                                    </div>
                                }
                                <div className="col-2 interview-txt7 mt-2" style={{textAlign:"left"}}>
                                    <button
                                        onClick={() => { previewEmail(props.jobTitle, props.companyName, expire.value) }}
                                        type="button"
                                        className="read-more"
                                        style={{ border: "none", backgroundColor: "#ffffff", fontSize: "0.9rem", fontWeight: "500"}}
                                    >
                                        <i style={{color:"#56a3fa"}} className="bx bx-bullseye pr-1"></i> Preview Email
                                    </button>
                                </div>
                                <div className="col-2 interview-center">
                                    {!props.profile.is_subreviwer &&
                                        <div>
                                            {!props.isClosed &&
                                                <button
                                                    className="default-btn1 interview-txt6"
                                                    style={{ paddingLeft: "25px", marginBottom: "1rem" }}
                                                    onClick={inviteCandidates}
                                                >
                                                    + Candidates
                                                    <span></span>
                                                </button>
                                            }
                                        </div>}
                                    <MyModal80
                                        show={showQForm}
                                        onHide={() => { setShowQForm(false) }}
                                    >
                                        <QuestionForm jobTitle={props.jobTitle} positionId={props.positionId} hideQForm={() => { props.getPJobs(); setShowQForm(false) }} />
                                    </MyModal80>
                                    {/* Edit Questions */}
                                    <MyModal80
                                        show={showQEditForm}
                                        onHide={() => { setShowQEditForm(false) }}
                                    >
                                        <EditQuestion
                                            jobTitle={props.jobTitle}
                                            positionId={props.positionId}
                                            questions={props.questions}
                                            hideQEditForm={() => { setShowQEditForm(false) }}
                                            getPJobs={props.getPJobs}
                                            position={props.position}
                                        />
                                    </MyModal80>
                                </div>
                            </div>
                            <div className="row" style={{paddingLeft: "15px", paddingRight: "15px"}}>
                                <div className="interview-txt7 interview-center" style={{ color: "#56a3fa", fontSize: "1rem" }}>
                                    <label style={{position:"absolute", left:"2.5rem", marginTop:"0.25rem"}}><i className="bx bx-search bx-sm"></i></label>
                                    <input placeholder={"Search candidate"} className="search-candidate-input" value={keyWords} onChange={onChange} style={{ height: "auto" }}></input>
                                </div>
                                <div className="ml-auto interview-txt7">
                                    <ReactPaginate
                                          previousLabel={'< prev'}
                                          nextLabel={'next >'}
                                          breakLabel={'...'}
                                          breakClassName={'break-me'}
                                          pageCount={props.totalPage}
                                          marginPagesDisplayed={1}
                                          pageRangeDisplayed={5}
                                          onPageChange={handlePageClick}
                                          containerClassName={'pagination3'}
                                          activeClassName={'active'}
                                          forcePage={sessionStorage.getItem("intAppPage")?parseInt(sessionStorage.getItem("intAppPage")):selectedPage}
                                    />
                                </div>
                            </div>
                            <div className="container" style={{ marginTop: "2%" }}>
                                <div className="row interview-txt7 interview-center" style={{ color: "#7D7D7D", height: "2rem", marginTop: "0.5rem", paddingBottom: "3rem" }}>
                                    {!props.profile.is_subreviwer &&
                                        <div style={{ marginLeft: "1rem", display: "flex" }}>
                                            <input id="select-all" type="checkbox" onClick={selectAllCandidates} style={{ display: (props.allInvited ? "none" : "inline") }} />
                                        </div>
                                    }
                                    <div className="col-3">
                                        <span className="dot" style={{ background: "none", visibility: "hidden" }}></span>
                                        Name
                                    </div>
                                    {/*<div className="col-2">Email</div>*/}
                                    <div className="col-2">Invited On</div>
                                    <div className="col-3">
                                        <div className="row">
                                            <div style={{ display: "flex", alignItems: "center", marginRight: "0.5rem" }}>Video</div>
                                            <Select value={category} onChange={onFilter} options={options} className="select-category" styles={customStyles} />
                                        </div>
                                    </div>
                                    {/*<div className="col-1">Action</div>*/}
                                    {!props.profile.is_subreviwer &&
                                        <div className="col-1">Reinvite</div>
                                    }
                                    <div className="col-2 d-flex justify-content-end" style={{ zIndex: "9999" }}>
                                        <div className="row">
                                            <Select value={category2} onChange={onFilter2} options={options2} className="select-category" styles={customStyles} />
                                        </div>
                                    </div>
                                </div>
                                <div style={{ marginBottom: "0.5rem" }}>
                                    <ApplicantList
                                        filter={props.filter}
                                        getPJobs={props.getPJobs}
                                        profile={props.profile}
                                        recordTime={props.recordTime}
                                        interviewResume={props.interviewResume}
                                        getResumeURL={props.getResumeURL}
                                        resumeURL={props.resumeURL}
                                        isClosed={props.isClosed}
                                        keyWords={keyWords}
                                        category={category}
                                        category2={category2}
                                        applicants={props.applicants}
                                        getApplicantsVideos={props.getApplicantsVideos}
                                        getApplicantsInfo={props.getApplicantsInfo}
                                        getRecordStatus={props.getRecordStatus}
                                        dataLoaded={props.dataLoaded}
                                        int_ques={props.int_ques}
                                        id_candidate={props.id_candidate}
                                        username_candidate={props.username_candidate}
                                        email_candidate={props.email_candidate}
                                        phone_candidate={props.phone_candidate}
                                        location_candidate={props.location_candidate}
                                        resendInvitation={props.resendInvitation}
                                        companyName={props.companyName}
                                        jobTitle={props.jobTitle}
                                        updateCommentStatus={props.updateCommentStatus}
                                        updateViewStatus={props.updateViewStatus}
                                        subreviewerUpdateComment={props.subreviewerUpdateComment}
                                        getReviewNote={props.getReviewNote}
                                        getReviewerEvaluation={props.getReviewerEvaluation}
                                        getCurrentReviewerEvaluation={props.getCurrentReviewerEvaluation}
                                        user={props.user}
                                    />
                                </div>
                            </div>
                            <div className="interview-txt7 d-flex justify-content-end" style={{marginTop: "1rem"}}>
                                <ReactPaginate
                                      previousLabel={'< prev'}
                                      nextLabel={'next >'}
                                      breakLabel={'...'}
                                      breakClassName={'break-me'}
                                      pageCount={props.totalPage}
                                      marginPagesDisplayed={1}
                                      pageRangeDisplayed={5}
                                      onPageChange={handlePageClick}
                                      containerClassName={'pagination3'}
                                      activeClassName={'active'}
                                      forcePage={sessionStorage.getItem("intAppPage")?parseInt(sessionStorage.getItem("intAppPage")):selectedPage}
                                />
                            </div>
                        </div>
                        {(!props.profile.is_subreviwer && props.filter == "active") &&
                            <div style={{ marginTop: "2rem" }}>
                                <button
                                    className="default-btn1 interview-txt6"
                                    style={{ paddingLeft: "25px", marginBottom: "1rem" }}
                                    onClick={sendVideoInterview}
                                >
                                    Invite to Video Interview
                                    <span></span>
                                </button>
                            </div>
                        }
                    </div>
                }

                {/* Invitation Form */}
                {this.state.invite &&
                    <div className="container-fluid">
                        <div className="d-flex align-items-center">
                            <button
                                type="button"
                                className="panel-button"
                                onClick={() => { setInvite(false); props.getPostedJobs(props.user.id, (sessionStorage.getItem("intAppPage")?parseInt(sessionStorage.getItem("intAppPage"))+1:1))}}
                                style={{ outline: "none", margin: "0%", padding: "0px", background: "#e8edfc" }}
                            >
                                <div className="center-items back-to-text">
                                    <i className="bx bx-arrow-back bx-sm"></i>
                                    <p className="back-to-text">Back to Applicants</p>
                                </div>
                            </button>
                        </div>
                        <div className="chart-bg1 container" style={{ marginTop: "1%", marginBottom: "2%" }}>
                            <div className="row interview-center" style={{ marginTop: "2rem", marginLeft: "1%" }}>
                                <h3 className="interview-txt5">{props.jobTitle}{props.jobId == "" ? null : "(ID: " + props.jobId + ")"}</h3>
                            </div>
                            <div className="row">
                                <div className="col-3 mt-3 mb-3">
                                    <button type="button" className="default-btn resume-upload" onClick={uploadResume}>
                                        <i className="bx bx-cloud-upload bx-sm"></i>
                                        Upload Resume
                                    </button>
                                </div>
                                <div className="col-5" style={{ marginLeft: "-2rem", marginTop: "2rem" }}>
                                    <input id="resume" type="file" multiple style={{ display: "none" }} accept=".pdf" />
                                    <div>
                                        <span className="upload-txt">
                                            Bulk Upload (.pdf only; max:10)
                                        </span>
                                    </div>
                                </div>
                                {/*<div className="col-4 d-flex float-fluid-right">
                                    <p style={{marginTop:"2rem", display:"inline-block"}}>Expire after</p>
                                    <div style={{marginTop:"1.6rem", display:"inline-block", marginLeft:"0.5vw"}}>
                                        <Select value={expire} onChange={onFilter1} options={options1} className="select-category" styles={customStyles}/>
                                    </div>
                                </div>*/}
                                {/*parsed &&
                                    <div style={{display: "flex", alignItems: "center", marginLeft: "1rem"}}>
                                        <span className="upload-txt">
                                            <i className="bx bx-file"></i>
                                            {cvUploaded}
                                            <i className="bx bxs-check-circle" style={{color: "#13C4A1", marginLeft: "0.5rem"}}></i>
                                        </span>
                                    </div>*/}
                                {/*<button type="button" className="default-btn" style={{backgroundColor: "#090D3A", paddingLeft: "25px", marginLeft: "2rem"}} onClick={autofill}>Autofill</button>*/}
                            </div>
                            <form onSubmit={sendInvitation}>
                                <div className="form-row">
                                    <div className="form-group col-6">
                                        <label style={{ fontSize: "17px", margin: "2%" }}>
                                            Candidate Name
                                        </label>
                                        <input type="text" name="name1" className="form-control candidate-name" required="required" placeHolder="John" />
                                    </div>
                                    <div className="form-group col-6">
                                        <label style={{ fontSize: "17px", margin: "2%" }}>
                                            Candidate Email
                                        </label>
                                        <input type="email" name="email1" className="form-control candidate-email" required="required" placeHolder="john@example.com" />
                                    </div>
                                    <div className="form-group col-6">
                                        <input type="text" name="name2" className="form-control candidate-name" />
                                    </div>
                                    <div className="form-group col-6">
                                        <input type="email" name="email2" className="form-control candidate-email" />
                                    </div>
                                    <div className="form-group col-6">
                                        <input type="text" name="name3" className="form-control candidate-name" />
                                    </div>
                                    <div className="form-group col-6">
                                        <input type="email" name="email3" className="form-control candidate-email" />
                                    </div>
                                    <div className="form-group col-6">
                                        <input type="text" name="name4" className="form-control candidate-name" />
                                    </div>
                                    <div className="form-group col-6">
                                        <input type="email" name="email4" className="form-control candidate-email" />
                                    </div>
                                    <div className="form-group col-6">
                                        <input type="text" name="name5" className="form-control candidate-name" />
                                    </div>
                                    <div className="form-group col-6">
                                        <input type="email" name="email5" className="form-control candidate-email" />
                                    </div>
                                    <div className="form-group col-6">
                                        <input type="text" name="name6" className="form-control candidate-name" />
                                    </div>
                                    <div className="form-group col-6">
                                        <input type="email" name="email6" className="form-control candidate-email" />
                                    </div>
                                    <div className="form-group col-6">
                                        <input type="text" name="name7" className="form-control candidate-name" />
                                    </div>
                                    <div className="form-group col-6">
                                        <input type="email" name="email7" className="form-control candidate-email" />
                                    </div>
                                    <div className="form-group col-6">
                                        <input type="text" name="name8" className="form-control candidate-name" />
                                    </div>
                                    <div className="form-group col-6">
                                        <input type="email" name="email8" className="form-control candidate-email" />
                                    </div>
                                    <div className="form-group col-6">
                                        <input type="text" name="name9" className="form-control candidate-name" />
                                    </div>
                                    <div className="form-group col-6">
                                        <input type="email" name="email9" className="form-control candidate-email" />
                                    </div>
                                    <div className="form-group col-6">
                                        <input type="text" name="name10" className="form-control candidate-name" />
                                    </div>
                                    <div className="form-group col-6">
                                        <input type="email" name="email10" className="form-control candidate-email" />
                                    </div>
                                </div>
                                {/* add additional form */}
                                {addForm1 &&
                                    <InvitationForm uploadResume={uploadResume} autofill={autofill} />
                                }
                                {addForm2 &&
                                    <InvitationForm uploadResume={uploadResume} autofill={autofill} />
                                }
                                {addForm3 &&
                                    <InvitationForm uploadResume={uploadResume} autofill={autofill} />
                                }
                                {addForm4 &&
                                    <InvitationForm uploadResume={uploadResume} autofill={autofill} />
                                }
                                {addForm5 &&
                                    <InvitationForm uploadResume={uploadResume} autofill={autofill} />
                                }
                                <div>
                                    <div className="col d-flex justify-items">
                                        {(addForm1 && !addForm2) &&
                                            <button
                                                className="default-btn interview-txt6"
                                                style={{ paddingLeft: "25px", background: "#67A3F3" }}
                                                onClick={() => setAddForm2(true)}
                                            >
                                                Add 5 More
                                            </button>
                                        }
                                    </div>
                                    <div className="col d-flex justify-items">
                                        {(addForm2 && !addForm3) &&
                                            <button
                                                className="default-btn interview-txt6"
                                                style={{ paddingLeft: "25px", background: "#67A3F3" }}
                                                onClick={() => setAddForm3(true)}
                                            >
                                                Add 5 More
                                            </button>
                                        }
                                    </div>
                                    <div className="col d-flex justify-items">
                                        {(addForm3 && !addForm4) &&
                                            <button
                                                className="default-btn interview-txt6"
                                                style={{ paddingLeft: "25px", background: "#67A3F3" }}
                                                onClick={() => setAddForm4(true)}
                                            >
                                                Add 5 More
                                            </button>}
                                    </div>
                                    <div className="col d-flex justify-items">
                                        {(addForm4 && !addForm5) &&
                                            <button
                                                className="default-btn interview-txt6"
                                                style={{ paddingLeft: "25px", background: "#67A3F3" }}
                                                onClick={() => setAddForm5(true)}
                                            >
                                                Add 5 More
                                            </button>
                                        }
                                    </div>
                                </div>

                                <div className="form-row justify-items" style={{ marginBottom: "1rem" }}>
                                    <div className="col-2 d-flex justify-items">
                                        <button
                                            type="button"
                                            className="default-btn interview-txt6"
                                            style={{ paddingLeft: "25px", background: "#67A3F3" }}
                                            onClick={() => { setInvite(false); props.getPJobs() }}
                                        >
                                            Close
                                            <span></span>
                                        </button>
                                    </div>
                                    <div className="col-4 interview-center">
                                        {/*<p className="interview-txt8">Currently we only support adding up to 5 candidates at a time.</p>*/}
                                    </div>
                                    <div className="col-3 d-flex justify-items">
                                        <button
                                            type="submit"
                                            className="default-btn1"
                                            style={{ marginBottom: "1.5%", paddingLeft: "25px" }}
                                        >
                                            Add
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                }
            </React.Fragment>
        )
    }
}

const JobCard = (props) => {
    var curlimit = 0;
    const [invite, setInvite] = useState(false);
    const [showQForm, setShowQForm] = useState(false);
    const [showQEditForm, setShowQEditForm] = useState(false);
    const [expire, setExpire] = useState({ value: 7, label: '7 days' });
    function onFilter1(expire) {
        setExpire(expire);
    }

    function clearInvitationForm() {
        let nameElements = document.getElementsByClassName("candidate-name");
        let emailElements = document.getElementsByClassName("candidate-email");
        for (let i = 0; i < nameElements.length; i++) {
            nameElements[i].value = "";
            emailElements[i].value = "";
        }
    }

    function sendInvitation(e) {
        let candidateCount = 0;
        let companyName = props.companyName;
        let jobTitle = props.jobTitle;
        let positionId = props.positionId;
        // collect input name and email
        const emails = [];
        const names = [];
        let nameElements = document.getElementsByClassName("candidate-name");
        let emailElements = document.getElementsByClassName("candidate-email");
        for (let i = 0; i < nameElements.length; i++) {
            // name
            names.push(nameElements[i].value);
            // email
            let value = emailElements[i].value;
            emails.push(value.toLowerCase());
            if (value != "") {
                candidateCount += 1;
            }
        }
        let meta = {
            position_id: positionId,
            job_id: -1, // -1 means current candidate is manually added
            emails: emails,
            names: names,
        }
        let addLimitLeft = curlimit;
        curlimit += candidateCount;
        if ((props.applicants.length + curlimit) > (props.profile.candidate_limit)) {
            alert('Upgrade Now! You can only add ' + parseInt(props.profile.candidate_limit - props.applicants.length - addLimitLeft) + ' more candidates for this position!');
        } else {
            // save data to db
            props.moveCandidateToInterview(meta);
            // disable webpage refresh
            sendSuccessAlert();
            clearInvitationForm();
            e.preventDefault();
        }
    }

    // sendInvitation function with email notification
    //    function sendInvitation(e) {
    //        let candidateCount = 0;
    //        let companyName = props.companyName;
    //        let jobTitle = props.jobTitle;
    //        let positionId = props.positionId;
    //        // collect input name and email
    //        const emails = [];
    //        const names = [];
    //        let nameElements = document.getElementsByClassName("candidate-name");
    //        let emailElements = document.getElementsByClassName("candidate-email");
    //        for (let i = 0; i < nameElements.length; i++) {
    //            // name
    //            names.push(nameElements[i].value);
    //            // email
    //            let value = emailElements[i].value;
    //            emails.push(value.toLowerCase());
    //            if(value!=""){
    //                candidateCount+=1;
    //            }
    //        }
    //        // generate interview urls and send emails
    //        let urls = [];
    //        for (let i = 0; i < emails.length; i++) {
    //            // make sure urls have the same size of emails and names
    //            let url = "";
    //            if (emails[i] != "" && names[i] != "") {
    //                //let prefix = "http://127.0.0.1:8000/candidate-login?" // local test
    //                let prefix = "https://hirebeat.co/candidate-login?";  // online
    //                let params = "email=" + emails[i] + "&" + "positionId=" + positionId;
    //                let encode = window.btoa(params);
    //                url = prefix + encode;
    //            }
    //            urls.push(url);
    //        }
    //        let meta = {
    //            company_name: companyName,
    //            job_title: jobTitle,
    //            position_id: positionId,
    //            emails: emails,
    //            names: names,
    //            expire: expire.value,
    //            urls: urls,
    //        }
    //        let addLimitLeft = curlimit;
    //        curlimit += candidateCount;
    //        if((props.applicants.length+curlimit)>(props.profile.candidate_limit)){
    //            alert('Upgrade Now! You can only add ' +parseInt(props.profile.candidate_limit-props.applicants.length-addLimitLeft)+ ' more candidates for this position!');
    //        }else{
    //            // save data to db
    //            props.addInterviews(meta);
    //            // disable webpage refresh
    //            sendSuccessAlert();
    //            clearInvitationForm();
    //            e.preventDefault();
    //        }
    //    }

    function editQuestions() {
        setShowQEditForm(true);
    }

    function onFilter(category) {
        setCategory(category);
    }

    const [category2, setCategory2] = useState({ value: 'All', label: 'All' });
    function onFilter2(category2) {
        setCategory2(category2);
    }



    const [keyWords, setkeyWords] = useState("");
    function onChange(e) {
        setkeyWords(e.target.value);
    };
    // add extra invitation form
    const [addForm1, setAddForm1] = useState(false);
    const [addForm2, setAddForm2] = useState(false);
    const [addForm3, setAddForm3] = useState(false);
    const [addForm4, setAddForm4] = useState(false);
    const [addForm5, setAddForm5] = useState(false);

    // upload resumes
    var candidateNames = [];
    var candidateEmails = [];
    var resumeNames = [];
    // state refreshed the whole page, so candidateNames and candidateEmails set to []
    //    const [cvUploaded, setCvUploaded] = useState("");
    //    const [parsed, setParsed] = useState(false);
    function uploadResume() {
        // parse pdf from urls directly
        // let text = getTextByURL("https://hirebeat-resume.s3.amazonaws.com/CV_LiangXu.pdf")
        // console.log(text);

        // empty candidate emails and names every click
        candidateNames = [];
        candidateEmails = [];

        let input = document.getElementById("resume");
        input.click();
        input.onchange = () => {
            let num = input.files.length;
            // limit 10 pdfs at one time
            if (num > 10) {
                return overwhelm();
            }
            // get selected files
            for (let i = 0; i < num; i++) {
                // extract emails from pdf
                let pdf = input.files[i]
                getTextByPdf(pdf);
                resumeNames.push(pdf.name);
            }
            let fileNames = resumeNames.toString();
            uploadSuccess(num, fileNames, autofill);
            //            setCvUploaded(num + "resumes uploaded");
            //            setParsed(true);

        }
    }

    // autofill name & email
    function autofill() {
        if (candidateEmails.length <= 0 || candidateNames.length <= 0) {
            return uploadFirst();
        }
        // prefill names and emails to form
        let nameElements = document.getElementsByClassName("candidate-name");
        let emailElements = document.getElementsByClassName("candidate-email");
        let n = candidateNames.length;
        for (let i = 0; i < n; i++) {
            if (!checkName(candidateNames[i])) {
                nameError();
            }
            nameElements[i].value = candidateNames[i];
            emailElements[i].value = candidateEmails[i];
        }
    }

    // parse resumes from url
    function getTextByURL(pdfUrl) {
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
    function getTextByPdf(pdf) {
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
                    // check email
                    if (email != null) {
                        candidateEmails.push(email[0]);
                        candidateNames.push(name);
                    }
                });
            });
        }

        // step2 read the file as ArrayBuffer
        fileReader.readAsArrayBuffer(pdf);
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

    function checkName(text) {
        // allow alphabets and space
        var regex = /^[A-Za-z ]+$/ig;
        return regex.test(text);
    }

    function inviteCandidates() {
        if ((props.applicants.length) >= (props.profile.candidate_limit)) {
            candidateLimitAlert();
        } else {
            setInvite(true);
            //            // check interview questions
            //            if (props.questions.length <= 0) {
            //                setShowQForm(true);
            //            }
            //            else {
            //                setInvite(true);
            //            }
        }
    }

    function selectAllCandidates() {
        let checkbox = document.getElementById("select-all");
        let candidates = document.getElementsByClassName("selected-candidate");
        if (checkbox.checked) {
            // select all candidates
            for (let i = 0; i < candidates.length; i++) {
                candidates[i].checked = true;
            }
        }
        else {
            // cancel all candidates selection
            for (let i = 0; i < candidates.length; i++) {
                candidates[i].checked = false;
            }
        }
    }

    function noCandidateAlert() {
        confirmAlert({
            title: "No Candidate Selected",
            message: "Please select candidates for interview",
            buttons: [
                {
                    label: 'Ok'
                }
            ]
        });
    }

    function inviteSuccessAlert() {
        confirmAlert({
            title: "Send Video Interviews Success",
            message: "You have invited selected candidates for a video interview",
            buttons: [
                {
                    label: 'Ok'
                }
            ]
        });
    }

    function sendVideoInterview() {
        let candidateCount = 0;
        let companyName = props.companyName;
        let jobTitle = props.jobTitle;
        let positionId = props.positionId;
        // collect input name and email
        const emails = [];
        const names = [];
        const invitedCandidates = [];
        let candidates = document.getElementsByClassName("selected-candidate");
        for (let i = 0; i < candidates.length; i++) {
            if (candidates[i].checked) {
                let candidate = JSON.parse(candidates[i].value);
                names.push(candidate.name);
                emails.push(candidate.email.toLowerCase());
                invitedCandidates.push(candidate.id);
                candidateCount += 1;
            }
        }
        // check candidates selected or not
        if (candidateCount > 0) {
            if (props.questions.length <= 0) {
                return setShowQForm(true);
            }
            if (candidateCount > (props.profile.candidate_limit)) {
                alert('Upgrade Now! You can only add ' + parseInt(props.profile.candidate_limit) + ' more candidates for this position!');
            } else {
                // generate interview urls and send emails
                let urls = [];
                for (let i = 0; i < emails.length; i++) {
                    // make sure urls have the same size of emails and names
                    let url = "";
                    if (emails[i] != "" && names[i] != "") {
                        //let prefix = "http://127.0.0.1:8000/candidate-login?" // local test
                        let prefix = "https://hirebeat.co/candidate-login?";  // online
                        let params = "email=" + emails[i] + "&" + "positionId=" + positionId;
                        let encode = window.btoa(params);
                        url = prefix + encode;
                    }
                    urls.push(url);
                }
                let meta = {
                    company_name: companyName,
                    job_title: jobTitle,
                    emails: emails,
                    names: names,
                    expire: 14,
                    urls: urls,
                    candidate_ids: invitedCandidates,
                }
                props.sendInterviews(meta);
                setTimeout(() => { props.getPJobs() }, 600);
                inviteSuccessAlert();
            }
        }
        else {
            noCandidateAlert();
        }
    }

    const [selectedPage, setSelectedPage] = useState(0);
    const handlePageClick = (data) => {
        let selectedPage = data.selected; // 0 index based
        setSelectedPage(selectedPage);
        let page = selectedPage + 1;
        props.getPostedJobs(props.user.id, page);
        sessionStorage.setItem("intAppPage", String(selectedPage));
    };

    return (
        <React.Fragment>

        </React.Fragment>
    )
};

export default VideoInterview;