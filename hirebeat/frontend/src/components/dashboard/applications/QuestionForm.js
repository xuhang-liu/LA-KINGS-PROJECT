import React, {Component} from "react";
import { connect } from "react-redux";
import Select from 'react-select'
import { IconText } from "../DashboardComponents";
import { withRouter } from "react-router-dom";
import { addInterviewQuestion, getAllJobs} from "../../../redux/actions/job_actions";

export class QuestionForm extends Component {

    state = {
        categoryOfQuestion: { value: "Positive Attitude", label: "Positive Attitude"},
        preTime: 30,
        resTime: 90,
        cameraOn: true,
    }

    setPreTime = (time) => {
        this.setState({preTime: time});
    }

    setResTime = (time) => {
        this.setState({resTime: time});
    }

    setCameraOn = (choice) => {
        this.setState({cameraOn: choice});
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

    saveQuestions = (e) => {
        let questions = this.getQuestions();
        let data = {
            "preTime": this.state.preTime,
            "resTime": this.state.resTime,
            "cameraOn": this.state.cameraOn,
            "questions": questions,
            "positionId": this.props.positionId,
        }
        this.props.addInterviewQuestion(data);
        setTimeout(() => {this.props.getAllJobs(this.props.user.id);}, 300);
        e.preventDefault();
        this.props.hideQForm();
    }

    render() {
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
            <React.Fragment>
                <div>
                    <div className="card container" style={{marginTop:"1%", marginBottom: "3%"}}>
                        <form>
                            <div className="form-row" style={{justifyContent: "center", marginTop: "1rem", justifyContent: "left"}}>
                                <p className= "db-txt5" style={{paddingLeft: "5px"}}>{this.props.jobTitle}</p>
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
                                                        <span style={{cursor:"pointer"}} onClick={() => this.fillQuestion(question)}><img src="https://hirebeat-assets.s3.amazonaws.com/add.png" /></span>
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
                                </div>
                            </div>
                            <div className="form-row justify-items">
                                <div className="form-group col-4" style={{textAlign: "center"}}>
                                    <label className="db-txt2" style={{ margin:"2%"}}>
                                        Preparation Time
                                    </label>
                                    <div className="form-row" style={{justifyContent: "center"}}>
                                        {this.state.preTime == 30 ?
                                            <button type="button" className="default-btn2" style={{fontSize:"12px", backgroundColor:"#e8edfc", color:"#090d3a", border: "2px solid #67A3F3"}}>30s</button>:
                                            <button type="button" className="default-btn2" style={{fontSize:"12px", backgroundColor:"#fff", color:"#090d3a", border: "2px solid #e8edfc"}} onClick={() => this.setPreTime(30)}>30s</button>
                                        }
                                        {this.state.preTime == 60 ?
                                            <button type="button" className="default-btn2" style={{fontSize:"12px", backgroundColor:"#e8edfc", color:"#090d3a", border: "2px solid #67A3F3"}}>60s</button>:
                                            <button type="button" className="default-btn2" style={{fontSize:"12px", backgroundColor:"#fff", color:"#090d3a", border: "2px solid #e8edfc"}} onClick={() => this.setPreTime(60)}>60s</button>
                                        }
                                    </div>
                                </div>
                                <div className="form-group col-5" style={{textAlign: "center"}}>
                                    <label className="db-txt2" style={{ marginTop:"2%" }}>
                                        Response Time
                                    </label>
                                    <div className="form-row" style={{justifyContent: "center"}}>
                                        {this.state.resTime == 60 ?
                                            <button type="button" className="default-btn2" style={{fontSize:"12px", backgroundColor:"#e8edfc", color:"#090d3a", border: "2px solid #67A3F3"}}>60s</button>:
                                            <button type="button" className="default-btn2" style={{fontSize:"12px", backgroundColor:"#fff", color:"#090d3a", border: "2px solid #e8edfc"}} onClick={() => this.setResTime(60)}>60s</button>
                                            }
                                            {this.state.resTime == 90 ?
                                            <button type="button" className="default-btn2" style={{fontSize:"12px", backgroundColor:"#e8edfc", color:"#090d3a", border: "2px solid #67A3F3"}}>90s</button>:
                                            <button type="button" className="default-btn2" style={{fontSize:"12px", backgroundColor:"#fff", color:"#090d3a", border: "2px solid #e8edfc"}} onClick={() => this.setResTime(90)}>90s</button>
                                            }
                                            {this.state.resTime == 120 ?
                                            <button type="button" className="default-btn2" style={{fontSize:"12px", backgroundColor:"#e8edfc", color:"#090d3a", border: "2px solid #67A3F3"}}>120s</button>:
                                            <button type="button" className="default-btn2" style={{fontSize:"12px", backgroundColor:"#fff", color:"#090d3a", border: "2px solid #e8edfc"}} onClick={() => this.setResTime(120)}>120s</button>
                                        }
                                    </div>
                                </div>
                                <div className="form-group col-3" style={{textAlign: "center"}}>
                                    <label className="db-txt2" style={{ margin:"2%"}}>
                                        Camera
                                    </label>
                                    <div className="form-row" style={{justifyContent: "center"}}>
                                        {this.state.cameraOn ?
                                            <button type="button" className="default-btn2" style={{fontSize:"12px", backgroundColor:"#e8edfc", color:"#090d3a", border: "2px solid #67A3F3"}}>ON</button>:
                                            <button type="button" className="default-btn2" style={{fontSize:"12px", backgroundColor:"#fff", color:"#090d3a", border: "2px solid #e8edfc"}} onClick={() => this.setCameraOn(true)}>ON</button>
                                        }
                                        {!this.state.cameraOn ?
                                            <button type="button" className="default-btn2" style={{fontSize:"12px", backgroundColor:"#e8edfc", color:"#090d3a", border: "2px solid #67A3F3"}}>OFF</button>:
                                            <button type="button" className="default-btn2" style={{fontSize:"12px", backgroundColor:"#fff", color:"#090d3a", border: "2px solid #e8edfc"}} onClick={() => this.setCameraOn(false)}>OFF</button>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="row" style={{float: "right", marginRight: "2.5rem"}}>
                                <button
                                    type="submit"
                                    onClick={this.saveQuestions}
                                    className="default-btn1" style={{marginBottom:"5vh", paddingLeft:"25px"}}
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
});

export default withRouter(connect(mapStateToProps, { addInterviewQuestion, getAllJobs})(
  QuestionForm
));