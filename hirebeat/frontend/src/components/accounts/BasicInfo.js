import React, {Component} from "react";
import Autocomplete from "react-google-autocomplete";

export class BasicInfo extends Component {
    state = {
        inUS: true,
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

    onSubmit = (e) => {
        e.preventDefault();
        let nextStep = this.props.step + 1;
        this.props.setStep(nextStep);
    }

    handleLocation = (location) => {
        this.setState({location: location});
        this.props.setLocation(location);
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
                            Location<span className="job-apply-char2">*</span>
                            {/*<span style={{marginLeft: "1rem"}}><input type="checkbox" id="registerLocation" onClick={this.checkLocation}/> &nbsp; Not in the US</span>*/}
                        </label>
                        {this.state.inUS &&
                            <div className="register">
                                <Autocomplete
                                    className="form-control register-form"
                                    style={{width: "100%"}}
                                    language="en"
                                    apiKey={"AIzaSyDEplgwaPXJn38qEEnE5ENlytHezUfq56U"}
                                    onPlaceSelected={(place, inputRef, autocomplete) => {
                                        this.handleLocation(place.formatted_address);
                                    }}
                                    defaultValue={this.state.location}
                                />
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