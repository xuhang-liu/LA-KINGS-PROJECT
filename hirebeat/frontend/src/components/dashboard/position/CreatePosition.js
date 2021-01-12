import React,  { Component } from "react";
import { connect } from "react-redux";
import { IconText } from "../DashboardComponents";
import PropTypes from "prop-types";
import { addPosition } from "../../../redux/actions/question_actions";

export class CreatePosition extends Component{

    static propTypes = {
        addPosition: PropTypes.func.isRequired,
    };

    state = {
        jobtitle: "",
        jobid: "",
        position_added: true,
    }
    
    handleInputChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        });
      };

    savePosition = (e) => {
        e.preventDefault();
        var jobtitle = this.state.jobtitle;
        var jobid = this.state.jobid;
        var userid = this.props.user.id;
        this.props.addPosition(jobtitle, jobid, userid);
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
                            onClick={this.props.renderVideos}
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
                    <form onSubmit={this.savePosition}>
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
                                    className="btn btn-primary" style={{marginBottom:"1.5%"}}
                                >
                                    Save
                                </button>
                            </div>}
                            {/* Here we need to add in the questions  */}      
                        </div>
                    </form>
                    {!position_added &&
                    <div className="form-group" style={{marginLeft:"0.5%"}}>
                        <label className="row" style={{ fontSize: "17px", paddingLeft:"1.8%"}}>
                            Questions
                        </label>
                        <button
                            className="btn btn-primary row" 
                            style={{marginLeft:"0%"}} 
                        >
                            + new interview question
                        </button>
                    </div>}
                </div>
            </div>
        )
    };
};

export default connect(null, { addPosition })(CreatePosition);