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
        this.saveEducation(index + 1, index) // delete data from db
        // delete from states
        let array = [...this.state.count];
        array.splice(index, 1);
        this.setState({count: array});
        this.props.removeEducation(index); // Manipulate the profile.js layer
    }

    addMajor = () => {
        this.setState({isAddMajor: true});
    }

    saveEducation = (size, delIndex) => {
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
        for (let i = 0; i < size; i++) {
            array[i][schools[i]] = i == delIndex ? "" : document.getElementById(schools[i]).value;
            array[i][graduationDates[i]] = i == delIndex ? "" : document.getElementById(graduationDates[i]).value;
            array[i][majors[i]] = i == delIndex ? "" : document.getElementById(majors[i]).value;
            if (document.getElementById(extraMajors[i]) != null) {
                array[i][extraMajors[i]] = i == delIndex ? "" : document.getElementById(extraMajors[i]).value;
            }else {
                array[i][extraMajors[i]] = "";
            }
            array[i][degrees[i]] = i == delIndex ? "" : document.getElementById(degrees[i]).value;
            array[i][gpas[i]] = i == delIndex ? "" : document.getElementById(gpas[i]).value;
        }
        let data = {
            "user_id": this.props.userId,
            "data": array,
        }
        this.props.updateEducation(data);
        if (delIndex == -1) {  // -1 means not deletion, but for update or create
            this.props.getUpdatedData();
            this.props.cancelEditEducation();
        }
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
                    <div className="col-5 profile-edit">
                        <div style={{float: "right"}}>
                            <span style={{cursor:"pointer"}} onClick={this.props.cancelEditEducation}>Cancel</span>
                            <span onClick={() => {this.saveEducation(this.state.count.length, -1)}} style={{marginLeft: "1rem", cursor:"pointer"}}>Save</span>
                        </div>
                    </div>
                </div>

                {this.state.count.map((c, index) => {
                    return (
                        <FormCard
                            index={index}
                            removeEducation={this.removeEducation}
                            school={schools[index]}
                            graduationDate={graduationDates[index]}
                            major={majors[index]}
                            extraMajor={extraMajors[index]}
                            degree={degrees[index]}
                            gpa={gpas[index]}
                            profileDetail={this.props.profileDetail}
                         />
                    )
                })}

                <div className="row" style={{marginTop: "1rem"}}>
                    <div className="col-7">
                        <span style={{cursor:"pointer"}} className="profile-edit" onClick={this.addEducation}>Add University</span>
                    </div>
                </div>
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
                    <div className="row" style={{marginTop: "1rem"}}>
                        <div style={{paddingLeft: "90%"}}>
                            <span onClick={() => {props.removeEducation(index)}} className="profile-edit" style={{color: "#FF0000", float: "right", cursor:"pointer"}}>Delete</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EducationForm;