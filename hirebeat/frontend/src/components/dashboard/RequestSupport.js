import React from "react";
import Select from "react-select";
import { connect } from "react-redux";
import { createRequestEmail } from "../../redux/actions/auth_actions";
import { AlertModal } from "./DashboardComponents";

export class RequestSupport extends React.Component {
  state = {
    category: "",
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    phone: "",
    ticket: "",
    feedback: "",

    isShow: false,
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  setFeedback = (e) => {
    this.setState({ feedback: e.target.value });
  };

  onFilter = (category) => {
    this.setState({ category: category });
  };

  options = [
    { value: "Product Support", label: "Product Support" },
    { value: "Billing & Account", label: "Billing & Account" },
    { value: "Feature Request", label: "Feature Request" },
    { value: "General Inquiry", label: "General Inquiry" },
  ];

  modalCustomSytles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  customStyles = {
    control: (base, state) => ({
      ...base,
      backgroundColor: "#ffffff",
      height: "48px",
      boxShadow: "none",
      borderColor: state.isFocused ? "#13c4a1" : "#cecfdf",
    }),
    singleValue: (styles) => ({
      ...styles,
      color: "#4a6f8a",
      fontSize: "0.9375rem",
      fontFamily: "Inter,Segoe UI, sans-serif",
      fontWeight: "500",
    }),
  };

  openModal = () => {
    console.log("CHECK NOT FILL OUT ALL, THEN CAN CHICK");
    this.setState({ isShow: true });
  };

  closeModal = () => {
    this.setState({ isShow: false });
  };

  requestSubmit = (e) => {
    e.preventDefault();
    //return popup modal

    // save request data to email content
    let data = {
      category: this.state.category.value,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      companyName: this.state.companyName,
      email: this.state.email,
      phone: this.state.phone,
      ticket: this.state.ticket,
      feedback: this.state.feedback,
    };

    this.setState({ isShow: true });
    this.props.createRequestEmail(data);
    //reset form
    this.setState({
      category: "",
      firstName: "",
      lastName: "",
      companyName: "",
      email: "",
      phone: "",
      ticket: "",
      feedback: "",
    });
  };

  render() {
    return (
      <div style={{ padding: "1rem" }}>
        <h3 style={{ paddingLeft: "25px" }}>Submit a Support Request</h3>
        <form onSubmit={this.requestSubmit} style={{ padding: "10px" }}>
          <div style={{ display: "flex" }}>
            <div className="form-group col-5">
              <label className="register-label register-text">
                First Name<span className="job-apply-char2">*</span>
              </label>
              <input
                type="text"
                className="form-control register-form"
                name="firstName"
                value={this.state.firstName}
                onChange={this.onChange}
                required
              />
            </div>

            <div className="form-group col-5">
              <label className="register-label register-text">
                Last Name<span className="job-apply-char2">*</span>
              </label>
              <input
                type="text"
                className="form-control register-form"
                name="lastName"
                value={this.state.lastName}
                onChange={this.onChange}
                required
              />
            </div>
          </div>
          <div className="form-group col-5">
            <label className="register-label register-text">Company Name</label>
            <input
              type="text"
              className="form-control register-form"
              name="companyName"
              value={this.state.companyName}
              onChange={this.onChange}
            />
          </div>
          <div style={{ display: "flex" }}>
            <div className="form-group col-5">
              <label className="register-label register-text">
                Email<span className="job-apply-char2">*</span>
              </label>
              <input
                type="email"
                className="form-control register-form"
                name="email"
                onChange={this.onChange}
                value={this.state.email}
                required
              />
            </div>
            <div className="form-group col-5">
              <label className="register-label register-text">
                Phone Number
              </label>
              <input
                type="tel"
                pattern="[0-9]{10}"
                className="form-control register-form"
                title="Ten digits code"
                name="phone"
                value={this.state.phone}
                onChange={this.onChange}
              />
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div className="form-group col-5">
              <label className="register-label register-text">
                Ticket Name<span className="job-apply-char2">*</span>
              </label>
              <input
                type="text"
                value={this.state.ticket}
                className="form-control register-form"
                name="ticket"
                onChange={this.onChange}
                required
              />
            </div>
            <div className="form-group col-5">
              <label className="register-label register-text">
                Category<span className="job-apply-char2">*</span>
              </label>
              <Select
                className="category_employer_request_support"
                value={this.state.category}
                onChange={this.onFilter}
                options={this.options}
                styles={this.customStyles}
                placeholder="Please Select"
              />
            </div>
          </div>
          <div className="form-group col-10">
            <label className="register-label register-text">
              How can we help you?<span className="job-apply-char2">*</span>
            </label>
            <textarea
              className="comment_employer_request_support"
              name="feedback"
              required="required"
              style={{
                border: "1px solid #cecfdf",
                width: "100%",
                height: "190px",
              }}
              value={this.state.feedback}
              onChange={this.setFeedback}
            ></textarea>
          </div>
          <div
            style={{
              paddingLeft: "15px",
            }}
          >
            <button
              type="submit"
              style={{
                backgroundColor: "#FF6B00",
                color: "#fff",
                padding: "12px 24px",
                borderStyle: "none",
                borderRadius: "3px",
              }}
            >
              Submit
            </button>
          </div>
        </form>
        <AlertModal show={this.state.isShow} onHide={this.closeModal}>
          <div
            className="container"
            style={{
              fontFamily: "Inter",
              margin: "auto",
              color: "#000",
              backgroundColor: "#ffffff",
              overflow: "auto",
              padding: "2vw",
              fontWeight: "600",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <h3 style={{ display: "inline" }}>Thank you!</h3>
              <span
                className="close"
                onClick={this.closeModal}
                style={{ cursor: "pointer" }}
              >
                &times;
              </span>
            </div>
            <div
              style={{
                marginBottom: "0.5vw",
                textAlign: "center",
                paddingTop: "15px",
              }}
            >
              Your request for support has been received! Our support
              representative will get back to you as soon as possible.
            </div>
          </div>
        </AlertModal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth_reducer,
  user: state.auth_reducer.user,
});

export default connect(mapStateToProps, { createRequestEmail })(RequestSupport);
