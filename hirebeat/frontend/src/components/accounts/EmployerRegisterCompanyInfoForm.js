import React, {Component} from "react";
import Select from 'react-select';
import { getByZip } from 'zcs';
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

    customStyles = {
        control: styles => ({ ...styles, backgroundColor: '#ffffff', boxShadow: "0px 0px 50px rgba(70, 137, 250, 0.1)", height: '55px' }),
        singleValue: styles => ({
            ...styles,
            fontSize: '0.9375rem',
            fontFamily: 'Avenir Next,Segoe UI, sans-serif',
            fontWeight: '500'
        }),
        placeholder: styles => ({
            ...styles,
             fontFamily: "Avenir Next, Segoe UI",
             background: "#FFFFFF",
             borderRadius: "5px",
             color: "rgb(153 153 153)",
        }),
    };

    render() {
        return (
            <React.Fragment>
                <div className="d-flex justify-content-center" style={{marginBottom:"3rem", paddingTop:"3rem"}}>
                    <img style={{height: "3vw"}} src="https://hirebeat-assets.s3.amazonaws.com/Company-page/registration_step2.png" />
                </div>
                <form onSubmit={this.props.registration}>
                    <div className="form-group">
                        <div class="register-input-placeholder">
                            <input
                                type="text"
                                className="form-control"
                                name="companyName"
                                onChange={this.handleInput}
                                style={{
                                  fontFamily: "Avenir Next, Segoe UI",
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
                        </div>
                    </div>

                    <div className="form-group">
                        <Select value={this.state.companySize} onChange={this.selectSize} options={SizeOptions} styles={this.customStyles} placeholder={'Company Size'}/>
                    </div>

                    <div className="form-group">
                        <Select value={this.state.companyType} onChange={this.selectIndustry} options={IndustryOptions} styles={this.customStyles} placeholder={'Company Industry'}/>
                    </div>
                    <div className="form-group">
                        <div className="register">
                            <input
                                type="number"
                                name="zipcode"
                                placeholder="Company Location"
                                onKeyDown={e => this.handleZipcodeInputKeyDown(e)}
                                onChange={this.handleZipcode}
                                className="form-control register-form"
                            />
                            <p className="register-label register-text" style={{color: "#FFFFFF"}}>{this.state.location}</p>
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