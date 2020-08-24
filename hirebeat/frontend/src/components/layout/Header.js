import React, {Component} from "react";
import {Link} from "react-router-dom";
import {logout} from "../../redux/actions/auth_actions";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import MediaQuery from 'react-responsive';
import hirebeatlogo from "../../assets/HireBeatLogo2.png";

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
                  className="default-btn"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{borderRadius: "10px",
                          boxShadow: "none",
                          marginBottom:"0.6rem",
                        }}>
                <i className="bx bx-log-in"></i>        
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
              <MediaQuery minDeviceWidth={1224}>
              <li className="nav-item ">
                <Link to="/practice" className="nav-link text-white navbar-font">
                  <span style={{color:"grey",fontFamily:"Helvetica", fontWeight:"bold"}}>Practice</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/dashboard" className="nav-link text-white navbar-font">
                  <span style={{color:"grey",fontFamily:"Helvetica", fontWeight:"bold"}}>Dashboard</span>
                </Link>
              </li>
              </MediaQuery>
              <li className="nav-item">
                <Link to="/pricing" className="nav-link text-white navbar-font">
                  <span style={{color:"grey",fontFamily:"Helvetica", fontWeight:"bold"}}>Pricing</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/company" className="nav-link text-white navbar-font">
                  <span style={{color:"grey",fontFamily:"Helvetica", fontWeight:"bold"}}>Company</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/bloghome" className="nav-link text-white navbar-font">
                  <span style={{color:"grey",fontFamily:"Helvetica", fontWeight:"bold"}}>Blog</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link text-white navbar-font">
                  <span style={{color:"grey",fontFamily:"Helvetica", fontWeight:"bold"}}>Contact</span>
                </Link>
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
            <Link to="/login">
              <a className="default-btn mr-3" style={{marginBottom:"0.6rem", color:"white"}}>
                <i className="bx bx-log-in"></i> Log In <span></span>
              </a>
            </Link>
            </li>
            <li className="nav-item">
            <Link to="/register">
            <a className="default-btn" style={{marginBottom:"0.6rem",color:"white"}}>
              <i className="bx bxs-hot"></i>Get Started <span></span>
            </a>
            </Link>
            </li>
          </ul>


          <div className="collapse navbar-collapse"
               id="navbarSupportedContent">

            <ul className="navbar-nav order-xl-0 ml-auto mr-5
               text-left">
              <li className="nav-item">
                <a href="/" className="nav-link text-white navbar-font active">
                  <span style={{color:"grey", fontFamily:"Helvetica", fontWeight:"bold"}}>Home</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="/pricing" className="nav-link text-white navbar-font">
                <span style={{color:"grey",fontFamily:"Helvetica", fontWeight:"bold"}}>Pricing</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="/company" className="nav-link text-white navbar-font">
                <span style={{color:"grey",fontFamily:"Helvetica", fontWeight:"bold"}}>Company</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="/bloghome" className="nav-link text-white navbar-font">
                <span style={{color:"grey",fontFamily:"Helvetica", fontWeight:"bold"}}>Blog</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="/contact" className="nav-link text-white navbar-font">
                <span style={{color:"grey",fontFamily:"Helvetica", fontWeight:"bold"}}>Contact</span>
                </a>
              </li>
            </ul>
          </div>
        </React.Fragment>
    );
  };

  renderReviewerLinks = () => {
    return (
      <React.Fragment>
        <ul className="navbar-nav d-flex mr-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <a className="default-btn" onClick={this.props.logout} style={{marginBottom:"0.6rem"}}>
             <i className="bx bxs-hot"></i>Logout<span></span>
            </a>
          </li>
        </ul>
        </React.Fragment>
    );
  };

  render() {
    const {isAuthenticated, user} = this.props.auth;
    return (

        <nav
            className="navbar navbar-expand-xl
            navbar-dark pb-0 pt-2"
            style={{
              background: "white",
            }}
        >
          <div className="container pb-0">
            {/*<div className="align-self-start">*/}
              <button
                  className="navbar-toggler mr-2 bg-dark"
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
                  src={hirebeatlogo}
                  className="img-fluid mr-1"
                  alt="logo"
                  style={{
                    width: "24%",
                    height:"100%"
                  }}
                />
                <span className="font-weight-bold"
                style={{fontSize:"1.6rem", color:"grey"}}>
                  HireBeat
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