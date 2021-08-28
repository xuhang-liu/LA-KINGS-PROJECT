import React, { Component, useState } from "react";
import { confirmAlert } from 'react-confirm-alert';

export class WorkExpForm extends Component {
    state = {
        count: this.props.count,
    }

    exceedError = () => {
        confirmAlert({
          title: "Maximum Education Reached",
          message: "You can add five work experience at most.",
          buttons: [
            {
              label: 'Ok'
            }
          ]
        });
    };

    addWorkExp = () => {
        // max 3 education
        let size = this.state.count.length;
        if (size < 5) {
            this.setState(prevState => ({
                count: [...prevState.count, 1]
            }));
            this.props.addWorkExp(); // Manipulate the profile.js layer
        } else {
            return this.exceedError();
        }

    }

    removeWorkExp = (index) => {
        this.saveWorkExp(index, index); // delete data from db
        // delete from states
        let array = [...this.state.count];
        array.splice(index, 1);
        this.setState({count: array});
        this.props.removeWorkExp(index); // manipulate the profile.js layer
    }

    saveWorkExp = (index, delIndex) => {
        // delIndex === -1 means not deletion, but for update or create
        const companies = ["company1", "company2", "company3", "company4", "company5"];
        const titles = ["title1", "title2", "title3", "title4", "title5"];
        const startDates = ["start_date1", "start_date2", "start_date3", "start_date4", "start_date5"];
        const endDates = ["end_date1", "end_date2", "end_date3", "end_date4", "end_date5"];
        const workDescriptions = ["work_description1", "work_description2", "work_description3", "work_description4", "work_description5"];

        let array = [
            {"company1": "", "title1": "", "start_date1": "", "end_date1": "", "work_description1": ""},
            {"company2": "", "title2": "", "start_date2": "", "end_date2": "", "work_description2": ""},
            {"company3": "", "title3": "", "start_date3": "", "end_date3": "", "work_description3": ""},
            {"company4": "", "title4": "", "start_date4": "", "end_date4": "", "work_description4": ""},
            {"company5": "", "title5": "", "start_date5": "", "end_date5": "", "work_description5": ""},
        ];

        array[index][companies[index]] = index == delIndex ? "" : document.getElementById(companies[index]).value;
        if (delIndex === -1 && array[index][companies[index]] == "") return alert("Company name is required");
        array[index][titles[index]] = index == delIndex ? "" : document.getElementById(titles[index]).value;
        array[index][startDates[index]] = index == delIndex ? "" : document.getElementById(startDates[index]).value;
        if (document.getElementById(endDates[index]) != null) {
            array[index][endDates[index]] = index == delIndex ? "" : document.getElementById(endDates[index]).value;
        }else {
            array[index][endDates[index]] = index == delIndex ? "" : "Present";
        }
        array[index][workDescriptions[index]] = index == delIndex ? "" : document.getElementById(workDescriptions[index]).value;

        let data = {
            "user_id": this.props.userId,
            "data": array,
        }
        this.props.updateWorkExp(data);
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
                <div className="row">
                    <div className="col-7">
                        <h3 className="profile-h3">Experience</h3>
                    </div>
                </div>

                <WorkFormCard
                    index={this.props.index}
                    removeWorkExp={this.removeWorkExp}
                    company={companies[this.props.index]}
                    title={titles[this.props.index]}
                    startDate={startDates[this.props.index]}
                    endDate={endDates[this.props.index]}
                    workDescription={workDescriptions[this.props.index]}
                    profileDetail={this.props.profileDetail}
                    cancelEditWorkExp={this.props.cancelEditWorkExp}
                    saveWorkExp={() => {this.saveWorkExp(this.props.index, -1)}}
                />

            </div>
        )

    }
};

const WorkFormCard = (props) => {
    const index = props.index;
    const [present, setPresent] = useState(false);
    const profileDetail = props.profileDetail;
    return (
        <div style={{marginBottom: "3rem"}}>
            <div className="profile-bg2">
                <div style={{padding: "1rem"}}>
                    <div className="row">
                        <div className="col-6">
                            <p className="profile-p" style={{margin: "0rem"}}>Company</p>
                            <input id={props.company} defaultValue={profileDetail[props.company]} className="profile-input profile-p4" style={{width: "100%"}}></input>
                        </div>
                        <div className="col-6">
                            <p className="profile-p" style={{margin: "0rem"}}>Title</p>
                            <input id={props.title} defaultValue={profileDetail[props.title]} className="profile-input profile-p4" style={{width: "100%"}}></input>
                        </div>
                    </div>
                    <div className="row" style={{marginTop: "1rem"}}>
                        <div className="col-6">
                            <p className="profile-p" style={{margin: "0rem"}}>Start Date</p>
                            <input id={props.startDate} defaultValue={profileDetail[props.startDate]} className="profile-input profile-p4" style={{width: "100%"}}></input>
                        </div>
                        {!present &&
                            <div className="col-6">
                                <p className="profile-p" style={{margin: "0rem"}}>End Date</p>
                                <input id={props.endDate} defaultValue={profileDetail[props.endDate]} className="profile-input profile-p4" style={{width: "100%"}}></input>
                            </div>
                        }
                    </div>
                    <div className="profile-p" style={{display: "flex", alignItems: "center", marginTop: "1rem"}}>
                        Current Job: &nbsp;
                        <input style={{marginLeft: "1rem"}} type="radio" onClick={() => {setPresent(true)}} value="Present"></input>
                    </div>
                    <div style={{marginTop: "1rem"}}>
                        <p className="profile-p" style={{margin: "0rem"}}>Description</p>
                        <textarea id={props.workDescription} defaultValue={profileDetail[props.workDescription]} className="profile-input profile-p" style={{width: "100%", height: "6rem"}}></textarea>
                    </div>
                    <div className="row d-flex" style={{marginTop: "1rem"}}>
                        <div className="col-2">
                            <button onClick={() => {props.removeWorkExp(index)}} className="default-btn" style={{backgroundColor: "#FF0000", paddingLeft: "25px"}}>Delete</button>
                        </div>
                        <div className="ml-auto col-2">
                            <button onClick={props.cancelEditWorkExp} className="default-btn" style={{backgroundColor: "#E5E5E5", paddingLeft: "25px", color: "#090D3A"}}>Cancel</button>
                        </div>
                        <div className="col-2">
                            <button onClick={props.saveWorkExp} className="default-btn" style={{backgroundColor: "#67A3F3", paddingLeft: "25px"}}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WorkExpForm;