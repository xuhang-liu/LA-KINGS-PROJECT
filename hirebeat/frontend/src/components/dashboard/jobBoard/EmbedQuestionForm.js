import React, { Component } from "react";
import { connect } from "react-redux";
import Select from 'react-select'
//import { IconText } from "../DashboardComponents";
import { withRouter } from "react-router-dom";
import { addInterviewQuestion } from "../../../redux/actions/job_actions";
import { confirmAlert } from 'react-confirm-alert';

export class EmbedQuestionForm extends Component {

    state = {
        categoryOfQuestion: { value: "Positive Attitude", label: "Positive Attitude" },
        preTime: 30,
        resTime: 90,
        cameraOn: true,
    }

    setPreTime = (time) => {
        this.setState({ preTime: time });
    }

    setResTime = (time) => {
        this.setState({ resTime: time });
    }

    handleChangeCategory = (categoryOfQuestion) => {
        this.setState({ categoryOfQuestion });
    }

    fillQuestion = (question, hideId, showId) => {
        let elements = document.getElementsByClassName("db-question");
        let size = elements.length;

        for (let i = 0; i < size; i++) {
            if ((i == 2) && (elements[i].value != "") && (this.props.profile.plan_interval != "Premium")) {
                return this.filledthreeQuestion();
            }
            if (i == size - 1 && elements[i].value != "") {
                return alert("All Interview Questions Were Filled");
            }
            if (elements[i].value == "") {
                elements[i].value = question;
                break;
            }
        }

        // disable add button
        let hideBtn = document.getElementById(hideId);
        let showBtn = document.getElementById(showId);
        hideBtn.style.display = "none";
        showBtn.style.display = "inline";
    }

    clearQuestion = (id) => {
        let element = document.getElementById(id);
        element.value = "";
    }

    getQuestions = () => {
        // collect all questions
        let questions = [];
        let elements = document.getElementsByClassName("db-question");
        let size = elements.length;
        for (let i = 0; i < size; i++) {
            let question = elements[i].value;
            // skip empty strings and strings consists of white spaces
            if (!question.match(/^[ ]*$/)) {
                questions.push(question);
            }
        }
        this.props.setTempQuestion(questions);
        return questions;
    }

    noCandidateAlert = () => {
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

    saveQuestions = (e) => {
        e.preventDefault();
        // invite candidates
        let candidateCount = 1;
        let companyName = this.props.curJob.job_details.company_name;
        let jobTitle = this.props.curJob.job_details.job_title;
        let positionId = this.props.curJob.job_details.positions_id;

        // collect input name and email
        const emails = [];
        const names = [];
        const invitedCandidates = [];
        emails.push(this.props.email);
        names.push(this.props.first_name + " " + this.props.last_name);
        invitedCandidates.push(this.props.candidateId);
        this.props.setStatus(true);

        // add question
        let questions = this.getQuestions();
        if (questions.length == 0) { return alert("You need to add at least one question!") }
        let data = {
            "preTime": this.state.preTime,
            "resTime": this.state.resTime,
            "cameraOn": this.state.cameraOn,
            "questions": questions,
            "positionId": positionId,
        }
        this.props.addInterviewQuestion(data);

        // generate interview urls and send emails
        let urls = [];
        for (let i = 0; i < emails.length; i++) {
            // make sure urls have the same size of emails and names
            let url = "";
            if (emails[i] != "" && names[i] != "") {
                //let prefix = "http://127.0.0.1:8000/candidate-login?" // local test
                let prefix = "https://app.hirebeat.co/candidate-login?";  // online
                let params = "email=" + emails[i] + "&" + "positionId=" + positionId;
                let encode = window?.btoa(params);
                url = prefix + encode;
            }
            urls.push(url);
        }
        let meta = {
            company_name: companyName,
            job_title: jobTitle,
            position_id: positionId,
            emails: emails,
            names: names,
            expire: 14,
            urls: urls,
        }
        // add interviews
        this.props.addInterviews(meta);
        let inviteData = {
            "candidates": invitedCandidates,
            "isInvited": 1,
        }
        // update invite status
        this.props.updateInviteStatus(inviteData);
        setTimeout(() => { 
            this.props.getAllJobs(this.props.user.id); 
            this.props.getPJobs(); 
        }, 300);
        alert("Send Invitation Success");
        this.props.hideEmbedQForm();
    }

    render() {
        // filter selections
        const options = [
            { value: "Positive Attitude", label: "Positive Attitude" },
            { value: "Commitment", label: "Commitment" },
            { value: "Teamwork", label: "Teamwork" },
            { value: "Leadership", label: "Leadership" },
            { value: "Pressure Handling", label: "Pressure Handling" },
            { value: "Problem Solving", label: "Problem Solving" },
        ];
        const customStyles = {
            control: styles => ({ ...styles, backgroundColor: '#E8EDFC' }),
            singleValue: styles => ({
                ...styles,
                color: '#090D3A',
                fontSize: '0.9375rem',
                fontFamily: 'Inter, Segoe UI',
                fontWeight: '500'
            }),
        }
        return (
            <React.Fragment>
                <div>
                    <div className="card container" style={{ marginTop: "1%", marginBottom: "3%" }}>
                        <form>
                            <div className="form-row" style={{ justifyContent: "center", marginTop: "1rem", justifyContent: "left" }}>
                                <p className="db-txt5" style={{ paddingLeft: "5px" }}>{this.props.curJob.job_details.job_title}</p>
                            </div>
                            <div className="form-row" style={{ justifyContent: "center" }}>
                                <div className="form-group col-6">
                                    <p className="db-txt2">
                                        Choose from Question Bank
                                    </p>
                                    <div className="row" style={{ marginBottom: "1rem" }}>
                                        <div className="center-items db-txt3" style={{ marginRight: "1rem", marginLeft: "15px" }}>Category: </div>
                                        <Select value={this.state.categoryOfQuestion} onChange={this.handleChangeCategory} options={options} className="select-category3" styles={customStyles} />
                                    </div>
                                    <div className="category-border" style={{ overflow: "auto", height: "27rem", padding: "0.5rem", marginBottom: "1rem" }}>
                                        {this.props.bqList.map((q, index) => {
                                            if (q.category != this.state.categoryOfQuestion.value) {
                                                return null;
                                            }
                                            let question = q.description;
                                            let hideId = "hideBtn" + index;
                                            let showId = "showBtn" + index;
                                            return (
                                                <div>
                                                    <p className="db-txt4">
                                                        <span id={hideId} type="button" onClick={() => this.fillQuestion(question, hideId, showId)}><img src="https://hirebeat-assets.s3.amazonaws.com/add.png" /></span>
                                                        <span id={showId} disabled={true} style={{ display: "none" }} type="button" ><img src="https://hirebeat-assets.s3.amazonaws.com/add-grey.png" /></span>
                                                        &nbsp; {q.description}
                                                    </p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div className="form-group col-6">
                                    {this.props.profile.plan_interval != "Premium" ?
                                        <p className="db-txt2 ml-2" style={{ marginBottom: "0rem" }}>
                                            Added Questions &nbsp; <span className="db-txt3">Maximum: 3</span>
                                        </p> :
                                        <p className="db-txt2 ml-2" style={{ marginBottom: "0rem" }}>
                                            Added Questions &nbsp; <span className="db-txt3">Maximum: 6</span>
                                        </p>}
                                    <p className="center-items db-txt3 ml-2">Please note that the interview questions will be the same for all invited applicants under this job position.</p>
                                    <div className="row">
                                        <textarea id="q1" type="text" style={{ width: "85%" }} className="db-question"
                                            placeholder="You can also type in your own question." required></textarea>
                                        <div className="col-1 center-items">
                                            <button type="button" onClick={() => this.clearQuestion("q1")} className="delete-btn">
                                                <i className="bx bx-trash text-30" style={{ color: '#006dff' }}></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <textarea id="q2" type="text" style={{ width: "85%" }} className="db-question"></textarea>
                                        <div className="col-1 center-items">
                                            <button type="button" onClick={() => this.clearQuestion("q2")} className="delete-btn">
                                                <i className="bx bx-trash text-30" style={{ color: '#006dff' }}></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <textarea id="q3" type="text" style={{ width: "85%" }} className="db-question"></textarea>
                                        <div className="col-1 center-items">
                                            <button type="button" onClick={() => this.clearQuestion("q3")} className="delete-btn">
                                                <i className="bx bx-trash text-30" style={{ color: '#006dff' }}></i>
                                            </button>
                                        </div>
                                    </div>
                                    {this.props.profile.plan_interval == "Premium" &&
                                        <div>
                                            <div className="row">
                                                <textarea id="q4" type="text" style={{ width: "85%" }} className="db-question"></textarea>
                                                <div className="col-1 center-items">
                                                    <button type="button" onClick={() => this.clearQuestion("q4")} className="delete-btn">
                                                        <i className="bx bx-trash text-30" style={{ color: '#006dff' }}></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <textarea id="q5" type="text" style={{ width: "85%" }} className="db-question"></textarea>
                                                <div className="col-1 center-items">
                                                    <button type="button" onClick={() => this.clearQuestion("q5")} className="delete-btn">
                                                        <i className="bx bx-trash text-30" style={{ color: '#006dff' }}></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <textarea id="q6" type="text" style={{ width: "85%" }} className="db-question"></textarea>
                                                <div className="col-1 center-items">
                                                    <button type="button" onClick={() => this.clearQuestion("q6")} className="delete-btn">
                                                        <i className="bx bx-trash text-30" style={{ color: '#006dff' }}></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>}
                                </div>
                            </div>
                            <div className="form-row justify-items">
                                <div className="form-group col-4">
                                    <label className="db-txt2" style={{ margin: "2%" }}>
                                        Preparation Time
                                    </label>
                                    <div className="form-row">
                                        {this.state.preTime == 30 ?
                                            <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#e8edfc", color: "#090d3a", border: "2px solid #006dff" }}>30s</button> :
                                            <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#fff", color: "#090d3a", border: "2px solid #e8edfc" }} onClick={() => this.setPreTime(30)}>30s</button>
                                        }
                                        {this.state.preTime == 60 ?
                                            <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#e8edfc", color: "#090d3a", border: "2px solid #006dff" }}>60s</button> :
                                            <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#fff", color: "#090d3a", border: "2px solid #e8edfc" }} onClick={() => this.setPreTime(60)}>60s</button>
                                        }
                                    </div>
                                </div>
                                <div className="form-group col-5">
                                    <label className="db-txt2" style={{ marginTop: "2%" }}>
                                        Response Length
                                    </label>
                                    <div className="form-row">
                                        {this.state.resTime == 60 ?
                                            <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#e8edfc", color: "#090d3a", border: "2px solid #006dff" }}>60s</button> :
                                            <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#fff", color: "#090d3a", border: "2px solid #e8edfc" }} onClick={() => this.setResTime(60)}>60s</button>
                                        }
                                        {this.state.resTime == 90 ?
                                            <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#e8edfc", color: "#090d3a", border: "2px solid #006dff" }}>90s</button> :
                                            <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#fff", color: "#090d3a", border: "2px solid #e8edfc" }} onClick={() => this.setResTime(90)}>90s</button>
                                        }
                                        {this.state.resTime == 120 ?
                                            <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#e8edfc", color: "#090d3a", border: "2px solid #006dff" }}>120s</button> :
                                            <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#fff", color: "#090d3a", border: "2px solid #e8edfc" }} onClick={() => this.setResTime(120)}>120s</button>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="row" style={{ float: "right", marginRight: "2.5rem" }}>
                                <button
                                    type="submit"
                                    onClick={this.saveQuestions}
                                    className="default-btn1" style={{ marginBottom: "5vh", paddingLeft: "25px" }}
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.auth_reducer.profile,
    bqList: state.question_reducer.bqList,
    user: state.auth_reducer.user,
    jobs: state.job_reducer.jobs,
});

export default withRouter(connect(mapStateToProps, { addInterviewQuestion })(
    EmbedQuestionForm
));