import React, { Component, useState } from "react";
import { confirmAlert } from 'react-confirm-alert';

export class EducationForm extends Component {
    state = {
        isAddMajor: false,
        count: this.props.count,
    }

    exceedError = () => {
        confirmAlert({
          title: "Maximum Education Reached",
          message: "You can add three universities at most.",
          buttons: [
            {
              label: 'Ok'
            }
          ]
        });
    };

    addEducation = () => {
        // max 3 education
        let size = this.state.count.length;
        if (size < 3) {
            this.setState(prevState => ({
                count: [...prevState.count, 1]
            }));
            this.props.addEducation(); // Manipulate the profile.js layer
        } else {
            return this.exceedError();
        }

    }

    removeEducation = (index) => {
        this.saveEducation(index, index) // delete data from db
        // delete from states
        let array = [...this.state.count];
        array.splice(index, 1);
        this.setState({count: array});
        this.props.removeEducation(index); // Manipulate the profile.js layer
    }

    addMajor = () => {
        this.setState({isAddMajor: true});
    }

    saveEducation = (index, delIndex) => {
        // delIndex === -1 means not deletion, but for update or create
        const schools = ["school1", "school2", "school3"];
        const graduationDates = ["graduation_date1", "graduation_date2", "graduation_date3"];
        const majors = ["major1", "major2", "major3"];
        const extraMajors = ["extra_major1", "extra_major2", "extra_major3"];
        const degrees = ["degree1", "degree2", "degree3"];
        const gpas = ["gpa1", "gpa2", "gpa3"];

        let array = [
            {"school1": "", "graduation_date1": "", "major1": "", "extra_major1": "", "degree1": "", "gpa1": ""},
            {"school2": "", "graduation_date2": "", "major2": "", "extra_major2": "", "degree2": "", "gpa2": ""},
            {"school3": "", "graduation_date3": "", "major3": "", "extra_major3": "", "degree3": "", "gpa3": ""},
        ];

        array[index][schools[index]] = index == delIndex ? "" : document.getElementById(schools[index]).value;
        // check school
        if (delIndex === -1 && array[index][schools[index]] == "") return alert("School name is required");
        array[index][graduationDates[index]] = index == delIndex ? "" : document.getElementById(graduationDates[index]).value;
        array[index][majors[index]] = index == delIndex ? "" : document.getElementById(majors[index]).value;
        if (document.getElementById(extraMajors[index]) != null) {
            array[index][extraMajors[index]] = index == delIndex ? "" : document.getElementById(extraMajors[index]).value;
        }else {
            array[index][extraMajors[index]] = "";
        }
        array[index][degrees[index]] = index == delIndex ? "" : document.getElementById(degrees[index]).value;
        array[index][gpas[index]] = index == delIndex ? "" : document.getElementById(gpas[index]).value;

        let data = {
            "user_id": this.props.userId,
            "data": array,
        }
        this.props.updateEducation(data);
        this.props.getUpdatedData();
        this.props.cancelEditEducation();
    }

    render () {
        const schools = ["school1", "school2", "school3"];
        const graduationDates = ["graduation_date1", "graduation_date2", "graduation_date3"];
        const majors = ["major1", "major2", "major3"];
        const extraMajors = ["extra_major1", "extra_major2", "extra_major3"];
        const degrees = ["degree1", "degree2", "degree3"];
        const gpas = ["gpa1", "gpa2", "gpa3"];
        return (
            <div>
                <div className="row">
                    <div className="col-7">
                        <h3 className="profile-h3">Education</h3>
                    </div>
                </div>

                <FormCard
                    index={this.props.index}
                    removeEducation={this.removeEducation}
                    school={schools[this.props.index]}
                    graduationDate={graduationDates[this.props.index]}
                    major={majors[this.props.index]}
                    extraMajor={extraMajors[this.props.index]}
                    degree={degrees[this.props.index]}
                    gpa={gpas[this.props.index]}
                    profileDetail={this.props.profileDetail}
                    cancelEditEducation={this.props.cancelEditEducation}
                    saveEducation={() => {this.saveEducation(this.props.index, -1)}}
                 />

            </div>
        )

    }

};

const FormCard = (props) => {
    const [addMajor, setAddMajor] = useState(false);
    const index = props.index;
    const profileDetail = props.profileDetail;
    return (
        <div style={{marginBottom: "3rem"}}>
            <div className="profile-bg2">
                <div style={{padding: "1rem"}}>
                    <div className="row">
                        <div className="col-8">
                            <p className="profile-p" style={{margin: "0rem"}}>School</p>
                            <input id={props.school} defaultValue={profileDetail[props.school]} className="profile-input profile-p4" style={{width: "100%"}}></input>
                        </div>
                        <div className="col-4">
                            <p className="profile-p" style={{margin: "0rem"}}>Graduation</p>
                            <input id={props.graduationDate} defaultValue={profileDetail[props.graduationDate]} className="profile-input profile-p4" style={{width: "100%"}} placeHolder="June 2020"></input>
                        </div>
                    </div>
                    <div className="row" style={{marginTop: "1rem"}}>
                        <div className="col-8">
                            <p className="profile-p" style={{margin: "0rem"}}>Major</p>
                            <input id={props.major} defaultValue={profileDetail[props.major]} className="profile-input profile-p4" style={{width: "100%"}}></input>
                        </div>
                        <div className="col-4">
                            <p className="profile-p" style={{margin: "0rem"}}>Degree</p>
                            <input id={props.degree} defaultValue={profileDetail[props.degree]} className="profile-input profile-p4" style={{width: "100%"}}></input>
                        </div>
                    </div>
                    <div className="row" style={{marginTop: "1rem"}}>
                        <div className="col-8">
                            {!addMajor &&
                                <span style={{cursor:"pointer"}} onClick={() => {setAddMajor(true)}} className="profile-edit">Add a Major</span>}
                            {addMajor &&
                                <div>
                                    <p className="profile-p" style={{margin: "0rem"}}>Another Major</p>
                                    <input id={props.extraMajor} defaultValue={profileDetail[props.extraMajor]} className="profile-input profile-p4" style={{width: "100%"}}></input>
                                </div>
                        }
                        </div>
                        <div className="col-4">
                            <p className="profile-p" style={{margin: "0rem"}}>GPA</p>
                            <input id={props.gpa} defaultValue={profileDetail[props.gpa]} className="profile-input profile-p4" style={{width: "100%"}}></input>
                        </div>
                    </div>
                    <div className="row d-flex" style={{marginTop: "1rem"}}>
                        <div className="col-2">
                            <button onClick={() => {props.removeEducation(index)}} className="default-btn" style={{backgroundColor: "#FF0000", paddingLeft: "25px"}}>Delete</button>
                        </div>
                        <div className="ml-auto col-2">
                            <button onClick={props.cancelEditEducation} className="default-btn" style={{backgroundColor: "#E5E5E5", paddingLeft: "25px", color: "#090D3A"}}>Cancel</button>
                        </div>
                        <div className="col-2">
                            <button onClick={props.saveEducation} className="default-btn" style={{backgroundColor: "#67A3F3", paddingLeft: "25px"}}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EducationForm;