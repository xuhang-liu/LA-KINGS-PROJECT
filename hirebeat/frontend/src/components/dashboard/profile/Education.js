import React, { Component } from "react";

export class Education extends Component {
    handleEdit = () => {
        let editId = this.props.index;
        this.props.setEduEditId(editId);
        this.props.editEducation();
    };

    render() {
        return(
            <div style={{marginBottom: "2rem"}}>
                {(this.props.school !== null && this.props.school !== "") ?
                    <div className="row">
                        <div className="col-8">
                            <p className="profile-p3">{this.props.school}</p>
                        </div>
                        <div className="col-4 profile-edit">
                            <div style={{float: "right"}}>
                                <i className="bx bx-edit-alt"></i>
                                <span onClick={this.handleEdit} style={{marginLeft: "0.5rem", cursor:"pointer"}}>Edit</span>
                            </div>
                        </div>
                    </div> :
                    <p className="profile-p4" style={{marginBottom: "0.5rem"}}>Add your education history</p>
                }
                {(this.props.major1 != "" && this.props.major1 != null) &&
                    <p className="profile-p4" style={{marginBottom: "0.5rem"}}>{this.props.major1} | {this.props.gpa}</p>
                }
                <p className="profile-p4" style={{marginBottom: "0.5rem"}}>{this.props.graduationDate}</p>
            </div>
        )
    }
}

export default Education