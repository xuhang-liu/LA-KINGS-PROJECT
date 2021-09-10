import React, { Component, useState } from "react";

export class WorkExpForm extends Component {

    addWorkExp = () => {
        let array = {
            workExpId: this.props.workExp?.id || 0,
            company: "",
            title: "",
            startDate: "",
            endDate: "Present",
            workDescription: "",
        }

        array.company = document.getElementById("company").value;
        // check company name
        if (array.company == "") return alert("Company name is required");
        array.title = document.getElementById("title").value;
        array.startDate = document.getElementById("startDate").value;
        if (document.getElementById("endDate") != null) {
            array.endDate = document.getElementById("endDate").value;
        }
        array.workDescription = document.getElementById("workDescription").value;

        let data = {
            "user_id": this.props.userId,
            "data": array,
        }
        this.props.updateWorkExp(data);
        this.props.getUpdatedData();
        this.props.cancelEditWorkExp();
        this.props.closeEdit();
    }

    removeWorkExp = () => {
        let data = {
            id: this.props.workExp.id,
        }
        this.props.deleteProfileWorkExp(data);
        this.props.getUpdatedData();
        this.props.closeEdit();
    }

    render () {
        return (
            <div>
                <WorkFormCard
                    addWorkExp={this.addWorkExp}
                    removeWorkExp={this.removeWorkExp}
                    workExp={this.props.workExp}
                    cancelEditWorkExp={this.props.cancelEditWorkExp}
                    closeEdit={this.props.closeEdit}
                />

            </div>
        )

    }
};

const WorkFormCard = (props) => {
    const [present, setPresent] = useState(false);
    const workExp = props.workExp;
    return (
        <div style={{marginBottom: "3rem"}}>
            <div className="profile-bg2">
                <div style={{padding: "1rem"}}>
                    <div className="row">
                        <div className="col-6">
                            <p className="profile-p" style={{margin: "0rem"}}>Company</p>
                            <input id="company" defaultValue={workExp?.company} className="profile-input profile-p4" style={{width: "100%"}}></input>
                        </div>
                        <div className="col-6">
                            <p className="profile-p" style={{margin: "0rem"}}>Title</p>
                            <input id="title" defaultValue={workExp?.title} className="profile-input profile-p4" style={{width: "100%"}}></input>
                        </div>
                    </div>
                    <div className="row" style={{marginTop: "1rem"}}>
                        <div className="col-6">
                            <p className="profile-p" style={{margin: "0rem"}}>Start Date</p>
                            <input id="startDate" defaultValue={workExp?.startDate} className="profile-input profile-p4" style={{width: "100%"}}></input>
                        </div>
                        {!present &&
                            <div className="col-6">
                                <p className="profile-p" style={{margin: "0rem"}}>End Date</p>
                                <input id="endDate" defaultValue={workExp?.endDate} className="profile-input profile-p4" style={{width: "100%"}}></input>
                            </div>
                        }
                    </div>
                    <div className="profile-p" style={{display: "flex", alignItems: "center", marginTop: "1rem"}}>
                        Current Job: &nbsp;
                        <input style={{marginLeft: "1rem"}} type="radio" onClick={() => {setPresent(true)}} value="Present"></input>
                    </div>
                    <div style={{marginTop: "1rem"}}>
                        <p className="profile-p" style={{margin: "0rem"}}>Description</p>
                        <textarea id="workDescription" defaultValue={workExp?.workDescription} className="profile-input profile-p" style={{width: "100%", height: "6rem"}}></textarea>
                    </div>
                    <div className="row d-flex" style={{marginTop: "1rem"}}>
                        <div className="col-2">
                            {typeof(workExp) !== "undefined" &&
                                <button onClick={props.removeWorkExp} className="default-btn" style={{backgroundColor: "#FF0000", paddingLeft: "25px"}}>Delete</button>
                            }
                        </div>
                        <div className="ml-auto col-2">
                            <button onClick={() => {props.cancelEditWorkExp(); props.closeEdit()}} className="default-btn" style={{backgroundColor: "#E5E5E5", paddingLeft: "25px", color: "#090D3A"}}>Cancel</button>
                        </div>
                        <div className="col-2">
                            <button onClick={props.addWorkExp} className="default-btn" style={{backgroundColor: "#67A3F3", paddingLeft: "25px"}}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WorkExpForm;