import React, { Component } from "react";
import { Link } from "react-router-dom";
import { logout } from "../../redux/actions/auth_actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import hirebeatlogo from "../../assets/HireBeatLogo2.png";

const AccountBtnText = (props) => {
  return (
    <h3
      style={{
        border: "2px solid white",
        borderRadius: "10px",
        boxSizing: "border-box",
        fontSize: "20px",
        fontWeight: "normal",
        lineHeight: "39px",
        width: "6rem",
        textAlign: "center",
        marginRight: "1rem",
      }}
    >
      {props.textDisplayed}
    </h3>
  );
};

export class Header extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
  };

  renderUserLinks = () => {
    const { user } = this.props.auth;
    return (
      <ul
        className="navbar-nav align-items-center d-flex justify-content-around"
        style={{ width: "100%" }}
      >
        <li className="nav-item align-items-center">
          <Link to="/practice" className="nav-link">
            <h3 style={{color:"grey"}}>Practice</h3>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/dashboard" className="nav-link">
            <h3 style={{color:"grey"}}>Dashboard</h3>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/pricing" className="nav-link">
            <h3 style={{color:"grey"}}>Pricing</h3>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/company" className="nav-link">
            <h3 style={{color:"grey"}}>Company</h3>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/bloghome" className="nav-link">
            <h3 style={{color:"grey"}}>Blog</h3>
          </Link>
        </li>
        <li className="nav-item">
          <div className="btn-group" role="group">
            <button
              id="btnGroupDrop1"
              type="button"
              className="btn btn btn-primary"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style={{ borderRadius: "10px", boxShadow: "none" }}
            >
              <b>{user ? `  ${user.username}  ` : ""}</b>
            </button>
            <div
              className="dropdown-menu"
              role="menu"
              aria-labelledby="btnGroupDrop1"
            >
              <button
                onClick={this.props.logout}
                className="btn btn-danger btn-sm text-light"
                style={{ width: "80%", marginLeft: "15px" }}
              >
                Logout
              </button>
            </div>
          </div>
        </li>
      </ul>
    );
  };

  renderGuestLinks = () => {
    return (
      <ul className="navbar-nav d-flex mx-auto" >
        <ul className="navbar-nav d-flex my-auto mr-4">
        
          <li className="nav-item">
            <Link to="/" className="nav-link">
              <h3 className="text-20" style={{fontWeight: "bold", marginRight: "1rem", color: "grey"}}>Home</h3>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/pricing" className="nav-link">
              <h3 className="text-20" style={{fontWeight: "bold", marginRight: "1rem", color: "grey"}}>Pricing</h3>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/company" className="nav-link">
              <h3 className="text-20" style={{fontWeight: "bold", marginRight: "1rem", color: "grey"}}>Company</h3>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/bloghome" className="nav-link">
              <h3 className="text-20" style={{fontWeight: "bold", marginRight: "1rem", color: "grey"}}>Blog</h3>
            </Link>
          </li>
        </ul>
        
        <li className="nav-item">
          <Link to="/register" className="nav-link">
          <a className="default-btn mr-1">
            <i className="bx bxs-hot"></i> Get Started <span></span>
          </a>
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/login" className="nav-link">
          <a className="default-btn black-btn">
            <i className="bx bx-log-in"></i> Log In <span></span>
          </a>
          </Link>
        </li>
        
      </ul>
    );
  };

  renderReviewerLinks = () => {
    return (
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item">
          <button
            onClick={this.props.logout}
            className="nav-link btn btn-info btn-sm text-light"
          >
            Logout
          </button>
        </li>
      </ul>
    );
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;
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
      <nav
        className="navbar navbar-expand-sm navbar-dark my-header-container"
        style={{
          WebkitBoxShadow: "none",
          boxShadow: "none",
          background: "white",
          width: "100%",
          height: "5rem",
        }}
      >
        <div
          className="container align-items-center justify-content-between my-header"
          style={{
            backgroundColor: "transparent", paddingTop: "10px",
          }}
        >
          <ul className="navbar-nav mr-auto align-item-center">
            <li className="nav-item active">
              <Link to="/" className="navbar-brand">
                
                <img
                  src={hirebeatlogo}
                  width="30px"
                  height="30px"
                  className="d-inline-block align-top"
                  alt="logo"
                />
                
                <h1 className="d-inline" style={{color: "white", fontSize: "30px", fontWeight: "bold", marginLeft: "1rem", color:"grey"}}>
                HireBeat
                </h1>
              
              </Link>
            </li>
          </ul>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse my-header-container"
            id="navbarTogglerDemo01"
            style={{
              backgroundColor: "transparent",
              marginLeft: "20%",
            }}
          >
            {isAuthenticated
              ? user.groups[0] == "reviewers"
                ? this.renderReviewerLinks()
                : this.renderUserLinks()
              : this.renderGuestLinks()}
          </div>
        </div>
      </nav>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth_reducer,
});

export default connect(mapStateToProps, { logout })(Header);