import React,  { Component } from "react";
import { IconText } from "./../DashboardComponents";
import 'boxicons';
import Select from 'react-select'
import { confirmAlert } from 'react-confirm-alert';

export class JobCreation extends Component{

    state = {
        jobTitle: "",
        jobId: "",
        jobDescription: "",
        jobLocation: "",
        jobLevel: "",
        position_added: true,
        lengthOfResponse: { value: 2, label: "120s" },
        categoryOfQuestion: { value: "Positive Attitude", label: "Positive Attitude"},
    }

    handleInputChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        });
      };

    savePosition = (e) => {
        let data = {
            jobTitle: this.state.jobTitle,
            jobId: this.state.jobId,
            jobDescription: this.state.jobDescription,
            jobLevel: this.state.jobLevel,
            jobLocation: this.state.jobLocation,
            userId: this.props.user.id,
        };
        this.props.addNewJob(data);
//        this.props.getPJobs(); // get the most recent job list
        e.preventDefault();
        this.props.renderJobs();
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
        if (this.state.jobTitle == "" || this.state.jobDescription == "") {
            return false;
        }
        else {
            return true;
        }
    }

    showJob = (e) => {
        this.setState({position_added: true})
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

    render() {
        const {position_added} = this.state

        return(
            <div className="container" style={{width:'95%'}}>
                {position_added &&
                    <div>
                        <div className="row">
                            <div className="col d-flex align-items-center">
                                <button
                                    type="button"
                                    className="panel-button"
                                    onClick={this.props.renderJobs}
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
                                    Create New Position
                                </p>
                            </div>
                        </div>
                        <div className="card container" style={{marginTop:"1%"}}>
                            <form onSubmit={this.savePosition}>
                                <div className="form-row">
                                    <div className="form-group col-6">
                                        <label className="db-txt2" style={{ margin:"2%"}}>
                                            Job Title
                                        </label>
                                        <input type="text" name="jobTitle" value={this.state.jobTitle}
                                        onChange={this.handleInputChange} className="form-control" required="required"/>
                                    </div>
                                    <div className="form-group col-6">
                                        <label className="db-txt2" style={{ marginTop:"2%" }}>
                                            Job ID (optional)
                                        </label>
                                        <input type="text" name="jobId" value={this.state.jobId}
                                        onChange={this.handleInputChange} className="form-control"/>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-12">
                                        <label className="db-txt2" style={{ margin:"2%"}}>
                                            Job Description
                                        </label>
                                        <textarea type="text" name="jobDescription" value={this.state.jobDescription} style={{minHeight:"15rem"}}
                                        onChange={this.handleInputChange} className="form-control" required="required"
                                        placeholder="Paste job description here. Be sure to include titles such as 'basic qualifications' and 'preferred qualifications'."/>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-6">
                                        <label className="db-txt2" style={{ margin:"2%"}}>
                                            Job Location
                                        </label>
                                        <input type="text" name="jobLocation" value={this.state.jobLocation}
                                        onChange={this.handleInputChange} className="form-control" required="required"/>
                                    </div>
                                    <div className="form-group col-6">
                                        <label className="db-txt2" style={{ marginTop:"2%" }}>
                                            Job Level
                                        </label>
                                        <input type="text" name="jobLevel" value={this.state.jobLevel}
                                        onChange={this.handleInputChange} className="form-control" required="required"/>
                                    </div>
                                </div>
                                <div style={{float: "right", marginBottom: "1rem"}}>
                                    <button
                                        type="submit"
                                        className="default-btn1" style={{marginBottom:"1.5%", paddingLeft:"25px"}}
                                    >
                                        Create
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>
                }
                {/* !position_added &&
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
                            <form>
                                <div className="form-row" style={{justifyContent: "center", marginTop: "1rem", justifyContent: "left"}}>
                                    <p className= "db-txt5" style={{paddingLeft: "5px"}}>{this.state.jobTitle}</p>
                                </div>
                                <div className="form-row" style={{justifyContent: "center"}}>
                                    <div className="form-group col-6">
                                        <p className="db-txt2">
                                            Choose from Question Bank
                                        </p>
                                        <div className="row" style={{marginBottom: "1rem"}}>
                                            <div className="center-items db-txt3" style={{marginRight: "1rem", marginLeft: "15px"}}>Category: </div>
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
                */}
            </div>
        )
    };
};

export default JobCreation;