import React, {Component} from "react";
import {Link} from "react-router-dom";
import {logout} from "../../redux/actions/auth_actions";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import MediaQuery from 'react-responsive';
import hirebeatlogo from "../../assets/HireBeatLogo.png";
import hirebeatlogotext from "../../assets/HireBeatLogoText.png";
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
    /*const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
      <a
        ref={ref}
        onClick={(e) => {
          e.preventDefault();
          onClick(e);
        }}
        style={{textDecoration:"none", cursor:"pointer"}}
      >
        {children}
      </a>
    ));*/
    return (
        <React.Fragment>
          <div className="nav-item order-xl-1 align-self-center">
            <div className="nav-link text-white navbar-font">
              <div className="row">
                    <i className="bx bx-user-circle 1 bx-sm" style={{color:"#FFFFFF", paddingRight:'2px'}}></i>        
                    <span className="header-text" style={{cursor:'pointer'}}>{user ? `  ${user.username}  ` : ""}
                    <ul className="nav_submenu"> 
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
                    <ul className="nav_submenu" style={{height:"14.6rem",width:"18rem"}}>
                        <li>
                        <Link to="/practice" className="header-dropdown-custom" style={{textDecoration:'none', marginLeft:'1rem'}}>
                        <span><i className="bx bx-video-recording" style={{color:"white", top:"0.5rem"}}></i></span>Interview Practice</Link></li>
                        <li>
                        <Link to="/resume" className="header-dropdown-custom" style={{textDecoration:'none', marginLeft:'1rem'}}>
                        <span><i className="bx bx-file-find" style={{color:"white"}}></i></span>Resume Optimization</Link></li>
                        <li id="id-topcompany">
                        <Link to="/companydata" className="header-dropdown-custom" style={{textDecoration:'none', marginLeft:'1rem'}}>
                        <span><i className="bx bxs-meteor" style={{color:"white"}}></i></span>Top Companies Tips</Link></li>
                        <li id="id-howitworks">
                        <Link to="/howitworks" className="header-dropdown-custom" style={{textDecoration:'none', marginLeft:'1rem'}}>
                        How it works</Link></li>
                        <li id="id-careerquiz">
                        <Link to="/quiz" className="header-dropdown-custom" style={{textDecoration:'none', marginLeft:'1rem'}}>
                        Career Quiz</Link></li>
                        <li id="id-pricing">
                        <Link to="/pricing" className="header-dropdown-custom" style={{textDecoration:'none', marginLeft:'1rem'}}>
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
                      <li id="id-aboutus"><Link to="/company" className="header-dropdown-custom" style={{textDecoration:'none', marginLeft:'1rem'}}>About Us</Link></li>
                      <li id="id-contact"><Link to="/contact" className="header-dropdown-custom" style={{textDecoration:'none', marginLeft:'1rem'}}>Contact</Link></li>
                      <li id="id-joinus"><Link to="/jobs" className="header-dropdown-custom" style={{textDecoration:'none', marginLeft:'1rem'}}>Join Us</Link></li>
                      <li id="id-blog"><Link to="/bloghome" className="header-dropdown-custom" style={{textDecoration:'none', marginLeft:'1rem'}}>Blog</Link></li>
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
                <i className="bx bx-log-in"></i> Log In <span></span>
              </a>
            </Link>
            </li>
            <li className="nav-item">
            <Link to="/register">
            <a className="default-btn" id="id-signup" style={{color:"white", backgroundColor:"#ff612f"}}>
              <i className="bx bxs-hot"></i>Sign Up <span></span>
            </a>
            </Link>
            </li>
          </ul>


          <div className="collapse navbar-collapse"
               id="navbarSupportedContent">

            <ul className="navbar-nav order-xl-0 ml-auto mr-5
               text-left">
              <li className="nav-item">
                <a className="nav-link text-white navbar-font">
                <span className="header-text" style={{cursor:'pointer'}}>
                    Features <i className="bx bx-chevron-down"></i>
                    <ul className="nav_submenu" style={{height:"14.6rem",width:"18rem"}}>
                        <li>
                        <Link to="/practice" className="header-dropdown-custom" style={{textDecoration:'none', marginLeft:'1rem'}}>
                        <span><i className="bx bx-video-recording" style={{color:"white", top:"0.5rem"}}></i></span>Interview Practice</Link></li>
                        <li>
                        <Link to="/resume" className="header-dropdown-custom" style={{textDecoration:'none', marginLeft:'1rem'}}>
                        <span><i className="bx bx-file-find" style={{color:"white"}}></i></span>Resume Optimization</Link></li>
                        <li id="id-topcompany1">
                        <Link to="/companydata" className="header-dropdown-custom" style={{textDecoration:'none', marginLeft:'1rem'}}>
                        <span><i className="bx bxs-meteor" style={{color:"white"}}></i></span>Top Companies Tips</Link></li>
                        <li id="id-howitworks1">
                        <Link to="/howitworks" className="header-dropdown-custom" style={{textDecoration:'none', marginLeft:'1rem'}}>
                        How it works</Link></li>
                        <li id="id-careerquiz1">
                        <Link to="/quiz" className="header-dropdown-custom" style={{textDecoration:'none', marginLeft:'1rem'}}>
                        Career Quiz</Link></li>
                        <li id="id-pricing1">
                        <Link to="/pricing" className="header-dropdown-custom" style={{textDecoration:'none', marginLeft:'1rem'}}>
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
                      <li id="id-aboutus1"><Link to="/company" className="header-dropdown-custom" style={{textDecoration:'none', marginLeft:'1rem'}}>About Us</Link></li>
                      <li id="id-contact1"><Link to="/contact" className="header-dropdown-custom" style={{textDecoration:'none', marginLeft:'1rem'}}>Contact</Link></li>
                      <li id="id-joinus1"><Link to="/jobs" className="header-dropdown-custom" style={{textDecoration:'none', marginLeft:'1rem'}}>Join Us</Link></li>
                      <li id="id-blog1"><Link to="/bloghome" className="header-dropdown-custom" style={{textDecoration:'none', marginLeft:'1rem'}}>Blog</Link></li>
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
    return (
      <div id="navbar" className="navbar-area bg-white">
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
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth_reducer,
});

export default connect(mapStateToProps, {logout})(Header);