import React, { Component, useState } from "react";

export class EducationForm extends Component {
    state = {
        isAddMajor: false,
    }

    addEducation = () => {
        // edit existed education
        if (this.props.eduEditId !== -1) {
            this.saveEducation(this.props.eduEditId, -1);
        }
        // add new education
        else {
            let index = 0;
            // max 3 education
            for (let i = 0; i < 3; i++) {
                let key = "school" + (i + 1);  // school is 1 indexed
                if (this.props.profileDetail[key] == "" || this.props.profileDetail[key] == null) {
                    index = i;
                    break;
                }
            }
            this.saveEducation(index, -1);
            this.props.updateEduCount(this.props.count + 1);
        }
    }

    removeEducation = (index) => {
        this.saveEducation(index, index) // delete data from db
        this.props.updateEduCount(this.props.count - 1);
        this.props.setEduEditId(-1); // means the deletion is finished
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
        const profileData = this.props.profileDetail;

        let array = [
            {"school1": profileData["school1"], "graduation_date1": profileData["graduation_date1"], "major1": profileData["major1"], "extra_major1": profileData["extra_major1"], "degree1": profileData["degree1"], "gpa1": profileData["gpa1"]},
            {"school2": profileData["school2"], "graduation_date2": profileData["graduation_date2"], "major2": profileData["major2"], "extra_major2": profileData["extra_major2"], "degree2": profileData["degree2"], "gpa2": profileData["gpa2"]},
            {"school3": profileData["school3"], "graduation_date3": profileData["graduation_date3"], "major3": profileData["major3"], "extra_major3": profileData["extra_major3"], "degree3": profileData["degree3"], "gpa3": profileData["gpa3"]},
        ];

        array[index][schools[index]] = index == delIndex ? "" : document.getElementById("school").value;
        // check school
        if (delIndex === -1 && array[index][schools[index]] == "") return alert("School name is required");
        array[index][graduationDates[index]] = index == delIndex ? "" : document.getElementById("graduationDate").value;
        array[index][majors[index]] = index == delIndex ? "" : document.getElementById("major").value;
        if (document.getElementById("extraMajor") != null) {
            array[index][extraMajors[index]] = index == delIndex ? "" : document.getElementById("extraMajor").value;
        }else {
            array[index][extraMajors[index]] = "";
        }
        array[index][degrees[index]] = index == delIndex ? "" : document.getElementById("degree").value;
        array[index][gpas[index]] = index == delIndex ? "" : document.getElementById("gpa").value;

        let data = {
            "user_id": this.props.userId,
            "data": array,
        }
        this.props.updateEducation(data);
        this.props.setEduEditId(-1); // means the edition is finished
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
                <FormCard
                    eduEditId={this.props.eduEditId}
                    removeEducation={this.removeEducation}
                    school={schools[this.props.eduEditId]}
                    graduationDate={graduationDates[this.props.eduEditId]}
                    major={majors[this.props.eduEditId]}
                    extraMajor={extraMajors[this.props.eduEditId]}
                    degree={degrees[this.props.eduEditId]}
                    gpa={gpas[this.props.eduEditId]}
                    profileDetail={this.props.profileDetail}
                    cancelEditEducation={this.props.cancelEditEducation}
                    addEducation={this.addEducation}
                 />

            </div>
        )

    }

};

const FormCard = (props) => {
    const [addMajor, setAddMajor] = useState(false);
    const eduEditId = props.eduEditId;
    const profileDetail = props.profileDetail;
    return (
        <div style={{marginBottom: "3rem"}}>
            <div className="profile-bg2">
                <div style={{padding: "1rem"}}>
                    <div className="row">
                        <div className="col-8">
                            <p className="profile-p" style={{margin: "0rem"}}>School</p>
                            <input id="school" defaultValue={profileDetail[props.school]} className="profile-input profile-p4" style={{width: "100%"}}></input>
                        </div>
                        <div className="col-4">
                            <p className="profile-p" style={{margin: "0rem"}}>Graduation</p>
                            <input id="graduationDate" defaultValue={profileDetail[props.graduationDate]} className="profile-input profile-p4" style={{width: "100%"}} placeHolder="June 2020"></input>
                        </div>
                    </div>
                    <div className="row" style={{marginTop: "1rem"}}>
                        <div className="col-8">
                            <p className="profile-p" style={{margin: "0rem"}}>Major</p>
                            <input id="major" defaultValue={profileDetail[props.major]} className="profile-input profile-p4" style={{width: "100%"}}></input>
                        </div>
                        <div className="col-4">
                            <p className="profile-p" style={{margin: "0rem"}}>Degree</p>
                            <input id="degree" defaultValue={profileDetail[props.degree]} className="profile-input profile-p4" style={{width: "100%"}}></input>
                        </div>
                    </div>
                    <div className="row" style={{marginTop: "1rem"}}>
                        <div className="col-8">
                            {!addMajor &&
                                <span style={{cursor:"pointer"}} onClick={() => {setAddMajor(true)}} className="profile-edit">Add a Major</span>}
                            {addMajor &&
                                <div>
                                    <p className="profile-p" style={{margin: "0rem"}}>Another Major</p>
                                    <input id="extraMajor" defaultValue={profileDetail[props.extraMajor]} className="profile-input profile-p4" style={{width: "100%"}}></input>
                                </div>
                        }
                        </div>
                        <div className="col-4">
                            <p className="profile-p" style={{margin: "0rem"}}>GPA</p>
                            <input id="gpa" defaultValue={profileDetail[props.gpa]} className="profile-input profile-p4" style={{width: "100%"}}></input>
                        </div>
                    </div>
                    <div className="row d-flex" style={{marginTop: "1rem"}}>
                        <div className="col-2">
                            {eduEditId !== -1 &&
                                <button onClick={() => {props.removeEducation(eduEditId)}} className="default-btn" style={{backgroundColor: "#FF0000", paddingLeft: "25px"}}>Delete</button>
                            }
                        </div>
                        <div className="ml-auto col-2">
                            <button onClick={props.cancelEditEducation} className="default-btn" style={{backgroundColor: "#E5E5E5", paddingLeft: "25px", color: "#090D3A"}}>Cancel</button>
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