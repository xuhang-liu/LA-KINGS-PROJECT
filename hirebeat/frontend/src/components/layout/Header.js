import React, {Component} from "react";
import {Link} from "react-router-dom";
import {logout} from "../../redux/actions/auth_actions";
import {connect} from "react-redux";
import PropTypes from "prop-types";
export class Header extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
  };

  renderUserLinks = () => {
    const {user} = this.props.auth;
    return (
        <React.Fragment>
          <div className="nav-item order-xl-1 align-self-center">
            <div className="btn-group" role="group">
              <button
                  id="btnGroupDrop1"
                  type="button"
                  className="btn btn btn-primary ml-5"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{borderRadius: "10px",
                          boxShadow: "none"
                        }}>
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
                    style={{width: "80%", marginLeft: "15px"}}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>


          <div className="collapse navbar-collapse"
               id="navbarSupportedContent">

            <ul
              className="navbar-nav ml-auto mr-5
                 text-left order-xl-0">
              <li className="nav-item ">
                <a href="/practice" className="nav-link text-white navbar-font">
                  <span>Practice</span>
                </a>
              </li>

              <li className="nav-item">
                <a href="/dashboard" className="nav-link text-white navbar-font">
                  <span>Dashboard</span>
                </a>
              </li>

              <li className="nav-item">
                <a href="/pricing" className="nav-link text-white navbar-font">
                  <span>Pricing</span>
                </a>
              </li>

              <li className="nav-item">
                <a href="/company" className="nav-link text-white navbar-font">
                  <span>Company</span>
                </a>
              </li>

              <li className="nav-item">
                <a href="/bloghome" className="nav-link text-white navbar-font">
                  <span>Blog</span>
                </a>
              </li>
            </ul>
          </div>
        </React.Fragment>
    );
  };

  renderGuestLinks = () => {
    return (
        <React.Fragment>
          <ul className="navbar-nav d-flex flex-row order-xl-1">
            <li className="nav-item">
              <a href="/login"
                 className="btn btn-outline-primary
                            bg-transparent text-white
                            text-capitalize mr-3
                            py-1 px-3 "
                 style={{
                   border: "2px solid white",
                   borderRadius:"0.625rem",
                 }}
              >
                <span style={{fontSize: "1.25rem"}}>Log in</span>
              </a>
            </li>

            <li className="nav-item">
              <a href="/register"
                 className="btn btn-outline-primary bg-transparent
                            text-white text-capitalize py-1 px-3 "
                 style={{
                   border: "2px solid white",
                   borderRadius:"0.625rem",
                 }}
              >
                <span style={{fontSize: "1.25rem"}}>Sign up</span>
              </a>
            </li>
          </ul>


          <div className="collapse navbar-collapse"
               id="navbarSupportedContent">

            <ul className="navbar-nav order-xl-0 ml-auto mr-5
               text-left">
              <li className="nav-item">
                <a href="/" className="nav-link text-white navbar-font active">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="/pricing" className="nav-link text-white navbar-font">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a href="/company" className="nav-link text-white navbar-font">
                  Company
                </a>
              </li>
              <li className="nav-item">
                <a href="/bloghome" className="nav-link text-white navbar-font">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </React.Fragment>
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
    const {isAuthenticated, user} = this.props.auth;
    return (

        <nav
            className="navbar navbar-expand-xl
            navbar-dark pb-0 pt-2"
            style={{
              background: "linear-gradient(209.24deg, #4BADE4 0%, #4356F0 97.24%)",
            }}
        >
          <div className="container pb-0">
            {/*<div className="align-self-start">*/}
              <button
                  className="navbar-toggler mr-2 "
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  data-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
              </button>
              <a href="/" className="navbar-brand mr-auto">
                <img
                  src="https://hirebeat-assets.s3.amazonaws.com/hirebeat_logo.png"
                  className="img-fluid mr-2"
                  alt="logo"
                  style={{
                    width: "35px",
                    height:"100%"
                  }}
                />
                <span className="font-weight-bold">
                  Hirebeat
                </span>
              </a>
            {/*</div>*/}
            {isAuthenticated
                ? user.groups[0] == "reviewers"
                    ? this.renderReviewerLinks()
                    : this.renderUserLinks()
                : this.renderGuestLinks()
            }

          </div>
        </nav>

    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth_reducer,
});

export default connect(mapStateToProps, {logout})(Header);