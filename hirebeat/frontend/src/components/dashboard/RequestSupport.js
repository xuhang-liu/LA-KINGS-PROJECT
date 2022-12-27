import React from "react";
import Select from "react-select";
import { connect } from "react-redux";
import { createRequestEmail } from "../../redux/actions/auth_actions";
import { AlertModal } from "./DashboardComponents";
import { Text, Input, useColorModeValue, Textarea, Button } from '@chakra-ui/react';

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
      backgroundColor: useColorModeValue("white", "brand.800"),
      height: "2.6rem",
      boxShadow: "none",
      borderColor: state.isFocused ? "#13c4a1" : "#cecfdf",
    }),
    singleValue: (styles) => ({
      ...styles,
      color: useColorModeValue("brand.800", "white"),
      fontSize: "0.9375rem",
      fontFamily: "Inter,Segoe UI, sans-serif",
      fontWeight: "500",
    }),
    menu: provided => ({ ...provided, zIndex: 99, backgroundColor: useColorModeValue("white", "brand.800") }),
    menuPortal: provided => ({ ...provided, zIndex: 99, backgroundColor: useColorModeValue("white", "brand.800") }),
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
    //Segment info
    window?.analytics?.track("Tutorial - Sumbit Request Support", {
      eventTime: Date().toLocaleString(),
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      companyName: this.state.companyName,
      email: this.state.email,
      phone: this.state.phone,
      ticket: this.state.ticket,
      category: this.state.category?.value,
    });
    // save request data to email content
    let data = {
      category: this.state.category?.value,
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
      <div>
        <Text fontSize='xl' color="muted" style={{ paddingLeft: "25px" }}>Submit a Support Request</Text>
        <form onSubmit={this.requestSubmit} style={{ padding: "10px" }}>
          <div style={{ display: "flex" }}>
            <div className="form-group col-5">
              <Text fontSize='lg' color="muted">First Name<span className="job-apply-char2">*</span></Text>
              <Input
                type="text"
                name="firstName"
                value={this.state.firstName}
                onChange={this.onChange}
                isRequired={true}></Input>
            </div>

            <div className="form-group col-5">
              <Text fontSize='lg' color="muted">Last Name<span className="job-apply-char2">*</span></Text>
              <Input
                type="text"
                name="lastName"
                value={this.state.lastName}
                onChange={this.onChange}
                isRequired={true}></Input>
            </div>
          </div>
          <div className="form-group col-5">
            <Text fontSize='lg' color="muted">Company Name</Text>
            <Input
              type="text"
              name="companyName"
              value={this.state.companyName}
              onChange={this.onChange}></Input>
          </div>
          <div style={{ display: "flex" }}>
            <div className="form-group col-5">
              <Text fontSize='lg' color="muted">Email<span className="job-apply-char2">*</span></Text>
              <Input
                type="email"
                name="email"
                onChange={this.onChange}
                value={this.state.email}
                isRequired={true}></Input>
            </div>
            <div className="form-group col-5">
              <Text fontSize='lg' color="muted">Phone Number</Text>
              <Input
                type="number"
                name="phone"
                value={this.state.phone}
                onChange={this.onChange}></Input>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div className="form-group col-5">
              <Text fontSize='lg' color="muted">Ticket Name<span className="job-apply-char2">*</span></Text>
              <Input
                type="text"
                value={this.state.ticket}
                name="ticket"
                onChange={this.onChange}
                isRequired={true}></Input>
            </div>
            <div className="form-group col-5">
              <Text fontSize='lg' color="muted">Category<span className="job-apply-char2">*</span></Text>
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
            <Text fontSize='lg' color="muted">How can we help you?<span className="job-apply-char2">*</span></Text>
            <Textarea
              name="feedback"
              required="required"
              style={{
                border: "1px solid #cecfdf",
                width: "100%",
                height: "190px",
                fontFamily: "Inter, Segoe UI",
                paddingLeft: "1rem"
              }}
              value={this.state.feedback}
              onChange={this.setFeedback}
            >
            </Textarea>
          </div>
          <div
            style={{
              paddingLeft: "15px",
            }}
          >
            <Button
              type="submit"
              colorScheme='blue'
              _hover={{ bg: "orange.500" }}
            >
              Submit
            </Button>
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
