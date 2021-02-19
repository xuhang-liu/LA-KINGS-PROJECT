import React, {Component} from "react";
import {Link} from "react-router-dom";
import {logout, loadProfile} from "../../redux/actions/auth_actions";
import {connect} from "react-redux";
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
    this.props.loadProfile();
      let elementId = document.getElementById("navbar");
      document.addEventListener("scroll", () => {
          if (window.scrollY > 170) {
              elementId.classList.add("is-sticky");
          } else {
              elementId.classList.remove("is-sticky");
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
    const {user} = this.props.auth;
    return (
        <React.Fragment>
          <div className="nav-item order-xl-1 align-self-center mr-5">
            <div className="nav-link text-white navbar-font">
              <div className="row">
                    <i className="bx bx-user-circle 1 bx-sm" style={{color:"#FFFFFF", paddingRight:'2px'}}></i>        
                    <span className="header-text" style={{cursor:'pointer'}}>{user ? `  ${user.username}  ` : ""}
                    <ul className="nav_submenu" style={{width:"10rem"}}> 
                      <li>
                      <Link id="id-dash" to="/dashboard" className="header-dropdown-custom" style={{textDecoration:"none", marginLeft:'1rem'}}>
                        Dashboard
                      </Link>
                      </li>
                      <li>
                      <Link id="id-logout" to="/" onClick={this.props.logout} className="header-dropdown-custom" style={{color:"#FF0000", textDecoration:"none", marginLeft:'1rem'}}>
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
              className="navbar-nav ml-auto mr-5
                 text-left order-xl-0">
              <li className="nav-item">
                <a className="nav-link text-white navbar-font">
                <span className="header-text" style={{cursor:'pointer'}}>
                    Features <i className="bx bx-chevron-down"></i>
                    <ul className="nav_submenu" style={{height:"16.8rem",width:"18rem"}}>
                        <li>
                        <Link id="id-interviewpr" to="/practice" className="header-dropdown-custom" style={{textDecoration:'none', marginLeft:'1rem'}}>
                        <span><img src="https://hirebeat-assets.s3.amazonaws.com/boxicons/hd1.png" alt="img"></img></span>Interview Practice</Link></li>
                        <li>
                        <Link id="id-resumeop" to="/resume" className="header-dropdown-custom" style={{textDecoration:'none', marginLeft:'1rem'}}>
                        <span><img src="https://hirebeat-assets.s3.amazonaws.com/boxicons/hd2.png" alt="img"></img></span>Resume Optimization</Link></li>
                        <li>
                        <Link id="id-topcompany" to="/companydata" className="header-dropdown-custom" style={{textDecoration:'none', marginLeft:'1rem'}}>
                        <span><img src="https://hirebeat-assets.s3.amazonaws.com/boxicons/hd3.png" alt="img"></img></span>Top Companies Tips</Link></li>
                        <li>
                        <Link id="id-howitworks" to="/howitworks" className="header-dropdown-custom" style={{textDecoration:'none', marginLeft:'1rem'}}>
                        How it works</Link></li>
                        <li>
                        <Link id="id-findajob" to="/career" className="header-dropdown-custom" style={{textDecoration:'none', marginLeft:'1rem'}}>
                        Find a Job</Link></li>
                        <li>
                        <Link id="id-careerquiz" to="/quiz" className="header-dropdown-custom" style={{textDecoration:'none', marginLeft:'1rem'}}>
                        Career Quiz</Link></li>
                        <li>
                        <Link id="id-pricing" to="/pricing" className="header-dropdown-custom" style={{textDecoration:'none', marginLeft:'1rem'}}>
                        Pricing</Link></li>
                    </ul>
                  </span>
                </a>
              </li>
              <li className="nav-item">
              <a className="nav-link text-white navbar-font">
                  <span className="header-text" style={{cursor:'pointer'}}>
                    Company <i className="bx bx-chevron-down"></i>
                    <ul className="nav_submenu" style={{height:"10rem"}}>
                      <li><Link id="id-aboutus" to="/company" className="header-dropdown-custom" style={{textDecoration:'none', marginLeft:'1rem'}}>About Us</Link></li>
                      <li><Link id="id-contact" to="/contact" className="header-dropdown-custom" style={{textDecoration:'none', marginLeft:'1rem'}}>Contact</Link></li>
                      <li><Link id="id-joinus" to="/jobs" className="header-dropdown-custom" style={{textDecoration:'none', marginLeft:'1rem'}}>Join Us</Link></li>
                      <li><Link id="id-blog" to="/bloghome" className="header-dropdown-custom" style={{textDecoration:'none', marginLeft:'1rem'}}>Blog</Link></li>
                    </ul>
                  </span>
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
            <Link to="/login">
              <a className="default-btn mr-3" id="id-login" style={{color:"white"}}>
                <i className="bx bx-log-in"></i>Log In<span></span>
              </a>
            </Link>
            </li>
            <li className="nav-item">
            <Link to="/register">
            <a className="default-btn mr-3" id="id-signup" style={{color:"white", backgroundColor:"#ff612f"}}>
              <i className="bx bxs-hot"></i>Sign Up<span></span>
            </a>
            </Link>
            </li>
            <MediaQuery minDeviceWidth={1224}>
            <li className="nav-item ">
                <a href="/employer" className="nav-link text-white navbar-font">
                  <span className="header-text">For Employer</span>
                </a>
              </li>
            </MediaQuery>
          </ul>


          <div className="collapse navbar-collapse"
               id="navbarSupportedContent">

            <ul className="navbar-nav order-xl-0 ml-auto mr-5
               text-left">
              <li className="nav-item">
                <a className="nav-link text-white navbar-font">
                <span className="header-text" style={{cursor:'pointer'}}>
                  For Candidate <i className="bx bx-chevron-down"></i>
                    <ul className="nav_submenu" style={{height:"16.8rem",width:"18rem"}}>
                    <li>
                        <Link id="id-interviewpr" to="/practice" className="header-dropdown-custom" style={{textDecoration:'none', marginLeft:'1rem'}}>
                        <span><img src="https://hirebeat-assets.s3.amazonaws.com/boxicons/hd1.png" alt="img"></img></span>Interview Practice</Link></li>
                        <li>
                        <Link id="id-resumeop" to="/resume" className="header-dropdown-custom" style={{textDecoration:'none', marginLeft:'1rem'}}>
                        <span><img src="https://hirebeat-assets.s3.amazonaws.com/boxicons/hd2.png" alt="img"></img></span>Resume Optimization</Link></li>
                        <li>
                        <Link id="id-topcompany" to="/companydata" className="header-dropdown-custom" style={{textDecoration:'none', marginLeft:'1rem'}}>
                        <span><img src="https://hirebeat-assets.s3.amazonaws.com/boxicons/hd3.png" alt="img"></img></span>Top Companies Tips</Link></li>
                        <li>
                        <Link id="id-howitworks1" to="/howitworks" className="header-dropdown-custom" style={{textDecoration:'none', marginLeft:'1rem'}}>
                        How it works</Link></li>
                        <li>
                        <Link id="id-findajob1" to="/career" className="header-dropdown-custom" style={{textDecoration:'none', marginLeft:'1rem'}}>
                        Find a Job</Link></li>
                        <li>
                        <Link id="id-careerquiz1" to="/quiz" className="header-dropdown-custom" style={{textDecoration:'none', marginLeft:'1rem'}}>
                        Career Quiz</Link></li>
                        <li>
                        <Link id="id-pricing1" to="/pricing" className="header-dropdown-custom" style={{textDecoration:'none', marginLeft:'1rem'}}>
                        Pricing</Link></li>
                    </ul>
                  </span>
                </a>
              </li>
              <MediaQuery maxDeviceWidth={1223}>
              <li className="nav-item ">
                <a href="/employer" className="nav-link text-white navbar-font">
                  <span className="header-text">For Employer</span>
                </a>
              </li>
              </MediaQuery>
              <li className="nav-item">
              <a className="nav-link text-white navbar-font">
                  <span className="header-text" style={{cursor:'pointer'}}>
                    Company <i className="bx bx-chevron-down"></i>
                    <ul className="nav_submenu" style={{height:"10rem"}}>
                      <li><Link id="id-aboutus1" to="/company" className="header-dropdown-custom" style={{textDecoration:'none', marginLeft:'1rem'}}>About Us</Link></li>
                      <li><Link id="id-contact1" to="/contact" className="header-dropdown-custom" style={{textDecoration:'none', marginLeft:'1rem'}}>Contact</Link></li>
                      <li><Link id="id-joinus1" to="/jobs" className="header-dropdown-custom" style={{textDecoration:'none', marginLeft:'1rem'}}>Join Us</Link></li>
                      <li><Link id="id-blog1" to="/bloghome" className="header-dropdown-custom" style={{textDecoration:'none', marginLeft:'1rem'}}>Blog</Link></li>
                    </ul>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </React.Fragment>
    );
  };
  
  renderEmployerLinks = () => {
    const {user} = this.props.auth;
    return (
        <React.Fragment>
          <div className="nav-item order-xl-1 align-self-center mr-5">
            <div className="nav-link text-white navbar-font">
              <div className="row">
                    <i className="bx bx-user-circle 1 bx-sm" style={{color:"#FFFFFF", paddingRight:'2px'}}></i>        
                    <span className="header-text" style={{cursor:'pointer'}}>{user ? `  ${user.username}  ` : ""}
                    <ul className="nav_submenu" style={{width:"10rem"}}> 
                      <li>
                      <Link id="id-dash" to="/employer_dashboard" className="header-dropdown-custom" style={{textDecoration:"none", marginLeft:'1rem'}}>
                        Dashboard
                      </Link>
                      </li>
                      <li>
                      <Link id="id-logout" to="/" onClick={this.props.logout} className="header-dropdown-custom" style={{color:"#FF0000", textDecoration:"none", marginLeft:'1rem'}}>
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
              className="navbar-nav ml-auto mr-5
                 text-left order-xl-0">
              <li className="nav-item">
              <a className="nav-link text-white navbar-font">
                  <span className="header-text" style={{cursor:'pointer'}}>
                    Company <i className="bx bx-chevron-down"></i>
                    <ul className="nav_submenu" style={{height:"8rem"}}>
                      <li><Link id="id-aboutus2" to="/company" className="header-dropdown-custom" style={{textDecoration:'none', marginLeft:'1rem'}}>About Us</Link></li>
                      <li><Link id="id-contact2" to="/contact" className="header-dropdown-custom" style={{textDecoration:'none', marginLeft:'1rem'}}>Contact</Link></li>
                      <li><Link id="id-blog2" to="/bloghome" className="header-dropdown-custom" style={{textDecoration:'none', marginLeft:'1rem'}}>Blog</Link></li>
                    </ul>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </React.Fragment>
    );
  };

  renderEmployerGuestLinks = () => {
    return (
        <React.Fragment>
          <ul className="navbar-nav d-flex flex-row order-xl-1">
          <li className="nav-item">
            <Link to="/login">
              <a className="default-btn mr-3" id="id-login-employer" style={{color:"white"}}>
                <i className="bx bx-log-in"></i>Log In<span></span>
              </a>
            </Link>
            </li>
            <li className="nav-item">
            <Link to="/employer_register">
            <a className="default-btn mr-3" id="id-signup-employer" style={{color:"white", backgroundColor:"#ff612f"}}>
              <i className="bx bxs-hot"></i>Employer Sign Up<span></span>
            </a>
            </Link>
            </li>
          </ul>


          <div className="collapse navbar-collapse"
               id="navbarSupportedContent">

            <ul
              className="navbar-nav ml-auto mr-5
                 text-left order-xl-0">
              <li className="nav-item">
              <a className="nav-link text-white navbar-font">
                  <span className="header-text" style={{cursor:'pointer'}}>
                    Company <i className="bx bx-chevron-down"></i>
                    <ul className="nav_submenu" style={{height:"8rem"}}>
                      <li><Link id="id-aboutus3" to="/company" className="header-dropdown-custom" style={{textDecoration:'none', marginLeft:'1rem'}}>About Us</Link></li>
                      <li><Link id="id-contact3" to="/contact" className="header-dropdown-custom" style={{textDecoration:'none', marginLeft:'1rem'}}>Contact</Link></li>
                      <li><Link id="id-blog3" to="/bloghome" className="header-dropdown-custom" style={{textDecoration:'none', marginLeft:'1rem'}}>Blog</Link></li>
                    </ul>
                  </span>
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
          <Link to="/">
            <a className="default-btn" onClick={this.props.logout} style={{color:"white"}}>
             <i className="bx bxs-hot"></i>Logout<span></span>
            </a>
          </Link>
          </li>
        </ul>
        </React.Fragment>
    );
  };

  render() {
    const {isAuthenticated, user} = this.props.auth;
    var uri = window.location.pathname;
    uri = uri.substring(1, uri.length);
    return (
      <React.Fragment>
      <MediaQuery minDeviceWidth={1224}>
      <div id="navbar" className="navbar-area bg-white">
        <nav
            className="navbar navbar-expand-xl
            navbar-dark pb-2 pt-2"
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
                <span className="navbar-toggler-icon"/>
              </button>
              {this.props.profile.is_employer ? 
              <a href="/employer" className="navbar-brand mr-auto">
              <img
                src={hirebeatlogo}
                className="img-fluid mr-3"
                alt="logo"
                style={{
                  width: "16%",
                  height:"16%",
                }}
              />
              <img
                src={hirebeatlogotext}
                className="img-fluid mr-2"
                alt="logotext"
                style={{
                  width: "50%",
                  height:"100%",
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
                    height:"16%",
                  }}
                />
                <img
                  src={hirebeatlogotext}
                  className="img-fluid mr-2"
                  alt="logotext"
                  style={{
                    width: "50%",
                    height:"100%",
                  }}
                />
              </a>}
            {/*</div>*/}
            {isAuthenticated
                ? user.groups[0] == "reviewers"
                    ? this.renderReviewerLinks()
                    : this.props.profile.is_employer
                    ? this.renderEmployerLinks()
                    : this.renderUserLinks()
                : uri == ("employer" || "employer_register") ?
                  this.renderEmployerGuestLinks()
                : this.renderGuestLinks()
            }

          </div>
        </nav>
        </div>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={1223}>
      <div id="navbar" className="navbar-area bg-white" style={{minWidth:"0px"}}>
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
                <span className="navbar-toggler-icon"/>
              </button>
              {this.props.profile.is_employer ? 
              <a href="/employer" className="navbar-brand mr-auto">
              <img
                src={hirebeatlogo}
                className="img-fluid mr-3"
                alt="logo"
                style={{
                  width: "16%",
                  height:"16%",
                }}
              />
              <img
                src={hirebeatlogotext}
                className="img-fluid mr-2"
                alt="logotext"
                style={{
                  width: "50%",
                  height:"100%",
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
                    height:"16%",
                  }}
                />
                <img
                  src={hirebeatlogotext}
                  className="img-fluid mr-2"
                  alt="logotext"
                  style={{
                    width: "50%",
                    height:"100%",
                  }}
                />
              </a>}
            {/*</div>*/}
            {isAuthenticated
                ? user.groups[0] == "reviewers"
                    ? this.renderReviewerLinks()
                    : this.props.profile.is_employer
                    ? this.renderEmployerLinks()
                    : this.renderUserLinks()
                : uri == ("employer" || "employer_register") ?
                  this.renderEmployerGuestLinks()
                : this.renderGuestLinks()
            }

          </div>
        </nav>
        </div>
        </MediaQuery>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.auth_reducer.profile,
  auth: state.auth_reducer,
});

export default connect(mapStateToProps, {logout, loadProfile})(Header);