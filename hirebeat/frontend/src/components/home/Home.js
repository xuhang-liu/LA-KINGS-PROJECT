import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";

const HomeButton = (props) => {
  return (
    <button
      className="btn btn-warning"
      style={{
        WebkitBorderRadius: "50px",
        marginRight: props.first ? 50 : 0,
        background: props.first ? "#FF6B00" : "transparent",
        border: props.first ? "none" : "2px solid white",
        width: "30%",
        height: 50,
        padding: 0, // key to center text in button
        marginBottom: "5%",
      }}
      onClick={props.onTap}
    >
      <p
        style={{
          fontSize: "1.1vw",
          fontWeight: "bold",
          marginBottom: 0,
        }}
      >
        {props.textDisplayed}
      </p>
    </button>
  );
};

export class Home extends Component {
  redirectTo = (path) => {
    const { history } = this.props;
    if (history) history.push(path);
  };

  render() {
    if (this.props.isAuthenticated) {
      if (this.props.user.groups[0] == "reviewers") {
        console.log("reviewer confirmed");
        return <Redirect to="/review" />;
      }
    }
    return (
      <div
        className="container-fluid"
        style={{
          padding: 0,
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <div className="home-1">
          <div className="row">
            <div
              className="col-7 d-flex justify-content-center align-items-center"
              style={{ marginTop: "26%" }}
            >
              <HomeButton
                first={true}
                onTap={() => this.redirectTo("/practice/")}
                textDisplayed={"Get Started Now"}
              />
              <HomeButton
                first={false}
                onTap={() => this.redirectTo("/company/")}
                textDisplayed={"Learn More"}
              />
            </div>
            <div className="col-5" />
          </div>
        </div>
        <img
          src="https://hirebeat-assets.s3.amazonaws.com/home2.png"
          width="80%"
        />
        <br />
        <img
          src="https://hirebeat-assets.s3.amazonaws.com/home3.png"
          width="80%"
        />
        <img
          src="https://hirebeat-assets.s3.amazonaws.com/home5.png"
          width="80%"
        />
        <h2>You seat is vacant</h2>
        <br />
        <HomeButton
          style={{marginRight: 0,}}
          first={true}
          onTap={() => this.redirectTo("/register/")}
          textDisplayed={"Sign Up Now"}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth_reducer.isAuthenticated,
  user: state.auth_reducer.user,
});

export default connect(mapStateToProps, null)(withRouter(Home));
