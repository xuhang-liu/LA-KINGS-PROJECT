import React from "react";

class Reminder extends React.Component {
  render() {
    return (
        <div className="tool_submenu container" style={{ width: "14rem", marginLeft: "45%" }}>
            <h4 className="profile-h4-2">CHECKLIST</h4>
            <p className="align-center" style={{marginBottom: "0rem"}}>
                {this.props.checklist.basicInfoFilled ?
                    <i class='bx bx-checkbox-checked bx-md' style={{color: "#13C4A1"}}></i> :
                    <i class='bx bx-checkbox bx-md' ></i>
                }
                <span className={this.props.checklist.basicInfoFilled ? "profile-p8" : "profile-p"}>Fill in Basic Info</span>
            </p>
            <p className="align-center" style={{marginBottom: "0rem"}}>
                {this.props.checklist.photoUploaded ?
                    <i class='bx bx-checkbox-checked bx-md' style={{color: "#13C4A1"}}></i> :
                    <i class='bx bx-checkbox bx-md' ></i>
                }
                <span className={this.props.checklist.photoUploaded ? "profile-p8" : "profile-p"}>Upload Profile Photo</span>
            </p>
            <p className="align-center" style={{marginBottom: "0rem"}}>
                {this.props.checklist.videoRecorded ?
                    <i class='bx bx-checkbox-checked bx-md' style={{color: "#13C4A1"}}></i> :
                    <i class='bx bx-checkbox bx-md' ></i>
                }
                <span className={this.props.checklist.videoRecorded ? "profile-p8" : "profile-p"}>Record Video Profile</span>
            </p>
            <p className="align-center" style={{marginBottom: "0rem"}}>
                {this.props.checklist.skillsFilled ?
                    <i class='bx bx-checkbox-checked bx-md' style={{color: "#13C4A1"}}></i> :
                    <i class='bx bx-checkbox bx-md' ></i>
                }
                <span className={this.props.checklist.skillsFilled ? "profile-p8" : "profile-p"}>Highlight your Skills</span>
            </p>
            <p className="align-center" style={{marginBottom: "0rem"}}>
                {this.props.checklist.summaryFilled ?
                    <i class='bx bx-checkbox-checked bx-md' style={{color: "#13C4A1"}}></i> :
                    <i class='bx bx-checkbox bx-md' ></i>
                }
                <span className={this.props.checklist.summaryFilled ? "profile-p8" : "profile-p"}>Write Summary</span>
            </p>
            <p className="align-center" style={{marginBottom: "0rem"}}>
                {this.props.checklist.profileCompleted ?
                    <i class='bx bx-checkbox-checked bx-md' style={{color: "#13C4A1"}}></i> :
                    <i class='bx bx-checkbox bx-md' ></i>
                }
                <span className={this.props.checklist.profileCompleted ? "profile-p8" : "profile-p"}>Complete Profile</span>
            </p>
        </div>
    )
  }
}

export default Reminder;