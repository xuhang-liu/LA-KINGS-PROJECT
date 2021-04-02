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
        this.saveWorkExp(index + 1, index); // delete data from db
        // delete from states
        let array = [...this.state.count];
        array.splice(index, 1);
        this.setState({count: array});
        this.props.removeWorkExp(index); // manipulate the profile.js layer
    }

    saveWorkExp = (size, delIndex) => {
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
        for (let i = 0; i < size; i++) {
            array[i][companies[i]] = i == delIndex ? "" : document.getElementById(companies[i]).value;
            array[i][titles[i]] = i == delIndex ? "" : document.getElementById(titles[i]).value;
            array[i][startDates[i]] = i == delIndex ? "" : document.getElementById(startDates[i]).value;
            if (document.getElementById(endDates[i]) != null) {
                array[i][endDates[i]] = i == delIndex ? "" : document.getElementById(endDates[i]).value;
            }else {
                array[i][endDates[i]] = i == delIndex ? "" : "Present";
            }
            array[i][workDescriptions[i]] = i == delIndex ? "" : document.getElementById(workDescriptions[i]).value;
        }
        let data = {
            "user_id": this.props.userId,
            "data": array,
        }
        this.props.updateWorkExp(data);
        if (delIndex == -1) {  // -1 means not deletion, but for update or create
            this.props.getUpdatedData();
            this.props.cancelEditWorkExp();
        }
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
                    <div className="col-5 profile-edit">
                        <div style={{float: "right"}}>
                            <span type="button" onClick={this.props.cancelEditWorkExp}>Cancel</span>
                            <span type="button" onClick={() => {this.saveWorkExp(this.state.count.length, -1)}} style={{marginLeft: "1rem"}}>Save</span>
                        </div>
                    </div>
                </div>

                {this.state.count.map((c, index) => {
                    return (
                        <WorkFormCard
                            index={index}
                            removeWorkExp={this.removeWorkExp}
                            company={companies[index]}
                            title={titles[index]}
                            startDate={startDates[index]}
                            endDate={endDates[index]}
                            workDescription={workDescriptions[index]}
                            profileDetail={this.props.profileDetail}
                        />
                    )
                })}

                <div className="row" style={{marginTop: "1rem"}}>
                    <div className="col-7">
                        <span type="button" className="profile-edit" onClick={this.addWorkExp}>Add Experience</span>
                    </div>
                </div>
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
                </div>
                <div style={{float: "right", marginTop: "1rem"}}>
                    <span type="button" onClick={() => {props.removeWorkExp(index)}} className="profile-edit" style={{color: "#FF0000", float: "right"}}>Delete</span>
                </div>
            </div>
        </div>
    );
}

export default WorkExpForm;