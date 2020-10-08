import React, {Component} from "react";
import {Link} from "react-router-dom";
import {logout} from "../../redux/actions/auth_actions";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import MediaQuery from 'react-responsive';
import hirebeatlogo from "../../assets/HireBeatLogo.png";
import Dropdown from 'react-bootstrap/Dropdown'

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
    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
      <a
        ref={ref}
        onMouseEnter={(e) => {
          e.preventDefault();
          onClick(e);
        }}
        onMouseLeave={(e) => {
          e.preventDefault();
          onClick(e);
        }}
        style={{textDecoration:"none", cursor:"pointer"}}
      >
        {children}
      </a>
    ));
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
                  aria-expanded="false">
                <i className="bx bx-log-in"></i>        
                <b>{user ? `  ${user.username}  ` : ""}</b>
              </button>

              <div
                  className="dropdown-menu"
                  role="menu"
                  aria-labelledby="btnGroupDrop1"
              >
                <Link to="/">
                <button
                    onClick={this.props.logout}
                    className="btn btn-danger btn-sm text-light"
                    style={{width: "80%", marginLeft: "15px"}}
                >
                  Logout
                </button>
                </Link>
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
                  <span className="header-text">Practice</span>
                </Link>
              </li>
              <li className="nav-item ">
                <Link to="/resume" className="nav-link text-white navbar-font">
                  <span className="header-text">Resume</span>
                </Link>
              </li>
              </MediaQuery>
              <li className="nav-item">
                <Link to="/dashboard" className="nav-link text-white navbar-font">
                  <span className="header-text">Dashboard</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/company" className="nav-link text-white navbar-font">
                  <span className="header-text">About Us</span>
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white navbar-font">
                  <Dropdown>
                    <Dropdown.Toggle as={CustomToggle} >
                      <span className="header-text">Resources</span>

                    <Dropdown.Menu>
                      <Dropdown.Item href="/bloghome" className="header-dropdown-custom" style={{color:"#56a3fa"}}>Blog</Dropdown.Item>
                      <Dropdown.Item href="/quiz" className="header-dropdown-custom" style={{color:"#56a3fa"}}>Quiz</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown.Toggle>
                  </Dropdown>
                </a>
              </li>
              <li className="nav-item">
                <Link to="/pricing" className="nav-link text-white navbar-font">
                  <span className="header-text">Pricing</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link text-white navbar-font">
                  <span className="header-text">Contact</span>
                </Link>
              </li>
            </ul>
          </div>
        </React.Fragment>
    );
  };

  renderGuestLinks = () => {
    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
      <a
        ref={ref}
        onMouseEnter={(e) => {
          e.preventDefault();
          onClick(e);
        }}
        onMouseLeave={(e) => {
          e.preventDefault();
          onClick(e);
        }}
        style={{textDecoration:"none", cursor:"pointer"}}
      >
        {children}
      </a>
    ));
    return (
        <React.Fragment>
          <ul className="navbar-nav d-flex flex-row order-xl-1">
          <li className="nav-item">
            <Link to="/login">
              <a className="default-btn mr-3" style={{color:"white"}}>
                <i className="bx bx-log-in"></i> Log In <span></span>
              </a>
            </Link>
            </li>
            <li className="nav-item">
            <Link to="/register">
            <a className="default-btn" style={{color:"white"}}>
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
                <a href="/" className="nav-link text-white navbar-font active">
                  <span className="header-text">Home</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="/company" className="nav-link text-white navbar-font">
                <span className="header-text">About Us</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white navbar-font">
                  <Dropdown>
                    <Dropdown.Toggle as={CustomToggle} >
                      <span className="header-text">Resources</span>

                    <Dropdown.Menu>
                      <Dropdown.Item href="/bloghome" className="header-dropdown-custom" style={{color:"#56a3fa"}}>Blog</Dropdown.Item>
                      <Dropdown.Item href="/quiz" className="header-dropdown-custom" style={{color:"#56a3fa"}}>Quiz</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown.Toggle>
                  </Dropdown>
                </a>
              </li>
              <li className="nav-item">
                <a href="/pricing" className="nav-link text-white navbar-font">
                <span className="header-text">Pricing</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="/contact" className="nav-link text-white navbar-font">
                <span className="header-text">Contact</span>
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
                  className="img-fluid mr-2"
                  alt="logo"
                  style={{
                    width: "24%",
                    height:"100%"
                  }}
                />
                <span className="font-weight-bold"
                style={{fontSize:"1.2rem", color:"white", fontFamily:"Poppins", fontWeight:"500"}}>
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
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth_reducer,
});

export default connect(mapStateToProps, {logout})(Header);