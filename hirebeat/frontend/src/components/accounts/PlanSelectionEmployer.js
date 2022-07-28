import React, { Component, useEffect } from 'react';
import { connect } from "react-redux";
import DocumentMeta from 'react-document-meta';
import { Redirect } from "react-router-dom";
import MediaQuery from 'react-responsive';
import Collapse from 'react-bootstrap/Collapse';
import 'boxicons';
import axios from "axios";
import { Stripepayment } from "../home/Stripepayment";

function ScrollToTopOnMount() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return null;
}

class PlanSelectionEmployer extends Component {

    state = {
        upAndDown1: true,
        upAndDown2: false,
        upAndDown3: false,
        upAndDown4: false,
        upAndDown5: false,
        hover1: false,
        hover2: false,
        hover3: false,
        showPayment: false,
        showRedeem: false,
        code: "",
        codeErr: "",
        coupon: "",
        planPrice: "",
    }

    componentDidMount() {
        let allFeaturesIndicate = document.getElementById("allFeaturesIndicate");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 1500 && window.innerWidth >= 1200) {
                allFeaturesIndicate?.classList.add("is-sticky");
            } else if (window.scrollY > 3000 && window.innerWidth < 1200) {
                allFeaturesIndicate?.classList.add("is-sticky");
            }
            else {
                allFeaturesIndicate?.classList.remove("is-sticky");
            }
        });
        let allFeaturesIndicate1 = document.getElementById("allFeaturesIndicate1");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 2600) {
                allFeaturesIndicate1?.classList.add("is-sticky");
            } else {
                allFeaturesIndicate1?.classList.remove("is-sticky");
            }
        });
    }

    toggleHover1 = () => {
        this.setState({ hover1: !this.state.hover1 });
    }
    toggleHover2 = () => {
        this.setState({ hover2: !this.state.hover2 });
    }
    toggleHover3 = () => {
        this.setState({ hover3: !this.state.hover3 });
    }

    setUpAndDown1 = () => {
        this.setState({
            upAndDown1: !this.state.upAndDown1,
        });
    }
    setUpAndDown2 = () => {
        this.setState({
            upAndDown2: !this.state.upAndDown2,
        });
    }
    setUpAndDown3 = () => {
        this.setState({
            upAndDown3: !this.state.upAndDown3,
        });
    }
    setUpAndDown4 = () => {
        this.setState({
            upAndDown4: !this.state.upAndDown4,
        });
    }
    setUpAndDown5 = () => {
        this.setState({
            upAndDown5: !this.state.upAndDown5,
        });
    }

    handleProUpgrade = () => {
        this.setState({ showPayment: true, coupon: this.state.coupon, planPrice: "price_1LQdOgKxU1MN2zWMqc2M6u92" });
    };

    handleYearProUpgrade = () => {
        this.setState({ showPayment: true, coupon: this.state.coupon, planPrice: "price_1LQdRHKxU1MN2zWMrNPTju3z" });
    };

    handlePremiumUpgrade = () => {
        this.setState({ showPayment: true, coupon: this.state.coupon, planPrice: "price_1LJLwsKxU1MN2zWM3PiqUIwf" });
    };

    handleYearPremiumUpgrade = () => {
        this.setState({ showPayment: true, coupon: this.state.coupon, planPrice: "price_1LQdSoKxU1MN2zWMHtZSudl8" });
    };

    handlePayAsYouGoUpgrade = () => {
        this.setState({ showPayment: true, coupon: this.state.coupon, planPrice: "price_1LQbu3KxU1MN2zWMAaZbcGBr" });
    };

    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs_item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        evt.currentTarget.className += "current";
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    codeCheck = (event) => {
        event.preventDefault();
        const config = {
            headers: {
                "Content-Type": "application/json",
            }
        };
        let user_code = { "id": this.props.user.id, "code": this.state.code };
        this.setState({
            codeErr: "",
        })
        axios.post("api/check_code", user_code, config).then(res => {
            let result = res.data
            if (result["error"] != null) {
                this.setState({ codeErr: result["error"] })
            }
            else if (result["msg"] != null) {
                window.location.reload(false);
            }

        }).catch(error => console.log(error))
        this.setState({ code: "" })
    }

    render() {
        const meta = {
            title: 'HireBeat – Plan Selection(Employer) On Registration',
            description: 'Plan Selection for registration(Employer)',
            meta: {
                charset: 'utf-8',
                name: {
                    keywords: 'hiring tool return on investment, hiring tool roi, hr applicant tracking, roi recruitment process'
                }
            }
        };
        var linkStyle1;
        var linkStyle2;
        var linkStyle3;
        if (this.state.hover1) {
            linkStyle1 = { outline: "6px solid #006dff", boxShadow: "0px 4px 32px 0px #518AD666", transition: "0.2s" }
        }
        if (this.state.hover2) {
            linkStyle2 = { outline: "6px solid #FF6B00", boxShadow: "0px 4px 32px 0px #C3520066", transition: "0.2s" }
        }
        if (this.state.hover3) {
            linkStyle3 = { outline: "6px solid #13C4A1", boxShadow: "0px 4px 32px 0px #079A7D66", transition: "0.2s" }
        }
        if (this.props?.profile?.plan_selected) {
            return <Redirect to="/email-verification-employer-mini" />;
        }
        return (
            <DocumentMeta {...meta}>
                <React.Fragment>
                    <ScrollToTopOnMount />
                    {(this.state.showPayment) ?
                        <div>
                            <Stripepayment
                                coupon={this.state.coupon}
                                user={this.props.user}
                                planPrice={this.state.planPrice}
                            />
                        </div> :
                        <div>
                            <MediaQuery minDeviceWidth={1224}>
                                <div className="min-width-1290">
                                    <div className="container">
                                        <div className="page-title-content py-5">
                                            <h1 style={{ color: "#090d3a" }}>{"Pricing & Plans"}</h1>
                                            <p style={{ color: "#006dff" }}>{"Hire talent in a heartbeat with one hub to promote your job opening and manage candidates."}</p>
                                            <p style={{ color: "#7a7a7a" }}>{"Pitchground user can redeem your code "}<span style={{ textDecorationLine: "underline", cursor: "pointer" }} onClick={() => { this.setState({ showRedeem: true }) }}>here.</span></p>
                                        </div>
                                    </div>
                                </div>
                            </MediaQuery>
                            <MediaQuery maxDeviceWidth={1223}>
                                <div>
                                    <div className="container">
                                        <div className="page-title-content py-5">
                                            <h1 style={{ color: "#090d3a" }}>{"Pricing & Plans"}</h1>
                                            <p style={{ color: "#006dff" }}>{"Hire talent in a heartbeat with one hub to promote your job opening and manage candidates."}</p>
                                            <p style={{ color: "#7a7a7a" }}>{"Pitchground user can redeem your code "}<span style={{ textDecorationLine: "underline", cursor: "pointer" }} onClick={() => { this.setState({ showRedeem: true }) }}>here.</span></p>
                                        </div>
                                    </div>
                                </div>
                            </MediaQuery>
                            {(this.state.showRedeem) &&
                                <div className="chart-bg1 container mb-3" style={{ width: "30%" }}>
                                    <form style={{ marginBottom: "3%" }} onSubmit={this.codeCheck}>
                                        <div className="form-row mt-2">
                                            <div className="form-group col">
                                                <p className='d-flex justify-content-center' style={{ fontSize: "17px", color: "#090d3a" }}>Redeem Code</p>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="code"
                                                    value={this.state.code}
                                                    onChange={this.handleInputChange}
                                                    placeholder="Enter promo code"
                                                    required="required"
                                                />

                                                {this.state.codeErr.length != 0 ? <><i className="bx bxs-x-circle" style={{ color: '#FB0000' }}></i><span className="ml-2">{this.state.codeErr}</span></> : null}
                                            </div>
                                        </div>
                                        <div className='d-flex justify-content-center'>
                                            <button
                                                type="button"
                                                className="default-btn7 mr-2"
                                                style={{ paddingLeft: "25px", textDecoration: "none", color: "#006dff", border: "1px solid #006dff" }}
                                                onClick={() => { this.setState({ showRedeem: false }) }}
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                type="submit"
                                                className="default-btn"
                                                style={{ paddingLeft: "25px", textDecoration: "none" }}
                                            >
                                                Apply
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            }
                            <section className="pricing-area pb-5" id="go-to-pricing">
                                <div className="container-xl">
                                    <div className="tab pricing-list-tab">
                                        {/* Pricing Tab List */}
                                        <ul className="tabs">
                                            <li
                                                onClick={(e) => this.openTabSection(e, 'tab1')}
                                            >
                                                <span style={{ border: "1px solid #090D3A" }}>
                                                    <i className="bx bxs-calendar-check"></i> &nbsp;&nbsp;Monthly &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                </span>
                                            </li>

                                            <li
                                                className="current"
                                                onClick={(e) => this.openTabSection(e, 'tab2')}
                                            >
                                                <span style={{ border: "1px solid #090D3A" }}>
                                                    <i className="bx bxs-calendar-check"></i> Annually (-25%)
                                                </span>
                                            </li>
                                        </ul>
                                        <div className="tab_content">
                                            {/*Annually*/}
                                            <div id="tab2" className="tabs_item">
                                                <div className="row pb-5 pt-3">

                                                    {/* Payg */}
                                                    <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12 min-width-350 py-4">
                                                        <div style={{ backgroundColor: "#ffffff", borderRadius: "7px 7px 0px 0px", height: "2.5rem", textAlign: "center" }}>
                                                            <p style={{ color: "#ffffff", fontWeight: "600", fontSize: "1rem", paddingTop: "5px", paddingBottom: "5px" }}>Most popular</p>
                                                        </div>
                                                        <div className="single-pricing-table h-100" style={linkStyle1} onMouseEnter={this.toggleHover1} onMouseLeave={this.toggleHover1}>
                                                            <div className="pricing-header">
                                                                <h3 style={{ color: "#006dff", fontWeight: "700", fontSize: "2rem" }}>PAY-AS-YOU-GO</h3>
                                                            </div>

                                                            <div className="price" style={{ borderTop: "none", color: "#090d3a", borderBottom: "1px dashed rgba(103, 163, 243, 0.3)" }}>
                                                                <sup style={{ color: "#090d3a" }}>$</sup>99<sub style={{ color: "#090d3a" }}>/job</sub>
                                                                <p style={{ fontSize: "13px", color: "#090d3a", fontWeight: "700" }}>365-day access</p>
                                                                <div style={{ marginTop: "-1rem", marginBottom: "1rem" }}>
                                                                    <div className="btn-box">
                                                                        <button id="id-tifn5" className="default-btn" style={{ color: "white", paddingRight: "50px", paddingTop: "10px", paddingBottom: "10px" }} onClick={this.handlePayAsYouGoUpgrade}>
                                                                            Purchase
                                                                            <span></span>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="px-5 py-4">
                                                                <p>A one-time solution for organizations with occasional hiring needs.</p>
                                                                <div className="pt-5 pb-2">
                                                                    <p style={{ color: "#090d3a", fontWeight: "500" }}>1 Active Job Postings</p>
                                                                    <p style={{ color: "#090d3a", fontWeight: "500" }}>Standard Job Advertising</p>
                                                                    <p style={{ color: "#090d3a", fontWeight: "500" }}>Applicants Tracking</p>
                                                                    <p style={{ color: "#090d3a", fontWeight: "500" }}>One-way Video Interview</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Pro */}
                                                    <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12 min-width-350 py-4">
                                                        <div style={{ backgroundColor: "#ff6b00", borderRadius: "7px 7px 0px 0px", height: "2.5rem", textAlign: "center" }}>
                                                            <p style={{ color: "#ffffff", fontWeight: "600", fontSize: "1rem", paddingTop: "5px", paddingBottom: "5px" }}><box-icon type='solid' name='medal' color="#ffffff" size="1rem" ></box-icon> Most popular</p>
                                                        </div>
                                                        <div className="single-pricing-table h-100" style={linkStyle2} onMouseEnter={this.toggleHover2} onMouseLeave={this.toggleHover2}>
                                                            <div className="pricing-header">
                                                                <h3 style={{ color: "#ff6b00", fontWeight: "700", fontSize: "2.5rem" }}>PRO</h3>
                                                            </div>

                                                            <div className="price" style={{ borderTop: "none", color: "#090d3a", borderBottom: "1px dashed rgba(103, 163, 243, 0.3)" }}>
                                                                <sup style={{ color: "#090d3a" }}>$</sup>126<sub style={{ color: "#090d3a" }}>/mo</sub>
                                                                <div style={{ marginTop: "-1rem", marginBottom: "1rem" }}>
                                                                    <div className="btn-box">
                                                                        <button id="id-tifn5" className="default-btn5" style={{ paddingRight: "50px", paddingTop: "10px", paddingBottom: "10px" }} onClick={this.handleYearProUpgrade}>
                                                                            Select Plan
                                                                            <span></span>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="px-5 py-4">
                                                                <p>For smaller teams looking to simplify and speed up the hiring process with the essential features.</p>
                                                                <div className="pt-2 pb-2">
                                                                    <p style={{ color: "#090d3a", fontWeight: "500" }}>5 Active Job Postings</p>
                                                                    <p style={{ color: "#090d3a", fontWeight: "500" }}>Standard Job Advertising</p>
                                                                    <p style={{ color: "#090d3a", fontWeight: "500" }}>Applicants Tracking</p>
                                                                    <p style={{ color: "#090d3a", fontWeight: "500" }}>One-way Video Interview</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Premium */}
                                                    <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12 min-width-350 py-4">
                                                        <div style={{ backgroundColor: "#ffffff", borderRadius: "7px 7px 0px 0px", height: "2.5rem", textAlign: "center" }}>
                                                            <p style={{ color: "#ffffff", fontWeight: "600", fontSize: "1rem", paddingTop: "5px", paddingBottom: "5px" }}>Most popular</p>
                                                        </div>
                                                        <div className="single-pricing-table h-100" style={linkStyle3} onMouseEnter={this.toggleHover3} onMouseLeave={this.toggleHover3}>
                                                            <div className="pricing-header">
                                                                <h3 style={{ color: "#13c4a1", fontWeight: "700", fontSize: "2.5rem" }}>PREMIUM</h3>
                                                            </div>

                                                            <div className="price" style={{ borderTop: "none", color: "#090d3a", borderBottom: "1px dashed rgba(103, 163, 243, 0.3)" }}>
                                                                <sup style={{ color: "#090d3a" }}>$</sup>299<sub style={{ color: "#090d3a" }}>/mo</sub>
                                                                <div style={{ marginTop: "-1rem", marginBottom: "1rem" }}>
                                                                    <div className="btn-box">
                                                                        <button id="id-tifn5" className="default-btn" style={{ color: "white", paddingRight: "50px", backgroundColor: "#13c4a1", paddingTop: "10px", paddingBottom: "10px" }} onClick={this.handleYearPremiumUpgrade}>
                                                                            Select Plan
                                                                            <span></span>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="px-5 py-4">
                                                                <p>For organizations seeking hiring automation and team collaboration with an all-in-one talent acquisition suite.</p>
                                                                <div className="pt-2 pb-2">
                                                                    <p style={{ color: "#090d3a", fontWeight: "500" }}>Unlimited Job Postings</p>
                                                                    <p style={{ color: "#090d3a", fontWeight: "500" }}>Premium Job Advertising</p>
                                                                    <p style={{ color: "#090d3a", fontWeight: "500" }}>Applicants Tracking</p>
                                                                    <p style={{ color: "#090d3a", fontWeight: "500" }}>One-way Video Interview</p>
                                                                    <p style={{ color: "#090d3a", fontWeight: "500" }}>Integration with Major HRIS</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*Monthly*/}
                                            <div id="tab1" className="tabs_item">
                                                <div className="row pb-5 pt-3">
                                                    {/* Payg*/}
                                                    <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12 min-width-350 py-4">
                                                        <div style={{ backgroundColor: "#ffffff", borderRadius: "7px 7px 0px 0px", height: "2.5rem", textAlign: "center" }}>
                                                            <p style={{ color: "#ffffff", fontWeight: "600", fontSize: "1rem", paddingTop: "5px", paddingBottom: "5px" }}>Most popular</p>
                                                        </div>
                                                        <div className="single-pricing-table h-100" style={linkStyle1} onMouseEnter={this.toggleHover1} onMouseLeave={this.toggleHover1}>
                                                            <div className="pricing-header">
                                                                <h3 style={{ color: "#006dff", fontWeight: "700", fontSize: "2rem" }}>PAY-AS-YOU-GO</h3>
                                                            </div>

                                                            <div className="price" style={{ borderTop: "none", color: "#090d3a", borderBottom: "1px dashed rgba(103, 163, 243, 0.3)" }}>
                                                                <sup style={{ color: "#090d3a" }}>$</sup>99<sub style={{ color: "#090d3a" }}>/job</sub>
                                                                <p style={{ fontSize: "13px", color: "#090d3a", fontWeight: "700" }}>365-day access</p>
                                                                <div style={{ marginTop: "-1rem", marginBottom: "1rem" }}>
                                                                    <div className="btn-box">
                                                                        <button id="id-tifn5" className="default-btn" style={{ color: "white", paddingRight: "50px", paddingTop: "10px", paddingBottom: "10px" }} onClick={this.handlePayAsYouGoUpgrade}>
                                                                            Purchase
                                                                            <span></span>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="px-5 py-4">
                                                                <p>A one-time solution for organizations with occasional hiring needs.</p>
                                                                <div className="pt-5 pb-2">
                                                                    <p style={{ color: "#090d3a", fontWeight: "500" }}>1 Active Job Postings</p>
                                                                    <p style={{ color: "#090d3a", fontWeight: "500" }}>Standard Job Advertising</p>
                                                                    <p style={{ color: "#090d3a", fontWeight: "500" }}>Applicants Tracking</p>
                                                                    <p style={{ color: "#090d3a", fontWeight: "500" }}>One-way Video Interview</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Pro */}
                                                    <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12 min-width-350 py-4">
                                                        <div style={{ backgroundColor: "#ff6b00", borderRadius: "7px 7px 0px 0px", height: "2.5rem", textAlign: "center" }}>
                                                            <p style={{ color: "#ffffff", fontWeight: "600", fontSize: "1rem", paddingTop: "5px", paddingBottom: "5px" }}><box-icon type='solid' name='medal' color="#ffffff" size="1rem" ></box-icon> Most popular</p>
                                                        </div>
                                                        <div className="single-pricing-table h-100" style={linkStyle2} onMouseEnter={this.toggleHover2} onMouseLeave={this.toggleHover2}>
                                                            <div className="pricing-header">
                                                                <h3 style={{ color: "#ff6b00", fontWeight: "700", fontSize: "2.5rem" }}>PRO</h3>
                                                            </div>

                                                            <div className="price" style={{ borderTop: "none", color: "#090d3a", borderBottom: "1px dashed rgba(103, 163, 243, 0.3)" }}>
                                                                <sup style={{ color: "#090d3a" }}>$</sup>169<sub style={{ color: "#090d3a" }}>/mo</sub>
                                                                <div style={{ marginTop: "-1rem", marginBottom: "1rem" }}>
                                                                    <div className="btn-box">
                                                                        <button id="id-tifn5" className="default-btn5" style={{ paddingRight: "50px", paddingTop: "10px", paddingBottom: "10px" }} onClick={this.handleProUpgrade}>
                                                                            Select Plan
                                                                            <span></span>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="px-5 py-4">
                                                                <p>For smaller teams looking to simplify and speed up the hiring process with the essential features.</p>
                                                                <div className="pt-2 pb-2">
                                                                    <p style={{ color: "#090d3a", fontWeight: "500" }}>5 Active Job Postings</p>
                                                                    <p style={{ color: "#090d3a", fontWeight: "500" }}>Standard Job Advertising</p>
                                                                    <p style={{ color: "#090d3a", fontWeight: "500" }}>Applicants Tracking</p>
                                                                    <p style={{ color: "#090d3a", fontWeight: "500" }}>One-way Video Interview</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Premium */}
                                                    <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12 min-width-350 py-4">
                                                        <div style={{ backgroundColor: "#ffffff", borderRadius: "7px 7px 0px 0px", height: "2.5rem", textAlign: "center" }}>
                                                            <p style={{ color: "#ffffff", fontWeight: "600", fontSize: "1rem", paddingTop: "5px", paddingBottom: "5px" }}>Most popular</p>
                                                        </div>
                                                        <div className="single-pricing-table h-100" style={linkStyle3} onMouseEnter={this.toggleHover3} onMouseLeave={this.toggleHover3}>
                                                            <div className="pricing-header">
                                                                <h3 style={{ color: "#13c4a1", fontWeight: "700", fontSize: "2.5rem" }}>PREMIUM</h3>
                                                            </div>

                                                            <div className="price" style={{ borderTop: "none", color: "#090d3a", borderBottom: "1px dashed rgba(103, 163, 243, 0.3)" }}>
                                                                <sup style={{ color: "#090d3a" }}>$</sup>169<sub style={{ color: "#090d3a" }}>/mo</sub>
                                                                <div style={{ marginTop: "-1rem", marginBottom: "1rem" }}>
                                                                    <div className="btn-box">
                                                                        <button id="id-tifn5" className="default-btn" style={{ color: "white", paddingRight: "50px", backgroundColor: "#13c4a1", paddingTop: "10px", paddingBottom: "10px" }} onClick={this.handlePremiumUpgrade}>
                                                                            Select Plan
                                                                            <span></span>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="px-5 py-4">
                                                                <p>For organizations seeking hiring automation and team collaboration with an all-in-one talent acquisition suite.</p>
                                                                <div className="pt-2 pb-2">
                                                                    <p style={{ color: "#090d3a", fontWeight: "500" }}>Unlimited Job Postings</p>
                                                                    <p style={{ color: "#090d3a", fontWeight: "500" }}>Premium Job Advertising</p>
                                                                    <p style={{ color: "#090d3a", fontWeight: "500" }}>Applicants Tracking</p>
                                                                    <p style={{ color: "#090d3a", fontWeight: "500" }}>One-way Video Interview</p>
                                                                    <p style={{ color: "#090d3a", fontWeight: "500" }}>Integration with Major HRIS</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-5 d-flex justify-content-center">
                                        <a target="_blank" rel="noreferrer" href="https://meetings.hubspot.com/hirebeat" className="default-btn1" style={{ paddingLeft: "25px", color: "#ffffff", textDecoration: "none", cursor: "pointer" }}>{"Talk to us >"}</a>
                                    </div>

                                    {/** All Features Table */}
                                    <div className="text-center pt-5 pb-3">
                                        <h1 style={{ fontSize: "2.4rem", fontWeight: "600", color: "#090D3A", marginBottom: "2rem" }}>
                                            All Features Compared
                                        </h1>
                                        <MediaQuery minDeviceWidth={1224}>
                                            <div className="allFeaturesIndicate" id="allFeaturesIndicate">
                                                <div className="container">
                                                    <div className="row py-3">
                                                        <div className="col-4 pl-4" style={{ textAlign: "left" }}>
                                                            <p style={{ fontWeight: "500", fontSize: "1.1rem", color: "#090d3a" }}></p>
                                                        </div>
                                                        <div className="col-3 pro">
                                                            <p style={{ fontWeight: "700", fontSize: "1.2rem", color: "#006dff" }}>PAYG</p>
                                                        </div>
                                                        <div className="col-2 premium">
                                                            <p style={{ fontWeight: "700", fontSize: "1.2rem", color: "#FF6B00" }}>PRO</p>
                                                        </div>
                                                        <div className="col-3 enterprise">
                                                            <p style={{ fontWeight: "700", fontSize: "1.2rem", color: "#13C4A1" }}>PREMIUM</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </MediaQuery>
                                        <MediaQuery maxDeviceWidth={1223}>
                                            <div className="container-fluid allFeaturesIndicate1" id="allFeaturesIndicate1">
                                                <div className="row py-3">
                                                    <div className="col-4 pl-4" style={{ textAlign: "left" }}>
                                                        <p style={{ fontWeight: "500", fontSize: "0.9rem", color: "#090d3a" }}></p>
                                                    </div>
                                                    <div className="col-3">
                                                        <p style={{ fontWeight: "700", fontSize: "0.9rem", color: "#006dff" }}>PAYG</p>
                                                    </div>
                                                    <div className="col-2">
                                                        <p style={{ fontWeight: "700", fontSize: "0.9rem", color: "#FF6B00" }}>PRO</p>
                                                    </div>
                                                    <div className="col-3">
                                                        <p style={{ fontWeight: "700", fontSize: "0.9rem", color: "#13C4A1" }}>PREM</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </MediaQuery>

                                        <div>
                                            {/* TABLE 1*/}
                                            {this.state.upAndDown1 ?
                                                <div className="pricing-toggle-stripe" aria-expanded={this.state.upAndDown1} onClick={this.setUpAndDown1}>Essentials<span style={{ float: "right", color: "#7C94B5" }}><i class='bx-fw bx bx-chevron-down'></i></span></div> :
                                                <div className="pricing-toggle-stripe" aria-expanded={this.state.upAndDown1} onClick={this.setUpAndDown1}>Essentials<span style={{ float: "right", color: "#7C94B5" }}><i class='bx-fw bx bx-chevron-up'></i></span></div>
                                            }
                                            <Collapse in={this.state.upAndDown1}>
                                                <div className="container-fluid">
                                                    <div className="row py-3">
                                                        <div className="col-4 pl-4" style={{ textAlign: "left" }}>
                                                            <p style={{ fontWeight: "500", fontSize: "1.1rem", color: "#090d3a" }}>Active Job Postings</p>
                                                        </div>
                                                        <div className="col-3">
                                                            <p style={{ fontWeight: "400", fontSize: "0.8rem", color: "#090d3a" }}>Purchase Unlimited</p>
                                                        </div>
                                                        <div className="col-2">
                                                            <p style={{ fontWeight: "400", fontSize: "0.8rem", color: "#090d3a" }}>5</p>
                                                        </div>
                                                        <div className="col-3">
                                                            <p style={{ fontWeight: "400", fontSize: "0.8rem", color: "#090d3a" }}>Unlimited</p>
                                                        </div>
                                                    </div>
                                                    <div className="row py-3">
                                                        <div className="col-4 pl-4" style={{ textAlign: "left" }}>
                                                            <p style={{ fontWeight: "500", fontSize: "1.1rem", color: "#090d3a" }}>Candidates</p>
                                                        </div>
                                                        <div className="col-3">
                                                            <p style={{ fontWeight: "400", fontSize: "0.8rem", color: "#090d3a" }}>Unlimited</p>
                                                        </div>
                                                        <div className="col-2">
                                                            <p style={{ fontWeight: "400", fontSize: "0.8rem", color: "#090d3a" }}>Unlimited</p>
                                                        </div>
                                                        <div className="col-3">
                                                            <p style={{ fontWeight: "400", fontSize: "0.8rem", color: "#090d3a" }}>Unlimited</p>
                                                        </div>
                                                    </div>
                                                    <div className="row py-3">
                                                        <div className="col-4 pl-4" style={{ textAlign: "left" }}>
                                                            <p style={{ fontWeight: "500", fontSize: "1.1rem", color: "#090d3a" }}>Applicants Tracking</p>
                                                        </div>
                                                        <div className="col-3">
                                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#006dff" }}></i></p>
                                                        </div>
                                                        <div className="col-2">
                                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#ff6b00" }}></i></p>
                                                        </div>
                                                        <div className="col-3">
                                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#13c4a1" }}></i></p>
                                                        </div>
                                                    </div>
                                                    <div className="row py-3">
                                                        <div className="col-4 pl-4" style={{ textAlign: "left" }}>
                                                            <p style={{ fontWeight: "500", fontSize: "1.1rem", color: "#090d3a" }}>Built-in One-way Video Interview</p>
                                                        </div>
                                                        <div className="col-3">
                                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#006dff" }}></i></p>
                                                        </div>
                                                        <div className="col-2">
                                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#ff6b00" }}></i></p>
                                                        </div>
                                                        <div className="col-3">
                                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#13c4a1" }}></i></p>
                                                        </div>
                                                    </div>
                                                    <div className="row py-3">
                                                        <div className="col-4 pl-4" style={{ textAlign: "left" }}>
                                                            <p style={{ fontWeight: "500", fontSize: "1.1rem", color: "#090d3a" }}>Team Collaborations</p>
                                                        </div>
                                                        <div className="col-3">
                                                            <p style={{ fontWeight: "400", fontSize: "0.8rem", color: "#090d3a" }}>Unlimited</p>
                                                        </div>
                                                        <div className="col-2">
                                                            <p style={{ fontWeight: "400", fontSize: "0.8rem", color: "#090d3a" }}>Unlimited</p>
                                                        </div>
                                                        <div className="col-3">
                                                            <p style={{ fontWeight: "400", fontSize: "0.8rem", color: "#090d3a" }}>Unlimited</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Collapse>

                                            {/* TABLE 2*/}
                                            {this.state.upAndDown2 ?
                                                <div className="pricing-toggle-stripe" aria-expanded={this.state.upAndDown2} onClick={this.setUpAndDown2}>Candidate Sourcing & Job Posting<span style={{ float: "right", color: "#7C94B5" }}><i class='bx-fw bx bx-chevron-down'></i></span></div> :
                                                <div className="pricing-toggle-stripe" aria-expanded={this.state.upAndDown2} onClick={this.setUpAndDown2}>Candidate Sourcing & Job Posting<span style={{ float: "right", color: "#7C94B5" }}><i class='bx-fw bx bx-chevron-up'></i></span></div>
                                            }
                                            <Collapse in={this.state.upAndDown2}>
                                                <div className="container-fluid">
                                                    <div className="row py-3">
                                                        <div className="col-4 pl-4" style={{ textAlign: "left" }}>
                                                            <p style={{ fontWeight: "500", fontSize: "1.1rem", color: "#090d3a" }}>Branded Career Website</p>
                                                        </div>
                                                        <div className="col-3">
                                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#006dff" }}></i></p>
                                                        </div>
                                                        <div className="col-2">
                                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#ff6b00" }}></i></p>
                                                        </div>
                                                        <div className="col-3">
                                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#13c4a1" }}></i></p>
                                                        </div>
                                                    </div>
                                                    <div className="row py-3">
                                                        <div className="col-4 pl-4" style={{ textAlign: "left" }}>
                                                            <p style={{ fontWeight: "500", fontSize: "1.1rem", color: "#090d3a" }}>Job Position Advertising</p>
                                                        </div>
                                                        <div className="col-3">
                                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#006dff" }}></i></p>
                                                        </div>
                                                        <div className="col-2">
                                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#ff6b00" }}></i></p>
                                                        </div>
                                                        <div className="col-3">
                                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#13c4a1" }}></i></p>
                                                        </div>
                                                    </div>
                                                    <div className="row py-3">
                                                        <div className="col-4 pl-4" style={{ textAlign: "left" }}>
                                                            <p style={{ fontWeight: "500", fontSize: "1.1rem", color: "#090d3a" }}>Social Recruiting</p>
                                                        </div>
                                                        <div className="col-3">
                                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#006dff" }}></i></p>
                                                        </div>
                                                        <div className="col-2">
                                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#ff6b00" }}></i></p>
                                                        </div>
                                                        <div className="col-3">
                                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#13c4a1" }}></i></p>
                                                        </div>
                                                    </div>
                                                    <div className="row py-3">
                                                        <div className="col-4 pl-4" style={{ textAlign: "left" }}>
                                                            <p style={{ fontWeight: "500", fontSize: "1.1rem", color: "#090d3a" }}>Employee Referral</p>
                                                        </div>
                                                        <div className="col-3">
                                                            <p style={{ fontWeight: "400", fontSize: "0.8rem", color: "#090d3a" }}>Coming Soon</p>
                                                        </div>
                                                        <div className="col-2">
                                                            <p style={{ fontWeight: "400", fontSize: "0.8rem", color: "#090d3a" }}>Coming Soon</p>
                                                        </div>
                                                        <div className="col-3">
                                                            <p style={{ fontWeight: "400", fontSize: "0.8rem", color: "#090d3a" }}>Coming Soon</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Collapse>

                                            {/* TABLE 3*/}
                                            {this.state.upAndDown3 ?
                                                <div className="pricing-toggle-stripe" aria-expanded={this.state.upAndDown3} onClick={this.setUpAndDown3}>Applicant Tracking & Screening<span style={{ float: "right", color: "#7C94B5" }}><i class='bx-fw bx bx-chevron-down'></i></span></div> :
                                                <div className="pricing-toggle-stripe" aria-expanded={this.state.upAndDown3} onClick={this.setUpAndDown3}>Applicant Tracking & Screening<span style={{ float: "right", color: "#7C94B5" }}><i class='bx-fw bx bx-chevron-up'></i></span></div>
                                            }
                                            <Collapse in={this.state.upAndDown3}>
                                                <div className="container-fluid">
                                                    <div className="row py-3">
                                                        <div className="col-4 pl-4" style={{ textAlign: "left" }}>
                                                            <p style={{ fontWeight: "500", fontSize: "1.1rem", color: "#090d3a" }}>Resume Parsing</p>
                                                        </div>
                                                        <div className="col-3">
                                                            <p style={{ fontWeight: "400", fontSize: "0.9rem", color: "#090d3a" }}>Coming Soon</p>
                                                        </div>
                                                        <div className="col-2">
                                                            <p style={{ fontWeight: "400", fontSize: "0.9rem", color: "#090d3a" }}>Coming Soon</p>
                                                        </div>
                                                        <div className="col-3">
                                                            <p style={{ fontWeight: "400", fontSize: "0.9rem", color: "#090d3a" }}>Coming Soon</p>
                                                        </div>
                                                    </div>
                                                    <div className="row py-3">
                                                        <div className="col-4 pl-4" style={{ textAlign: "left" }}>
                                                            <p style={{ fontWeight: "500", fontSize: "1.1rem", color: "#090d3a" }}>Resume Evaluation with AI Assistance</p>
                                                        </div>
                                                        <div className="col-3">
                                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#006dff" }}></i></p>
                                                        </div>
                                                        <div className="col-2">
                                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#ff6b00" }}></i></p>
                                                        </div>
                                                        <div className="col-3">
                                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#13c4a1" }}></i></p>
                                                        </div>
                                                    </div>
                                                    <div className="row py-3">
                                                        <div className="col-4 pl-4" style={{ textAlign: "left" }}>
                                                            <p style={{ fontWeight: "500", fontSize: "1.1rem", color: "#090d3a" }}>Customizable Application Form</p>
                                                        </div>
                                                        <div className="col-3">
                                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#006dff" }}></i></p>
                                                        </div>
                                                        <div className="col-2">
                                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#ff6b00" }}></i></p>
                                                        </div>
                                                        <div className="col-3">
                                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#13c4a1" }}></i></p>
                                                        </div>
                                                    </div>
                                                    <div className="row py-3">
                                                        <div className="col-4 pl-4" style={{ textAlign: "left" }}>
                                                            <p style={{ fontWeight: "500", fontSize: "1.1rem", color: "#090d3a" }}>Knockout Questions</p>
                                                        </div>
                                                        <div className="col-3">
                                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#006dff" }}></i></p>
                                                        </div>
                                                        <div className="col-2">
                                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#ff6b00" }}></i></p>
                                                        </div>
                                                        <div className="col-3">
                                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#13c4a1" }}></i></p>
                                                        </div>
                                                    </div>
                                                    <div className="row py-3">
                                                        <div className="col-4 pl-4" style={{ textAlign: "left" }}>
                                                            <p style={{ fontWeight: "500", fontSize: "1.1rem", color: "#090d3a" }}>Email Candidates</p>
                                                        </div>
                                                        <div className="col-3">
                                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#006dff" }}></i></p>
                                                        </div>
                                                        <div className="col-2">
                                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#ff6b00" }}></i></p>
                                                        </div>
                                                        <div className="col-3">
                                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#13c4a1" }}></i></p>
                                                        </div>
                                                    </div>
                                                    <div className="row py-3">
                                                        <div className="col-4 pl-4" style={{ textAlign: "left" }}>
                                                            <p style={{ fontWeight: "500", fontSize: "1.1rem", color: "#090d3a" }}>Video Interview Screening</p>
                                                        </div>
                                                        <div className="col-3">
                                                            <p style={{ fontWeight: "400", fontSize: "0.8rem", color: "#090d3a" }}>Unlimited</p>
                                                        </div>
                                                        <div className="col-2">
                                                            <p style={{ fontWeight: "400", fontSize: "0.8rem", color: "#090d3a" }}>Unlimited</p>
                                                        </div>
                                                        <div className="col-3">
                                                            <p style={{ fontWeight: "400", fontSize: "0.8rem", color: "#090d3a" }}>Unlimited</p>
                                                        </div>
                                                    </div>
                                                    <div className="row py-3">
                                                        <div className="col-4 pl-4" style={{ textAlign: "left" }}>
                                                            <p style={{ fontWeight: "500", fontSize: "1.1rem", color: "#090d3a" }}>Customizable Video Questions</p>
                                                        </div>
                                                        <div className="col-3">
                                                            <p style={{ fontWeight: "400", fontSize: "0.8rem", color: "#090d3a" }}>3</p>
                                                        </div>
                                                        <div className="col-2">
                                                            <p style={{ fontWeight: "400", fontSize: "0.8rem", color: "#090d3a" }}>3</p>
                                                        </div>
                                                        <div className="col-3">
                                                            <p style={{ fontWeight: "400", fontSize: "0.8rem", color: "#090d3a" }}>6</p>
                                                        </div>
                                                    </div>
                                                    <div className="row py-3">
                                                        <div className="col-4 pl-4" style={{ textAlign: "left" }}>
                                                            <p style={{ fontWeight: "500", fontSize: "1.1rem", color: "#090d3a" }}>Video Interview Question Bank</p>
                                                        </div>
                                                        <div className="col-3">
                                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#006dff" }}></i></p>
                                                        </div>
                                                        <div className="col-2">
                                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#ff6b00" }}></i></p>
                                                        </div>
                                                        <div className="col-3">
                                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#13c4a1" }}></i></p>
                                                        </div>
                                                    </div>
                                                    <div className="row py-3">
                                                        <div className="col-4 pl-4" style={{ textAlign: "left" }}>
                                                            <p style={{ fontWeight: "500", fontSize: "1.1rem", color: "#090d3a" }}>Video Library Storage</p>
                                                        </div>
                                                        <div className="col-3">
                                                            <p style={{ fontWeight: "400", fontSize: "0.8rem", color: "#090d3a" }}>Unlimited</p>
                                                        </div>
                                                        <div className="col-2">
                                                            <p style={{ fontWeight: "400", fontSize: "0.8rem", color: "#090d3a" }}>Unlimited</p>
                                                        </div>
                                                        <div className="col-3">
                                                            <p style={{ fontWeight: "400", fontSize: "0.8rem", color: "#090d3a" }}>Unlimited</p>
                                                        </div>
                                                    </div>
                                                    <div className="row py-3">
                                                        <div className="col-4 pl-4" style={{ textAlign: "left" }}>
                                                            <p style={{ fontWeight: "500", fontSize: "1.1rem", color: "#090d3a" }}>Configurable Video Interview Response & Prep Times</p>
                                                        </div>
                                                        <div className="col-3">
                                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#006dff" }}></i></p>
                                                        </div>
                                                        <div className="col-2">
                                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#ff6b00" }}></i></p>
                                                        </div>
                                                        <div className="col-3">
                                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#13c4a1" }}></i></p>
                                                        </div>
                                                    </div>
                                                    <div className="row py-3">
                                                        <div className="col-4 pl-4" style={{ textAlign: "left" }}>
                                                            <p style={{ fontWeight: "500", fontSize: "1.1rem", color: "#090d3a" }}>Configurable Video Interview Retakes</p>
                                                        </div>
                                                        <div className="col-3">
                                                            <p style={{ fontWeight: "400", fontSize: "0.8rem", color: "#090d3a" }}>Coming Soon</p>
                                                        </div>
                                                        <div className="col-2">
                                                            <p style={{ fontWeight: "400", fontSize: "0.8rem", color: "#090d3a" }}>Coming Soon</p>
                                                        </div>
                                                        <div className="col-3">
                                                            <p style={{ fontWeight: "400", fontSize: "0.8rem", color: "#090d3a" }}>Coming Soon</p>
                                                        </div>
                                                    </div>
                                                    <div className="row py-3">
                                                        <div className="col-4 pl-4" style={{ textAlign: "left" }}>
                                                            <p style={{ fontWeight: "500", fontSize: "1.1rem", color: "#090d3a" }}>Video Interview Assessments</p>
                                                        </div>
                                                        <div className="col-3">
                                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#006dff" }}></i></p>
                                                        </div>
                                                        <div className="col-2">
                                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#ff6b00" }}></i></p>
                                                        </div>
                                                        <div className="col-3">
                                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#13c4a1" }}></i></p>
                                                        </div>
                                                    </div>
                                                    <div className="row py-3">
                                                        <div className="col-4 pl-4" style={{ textAlign: "left" }}>
                                                            <p style={{ fontWeight: "500", fontSize: "1.1rem", color: "#090d3a" }}>Video Interview Integration with 20+ ATS</p>
                                                        </div>
                                                        <div className="col-3">
                                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#006dff" }}></i></p>
                                                        </div>
                                                        <div className="col-2">
                                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#ff6b00" }}></i></p>
                                                        </div>
                                                        <div className="col-3">
                                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#13c4a1" }}></i></p>
                                                        </div>
                                                    </div>
                                                    <div className="row py-3">
                                                        <div className="col-4 pl-4" style={{ textAlign: "left" }}>
                                                            <p style={{ fontWeight: "500", fontSize: "1.1rem", color: "#090d3a" }}>Built-in Live Interviews</p>
                                                        </div>
                                                        <div className="col-3">
                                                            <p style={{ fontWeight: "400", fontSize: "0.8rem", color: "#090d3a" }}>Coming Soon</p>
                                                        </div>
                                                        <div className="col-2">
                                                            <p style={{ fontWeight: "400", fontSize: "0.8rem", color: "#090d3a" }}>Coming Soon</p>
                                                        </div>
                                                        <div className="col-3">
                                                            <p style={{ fontWeight: "400", fontSize: "0.8rem", color: "#090d3a" }}>Coming Soon</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Collapse>

                                            {/* TABLE 4*/}
                                            {this.state.upAndDown4 ?
                                                <div className="pricing-toggle-stripe" aria-expanded={this.state.upAndDown4} onClick={this.setUpAndDown4}>Collaboration & Decision Making<span style={{ float: "right", color: "#7C94B5" }}><i class='bx-fw bx bx-chevron-down'></i></span></div> :
                                                <div className="pricing-toggle-stripe" aria-expanded={this.state.upAndDown4} onClick={this.setUpAndDown4}>Collaboration & Decision Making<span style={{ float: "right", color: "#7C94B5" }}><i class='bx-fw bx bx-chevron-up'></i></span></div>
                                            }
                                            <Collapse in={this.state.upAndDown4}>
                                                <div className="container-fluid">
                                                    <div className="row py-3">
                                                        <div className="col-4 pl-4" style={{ textAlign: "left" }}>
                                                            <p style={{ fontWeight: "500", fontSize: "1.1rem", color: "#090d3a" }}>Candidate Rating & Feedback</p>
                                                        </div>
                                                        <div className="col-3">
                                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#006dff" }}></i></p>
                                                        </div>
                                                        <div className="col-2">
                                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#ff6b00" }}></i></p>
                                                        </div>
                                                        <div className="col-3">
                                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#13c4a1" }}></i></p>
                                                        </div>
                                                    </div>
                                                    <div className="row py-3">
                                                        <div className="col-4 pl-4" style={{ textAlign: "left" }}>
                                                            <p style={{ fontWeight: "500", fontSize: "1.1rem", color: "#090d3a" }}>Candidate Shortlisting</p>
                                                        </div>
                                                        <div className="col-3">
                                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#006dff" }}></i></p>
                                                        </div>
                                                        <div className="col-2">
                                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#ff6b00" }}></i></p>
                                                        </div>
                                                        <div className="col-3">
                                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#13c4a1" }}></i></p>
                                                        </div>
                                                    </div>
                                                    <div className="row py-3">
                                                        <div className="col-4 pl-4" style={{ textAlign: "left" }}>
                                                            <p style={{ fontWeight: "500", fontSize: "1.1rem", color: "#090d3a" }}>Real-Time Analytics</p>
                                                        </div>
                                                        <div className="col-3">
                                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#006dff" }}></i></p>
                                                        </div>
                                                        <div className="col-2">
                                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#ff6b00" }}></i></p>
                                                        </div>
                                                        <div className="col-3">
                                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#13c4a1" }}></i></p>
                                                        </div>
                                                    </div>
                                                    <div className="row py-3">
                                                        <div className="col-4 pl-4" style={{ textAlign: "left" }}>
                                                            <p style={{ fontWeight: "500", fontSize: "1.1rem", color: "#090d3a" }}>EEO Survey and Reporting</p>
                                                        </div>
                                                        <div className="col-3">
                                                            <p style={{ fontWeight: "400", fontSize: "0.8rem", color: "#090d3a" }}>Coming Soon</p>
                                                        </div>
                                                        <div className="col-2">
                                                            <p style={{ fontWeight: "400", fontSize: "0.8rem", color: "#090d3a" }}>Coming Soon</p>
                                                        </div>
                                                        <div className="col-3">
                                                            <p style={{ fontWeight: "400", fontSize: "0.8rem", color: "#090d3a" }}>Coming Soon</p>
                                                        </div>
                                                    </div>
                                                    <div className="row py-3">
                                                        <div className="col-4 pl-4" style={{ textAlign: "left" }}>
                                                            <p style={{ fontWeight: "500", fontSize: "1.1rem", color: "#090d3a" }}>Bulk Action Candidates</p>
                                                        </div>
                                                        <div className="col-3">
                                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#006dff" }}></i></p>
                                                        </div>
                                                        <div className="col-2">
                                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#ff6b00" }}></i></p>
                                                        </div>
                                                        <div className="col-3">
                                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#13c4a1" }}></i></p>
                                                        </div>
                                                    </div>
                                                    <div className="row py-3">
                                                        <div className="col-4 pl-4" style={{ textAlign: "left" }}>
                                                            <p style={{ fontWeight: "500", fontSize: "1.1rem", color: "#090d3a" }}>Export Candidate to HRIS integrations</p>
                                                        </div>
                                                        <div className="col-3">
                                                            <p style={{ fontWeight: "400", fontSize: "0.8rem", color: "#090d3a" }}>Coming Soon</p>
                                                        </div>
                                                        <div className="col-2">
                                                            <p style={{ fontWeight: "400", fontSize: "0.8rem", color: "#090d3a" }}>Coming Soon</p>
                                                        </div>
                                                        <div className="col-3">
                                                            <p style={{ fontWeight: "400", fontSize: "0.8rem", color: "#090d3a" }}>Coming Soon</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Collapse>

                                            {/* TABLE 5*/}
                                            {this.state.upAndDown5 ?
                                                <div className="pricing-toggle-stripe" aria-expanded={this.state.upAndDown5} onClick={this.setUpAndDown5}>Training & Support<span style={{ float: "right", color: "#7C94B5" }}><i class='bx-fw bx bx-chevron-down'></i></span></div> :
                                                <div className="pricing-toggle-stripe" aria-expanded={this.state.upAndDown5} onClick={this.setUpAndDown5}>Training & Support<span style={{ float: "right", color: "#7C94B5" }}><i class='bx-fw bx bx-chevron-up'></i></span></div>
                                            }
                                            <Collapse in={this.state.upAndDown5}>
                                                <div className="container-fluid">
                                                    <div className="row py-3">
                                                        <div className="col-4 pl-4" style={{ textAlign: "left" }}>
                                                            <p style={{ fontWeight: "500", fontSize: "1.1rem", color: "#090d3a" }}>Email & Web Support</p>
                                                        </div>
                                                        <div className="col-3">
                                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#006dff" }}></i></p>
                                                        </div>
                                                        <div className="col-2">
                                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#ff6b00" }}></i></p>
                                                        </div>
                                                        <div className="col-3">
                                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#13c4a1" }}></i></p>
                                                        </div>
                                                    </div>
                                                    <div className="row py-3">
                                                        <div className="col-4 pl-4" style={{ textAlign: "left" }}>
                                                            <p style={{ fontWeight: "500", fontSize: "1.1rem", color: "#090d3a" }}>Video Tutorials</p>
                                                        </div>
                                                        <div className="col-3">
                                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#006dff" }}></i></p>
                                                        </div>
                                                        <div className="col-2">
                                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#ff6b00" }}></i></p>
                                                        </div>
                                                        <div className="col-3">
                                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#13c4a1" }}></i></p>
                                                        </div>
                                                    </div>
                                                    <div className="row py-3">
                                                        <div className="col-4 pl-4" style={{ textAlign: "left" }}>
                                                            <p style={{ fontWeight: "500", fontSize: "1.1rem", color: "#090d3a" }}>Self-serve Onboarding</p>
                                                        </div>
                                                        <div className="col-3">
                                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#006dff" }}></i></p>
                                                        </div>
                                                        <div className="col-2">
                                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#ff6b00" }}></i></p>
                                                        </div>
                                                        <div className="col-3">
                                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#13c4a1" }}></i></p>
                                                        </div>
                                                    </div>
                                                    <div className="row py-3">
                                                        <div className="col-4 pl-4" style={{ textAlign: "left" }}>
                                                            <p style={{ fontWeight: "500", fontSize: "1.1rem", color: "#090d3a" }}>Dedicated Onboarding Service</p>
                                                        </div>
                                                        <div className="col-3">
                                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}></p>
                                                        </div>
                                                        <div className="col-2">
                                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}></p>
                                                        </div>
                                                        <div className="col-3">
                                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#13c4a1" }}></i></p>
                                                        </div>
                                                    </div>
                                                    <div className="row py-3">
                                                        <div className="col-4 pl-4" style={{ textAlign: "left" }}>
                                                            <p style={{ fontWeight: "500", fontSize: "1.1rem", color: "#090d3a" }}>Dedicated Success Manager</p>
                                                        </div>
                                                        <div className="col-3">
                                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}></p>
                                                        </div>
                                                        <div className="col-2">
                                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}></p>
                                                        </div>
                                                        <div className="col-3">
                                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#13c4a1" }}></i></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Collapse>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>}
                </React.Fragment>
            </DocumentMeta>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.auth_reducer.user,
    profile: state.auth_reducer.profile,
});

export default connect(mapStateToProps, null)(PlanSelectionEmployer);
