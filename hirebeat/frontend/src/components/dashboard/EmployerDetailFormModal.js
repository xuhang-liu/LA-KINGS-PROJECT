import React, { Component } from "react";
import Select from "react-select";
import Autocomplete from "react-google-autocomplete";
import { SizeOptions, IndustryOptions } from "../accounts/Constants";
import { MyModalTut } from "./DashboardComponents";
import RichTextEditor from 'react-rte';
import "boxicons";
import axios from "axios";

const toolbarConfig = {
  // Optionally specify the groups to display (displayed in the order listed).
  display: ['INLINE_STYLE_BUTTONS', 'BLOCK_TYPE_BUTTONS', 'LINK_BUTTONS', 'BLOCK_TYPE_DROPDOWN', 'HISTORY_BUTTONS'],
  INLINE_STYLE_BUTTONS: [
    { label: 'Bold', style: 'BOLD', className: 'custom-css-class' },
    { label: 'Italic', style: 'ITALIC' },
    { label: 'Underline', style: 'UNDERLINE' }
  ],
  BLOCK_TYPE_DROPDOWN: [
    { label: 'Normal', style: 'unstyled' },
    { label: 'Heading Large', style: 'header-one' },
    { label: 'Heading Medium', style: 'header-two' },
    { label: 'Heading Small', style: 'header-three' }
  ],
  BLOCK_TYPE_BUTTONS: [
    { label: 'UL', style: 'unordered-list-item' },
    { label: 'OL', style: 'ordered-list-item' }
  ]
};

export class EmployerDetailFormModal extends Component {
  state = {
    companySize: { value: this.props.employerProfileDetail?.company_size, label: this.props.employerProfileDetail?.company_size },
    companyType: { value: this.props.employerProfileDetail?.company_type, label: this.props.employerProfileDetail?.company_type },
    location: this.props.employerProfileDetail?.location,
    companySummary: (this.props.employerProfileDetail?.summary !== null && this.props.employerProfileDetail?.summary !== "") ?
    RichTextEditor.createValueFromString(this.props.employerProfileDetail?.summary, 'html') : RichTextEditor.createEmptyValue(),
    companyLinkedin: this.props.employerProfileDetail?.linkedin,
    errLinkedin: "",
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handelSummary = (companySummary) => {
    this.setState({ companySummary });
  };

  handleLocation = (location) => {
    this.setState({ location: location });
  };

  selectSize = (companySize) => {
    this.setState({ companySize });
  };

  selectIndustry = (companyType) => {
    this.setState({ companyType });
  };

  getUpdatedData = () => {
    this.props.getEmployerProfileDetail(this.props.userId);
  }

  onSubmit = (e) => {
    e.preventDefault();
    if ((!this.state.companyLinkedin.toLowerCase().includes("linkedin")) && this.state.companyLinkedin.length >0) {
      return this.setState({ errLinkedin: "Please Enter Correct LinkedIn URL" });
    }
    if (this.state.companySummary.toString('html') == "<p><br></p>") {
      return alert("Please enter company overview!");
    }
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    let data = {
      "user_id": this.props.userId,
      "emp_pro_id": this.props.employerProfileDetail.id,
      "company_type": this.state.companyType.value,
      "contactEmail": this.props.user.email,
      "location": this.state.location,
      "company_size": this.state.companySize.value,
      "summary": this.state.companySummary.toString('html'),
      "linkedin": this.state.companyLinkedin,
    }
    axios.post("/update-employer-tutorial-infos", data, config).then((res) => {
      console.log(res)
    }).catch(error => {
      console.log(error)
    });
    setTimeout(() => { this.getUpdatedData() }, 300);
    this.props.setCloseDetail();
  };

  customStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "#ffffff",
      boxShadow: "0px 0px 50px rgba(70, 137, 250, 0.1)",
      height: "3rem",
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
    menuPortal: provided => ({ ...provided, zIndex: 99 }),
    menu: provided => ({ ...provided, zIndex: 99 })
  };

  render() {
    const bg2 =
      "https://hirebeat-assets.s3.amazonaws.com/Employer/moredetail.png";

    return (
      <MyModalTut
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
            Getting Started!
          </h1>
          <form
            style={{
              paddingBottom: "3rem",
              paddingTop: "3rem",
              paddingLeft: "1rem",
              paddingRight:"1rem"
            }}
            onSubmit={this.onSubmit}
          >
            <div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  paddingTop: "1rem",
                  paddingLeft: "1.2rem",
                  paddingRight: "1.2rem",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <div>
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
                        defaultValue={this.props.employerProfileDetail?.location}
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
                <div>
                  <img
                    src={bg2}
                    alt="detailform page"
                    style={{ transform: "translateY(-20%) scale(1)" }}
                  />
                </div>
              </div>

              <div className="form-group" style={{ paddingTop: "0.5rem", paddingLeft: "1.2rem", paddingRight: "1.2rem", }}>
                <label style={{ fontWeight: "bold", color: "#fff" }}>
                  Company Overview <span style={{ color: "red" }}>*</span>
                </label>
                <RichTextEditor
                  value={this.state.companySummary}
                  onChange={this.handelSummary}
                  toolbarConfig={toolbarConfig}
                />
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
      </MyModalTut>
    );
  }
}

export default EmployerDetailFormModal;
