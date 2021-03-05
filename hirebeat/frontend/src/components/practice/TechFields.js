import React, { Component, useState } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
//import { SetupCard, CardRow, CardButton } from "./CardComponents";
import { updateProfile } from "../../redux/actions/auth_actions";
import { createMessage } from "../../redux/actions/message_actions";
import PageTitleArea from '../Common/PageTitleArea';
import emailjs from 'emailjs-com';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { withRouter } from "react-router-dom";

import nofind from '../../assets/tech/Nofind.png';



function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

function sendEmail(e) {
  e.preventDefault();

  emailjs.sendForm('default_service', 'template_4fms1o5', e.target, 'user_5R8aVH2nC9mnh7SdUOC1S')
    .then((result) => {
        console.log(result.text);
        confirmAlert({
          title: 'Email Sent!',
          message: 'Thank you for contacting us.',
          buttons: [
            {
              label: 'OK'
            }
          ]
        });
    }, (error) => {
        console.log(error.text);
    });
  e.target.reset()
}

export class TechFields extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    display: "hidden",
    category: "",
  }

  setCategory = (category) => {
    // important！ setState is an async function,
    // must call redirectToTechPractice within the setState method to keep syncing
    this.setState({category: category}, () => {this.redirectToTechPractice();});
  }

  redirectToTechPractice = () => {
    const { history } = this.props;
    if (history) history.push({
        pathname: "/techfields/practice",
        params: {category: this.state.category}
    });
  }

  DisplayText = () => {
    this.setState({
      display: "",
    });
  }

  render() {
    return (
      <React.Fragment>
        <ScrollToTopOnMount />
        <PageTitleArea 
          pageTitle="Choose Your Field" 
          pageDescription="Create A New Mock Interview" 
        />
      <div style={{marginBottom:"10%", marginTop:"3%", marginLeft: "21%"}}>
      <div>
      <button style={{
        width: "15%",
        border: "none",
        marginLeft: "15px",
        marginRight: "15px",
        marginBottom: "15px",
        backgroundColor: "white",}}
        onClick={this.setCategory.bind(this, "Accounting")}>
      <img src="https://hirebeat-assets.s3.amazonaws.com/accounting.png" alt="image"/>
      </button>
      <button style={{
        width: "15%",
        border: "none",
        marginLeft: "15px",
        marginRight: "15px",
        marginBottom: "15px",
        backgroundColor: "white",}}
        onClick={this.setCategory.bind(this, "Administrate Support")}>
      <img src="https://hirebeat-assets.s3.amazonaws.com/administrative.png" alt="image"/>
      </button>
      <button style={{
        width: "15%",
        border: "none",
        marginLeft: "15px",
        marginRight: "15px",
        marginBottom: "15px",
        backgroundColor: "white",}}
        onClick={this.setCategory.bind(this, "Consulting")}>
      <img src="https://hirebeat-assets.s3.amazonaws.com/consulting.png" alt="image"/>
      </button>
      <button style={{
        width: "15%",
        border: "none",
        marginLeft: "15px",
        marginRight: "15px",
        marginBottom: "15px",
        backgroundColor: "white",}}
        onClick={this.setCategory.bind(this, "Finance")}>
      <img src="https://hirebeat-assets.s3.amazonaws.com/finance.png" alt="image"/>
      </button>  
      </div>
      <br/>
      <div>
      <button style={{
        width: "15%",
        border: "none",
        marginLeft: "15px",
        marginRight: "15px",
        marginBottom: "15px",
        backgroundColor: "white",}}
        onClick={this.setCategory.bind(this, "Human Resources")}>
      <img src="https://hirebeat-assets.s3.amazonaws.com/hr.png" alt="image"/>
      </button>
      <button style={{
        width: "15%",
        border: "none",
        marginLeft: "15px",
        marginRight: "15px",
        marginBottom: "15px",
        backgroundColor: "white",}}
        onClick={this.setCategory.bind(this, "Marketing")}>
      <img src="https://hirebeat-assets.s3.amazonaws.com/marketing.png" alt="image"/>
      </button>
      <button style={{
        width: "15%",
        border: "none",
        marginLeft: "15px",
        marginRight: "15px",
        marginBottom: "15px",
        backgroundColor: "white",}}
        onClick={this.setCategory.bind(this, "Product Management")}>
      <img src="https://hirebeat-assets.s3.amazonaws.com/pm.png" alt="image"/>
      </button>
      <button style={{
        width: "15%",
        border: "none",
        marginLeft: "15px",
        marginRight: "15px",
        marginBottom: "15px",
        backgroundColor: "white",}}
        onClick={this.setCategory.bind(this, "Retail")}>
      <img src="https://hirebeat-assets.s3.amazonaws.com/retail.png" alt="image"/>
      </button>  
      </div>
      <div>
      <button style={{
        width: "15%",
        border: "none",
        marginLeft: "15px",
        marginRight: "15px",
        marginBottom: "15px",
        backgroundColor: "white",}}
        onClick={this.setCategory.bind(this, "Supply Chain")}>
      <img src="https://hirebeat-assets.s3.amazonaws.com/supplychain.png" alt="image"/>
      </button>
      <button style={{
        width: "15%",
        border: "none",
        marginLeft: "15px",
        marginRight: "15px",
        marginBottom: "15px",
        backgroundColor: "white",}}
        onClick={this.setCategory.bind(this, "Business Analyst")}>
      <img src="https://hirebeat-assets.s3.amazonaws.com/bussinessanalyst.png" alt="image"/>
      </button>
      <button style={{
        width: "15%",
        border: "none",
        marginLeft: "15px",
        marginRight: "15px",
        marginBottom: "15px",
        marginTop: "15px",
        backgroundColor: "white",}}
        onClick={this.DisplayText}>
      <img src={nofind} alt="image" style={{marginRight:"0.5rem"}}/> Can't find position
      </button>
      <form style={{display:"inline", visibility:this.state.display, marginLeft: "15px"}} onSubmit={sendEmail}>
      <input type="text" name="field" placeholder="What industry are you looking for?"
      style={{border:"1px solid #E6E8F6", boxSizing: 'border-box', borderRadius:"3px", width:"20rem", fontSize:"0.75rem", height:"3rem"}}>
      </input>
      <button className="default-btn" style={{backgroundColor:"#56a3fa", marginLeft:"2%"}}>
      <i className="bx bxs-hot"></i>
        Submit
      </button>
      </form>
      </div>
    </div>
    </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.auth_reducer.profile,
  user: state.auth_reducer.user,
});
export default withRouter(connect(mapStateToProps, { updateProfile, createMessage })(
  TechFields
));
