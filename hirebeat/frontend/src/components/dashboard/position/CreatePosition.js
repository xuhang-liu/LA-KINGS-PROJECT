import React,  { Component } from "react";
//import { connect } from "react-redux";
import { IconText } from "../DashboardComponents";
//import { selectParamEnployer } from "../../../components/practice/CardComponents"
//import { lengthOfResponseOptions } from "../../../constants/constants"
//import PropTypes from "prop-types";
import 'boxicons';
import Select from 'react-select'
import { confirmAlert } from 'react-confirm-alert';

export class CreatePosition extends Component{

    state = {
        jobtitle: "",
        jobid: "",
        jobdescription: "",
        position_added: true,
        lengthOfResponse: { value: 2, label: "120s" },
        categoryOfQuestion: { value: "Positive Attitude", label: "Positive Attitude"},
    }
    
    handleInputChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        });
      };
    
    handleChangeTime = ( lengthOfResponse ) => {
        this.setState({ lengthOfResponse });
//        console.log(this.state.lengthOfResponse);
    }

    savePosition = (e) => {
        var jobtitle = this.state.jobtitle;
        var jobid = this.state.jobid;
        var jobdescription = this.state.jobdescription;
        var userid = this.props.user.id;
        var questionTime = this.state.lengthOfResponse.value * 60
        let questions = this.getQuestions();
        this.props.addPosition(jobtitle, jobid, jobdescription, userid, questions, questionTime);
        this.props.getPJobs();
        e.preventDefault();
        this.props.renderApplications();
    }

    hideJob = (e) => {
        let isFilled = this.checkRequiredInputs();
        if (isFilled) {
            this.props.getQuestionList();
            this.setState({position_added: false});
        }
        else {
            this.incompleteAlert();
        }
    }

    checkRequiredInputs = () => {
        if (this.state.jobtitle == "" || this.state.jobdescription == "") {
            return false;
        }
        else {
            return true;
        }
    }

    showJob = (e) => {
        this.setState({position_added: true})
    }

    handleChangeCategory = (categoryOfQuestion) => {
        this.setState({ categoryOfQuestion });
    }

    fillQuestion = (question) => {
        let elements = document.getElementsByClassName("db-question");
        let size = elements.length;

        for (let i = 0; i < size; i++) {
            if ((i == 2) && (elements[i].value != "") && (this.props.profile.plan_interval != "Premium")) {
                return this.filledthreeQuestion();
            }
            if (i == size - 1 && elements[i].value != "") {
                return this.filledSuccess();
            }
            if (elements[i].value == "") {
                elements[i].value = question;
                break;
            }
        }
    }

    clearQuestion = (id) => {
        let element = document.getElementById(id);
        element.value = "";
    }

    filledSuccess = () => {
        confirmAlert({
            title: "All Questions Were Added",
            message: "You have filled all questions",
            buttons: [
                {
                  label: 'ok',
                },
            ]
        });
    }

    filledthreeQuestion = () => {
        confirmAlert({
            title: 'Upgrade Now!',
            message: 'Exceed max number of questions! Upgrade now to add up to 6 questions',
            buttons: [
              {label: 'Upgrade Now', onClick: () => window.location.href = "/employer-pricing"},
              {label: 'OK'},
            ]
          });
    }

    incompleteAlert = () => {
        confirmAlert({
            title: "Required fields not completed",
            message: "Please fill Job Title and Job Description",
            buttons: [
                {
                  label: 'ok',
                },
            ]
        });
    }

    getQuestions = () => {
        // collect all questions
        let questions = [];
        let elements = document.getElementsByClassName("db-question");
        let size = elements.length;
        for (let i = 0; i < size; i++) {
            let question = elements[i].value;
            if (question != "") {
                questions.push(question);
            }
        }
        return questions;
    }

    render() {
        const {position_added} = this.state
        // filter selections
        const options = [
            { value: "Positive Attitude", label: "Positive Attitude"},
            { value: "Commitment", label: "Commitment"},
            { value: "Teamwork", label: "Teamwork"},
            { value: "Leadership", label: "Leadership"},
            { value: "Pressure Handling", label: "Pressure Handling"},
            { value: "Problem Solving", label: "Problem Solving"},
        ];
        const customStyles = {
            control: styles => ({ ...styles, backgroundColor: '#E8EDFC' }),
            singleValue: styles => ({    ...styles,
                                         color: '#090D3A',
                                         fontSize: '0.9375rem',
                                         fontFamily: 'Avenir Next',
                                         fontWeight: '500'}),
        }

        return(
            <div className="container" style={{width:'95%'}}>
                {position_added &&
                    <div>
                        <div className="row">
                            <div className="col d-flex align-items-center">
                                <button
                                    type="button"
                                    className="panel-button"
                                    onClick={this.props.renderApplications}
                                    style={{outline: "none", margin:"0%", padding:"0px", background:"#e8edfc"}}
                                >
                                    <IconText
                                        iconName={"bx bx-arrow-back bx-sm"}
                                        textDisplayed={"Back"}
                                        textSize={"20px"}
                                        textColor={"#67A3F3"}
                                        iconMargin={"3px"}
                                    />
                                </button>
                            </div>
                        </div>

                        <div className="row" >
                            <div className="col d-flex align-items-center" style={{marginTop:"0%"}}>
                                <p className="db-txt1">
                                    Create New Interview
                                </p>
                            </div>
                        </div>
                        <div className="card container" style={{marginTop:"1%"}}>
                            <form>
                                <div className="form-row">
                                    <div className="form-group col-5">
                                        <label className="db-txt2" style={{ margin:"2%"}}>
                                            Job Title
                                        </label>
                                        <input type="text" name="jobtitle" value={this.state.jobtitle}
                                        onChange={this.handleInputChange} className="form-control" required="required"/>
                                    </div>
                                    <div className="form-group col-5">
                                        <label className="db-txt2" style={{ marginTop:"2%" }}>
                                            Job ID (optional)
                                        </label>
                                        <input type="text" name="jobid" value={this.state.jobid}
                                        onChange={this.handleInputChange} className="form-control"/>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-10">
                                        <label className="db-txt2" style={{ margin:"2%"}}>
                                            Job Description
                                        </label>
                                        <textarea type="text" name="jobdescription" value={this.state.jobdescription} style={{minHeight:"15rem"}}
                                        onChange={this.handleInputChange} className="form-control" required="required"
                                        placeholder="Paste job description here. Be sure to include titles such as 'basic qualifications' and 'preferred qualifications'."/>
                                    </div>
                                    <div className="form-group col-2 d-flex align-items-end">
                                        <button
                                            type="button"
                                            onClick={this.hideJob}
                                            className="default-btn1" style={{marginBottom:"1.5%", paddingLeft:"25px"}}
                                        >
                                            Next
                                        </button>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                }
                {!position_added &&
                    <div>
                        <div className="row">
                            <div className="col d-flex align-items-center">
                                <button
                                    type="button"
                                    className="panel-button"
                                    onClick={this.showJob}
                                    style={{outline: "none", margin:"0%", padding:"0px", background:"#e8edfc"}}
                                >
                                    <IconText
                                        iconName={"bx bx-arrow-back bx-sm"}
                                        textDisplayed={"Back"}
                                        textSize={"20px"}
                                        textColor={"#67A3F3"}
                                        iconMargin={"3px"}
                                    />
                                </button>
                            </div>
                        </div>
                        <div className="row" >
                            <div className="col d-flex align-items-center" style={{marginTop:"0%"}}>
                                <p className="db-txt1">
                                    Add Questions
                                </p>
                            </div>
                        </div>
                        <div className="card container" style={{marginTop:"1%"}}>
                            <form onSubmit={this.savePosition}>
                                <div className="form-row" style={{justifyContent: "center", marginTop: "1rem", justifyContent: "left"}}>
                                    <p className= "db-txt5" style={{paddingLeft: "5px"}}>{this.state.jobtitle}</p>
                                </div>
                                <div className="form-row" style={{justifyContent: "center"}}>
                                    <div className="form-group col-6">
                                        <p className="db-txt2">
                                            Choose from Question Bank
                                        </p>
                                        <div className="row" style={{marginBottom: "1rem"}}>
                                            <div className="center-items db-txt3" style={{marginRight: "1rem", marginLeft: "15px"}}>Category: </div>
                                            <Select value={this.state.categoryOfQuestion} onChange={this.handleChangeCategory} options={options} className="select-category3" styles={customStyles} />
                                        </div>
                                        <div className="category-border" style={{overflow: "auto", height: "27rem", padding: "0.5rem", marginBottom: "1rem"}}>
                                            {this.props.bqList.map((q) => {
                                                if (q.category != this.state.categoryOfQuestion.value) {
                                                    return null;
                                                }
                                                let question = q.description;
                                                return (
                                                    <div>
                                                        <p className="db-txt4">
                                                            <span type="button" onClick={() => this.fillQuestion(question)}><img src="https://hirebeat-assets.s3.amazonaws.com/add.png" /></span>
                                                            &nbsp; {q.description}
                                                        </p>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                    <div className="form-group col-6">
                                        {this.props.profile.plan_interval != "Premium" ?
                                        <p className="db-txt2 ml-2">
                                            Added Questions &nbsp; <span className="db-txt3">Maximum: 3</span>
                                        </p> :
                                        <p className="db-txt2 ml-2">
                                            Added Questions &nbsp; <span className="db-txt3">Maximum: 6</span>
                                        </p>}
                                        <div className="row">
                                            <textarea id="q1" type="text" style={{width: "85%"}} className="db-question" 
                                            placeholder="You can also type in your own question." required></textarea>
                                            <div className="col-1 center-items">
                                                <button type="button" onClick={() => this.clearQuestion("q1")} className="delete-btn">
                                                    <i className="bx bx-trash text-30" style={{color:'#56a3fa'}}></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <textarea id="q2" type="text" style={{width: "85%"}} className="db-question"></textarea>
                                            <div className="col-1 center-items">
                                                <button type="button" onClick={() => this.clearQuestion("q2")} className="delete-btn">
                                                    <i className="bx bx-trash text-30" style={{color:'#56a3fa'}}></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <textarea id="q3" type="text" style={{width: "85%"}} className="db-question"></textarea>
                                            <div className="col-1 center-items">
                                                <button type="button" onClick={() => this.clearQuestion("q3")} className="delete-btn">
                                                    <i className="bx bx-trash text-30" style={{color:'#56a3fa'}}></i>
                                                </button>
                                            </div>
                                        </div>
                                        {this.props.profile.plan_interval == "Premium" &&
                                        <div>
                                        <div className="row">
                                            <textarea id="q4" type="text" style={{width: "85%"}} className="db-question"></textarea>
                                            <div className="col-1 center-items">
                                                <button type="button" onClick={() => this.clearQuestion("q4")} className="delete-btn">
                                                    <i className="bx bx-trash text-30" style={{color:'#56a3fa'}}></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <textarea id="q5" type="text" style={{width: "85%"}} className="db-question"></textarea>
                                            <div className="col-1 center-items">
                                                <button type="button" onClick={() => this.clearQuestion("q5")} className="delete-btn">
                                                    <i className="bx bx-trash text-30" style={{color:'#56a3fa'}}></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <textarea id="q6" type="text" style={{width: "85%"}} className="db-question"></textarea>
                                            <div className="col-1 center-items">
                                                <button type="button" onClick={() => this.clearQuestion("q6")} className="delete-btn">
                                                    <i className="bx bx-trash text-30" style={{color:'#56a3fa'}}></i>
                                                </button>
                                            </div>
                                        </div>
                                        </div>}
                                        <div className="row" style={{float: "right", marginRight: "2.5rem"}}>
                                            <button
                                                type="submit"
                                                className="default-btn1" style={{marginBottom:"5vh", paddingLeft:"25px"}}
                                            >
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                }

                    {/*!position_added &&
                    <form onSubmit={this.savePosition}>
                    <div className="form-row">
                        <p className="interview-txt7"><box-icon name='message-square-error' color="#56a3fa"/> Do not ask questions that are discriminatory, illegal, or otherwise violate the HireBeat site rules.</p>
                        <div className="form-group col-10">
                                <label style={{ fontSize: "17px", margin:"1%"}}>
                                    Question 1:
                                </label>
                                <input type="text" name="question1" value={this.state.question1}
                                onChange={this.handleInputChange} className="form-control" required="required"/>
                        </div>
                        <div className="form-group col-10">
                                <label style={{ fontSize: "17px", margin:"1%"}}>
                                    Question 2:
                                </label>
                                <input type="text" name="question2" value={this.state.question2}
                                onChange={this.handleInputChange} className="form-control"/>
                        </div>
                        <div className="form-group col-10">
                                <label style={{ fontSize: "17px", margin:"1%"}}>
                                    Question 3:
                                </label>
                                <input type="text" name="question3" value={this.state.question3}
                                onChange={this.handleInputChange} className="form-control"/>
                        </div>
                        <div className="form-group col-12 " style={{marginTop:"1rem"}}>
                            {selectParamEnployer(
                                "Time for Each Question",
                                this.state.lengthOfResponse,
                                this.handleChangeTime,
                                lengthOfResponseOptions,
                                "select-time"
                            )}
                        </div>
                        <div className="form-group col-12" style={{marginTop:"1rem"}}>
                            <button className="default-btn1"
                                type="submit"
                                style={{paddingLeft:"25px", display:"inline"}}>Done</button>
                            <p style={{marginLeft:"0.6rem", display:"inline"}}>Currently we only support at most 3 questions. <a href="/contact">Contact us</a> for more features.</p>
                        </div>
                    </div>
                    </form>*/}
            </div>
        )
    };
};

export default CreatePosition;