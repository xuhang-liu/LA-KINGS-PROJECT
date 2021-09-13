import React, { Component, useState } from "react";
import {MajorOptions} from "./Constants";
import Select from 'react-select';

export class EducationForm extends Component {
    state = {
        majorName: {value: this.props.education?.major, label: this.props.education?.major},
        extraMajorName: {value: this.props.education?.extra_major, label: this.props.education?.extra_major},
    }
    onFilter = (majorName) => {
        this.setState({ majorName: majorName });
    };

    onFilterExtraMajor = (extraMajorName) => {
        this.setState({ extraMajorName: extraMajorName });
    };

    customStyles = {
        control: styles => ({ ...styles, backgroundColor: '#ffffff', boxShadow: "0px 0px 50px rgba(70, 137, 250, 0.1)" }),
        singleValue: styles => ({
            ...styles,
            color: '#4a6f8a',
            fontSize: '0.9375rem',
            fontFamily: 'Avenir Next,Segoe UI, sans-serif',
            fontWeight: '500'
        }),
        menuPortal: provided => ({ ...provided, zIndex: 99 }),
        menu: provided => ({ ...provided, zIndex: 99 })
    };

    addEducation = () => {
        let array = {
            educationId: this.props.education?.id || 0,
            school: "",
            graduationDate: "",
            major: "",
            extraMajor: "",
            degree: "",
            gpa: "",
        }
        array.school = document.getElementById("school").value;
        // check school
        if (array.school == "") return alert("School name is required");
        array.graduationDate = document.getElementById("graduationDate").value;
        array.major = this.state.majorName.value;
        if (document.getElementById("extraMajor") != null) {
             array.extraMajor = this.state.extraMajorName.value;
        }
        array.degree = document.getElementById("degree").value;
        array.gpa = document.getElementById("gpa").value;

        let data = {
            "user_id": this.props.userId,
            "data": array,
        }
        this.props.updateEducation(data);
        this.props.getUpdatedData();
        this.props.cancelEditEducation();
        this.props.closeEdit();
    }

    removeEducation = () => {
        let data = {
            id: this.props.education.id,
        }
        this.props.deleteProfileEducation(data);
        this.props.getUpdatedData();
        this.props.closeEdit();
    }

    render () {
        return (
            <div>
                <FormCard
                    addEducation={this.addEducation}
                    removeEducation={this.removeEducation}
                    education={this.props.education}
                    cancelEditEducation={this.props.cancelEditEducation}
                    closeEdit={this.props.closeEdit}
                    majorName={this.state.majorName}
                    extraMajorName={this.state.extraMajorName}
                    onFilter={this.onFilter}
                    onFilterExtraMajor={this.onFilterExtraMajor}
                    customStyles={this.customStyles}
                 />
            </div>
        )

    }

};

const FormCard = (props) => {
    const [addMajor, setAddMajor] = useState(false);
    const education = props.education;
    return (
        <div style={{marginBottom: "3rem"}}>
            <div className="profile-bg2">
                <div style={{padding: "1rem"}}>
                    <div className="row">
                        <div className="col-8">
                            <p className="profile-p" style={{margin: "0rem"}}>School</p>
                            <input id="school" defaultValue={education?.school} className="profile-input profile-p4" style={{width: "100%"}}></input>
                        </div>
                        <div className="col-4">
                            <p className="profile-p" style={{margin: "0rem"}}>Graduation</p>
                            <input id="graduationDate" defaultValue={education?.graduation_date} className="profile-input profile-p4" style={{width: "100%"}} placeHolder="June 2020"></input>
                        </div>
                    </div>
                    <div className="row" style={{marginTop: "1rem"}}>
                        <div className="col-8">
                            <p className="profile-p" style={{margin: "0rem"}}>Major</p>
                            <Select id="major" value={props.majorName} onChange={props.onFilter} options={MajorOptions} styles={props.customStyles} menuPortalTarget={document.body}/>
                        </div>
                        <div className="col-4">
                            <p className="profile-p" style={{margin: "0rem"}}>Degree</p>
                            <input id="degree" defaultValue={education?.degree} className="profile-input profile-p4" style={{width: "100%"}}></input>
                        </div>
                    </div>
                    <div className="row" style={{marginTop: "1rem"}}>
                        <div className="col-8">
                            {!addMajor &&
                                <span style={{cursor:"pointer"}} onClick={() => {setAddMajor(true)}} className="profile-edit">Add a Major</span>}
                            {addMajor &&
                                <div>
                                    <p className="profile-p" style={{margin: "0rem"}}>Another Major</p>
                                    <Select id="extraMajor" value={props.extraMajorName} onChange={props.onFilterExtraMajor} options={MajorOptions} styles={props.customStyles} menuPortalTarget={document.body}/>
                                </div>
                        }
                        </div>
                        <div className="col-4">
                            <p className="profile-p" style={{margin: "0rem"}}>GPA</p>
                            <input id="gpa" defaultValue={education?.gpa} className="profile-input profile-p4" style={{width: "100%"}}></input>
                        </div>
                    </div>
                    <div className="row d-flex" style={{marginTop: "1rem"}}>
                        <div className="col-2">
                            {typeof(education) !== "undefined" &&
                                <button onClick={props.removeEducation} className="default-btn" style={{backgroundColor: "#FF0000", paddingLeft: "25px"}}>Delete</button>
                            }
                        </div>
                        <div className="ml-auto col-2">
                            <button onClick={() => {props.cancelEditEducation(); props.closeEdit()}} className="default-btn" style={{backgroundColor: "#E5E5E5", paddingLeft: "25px", color: "#090D3A"}}>Cancel</button>
                        </div>
                        <div className="col-2">
                            <button onClick={props.addEducation} className="default-btn" style={{backgroundColor: "#67A3F3", paddingLeft: "25px"}}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EducationForm;