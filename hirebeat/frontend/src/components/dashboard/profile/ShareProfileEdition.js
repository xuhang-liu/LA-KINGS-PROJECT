import React, {Component} from "react";

export class ShareProfileEdition extends Component {
    state = {
        shareProfile: this.props.shareProfile,
        openToHR: this.props.openToHR,
        hasFullName: true,
    }

    setShareProfile = () => {
        this.setState({shareProfile: !this.state.shareProfile});
    }

    setOpenToHR = () => {
        this.setState({openToHR: !this.state.openToHR});
    }

    saveProfileSharing = () => {
        // check full name
        if (this.props.firsName === "" || this.props.lastName === "") {
            this.setState({hasFullName: false});
        }
        else {
            let data = {
            user_id: this.props.userId,
            share_profile: this.state.shareProfile,
            open_to_hr: this.state.openToHR,
            }
            this.props.updateProfileSharing(data);
            setTimeout(() => this.props.getProfileDetail(this.props.userId), 300);
            setTimeout(() => this.props.onHide(), 300);
        }
    }

    render() {
        return (
            <React.Fragment>
                <h1 className="share-h1">Profile Sharing Preference</h1>
                <div className="form-group">
                    <label className="share-p2" style={{marginBottom: "1rem"}}>
                        Public Profile
                    </label>
                    <p className="share-p3">Make your profile publicly searchable. </p>
                    <div className="register-label">
                        {this.state.shareProfile ?
                            <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#e8edfc", color: "#090d3a", border: "2px solid #67A3F3" }}>Enabled</button> :
                            <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#fff", color: "#090d3a", border: "2px solid #e8edfc" }} onClick={this.setShareProfile}>Enabled</button>
                        }
                        {!this.state.shareProfile ?
                            <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#e8edfc", color: "#090d3a", border: "2px solid #67A3F3" }}>Disabled</button> :
                            <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#fff", color: "#090d3a", border: "2px solid #e8edfc" }} onClick={this.setShareProfile}>Disabled</button>
                        }
                    </div>
                </div>
                <hr style={{ border: "1px solid #E5E5E5" }} />
                <div className="form-group">
                    <label className="share-p2" style={{marginBottom: "1rem"}}>
                        Visibility to Recruiters
                    </label>
                    <p className="share-p3">Allow employers to search for your profile and send you messages.</p>
                    <div className="register-label">
                        {this.state.openToHR ?
                            <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#e8edfc", color: "#090d3a", border: "2px solid #67A3F3" }}>Enabled</button> :
                            <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#fff", color: "#090d3a", border: "2px solid #e8edfc" }} onClick={this.setOpenToHR}>Enabled</button>
                        }
                        {!this.state.openToHR ?
                            <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#e8edfc", color: "#090d3a", border: "2px solid #67A3F3" }}>Disabled</button> :
                            <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#fff", color: "#090d3a", border: "2px solid #e8edfc" }} onClick={this.setOpenToHR}>Disabled</button>
                        }
                    </div>
                </div>
                {!this.state.hasFullName && <p className="share-p4">Please fill out your full name for profile sharing</p>}
                <div className="row" style={{marginTop: "1rem"}}>
                    <div className="col-4 profile-edit">
                        <button className="default-btn" style={{background: "#67A3F3", paddingLeft: "25px"}} onClick={this.saveProfileSharing}>Update Status</button>
                    </div>
                    <div className="col-3 profile-edit">
                        <button className="default-btn" style={{background: "#E5E5E5", color: "#090D3A", paddingLeft: "25px"}} onClick={this.props.onHide}>Cancel</button>
                    </div>
                    <div className="col-5" />
                </div>
            </React.Fragment>
        )
    }
}

export default ShareProfileEdition;