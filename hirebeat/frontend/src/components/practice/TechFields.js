import React, { Component, useState } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { SetupCard, CardRow, CardButton } from "./CardComponents";
import { updateProfile } from "../../redux/actions/auth_actions";
import { createMessage } from "../../redux/actions/message_actions";
import PageTitleArea from '../Common/PageTitleArea';
import emailjs from 'emailjs-com';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import accounting from '../../assets/tech/Accounting.png';
import admin from '../../assets/tech/Administrative.png';
import consult from '../../assets/tech/Consulting.png';
import finance from '../../assets/tech/Finance.png';
import human from '../../assets/tech/Human.png';
import market from '../../assets/tech/Marketing.png';
import product from '../../assets/tech/Product.png';
import retail from '../../assets/tech/Retail.png';
import nofind from '../../assets/tech/Nofind.png';



function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

function TechButtons() {
  confirmAlert({
    title: 'Feature is coming soon',
    buttons: [
      {
        label: 'Ok'
      }
    ]
    });
}

export class TechFields extends Component {

  state = {
    display: "hidden",
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
        onClick={TechButtons}>
      <img src={accounting}/>
      </button>
      <button style={{
        width: "15%",
        border: "none",
        marginLeft: "15px",
        marginRight: "15px",
        marginBottom: "15px",
        backgroundColor: "white",}}
        onClick={TechButtons}>
      <img src={admin}/>
      </button>
      <button style={{
        width: "15%",
        border: "none",
        marginLeft: "15px",
        marginRight: "15px",
        marginBottom: "15px",
        backgroundColor: "white",}}
        onClick={TechButtons}>
      <img src={consult}/>
      </button>
      <button style={{
        width: "15%",
        border: "none",
        marginLeft: "15px",
        marginRight: "15px",
        marginBottom: "15px",
        backgroundColor: "white",}}
        onClick={TechButtons}>
      <img src={finance}/>
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
        onClick={TechButtons}>
      <img src={human}/>
      </button>
      <button style={{
        width: "15%",
        border: "none",
        marginLeft: "15px",
        marginRight: "15px",
        marginBottom: "15px",
        backgroundColor: "white",}}
        onClick={TechButtons}>
      <img src={market}/>
      </button>
      <button style={{
        width: "15%",
        border: "none",
        marginLeft: "15px",
        marginRight: "15px",
        marginBottom: "15px",
        backgroundColor: "white",}}
        onClick={TechButtons}>
      <img src={product}/>
      </button>
      <button style={{
        width: "15%",
        border: "none",
        marginLeft: "15px",
        marginRight: "15px",
        marginBottom: "15px",
        backgroundColor: "white",}}
        onClick={TechButtons}>
      <img src={retail}/>
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
        onClick={this.DisplayText}>
      <img src={nofind}/>
      </button>
      <form style={{display:"inline", visibility:this.state.display, marginLeft: "15px"}}>
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
export default connect(mapStateToProps, { updateProfile, createMessage })(
  TechFields
);
