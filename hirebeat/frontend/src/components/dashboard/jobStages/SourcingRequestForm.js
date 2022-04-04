import React, { Component } from "react";

export class SourcingRequestForm extends Component {

    constructor(props) {
        super(props);
    }

    state={
        currentTitle: "",
        locationPref: "",
        additionalComment: "",
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    saveRequest = (e) => {
        e.preventDefault();
        alert("ok");
    }

    render() {
        return (
            <React.Fragment>
                <div className="container px-5" style={{ marginTop: "1%", marginBottom: "3%" }}>
                    <form onSubmit={this.saveRequest}>
                        <div className="form-row" style={{ justifyContent: "center", marginTop: "1rem" }}>
                            <p className="db-txt5">What’s your ideal candidate profile for this position?</p>
                        </div>
                        <div className="form-row mt-3" style={{ justifyContent: "center" }}>
                            <p className="db-txt3">
                                On-demand sourcing is a fast and effective way to fill your recruitment pipeline with quality candidates. You will specify the ideal candidate profile for each soucing request and get 50 matching prospects within 24 hours.
                            </p>
                        </div>
                        <div className="form-row mt-5">
                            <div className="form-group col-6">
                                <label className="db-txt2">
                                    Current Title
                                </label><span className="job-apply-char2">*</span>
                                <input type="text" name="currentTitle" value={this.state.currentTitle}
                                    onChange={this.handleInputChange} className="form-control" style={{ border: "2px solid #E8EDFC", borderRadius: "5px", height: "2.5rem" }} required/>
                            </div>
                            <div className="form-group col-6">
                                <label className="db-txt2">
                                    Location Preference
                                </label><span className="job-apply-char2">*</span>
                                <input type="text" name="locationPref" value={this.state.locationPref}
                                    onChange={this.handleInputChange} className="form-control" style={{ border: "2px solid #E8EDFC", borderRadius: "5px", height: "2.5rem" }} required/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-12">
                                <label className="db-txt2" style={{color:"#7e8993"}}>
                                    Additional Comment (eg. language skills, certificates, major, etc.)
                                </label>
                                <textarea name="additionalComment" value={this.state.additionalComment}
                                    onChange={this.handleInputChange} className="form-control" style={{ border: "2px solid #E8EDFC", borderRadius: "5px", minHeight: "8rem", padding:"1rem" }}/>
                            </div>
                        </div>
                        <div style={{ float: "left" }}>
                            <button
                                type="submit"
                                className="default-btn5" style={{ marginBottom: "1.5%", paddingLeft: "25px", marginRight: "1rem" }}
                            >
                                $99 | Checkout
                            </button>
                            </div>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

export default SourcingRequestForm;