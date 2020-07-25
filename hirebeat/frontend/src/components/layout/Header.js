import React, { Component } from "react";
import { Link } from "react-router-dom";
import { logout } from "../../redux/actions/auth_actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const AccountBtnText = (props) => {
  return (
    <h3
      style={{
        border: "2px solid white",
        padding: 5,
        borderRadius: "10px",
        marginTop: 2,
        fontsize: "20px",
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
            <h3>Practice</h3>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/dashboard" className="nav-link">
            <h3>Dashboard</h3>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/pricing" className="nav-link">
            <h3>Pricing</h3>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/company" className="nav-link">
            <h3>Company</h3>
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
                style={{ width: "80%", marginLeft: 15 }}
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
      <ul className="navbar-nav" style={{ marginLeft: "50%" }}>
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            <AccountBtnText textDisplayed={"Sign up"} />
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            <AccountBtnText textDisplayed={"Log in"} />
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
      <nav
        className="navbar navbar-expand-sm navbar-dark my-header-container"
        style={{
          WebkitBoxShadow: "none",
          boxShadow: "none",
          background: "linear-gradient(209.24deg, #4BADE4 0%, #4356F0 97.24%)",
        }}
      >
        <div
          className="container align-items-center justify-content-between my-header"
          style={{
            backgroundColor: "transparent", paddingTop: "10px",
          }}
        >
          <ul className="navbar-nav mr-auto align-items-center">
            <li className="nav-item active">
              <Link to="/" className="nav-link">
                <h1>HireBeat</h1>
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
              marginLeft: "30%",
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
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth_reducer,
});

export default connect(mapStateToProps, { logout })(Header);
