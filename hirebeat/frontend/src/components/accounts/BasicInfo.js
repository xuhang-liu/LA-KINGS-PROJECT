import React, {Component} from "react";
import { getByZip } from 'zcs';

export class BasicInfo extends Component {
    state = {
        inUS: true,
        zipcode: null,
        city: "",
        state: "",
        location: "",
    }

    handleFistName = (e) => {
        let firstName = e.target.value;
        this.props.setFirstName(firstName);
    }

    handleLastName = (e) => {
        let lastName = e.target.value;
        this.props.setLastName(lastName);
    }

    checkLocation = () => {
        this.setState({inUS: !this.state.inUS});
    }

    handleZipcode = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
        let zipcode = e.target.value;
        if (zipcode.length == 5) {
            let cityState = getByZip(zipcode);
            this.setState({
                location: cityState["city"] + ", " + cityState["state"],
            });
            let location = cityState["city"] + "," + cityState["state"] + "," + zipcode;
            this.props.setLocation(location);
        }
    };

    handleZipcodeInputKeyDown = e => {
        var key = e.which ? e.which : e.keyCode;
        if (
            (e.target.value.length >= 5 &&
                key !== 8 &&
                key !== 37 &&
                key !== 38 &&
                key !== 39 &&
                key !== 40) ||
            (key === 18 || key === 189 || key === 229)
        ) {
            e.preventDefault();
        }
    };

    onSubmit = (e) => {
        e.preventDefault();
        let nextStep = this.props.step + 1;
        this.props.setStep(nextStep);
    }

    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.onSubmit}>
                        <h1 className="register-title" style={{paddingTop: "0.6rem", textAlign: "left"}}>Step2 &nbsp; <span style={{color: "#67A3F3"}}>Basic Info</span></h1>
                      <div style={{display: "flex"}}>
                          <img style={{width: "86%", height: "3vw"}} src="https://hirebeat-assets.s3.amazonaws.com/step2.png" alt="step flow" />
                      </div>

                      <div className="form-group">
                        <label className="register-label register-text">
                            First Name<span className="job-apply-char2">*</span>
                        </label>
                        <input
                            type="text"
                            className="form-control register-form"
                            name="firstName"
                            onChange={this.handleFistName}
                            required
                        />
                      </div>

                      <div className="form-group">
                        <label className="register-label register-text">
                            Last Name<span className="job-apply-char2">*</span>
                        </label>
                        <input
                            type="text"
                            className="form-control register-form"
                            name="lastName"
                            onChange={this.handleLastName}
                            required
                        />
                      </div>

                      <div className="form-group">
                        <label className="register-label register-text">
                            Location (Zipcode)<span className="job-apply-char2">*</span>
                            <span style={{marginLeft: "1rem"}}><input type="checkbox" id="registerLocation" onClick={this.checkLocation}/> &nbsp; Not in the US</span>
                        </label>
                        {this.state.inUS &&
                            <div className="register">
                                <input
                                    type="number"
                                    name="zipcode"
                                    onKeyDown={e => this.handleZipcodeInputKeyDown(e)}
                                    onChange={this.handleZipcode}
                                    className="form-control register-form"
                                    required="required"
                                />
                                <p className="register-label register-text">{this.state.location}</p>
                            </div>
                        }
                      </div>

                      <div className="form-group">
                        <button
                            type="submit"
                            className="default-btn"
                            style={{width:"100%", fontSize:'1rem', fontWeight:'bold', paddingLeft: "25px"}}
                        >
                          Next
                          <img src="https://sp.analytics.yahoo.com/spp.pl?a=10000&.yp=10145429&ea=HOC1" alt="icon"/>
                        </button>
                      </div>

                    </form>
            </React.Fragment>
        )
    }
}

export default BasicInfo;