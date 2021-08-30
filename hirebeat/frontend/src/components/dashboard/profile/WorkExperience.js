import React, { Component } from "react";

export class WorkExperience extends Component {

    handleEdit = () => {
        let editId = this.props.index;
        this.props.setExpEditId(editId);
        this.props.editWorkExp();
    };

    render() {
        console.log(this.props.title);
        return(
            <div style={{marginBottom: "2rem"}}>
                {(this.props.company !== null && this.props.company !== "") ?
                    <div className="row">
                        <div className="col-8">
                            <p className="profile-p3">{this.props.title}</p>
                        </div>
                        <div className="col-4 profile-edit">
                            <div style={{float: "right"}}>
                                <i className="bx bx-edit-alt"></i>
                                <span onClick={this.handleEdit} style={{marginLeft: "0.5rem", cursor:"pointer"}}>Edit</span>
                            </div>
                        </div>
                    </div> :
                    <p className="profile-p4" style={{marginBottom: "0.5rem"}}>Add your wok experience</p>
                }

                <p className="profile-p4" style={{marginBottom: "0.5rem"}}>{this.props.company}</p>
                {(this.props.startDate != "" && this.props.startDate != null) &&
                    <p className="profile-p4" style={{marginBottom: "0.5rem", color: "#7D7D7D"}}>
                        {this.props.startDate} - {this.props.endDate}
                    </p>
                }
                <p className="profile-p4" style={{marginBottom: "0.5rem"}}>{this.props.workDescription}</p>
            </div>
        )
    }
}

export default WorkExperience