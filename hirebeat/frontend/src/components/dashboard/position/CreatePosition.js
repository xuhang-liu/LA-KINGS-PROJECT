import React,  { Component } from "react";
import { connect } from "react-redux";
import { IconText } from "../DashboardComponents";
import { selectParamEnployer } from "../../../components/practice/CardComponents"
import { lengthOfResponseOptions } from "../../../constants/constants"
import PropTypes from "prop-types";
import { addPosition } from "../../../redux/actions/question_actions";
import 'boxicons';

export class CreatePosition extends Component{

    static propTypes = {
        addPosition: PropTypes.func.isRequired,
    };

    state = {
        jobtitle: "",
        jobid: "",
        question1: "",
        question2: "",
        question3: "",
        position_added: true,
        lengthOfResponse: { value: 1, label: "60s" },
    }
    
    handleInputChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        });
      };
    
    handleChangeTime = ( lengthOfResponse ) => {
        this.setState({ lengthOfResponse });
        console.log(this.state.lengthOfResponse);
    }

    savePosition = () => {
        var jobtitle = this.state.jobtitle;
        var jobid = this.state.jobid;
        var userid = this.props.user.id;
        var question1 = this.state.question1;
        var question2 = this.state.question2;
        var question3 = this.state.question3;
        var questionTime = this.state.lengthOfResponse.value * 60
        this.props.addPosition(jobtitle, jobid, userid, question1, question2, question3, questionTime);
    }

    hideSave = (e) => {
        e.preventDefault();
        this.setState({position_added: false})
    }

    render() {
        const {position_added} = this.state
        return(
            <div className="container" style={{width:'95%'}}>
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
                        <p style={{margin: "0%", fontSize:"24px", color:"090D3A"}}>
                            Creat New Position
                        </p>
                    </div>
                </div>
                <div className="card container" style={{marginTop:"1%"}}>
                    <form>
                        <div className="form-row">
                            <div className="form-group col-5">
                                <label style={{ fontSize: "17px", margin:"2%"}}>
                                    Job Title
                                </label>
                                <input type="text" name="jobtitle" value={this.state.jobtitle}
                                onChange={this.handleInputChange} className="form-control" required="required"/>
                            </div>
                            <div className="form-group col-5">
                                <label style={{ fontSize: "17px", marginTop:"2%" }}>
                                    Job ID (optional)
                                </label>
                                <input type="text" name="jobid" value={this.state.jobid}
                                onChange={this.handleInputChange} className="form-control"/>
                            </div>
                            {position_added &&
                            <div className="form-group col-2 d-flex align-items-end">
                                <button
                                    type="submit"
                                    onClick={this.hideSave}
                                    className="default-btn1" style={{marginBottom:"1.5%", paddingLeft:"25px"}}
                                >
                                    Save
                                </button>
                            </div>}
                            {/* Here we need to add in the questions  */}      
                        </div>
                    </form>
                    {!position_added &&
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
                    </form>}
                </div>
            </div>
        )
    };
};

export default connect(null, { addPosition })(CreatePosition);