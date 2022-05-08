import React, { Component } from "react";
import Select from "react-select";
import Autocomplete from "react-google-autocomplete";
import { SizeOptions, IndustryOptions } from "../accounts/Constants";
import { MyModalUpgrade } from "./DashboardComponents";
import "boxicons";

export class EmployerDetailFormModal extends Component {
  state = {
    companySize: "",
    companyType: "",
    location: "",
    companySummary: "",
    companyLinkedin: "",
    errLinkedin: "",
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleLocation = (location) => {
    this.setState({ location: location });
  };

  selectSize = (companySize) => {
    this.setState({ companySize: companySize });
  };

  selectIndustry = (companyType) => {
    this.setState({ companyType: companyType });
  };

  onSubmit = () => {
    e.preventDefault();
    if (!this.state.companyLinkedin.toLowerCase().includes("linkedin")) {
      this.setState({ errLinkedin: "Please Enter Correct LinkedIn URL" });
    }

    let data1 = {
      user_id: this.props.userId,
      company_type: this.state.companyType.value,
      location: location,
      company_size: this.state.companySize.value,
    };
    this.props.updateEmployerBasicInfo(data1);

    let data2 = {
      user_id: this.props.userId,
      summary: this.state.companySummary.toString("html"),
    };
    this.props.updateEmployerSummary(data2);

    let data3 = {
      user_id: this.props.userId,
      linkedin: companyLinkedin,
    };
    this.props.updateEmployerSocialMedia(data3);
    this.props.setCloseDetail();
  };

  customStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "#ffffff",
      boxShadow: "0px 0px 50px rgba(70, 137, 250, 0.1)",
      height: "55px",
    }),
    singleValue: (styles) => ({
      ...styles,
      fontSize: "14px",
      fontFamily: "Inter,Segoe UI, sans-serif",
      fontWeight: "normal",
    }),
    placeholder: (styles) => ({
      ...styles,
      fontFamily: "Inter, Segoe UI",
      background: "#FFFFFF",
      borderRadius: "5px",
      fontSize: "16px",
      color: "rgb(153 153 153)",
    }),
  };

  render() {
    const bg2 =
      "https://hirebeat-assets.s3.amazonaws.com/Employer/moredetail.png";

    return (
      <MyModalUpgrade
        show={this.props.isOpenDetail}
        onHide={this.props.setCloseDetail}
        backdrop="static"
      >
        <div style={{ backgroundColor: "#5772f0" }}>
          <h1
            style={{
              fontWeight: "700",
              color: "#fff",
              textAlign: "center",
              padding: "30px",
            }}
          >
            Get Started!
          </h1>
          <form
            style={{
              marginBottom: "3rem",
              paddingTop: "3rem",
            }}
          >
            <div>
              <div
                className="detailform_part1"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  padding: "20px",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <div className="detailform_part1_left" onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <label style={{ fontWeight: "bold", color: "#fff" }}>
                      Company Location
                    </label>
                    <div>
                      <Autocomplete
                        className="form-control popup-employerform"
                        style={{ width: "100%", backgroundColor: "#fff" }}
                        language="en"
                        placeholder="Please Type"
                        apiKey={"AIzaSyDEplgwaPXJn38qEEnE5ENlytHezUfq56U"}
                        onPlaceSelected={(place, inputRef, autocomplete) => {
                          this.handleLocation(place.formatted_address);
                        }}
                      />
                    </div>
                  </div>

                  <div className="form-group" style={{ textAlign: "left" }}>
                    <label style={{ fontWeight: "bold", color: "#fff" }}>
                      Company Size
                    </label>
                    <Select
                      value={this.state.companySize}
                      onChange={this.selectSize}
                      options={SizeOptions}
                      styles={this.customStyles}
                      placeholder={"Please Select"}
                    />
                  </div>

                  <div className="form-group" style={{ textAlign: "left" }}>
                    <label style={{ fontWeight: "bold", color: "#fff" }}>
                      Company Industry
                    </label>
                    <Select
                      value={this.state.companyType}
                      onChange={this.selectIndustry}
                      options={IndustryOptions}
                      styles={this.customStyles}
                      placeholder={"Please Select"}
                    />
                  </div>

                  <div className="form-group">
                    <label style={{ fontWeight: "bold", color: "#fff" }}>
                      Company LinkedIn
                    </label>
                    <div>
                      <input
                        type="text"
                        className="form-control popup-employerform"
                        name="companyLinkedin"
                        value={this.state.companyLinkedin}
                        onChange={this.handleInputChange}
                        placeholder="Please Type"
                        style={{
                          fontFamily: "Inter, Segoe UI",
                          background: "#FFFFFF",
                          borderRadius: "5px",
                          paddingLeft: "1rem",
                          boxShadow: "0px 0px 50px rgba(70, 137, 250, 0.1)",
                        }}
                      />
                      {this.state.errLinkedin.length != 0 ? (
                        <>
                          <i
                            className="bx bxs-x-circle"
                            style={{ color: "#FB0000" }}
                          ></i>
                          <span className="ml-2">{this.state.errLinkedin}</span>
                        </>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="detailform_part1_right">
                  <img
                    src={bg2}
                    alt="detailform page"
                    style={{ transform: "translateY(-20%) scale(1)" }}
                  />
                </div>
              </div>

              <div className="form-group" style={{ padding: "20px" }}>
                <label style={{ fontWeight: "bold", color: "#fff" }}>
                  Company Overview <span style={{ color: "red" }}>*</span>
                </label>
                <textarea
                  id="website"
                  className="profile-input profile-p"
                  name="companySummary"
                  style={{
                    width: "100%",
                    border: "1px solid #7E8993",
                    borderRadius: "3px",
                    paddingLeft: "0.5rem",
                    height: "200px",
                  }}
                  onChange={this.handleInputChange}
                ></textarea>
              </div>

              <div
                className="form-group"
                style={{
                  marginTop: "-20px",
                  position: "relative",
                  padding: "20px",
                }}
              >
                <button
                  type="submit"
                  className="default-btn"
                  style={{
                    paddingLeft: "50px",
                    paddingRight: "50px",
                    textDecoration: "none",
                    backgroundColor: "#090d3a",
                    color: "#fff",
                    position: "absolute",
                    right: "20px",
                  }}
                >
                  Save & Next
                </button>
              </div>
            </div>
          </form>
        </div>
      </MyModalUpgrade>
    );
  }
}

export default EmployerDetailFormModal;
