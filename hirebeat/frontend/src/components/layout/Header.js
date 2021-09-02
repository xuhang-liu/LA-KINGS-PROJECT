import React, { Component } from "react";
import { Link } from "react-router-dom";
import { logout, loadProfile } from "../../redux/actions/auth_actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MediaQuery from 'react-responsive';
import hirebeatlogo from "../../assets/HireBeatLogo.png";
import hirebeatlogotext from "../../assets/HireBeatLogoText.png";
import 'boxicons';
//import Dropdown from 'react-bootstrap/Dropdown'

export class Header extends Component {

  // Navbar 
  _isMounted = false;
  state = {
    display: false,
    collapsed: true
  };
  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.props.loadProfile();
    }
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        elementId?.classList.add("is-sticky");
      } else {
        elementId?.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
  };

  renderUserLinks = () => {
    let user = JSON.parse(sessionStorage.getItem("user")) || this.props.auth.user;
    // for the purpose of routing to different links
    if (user == null) {
      user = { "groups": ["non-reviewer"] };
    }
    return (
      <React.Fragment>
        <MediaQuery minDeviceWidth={1224}>
          <div className="nav-item order-xl-1 align-self-center mr-3">
            <div className="nav-link text-white navbar-font">
              <Link to="/dashboard" id="id-dash-out" className="nav-link text-white navbar-font">
                <span className="header-text">Dashboard</span>
              </Link>
            </div>
          </div>
        </MediaQuery>
        <div className="nav-item order-xl-1 align-self-center mr-5">
          <div className="nav-link text-white navbar-font">
            <div className="row">
              <i className="bx bx-user-circle 1 bx-sm" style={{ color: "#FFFFFF", paddingRight: '2px', marginTop: "0.1rem" }}></i>
              <span className="header-text" style={{ cursor: 'pointer' }}>{typeof user.username !== "undefined" ? `  ${user?.username.split("@")[0]}  ` : ""}
                <ul className="nav_submenu" style={{ width: "10rem" }}>
                  <li>
                    <Link id="id-logout" to="/job-seekers" onClick={() => { sessionStorage.clear(); this.props.logout(); }} className="header-dropdown-custom" style={{ color: "#FF0000", textDecoration: "none", marginLeft: '1rem' }}>
                      Log out
                    </Link>
                  </li>
                </ul>
              </span>
            </div>
          </div>
        </div>


        <div className="collapse navbar-collapse"
          id="navbarSupportedContent">

          <ul
            className="navbar-nav
                 text-left order-xl-0" style={{ marginLeft: "10px" }}>
            <MediaQuery minDeviceWidth={1224}>
              <li className="nav-item ">
                <Link id="id-interviewpr1" to="/practice" className="nav-link text-white navbar-font">
                  <span className="header-text">Interview</span>
                </Link>
              </li>
              <li className="nav-item ">
                <Link id="id-resumeop1" to="/resume" className="nav-link text-white navbar-font">
                  <span className="header-text">Resume</span>
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white navbar-font">
                  <span className="header-text" style={{ cursor: 'pointer' }}>
                    Resources <i className="bx-fw bx bx-chevron-down"></i>
                    <ul className="nav_submenu" style={{ height: "7.6rem", width: "10rem" }}>
                      <li>
                        <Link id="id-findajob" to="/job-seekers-career" className="header-dropdown-custom" style={{ textDecoration: 'none', marginLeft: '1rem' }}>
                          Find Jobs</Link>
                      </li>
                      <li>
                        <Link id="id-topcompany" to="/job-seekers-companydata" className="header-dropdown-custom" style={{ textDecoration: 'none', marginLeft: '1rem' }}>
                          Company Tips</Link>
                      </li>
                      <li>
                        <Link id="id-blog" to="/bloghome" className="header-dropdown-custom" style={{ textDecoration: 'none', marginLeft: '1rem' }}>
                          Blog</Link>
                      </li>
                    </ul>
                  </span>
                </a>
              </li>
            </MediaQuery>
          </ul>
        </div>
      </React.Fragment>
    );
  };

  renderGuestLinks = () => {
    return (
      <React.Fragment>
        <div className="collapse navbar-collapse"
          id="navbarSupportedContent">

          <ul className="navbar-nav order-xl-0
               text-left" style={{ marginLeft: "10px" }}>
            <li className="nav-item">
              <a className="nav-link text-white navbar-font">
                <span className="header-text" style={{ cursor: 'pointer' }}>
                  Job Seekers <i className="bx-fw bx bx-chevron-down"></i>
                  <ul className="nav_submenu" style={{ height: "16.8rem", width: "18rem" }}>
                    <li>
                      <Link id="id-interviewpr" to="/practice" className="header-dropdown-custom" style={{ textDecoration: 'none', marginLeft: '1rem' }}>
                        <span><img src="https://hirebeat-assets.s3.amazonaws.com/boxicons/hd1.png" alt="img"></img></span>Interview Practice</Link></li>
                    <li>
                      <Link id="id-resumeop" to="/resume" className="header-dropdown-custom" style={{ textDecoration: 'none', marginLeft: '1rem' }}>
                        <span><img src="https://hirebeat-assets.s3.amazonaws.com/boxicons/hd2.png" alt="img"></img></span>Resume Optimization</Link></li>
                    <li>
                      <Link id="id-topcompany1" to="/job-seekers-companydata" className="header-dropdown-custom" style={{ textDecoration: 'none', marginLeft: '1rem' }}>
                        <span><img src="https://hirebeat-assets.s3.amazonaws.com/boxicons/hd3.png" alt="img"></img></span>Top Companies Tips</Link></li>
                    <li>
                      <Link id="id-howitworks1" to="/job-seekers-howitworks" className="header-dropdown-custom" style={{ textDecoration: 'none', marginLeft: '1rem' }}>
                        How it works</Link></li>
                    <li>
                      <Link id="id-findajob1" to="/job-seekers-career" className="header-dropdown-custom" style={{ textDecoration: 'none', marginLeft: '1rem' }}>
                        Find a Job</Link></li>
                    <li>
                      <Link id="id-careerquiz1" to="/quiz" className="header-dropdown-custom" style={{ textDecoration: 'none', marginLeft: '1rem' }}>
                        Career Quiz</Link></li>
                    <li>
                      <Link id="id-pricing1" to="/pricing" className="header-dropdown-custom" style={{ textDecoration: 'none', marginLeft: '1rem' }}>
                        Pricing</Link></li>
                  </ul>
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white navbar-font">
                <span className="header-text" style={{ cursor: 'pointer' }}>
                  About Us <i className="bx-fw bx bx-chevron-down"></i>
                  <ul className="nav_submenu" style={{ height: "10rem" }}>
                    <li><Link id="id-aboutus1" to="/company" className="header-dropdown-custom" style={{ textDecoration: 'none', marginLeft: '1rem' }}>Company</Link></li>
                    <li><Link id="id-contact1" to="/contact" className="header-dropdown-custom" style={{ textDecoration: 'none', marginLeft: '1rem' }}>Contact</Link></li>
                    <li><Link id="id-joinus1" to="/jobs" className="header-dropdown-custom" style={{ textDecoration: 'none', marginLeft: '1rem' }}>Join Us</Link></li>
                    <li><Link id="id-blog1" to="/bloghome" className="header-dropdown-custom" style={{ textDecoration: 'none', marginLeft: '1rem' }}>Blog</Link></li>
                  </ul>
                </span>
              </a>
            </li>
          </ul>
        </div>
        <MediaQuery minDeviceWidth={1224}>
          <ul className="navbar-nav d-flex flex-row order-xl-1">
            <li className="nav-item" style={{ paddingTop: "10px" }}>
              <Link to="/login">
                <a className="default-btn1 mr-3" id="id-login" style={{ color: "white", paddingLeft: "25px", border: '2px solid #FFFFFF', paddingBottom: "12px", paddingTop: "11px" }}>
                  Log In
                </a>
              </Link>
            </li>
            <li className="nav-item" style={{ paddingTop: "10px" }}>
              <Link to="/register">
                <a className="default-btn mr-3" id="id-signup" style={{ color: "white", paddingLeft: "25px", paddingBottom: "13px", paddingTop: "13px" }}>
                  Start for Free
                </a>
              </Link>
            </li>
          </ul>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={1223}>
          <ul className="navbar-nav d-flex flex-row order-xl-1">
            <li className="nav-item" style={{ paddingTop: "10px" }}>
              <Link to="/login">
                <a className="default-btn mr-3" id="id-login" style={{ color: "white", paddingLeft: "25px", backgroundColor: "#ff6b00" }}>
                  Log In
                </a>
              </Link>
            </li>
            <li className="nav-item" style={{ paddingTop: "10px" }}>
              <Link to="/register">
                <a className="default-btn mr-3" id="id-signup" style={{ color: "white", paddingLeft: "25px" }}>
                  Start for Free
                </a>
              </Link>
            </li>
          </ul>
        </MediaQuery>
      </React.Fragment>
    );
  };

  renderUserProfileLinks = () => {
    return (
      <React.Fragment>
        <div className="collapse navbar-collapse"
          id="navbarSupportedContent">

          <ul className="navbar-nav order-xl-0
               text-left" style={{ marginLeft: "10px" }}>
            <li className="nav-item">
              <a className="nav-link text-white navbar-font">
                <span className="header-text" style={{ cursor: 'pointer' }}>
                  Job Seekers <i className="bx-fw bx bx-chevron-down"></i>
                  <ul className="nav_submenu" style={{ height: "21rem", width: "18rem" }}>
                    <li>
                      <a id="id-jobseeker3" href="/job-seekers" className="header-dropdown-custom" style={{ textDecoration: 'none', marginLeft: '1rem' }}>
                        Home Page</a></li>
                    <li><hr style={{ marginBottom: "0.4rem", marginTop: "0.4rem" }} /></li>
                    <li>
                      <Link id="id-interviewpr3" to="/practice" className="header-dropdown-custom" style={{ textDecoration: 'none', marginLeft: '1rem' }}>
                        Interview Practice</Link></li>
                    <li>
                      <Link id="id-resumeop3" to="/resume" className="header-dropdown-custom" style={{ textDecoration: 'none', marginLeft: '1rem' }}>
                        Resume Optimization</Link></li>
                    <li>
                      <a id="id-topcompany3" href="/job-seekers-companydata" className="header-dropdown-custom" style={{ textDecoration: 'none', marginLeft: '1rem' }}>
                        Top Companies Tips</a></li>
                    <li>
                      <a id="id-howitworks3" href="/job-seekers-howitworks" className="header-dropdown-custom" style={{ textDecoration: 'none', marginLeft: '1rem' }}>
                        How it works</a></li>
                    <li>
                      <a id="id-findajob3" href="/job-seekers-career" className="header-dropdown-custom" style={{ textDecoration: 'none', marginLeft: '1rem' }}>
                        Find a Job</a></li>
                    <li>
                      <a id="id-careerquiz3" href="/quiz" className="header-dropdown-custom" style={{ textDecoration: 'none', marginLeft: '1rem' }}>
                        Career Quiz</a></li>
                    <li><hr style={{ marginBottom: "0.4rem", marginTop: "0.4rem" }} /></li>
                    <li>
                      <Link id="id-careerquiz3" to="/register" className="header-dropdown-custom" style={{ textDecoration: 'none', marginLeft: '1rem' }}>
                        Create Free Account</Link></li>
                  </ul>
                </span>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link text-white navbar-font">
                <span className="header-text" style={{ cursor: 'pointer' }}>
                  Employers <i className="bx-fw bx bx-chevron-down"></i>
                  <ul className="nav_submenu" style={{ height: "11rem" }}>
                    <li><Link id="id-product-interview3" to="/employer-product" className="header-dropdown-custom" style={{ textDecoration: 'none', marginLeft: '1rem' }}>Product Overview</Link></li>
                    <li><hr style={{ marginBottom: "0.4rem", marginTop: "0.4rem" }} /></li>
                    <li><Link id="id-one-way-interview3" to="/employer-feature-video" className="header-dropdown-custom" style={{ textDecoration: 'none', marginLeft: '1rem' }}>One-Way Interview</Link></li>
                    <li><Link id="id-resume-screning3" to="/employer-resume-screening" className="header-dropdown-custom" style={{ textDecoration: 'none', marginLeft: '1rem' }}>Resume Screening</Link></li>
                    <li><Link id="id-solution-page3" to="/employer-solution-page" className="header-dropdown-custom" style={{ textDecoration: 'none', marginLeft: '1rem' }}>Campus Recruiting</Link></li>
                  </ul>
                </span>
              </a>
            </li>
          </ul>
        </div>
        <MediaQuery minDeviceWidth={1224}>
          <ul className="navbar-nav d-flex flex-row order-xl-1">
            <li className="nav-item" style={{ paddingTop: "10px" }}>
              <Link to="/employer-login">
                <a className="default-btn1 mr-3" id="id-login" style={{ color: "white", paddingLeft: "25px", border: '2px solid #FFFFFF', paddingBottom: "12px", paddingTop: "11px" }}>
                  Log In
                </a>
              </Link>
            </li>
            <li className="nav-item" style={{ paddingTop: "10px" }}>
              <Link to="/employer_register">
                <a className="default-btn mr-3" id="id-signup" style={{ color: "white", paddingLeft: "25px", paddingBottom: "13px", paddingTop: "13px" }}>
                  Start for Free
                </a>
              </Link>
            </li>
          </ul>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={1223}>
          <ul className="navbar-nav d-flex flex-row order-xl-1">
            <li className="nav-item" style={{ paddingTop: "10px" }}>
              <Link to="/employer-login">
                <a className="default-btn mr-3" id="id-login" style={{ color: "white", paddingLeft: "25px", backgroundColor: "#ff6b00" }}>
                  Log In
                </a>
              </Link>
            </li>
            <li className="nav-item" style={{ paddingTop: "10px" }}>
              <Link to="/employer_register">
                <a className="default-btn mr-3" id="id-signup" style={{ color: "white", paddingLeft: "25px" }}>
                  Start for Free
                </a>
              </Link>
            </li>
          </ul>
        </MediaQuery>
      </React.Fragment>
    );
  };

  renderEmployerLinks = () => {
    let user = JSON.parse(sessionStorage.getItem("user")) || this.props.auth.user;
    // for the purpose of routing to different links
    if (user == null) {
      user = { "groups": ["non-reviewer"] };
    }
    return (
      <React.Fragment>
        <div className="nav-item order-xl-1 align-self-center mr-5">
          <div className="nav-link text-white navbar-font">
          {!this.props.profile.is_subreviwer ?
            <div className="row">
              <i className="bx bx-user-circle bx-sm" style={{ color: "#FFFFFF", paddingRight: '2px', marginTop: "0.1rem" }}></i>
              <span className="header-text" style={{ cursor: 'pointer', marginRight: "1rem" }}>{typeof user.username !== "undefined" ? `  ${user?.username.split("@")[0]}  ` : ""}
                <ul className="nav_submenu" style={{ width: "10rem" }}>
                  <li>
                    <Link id="id-dash" to="/employer_dashboard" className="header-dropdown-custom" style={{ textDecoration: "none", marginLeft: '1rem' }}>
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link id="id-logout" to="/" onClick={() => { sessionStorage.clear(); this.props.logout(); }} className="header-dropdown-custom" style={{ color: "#FF0000", textDecoration: "none", marginLeft: '1rem' }}>
                      Log out
                    </Link>
                  </li>
                </ul>
              </span>
            </div>:
            <div className="row">
            <i className="bx bx-user-circle bx-sm" style={{ color: "#FFFFFF", paddingRight: '2px', marginTop: "0.1rem" }}></i>
            <span className="header-text" style={{ cursor: 'pointer', marginRight: "2.5rem" }}>{typeof user.username !== "undefined" ? `  ${user?.username.split("@")[0]}  ` : ""}
              <ul className="nav_submenu" style={{ width: "10rem" }}>
                <li>
                  <Link id="id-dash" to="/employer_dashboard" className="header-dropdown-custom" style={{ textDecoration: "none", marginLeft: '1rem' }}>
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link id="id-logout" to="/" onClick={() => { sessionStorage.clear(); this.props.logout(); }} className="header-dropdown-custom" style={{ color: "#FF0000", textDecoration: "none", marginLeft: '1rem' }}>
                    Log out
                  </Link>
                </li>
              </ul>
            </span>
          </div>
          }
          </div>
        </div>


        <div className="collapse navbar-collapse"
          id="navbarSupportedContent">

          <ul
            className="navbar-nav ml-auto mr-5
                 text-left order-xl-0">
            <li className="nav-item">
              <a className="nav-link text-white navbar-font">
                <span className="header-text" style={{ cursor: 'pointer' }}>
                  Company <i className="bx-fw bx bx-chevron-down"></i>
                  <ul className="nav_submenu" style={{ height: "8rem" }}>
                    <li><Link id="id-aboutus2" to="/employer_company" className="header-dropdown-custom" style={{ textDecoration: 'none', marginLeft: '1rem' }}>About Us</Link></li>
                    <li><Link id="id-contact2" to="/employer_contact" className="header-dropdown-custom" style={{ textDecoration: 'none', marginLeft: '1rem' }}>Contact</Link></li>
                    <li><Link id="id-blog2" to="/bloghome_employer" className="header-dropdown-custom" style={{ textDecoration: 'none', marginLeft: '1rem' }}>Blog</Link></li>
                  </ul>
                </span>
              </a>
            </li>
            {!this.props.profile.is_subreviwer &&
              <li className="nav-item ">
                <a className="nav-link text-white navbar-font">
                  <span className="header-text" style={{ cursor: 'pointer' }}>
                    Pricing <i className="bx-fw bx bx-chevron-down"></i>
                    <ul className="nav_submenu" style={{ height: "6rem" }}>
                      <li><Link id="id-pricing2" to="/employer-pricing" className="header-dropdown-custom" style={{ textDecoration: 'none', marginLeft: '1rem' }}>Pricing & Plans</Link></li>
                      <li><Link id="id-roi2" to="/employer-roi-calculator" className="header-dropdown-custom" style={{ textDecoration: 'none', marginLeft: '1rem' }}>ROI Calculator</Link></li>
                    </ul>
                  </span>
                </a>
              </li>}
          </ul>
        </div>
      </React.Fragment>
    );
  };

  renderEmployerGuestLinks = () => {
    return (

      <React.Fragment>
        <div className="collapse navbar-collapse"
          id="navbarSupportedContent">

          <ul className="navbar-nav order-xl-0
               text-left" style={{ marginLeft: "10px" }}>
            <li className="nav-item">
              <a className="nav-link text-white navbar-font">
                <span className="header-text" style={{ cursor: 'pointer' }}>
                  Job Seekers <i className="bx-fw bx bx-chevron-down"></i>
                  <ul className="nav_submenu" style={{ height: "21rem", width: "18rem" }}>
                    <li>
                      <a id="id-jobseeker2" href="/job-seekers" className="header-dropdown-custom" style={{ textDecoration: 'none', marginLeft: '1rem' }}>
                        Home Page</a></li>
                    <li><hr style={{ marginBottom: "0.4rem", marginTop: "0.4rem" }} /></li>
                    <li>
                      <Link id="id-interviewpr2" to="/practice" className="header-dropdown-custom" style={{ textDecoration: 'none', marginLeft: '1rem' }}>
                        Interview Practice</Link></li>
                    <li>
                      <Link id="id-resumeop2" to="/resume" className="header-dropdown-custom" style={{ textDecoration: 'none', marginLeft: '1rem' }}>
                        Resume Optimization</Link></li>
                    <li>
                      <a id="id-topcompany2" href="/job-seekers-companydata" className="header-dropdown-custom" style={{ textDecoration: 'none', marginLeft: '1rem' }}>
                        Top Companies Tips</a></li>
                    <li>
                      <a id="id-howitworks2" href="/job-seekers-howitworks" className="header-dropdown-custom" style={{ textDecoration: 'none', marginLeft: '1rem' }}>
                        How it works</a></li>
                    <li>
                      <a id="id-findajob2" href="/job-seekers-career" className="header-dropdown-custom" style={{ textDecoration: 'none', marginLeft: '1rem' }}>
                        Find a Job</a></li>
                    <li>
                      <a id="id-careerquiz2" href="/quiz" className="header-dropdown-custom" style={{ textDecoration: 'none', marginLeft: '1rem' }}>
                        Career Quiz</a></li>
                    <li><hr style={{ marginBottom: "0.4rem", marginTop: "0.4rem" }} /></li>
                    <li>
                      <Link id="id-careerquiz2" to="/register" className="header-dropdown-custom" style={{ textDecoration: 'none', marginLeft: '1rem' }}>
                        Create Free Account</Link></li>
                  </ul>
                </span>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link text-white navbar-font">
                <span className="header-text" style={{ cursor: 'pointer' }}>
                  Product <i className="bx-fw bx bx-chevron-down"></i>
                  <ul className="nav_submenu" style={{ height: "12rem" }}>
                    <li><Link id="id-product-interview" to="/employer-product" className="header-dropdown-custom" style={{ textDecoration: 'none', marginLeft: '1rem' }}>Overview</Link></li>
                    <li><hr style={{ marginBottom: "0.4rem", marginTop: "0.4rem" }} /></li>
                    <li><Link id="id-one-way-interview" to="/employer-feature-video" className="header-dropdown-custom" style={{ textDecoration: 'none', marginLeft: '1rem' }}>One-Way Interview</Link></li>
                    <li><Link id="id-resume-screning" to="/employer-resume-screening" className="header-dropdown-custom" style={{ textDecoration: 'none', marginLeft: '1rem' }}>Resume Screening</Link></li>
                    <li><hr style={{ marginBottom: "0.4rem", marginTop: "0.4rem" }} /></li>
                    <li><Link id="id-intergration-page" to="/employer-intergration-page" className="header-dropdown-custom" style={{ textDecoration: 'none', marginLeft: '1rem' }}>Integrations</Link></li>
                  </ul>
                </span>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link text-white navbar-font">
                <span className="header-text" style={{ cursor: 'pointer' }}>
                  Solutions <i className="bx-fw bx bx-chevron-down"></i>
                  <ul className="nav_submenu" style={{ height: "3.2rem" }}>
                    <li><Link id="id-solution-page" to="/employer-solution-page" className="header-dropdown-custom" style={{ textDecoration: 'none', marginLeft: '1rem' }}>Campus Recruiting</Link></li>
                  </ul>
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white navbar-font">
                <span className="header-text" style={{ cursor: 'pointer' }}>
                  About Us <i className="bx-fw bx bx-chevron-down"></i>
                  <ul className="nav_submenu" style={{ height: "8rem" }}>
                    <li><Link id="id-aboutus3" to="/employer_company" className="header-dropdown-custom" style={{ textDecoration: 'none', marginLeft: '1rem' }}>Company</Link></li>
                    <li><Link id="id-contact3" to="/employer_contact" className="header-dropdown-custom" style={{ textDecoration: 'none', marginLeft: '1rem' }}>Contact</Link></li>
                    <li><Link id="id-blog3" to="/bloghome_employer" className="header-dropdown-custom" style={{ textDecoration: 'none', marginLeft: '1rem' }}>Blog</Link></li>
                  </ul>
                </span>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link text-white navbar-font">
                <span className="header-text" style={{ cursor: 'pointer' }}>
                  Pricing <i className="bx-fw bx bx-chevron-down"></i>
                  <ul className="nav_submenu" style={{ height: "6rem" }}>
                    <li><Link id="id-pricing2" to="/employer-pricing" className="header-dropdown-custom" style={{ textDecoration: 'none', marginLeft: '1rem' }}>Pricing & Plans</Link></li>
                    <li><Link id="id-roi2" to="/employer-roi-calculator" className="header-dropdown-custom" style={{ textDecoration: 'none', marginLeft: '1rem' }}>ROI Calculator</Link></li>
                  </ul>
                </span>
              </a>
            </li>
          </ul>
        </div>
        <MediaQuery minDeviceWidth={1224}>
          <ul className="navbar-nav d-flex flex-row order-xl-1">
            <li className="nav-item" style={{ paddingTop: "10px" }}>
              <Link to="/employer-login">
                <a className="default-btn1 mr-3" id="id-login-employer" style={{ color: "white", paddingLeft: "25px", border: '2px solid #FFFFFF', paddingBottom: "12px", paddingTop: "11px" }}>
                  Log In
                </a>
              </Link>
            </li>
            <li className="nav-item" style={{ paddingTop: "10px" }}>
              <Link to="/employer_register">
                <a className="default-btn mr-3" id="id-signup-employer" style={{ color: "white", paddingLeft: "25px", paddingBottom: "13px", paddingTop: "13px" }}>
                  Start Hiring For Free
                </a>
              </Link>
            </li>
          </ul>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={1223}>
          <ul className="navbar-nav d-flex flex-row order-xl-1">
            <li className="nav-item" style={{ paddingTop: "10px" }}>
              <Link to="/employer-login">
                <a className="default-btn mr-3" id="id-login-employer" style={{ color: "white", paddingLeft: "25px", backgroundColor: "#ff6b00" }}>
                  Log In
                </a>
              </Link>
            </li>
            <li className="nav-item" style={{ paddingTop: "10px" }}>
              <Link to="/employer_register">
                <a className="default-btn mr-3" id="id-signup-employer" style={{ color: "white", paddingLeft: "25px" }}>
                  Start Hiring For Free
                </a>
              </Link>
            </li>
          </ul>
        </MediaQuery>
      </React.Fragment>
    );
  };

  renderReviewerLinks = () => {
    return (
      <React.Fragment>
        <ul className="navbar-nav d-flex mr-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <Link to="/">
              <a className="default-btn" onClick={() => { sessionStorage.clear(); this.props.logout(); }} style={{ color: "white" }}>
                <i className="bx-fw bx bxs-hot"></i>Logout<span></span>
              </a>
            </Link>
          </li>
        </ul>
      </React.Fragment>
    );
  };

  render() {
    let isAuthenticated = JSON.parse(sessionStorage.getItem("isAuthenticated")) || this.props.auth.isAuthenticated;
    let user = JSON.parse(sessionStorage.getItem("user")) || this.props.auth.user;
    // for the purpose of routing to different links
    if (user == null) {
      user = { "groups": ["non-reviewer"] };
    }
    var uri = window.location.pathname;
    uri = uri.substring(1, uri.length);
    if ((uri.includes("apply-job")) || (uri.includes("company-branding"))) {
      return null;
    } else {
      return (
        <React.Fragment>
          <MediaQuery minDeviceWidth={1224}>
            <div id="navbar" className="navbar-area bg-white">
              <nav
                className="navbar navbar-expand-xl
            navbar-dark pb-1 pt-1"
                style={{
                  background: "#080a3c",
                }}
              >
                <div className="container-fluid pb-0">
                  {/*<div className="align-self-start">*/}
                  <button
                    className="navbar-toggler mr-2 bg-dark"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    data-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                  </button>
                  {isAuthenticated && (!this.props.profile.is_employer) ?
                    <a href="/job-seekers" className="navbar-brand mr-auto">
                      <img
                        src={hirebeatlogo}
                        className="img-fluid mr-3"
                        alt="logo"
                        style={{
                          width: "16%",
                          height: "16%",
                        }}
                      />
                      <img
                        src={hirebeatlogotext}
                        className="img-fluid mr-2"
                        alt="logotext"
                        style={{
                          width: "50%",
                          height: "100%",
                        }}
                      />
                    </a> :
                    <a href="/" className="navbar-brand mr-auto">
                      <img
                        src={hirebeatlogo}
                        className="img-fluid mr-3"
                        alt="logo"
                        style={{
                          width: "16%",
                          height: "16%",
                        }}
                      />
                      <img
                        src={hirebeatlogotext}
                        className="img-fluid mr-2"
                        alt="logotext"
                        style={{
                          width: "50%",
                          height: "100%",
                        }}
                      />
                    </a>}
                  {/*</div>*/}
                  {isAuthenticated
                    ? typeof user.groups !== "undefined" && user.groups.length > 0 && user.groups[0] == "reviewers"
                      ? this.renderReviewerLinks()
                      : this.props.profile.is_employer
                        ? this.renderEmployerLinks()
                        : this.renderUserLinks()
                    : (uri.includes("talent-profile")) ?
                      this.renderUserProfileLinks() :
                      (uri.includes("job-seekers")) ?
                        this.renderGuestLinks()
                        : this.renderEmployerGuestLinks()
                  }

                </div>
              </nav>
            </div>
          </MediaQuery>
          <MediaQuery maxDeviceWidth={1223}>
            <div id="navbar" className="navbar-area bg-white" style={{ minWidth: "0px" }}>
              <nav
                className="navbar navbar-expand-md
            navbar-dark pb-2 pt-2"
                style={{
                  background: "#080a3c",
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
                    <span className="navbar-toggler-icon" />
                  </button>
                  {isAuthenticated && (!this.props.profile.is_employer) ?
                    <a href="/job-seekers" className="navbar-brand mr-auto">
                      <img
                        src={hirebeatlogo}
                        className="img-fluid mr-3"
                        alt="logo"
                        style={{
                          width: "16%",
                          height: "16%",
                        }}
                      />
                      <img
                        src={hirebeatlogotext}
                        className="img-fluid mr-2"
                        alt="logotext"
                        style={{
                          width: "50%",
                          height: "100%",
                        }}
                      />
                    </a> :
                    <a href="/" className="navbar-brand mr-auto">
                      <img
                        src={hirebeatlogo}
                        className="img-fluid mr-3"
                        alt="logo"
                        style={{
                          width: "16%",
                          height: "16%",
                        }}
                      />
                      <img
                        src={hirebeatlogotext}
                        className="img-fluid mr-2"
                        alt="logotext"
                        style={{
                          width: "50%",
                          height: "100%",
                        }}
                      />
                    </a>}
                  {/*</div>*/}
                  {isAuthenticated
                    ? typeof user.groups !== "undefined" && user.groups.length > 0 && user.groups[0] == "reviewers"
                      ? this.renderReviewerLinks()
                      : this.props.profile.is_employer
                        ? this.renderEmployerLinks()
                        : this.renderUserLinks()
                    : (uri.includes("talent-profile")) ?
                      this.renderUserProfileLinks() :
                      (uri.includes("job-seekers")) ?
                        this.renderGuestLinks()
                        : this.renderEmployerGuestLinks()
                  }

                </div>
              </nav>
            </div>
          </MediaQuery>
        </React.Fragment>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  profile: state.auth_reducer.profile,
  auth: state.auth_reducer,
});

export default connect(mapStateToProps, { logout, loadProfile })(Header);