import React, { Component, useState } from "react";

export class WorkExpForm extends Component {

    addWorkExp = () => {
        // edit existed work experience
        if (this.props.expEditId !== -1) {
            this.saveWorkExp(this.props.expEditId, -1);
        } else {
            let index = 0;
            // max 5 experience
            for (let i = 0; i < 5; i++) {
                let key = "company" + (i + 1);  // company is 1 indexed
                if (this.props.profileDetail[key] == "" || this.props.profileDetail[key] == null) {
                    index = i;
                    break;
                }
            }
            this.saveWorkExp(index, -1);
            this.props.updateWorCount(this.props.count + 1);
        }

    }

    removeWorkExp = (index) => {
        this.saveWorkExp(index, index); // delete data from db
        this.props.updateWorCount(this.props.count - 1);
        this.props.setExpEditId(-1); // means the deletion is finished
    }

    saveWorkExp = (index, delIndex) => {
        // delIndex === -1 means not deletion, but for update or create
        const companies = ["company1", "company2", "company3", "company4", "company5"];
        const titles = ["title1", "title2", "title3", "title4", "title5"];
        const startDates = ["start_date1", "start_date2", "start_date3", "start_date4", "start_date5"];
        const endDates = ["end_date1", "end_date2", "end_date3", "end_date4", "end_date5"];
        const workDescriptions = ["work_description1", "work_description2", "work_description3", "work_description4", "work_description5"];
        const profileData = this.props.profileDetail;

        let array = [
            {"company1": profileData["company1"], "title1": profileData["title1"], "start_date1": profileData["start_date1"], "end_date1": profileData["end_date1"], "work_description1": profileData["work_description1"]},
            {"company2": profileData["company2"], "title2": profileData["title2"], "start_date2": profileData["start_date2"], "end_date2": profileData["end_date2"], "work_description2": profileData["work_description2"]},
            {"company3": profileData["company3"], "title3": profileData["title3"], "start_date3": profileData["start_date3"], "end_date3": profileData["end_date3"], "work_description3": profileData["work_description3"]},
            {"company4": profileData["company4"], "title4": profileData["title4"], "start_date4": profileData["start_date4"], "end_date4": profileData["end_date4"], "work_description4": profileData["work_description4"]},
            {"company5": profileData["company5"], "title5": profileData["title5"], "start_date5": profileData["start_date5"], "end_date5": profileData["end_date5"], "work_description5": profileData["work_description5"]},
        ];

        array[index][companies[index]] = index == delIndex ? "" : document.getElementById("company").value;
        if (delIndex === -1 && array[index][companies[index]] == "") return alert("Company name is required");
        array[index][titles[index]] = index == delIndex ? "" : document.getElementById("title").value;
        array[index][startDates[index]] = index == delIndex ? "" : document.getElementById("startDate").value;
        if (document.getElementById("endDate") != null) {
            array[index][endDates[index]] = index == delIndex ? "" : document.getElementById("endDate").value;
        }else {
            array[index][endDates[index]] = index == delIndex ? "" : "Present";
        }
        array[index][workDescriptions[index]] = index == delIndex ? "" : document.getElementById("workDescription").value;

        let data = {
            "user_id": this.props.userId,
            "data": array,
        }
        this.props.updateWorkExp(data);
        this.props.setExpEditId(-1); // means the edition is finished
        this.props.getUpdatedData();
        this.props.cancelEditWorkExp();
    }

    render () {
        const companies = ["company1", "company2", "company3", "company4", "company5"];
        const titles = ["title1", "title2", "title3", "title4", "title5"];
        const startDates = ["start_date1", "start_date2", "start_date3", "start_date4", "start_date5"];
        const endDates = ["end_date1", "end_date2", "end_date3", "end_date4", "end_date5"];
        const workDescriptions = ["work_description1", "work_description2", "work_description3", "work_description4", "work_description5"];
        return (
            <div>
                <WorkFormCard
                    expEditId={this.props.expEditId}
                    removeWorkExp={this.removeWorkExp}
                    company={companies[this.props.expEditId]}
                    title={titles[this.props.expEditId]}
                    startDate={startDates[this.props.expEditId]}
                    endDate={endDates[this.props.expEditId]}
                    workDescription={workDescriptions[this.props.expEditId]}
                    profileDetail={this.props.profileDetail}
                    cancelEditWorkExp={this.props.cancelEditWorkExp}
                    addWorkExp={this.addWorkExp}
                />

            </div>
        )

    }
};

const WorkFormCard = (props) => {
    const expEditId = props.expEditId;
    const [present, setPresent] = useState(false);
    const profileDetail = props.profileDetail;
    return (
        <div style={{marginBottom: "3rem"}}>
            <div className="profile-bg2">
                <div style={{padding: "1rem"}}>
                    <div className="row">
                        <div className="col-6">
                            <p className="profile-p" style={{margin: "0rem"}}>Company</p>
                            <input id="company" defaultValue={profileDetail[props.company]} className="profile-input profile-p4" style={{width: "100%"}}></input>
                        </div>
                        <div className="col-6">
                            <p className="profile-p" style={{margin: "0rem"}}>Title</p>
                            <input id="title" defaultValue={profileDetail[props.title]} className="profile-input profile-p4" style={{width: "100%"}}></input>
                        </div>
                    </div>
                    <div className="row" style={{marginTop: "1rem"}}>
                        <div className="col-6">
                            <p className="profile-p" style={{margin: "0rem"}}>Start Date</p>
                            <input id="startDate" defaultValue={profileDetail[props.startDate]} className="profile-input profile-p4" style={{width: "100%"}}></input>
                        </div>
                        {!present &&
                            <div className="col-6">
                                <p className="profile-p" style={{margin: "0rem"}}>End Date</p>
                                <input id="endDate" defaultValue={profileDetail[props.endDate]} className="profile-input profile-p4" style={{width: "100%"}}></input>
                            </div>
                        }
                    </div>
                    <div className="profile-p" style={{display: "flex", alignItems: "center", marginTop: "1rem"}}>
                        Current Job: &nbsp;
                        <input style={{marginLeft: "1rem"}} type="radio" onClick={() => {setPresent(true)}} value="Present"></input>
                    </div>
                    <div style={{marginTop: "1rem"}}>
                        <p className="profile-p" style={{margin: "0rem"}}>Description</p>
                        <textarea id="workDescription" defaultValue={profileDetail[props.workDescription]} className="profile-input profile-p" style={{width: "100%", height: "6rem"}}></textarea>
                    </div>
                    <div className="row d-flex" style={{marginTop: "1rem"}}>
                        <div className="col-2">
                            {expEditId !== -1 &&
                                <button onClick={() => {props.removeWorkExp(expEditId)}} className="default-btn" style={{backgroundColor: "#FF0000", paddingLeft: "25px"}}>Delete</button>
                            }
                        </div>
                        <div className="ml-auto col-2">
                            <button onClick={props.cancelEditWorkExp} className="default-btn" style={{backgroundColor: "#E5E5E5", paddingLeft: "25px", color: "#090D3A"}}>Cancel</button>
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