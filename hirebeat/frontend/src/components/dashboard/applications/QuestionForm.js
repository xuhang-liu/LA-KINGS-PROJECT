import React, {Component} from "react";
import { connect } from "react-redux";
import Select from 'react-select'
import { IconText } from "../DashboardComponents";
import { withRouter } from "react-router-dom";
import { addInterviewQuestion, getAllJobs} from "../../../redux/actions/job_actions";

export class QuestionForm extends Component {

    state = {
        categoryOfQuestion: { value: "Positive Attitude", label: "Positive Attitude"},
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
                                            onClick={this.saveQuestions}
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