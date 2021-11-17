import React, {Component} from "react";
import Select from 'react-select';
import Autocomplete from "react-google-autocomplete";
import { SizeOptions, IndustryOptions } from "./Constants";

export class EmployerRegisterCompanyInfoForm extends Component {
    state = {
        companySize: "",
        companyType: "",
        location: "",
    }

    handleInput = (e) => {
        this.props.updateState(e.target.name, e.target.value);
    }

    selectSize = (companySize) => {
        this.setState({ companySize: companySize });
        this.props.setCompanySize(companySize);
    };

    selectIndustry = (companyType) => {
        this.setState({ companyType: companyType });
        this.props.setCompanyType(companyType);
    };

    customStyles = {
        control: styles => ({ ...styles, backgroundColor: '#ffffff', boxShadow: "0px 0px 50px rgba(70, 137, 250, 0.1)", height: '55px' }),
        singleValue: styles => ({
            ...styles,
            fontSize: '14px',
            fontFamily: 'Inter,Segoe UI, sans-serif',
            fontWeight: 'normal'
        }),
        placeholder: styles => ({
            ...styles,
             fontFamily: "Inter, Segoe UI",
             background: "#FFFFFF",
             borderRadius: "5px",
             fontSize: "16px",
             color: "rgb(153 153 153)",
        }),
    };

    render() {
        return (
            <React.Fragment>
                <div className="d-flex justify-content-center" style={{marginBottom:"3rem", paddingTop:"3rem"}}>
                    <img style={{height: "3vw"}} src="https://hirebeat-assets.s3.amazonaws.com/Company-page/registration_step2.png" />
                </div>
                <form id="Employer_Register_Desk_Step2" onSubmit={this.props.registration}>
                    <div className="form-group">
                        <div class="register-input-placeholder">
                            <input
                                type="text"
                                className="form-control"
                                name="companyName"
                                onChange={this.handleInput}
                                style={{
                                  fontFamily: "Inter, Segoe UI",
                                  background: "#FFFFFF",
                                  borderRadius: "5px",
                                  paddingLeft: "1rem",
                                  boxShadow:"0px 0px 50px rgba(70, 137, 250, 0.1)"
                                }}
                                required
                            />
                            <div class="placeholder">
                                Company Name <span>*</span>
                            </div>
                            {!this.props.validCompanyName &&
                            <p className="register-p">Company Name Invalid Format!</p>}
                        </div>
                    </div>

                    <div className="form-group" style={{textAlign: "left"}}>
                        <Select value={this.state.companySize} onChange={this.selectSize} options={SizeOptions} styles={this.customStyles} placeholder={'Company Size'}/>
                    </div>

                    <div className="form-group" style={{textAlign: "left"}}>
                        <Select value={this.state.companyType} onChange={this.selectIndustry} options={IndustryOptions} styles={this.customStyles} placeholder={'Company Industry'}/>
                    </div>
                    <div className="form-group">
                        <div className="register">
                            <Autocomplete
                                className="form-control register-form"
                                style={{width: "100%"}}
                                language="en"
                                apiKey={"AIzaSyDEplgwaPXJn38qEEnE5ENlytHezUfq56U"}
                                onPlaceSelected={(place, inputRef, autocomplete) => {
                                    this.props.setLocation(place.formatted_address);
                                }}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <button
                            type="submit"
                            className="default-btn"
                            style={{width:"100%", fontSize:'1rem', fontWeight:'bold', backgroundColor:"#fac046", zIndex: "0"}}
                        >
                          <i className="bx bxs-hot"></i>
                          Next
                        </button>
                    </div>
                </form>
            </React.Fragment>
        )
    }
}

export default EmployerRegisterCompanyInfoForm;