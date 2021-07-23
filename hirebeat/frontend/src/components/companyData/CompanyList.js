import React, { Component } from 'react';
import { Link } from "react-router-dom";
import PageTitleArea from '../Common/PageTitleArea';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import MediaQuery from 'react-responsive';
import Footer from "../layout/Footer";
import DocumentMeta from 'react-document-meta';

function ScrollToTopOnMount() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return null;
}

class CompanyList extends Component {
    state = {
        keyWords: "",
    }

    onSearch = (e) => {
        this.setState({ keyWords: e.target.value });
    }
    render() {
        const meta = {
            title: 'HireBeat – The Best Video Interview Prep Tool For Jobseekers',
            description: 'Prepare your interview with 1000+ interview questions and AI & Expert feedback – sign up for free today!',
            meta: {
                charset: 'utf-8',
                name: {
                    keywords: 'American Expres, JP Morgan, Nasdaq, Goldman Sachs, Morgan Stanley, Interview Question'
                }
            }
        };
        return (
            <DocumentMeta {...meta}>
                <React.Fragment>
                    <ScrollToTopOnMount />
                    <PageTitleArea
                        pageTitle="Company Data"
                        pageDescription="Ace the interview process at popular companies like JP Morgan, American Express, BlackRock, Nasdaq, Goldman Sachs."
                    />
                    <section className="blog-details-area ptb-100" style={{ backgroundColor: "#f4f5fe" }}>
                        <div className="container" style={{ marginBottom: "3%" }}>
                            <div className="row" style={{ marginBottom: "3%" }}>
                                <div className="col-lg-8 col-md-12" style={{ paddingLeft: "44%", paddingTop: "2%", marginBottom: "2rem" }}>
                                    <MediaQuery minDeviceWidth={1224}>
                                        <h1 className="company-data-title">Popular</h1>
                                    </MediaQuery>
                                </div>
                                <div className="interview-txt7 interview-center" style={{ color: "#56a3fa", fontSize: "1rem", paddingTop: "2.5%", marginBottom: '2rem' }}>
                                    <label><i className="bx bx-search bx-sm"></i></label>
                                    <input placeholder="Search company" className="search-candidate-input" onChange={this.onSearch}></input>
                                </div>
                                <div className="clients-logo-list align-items-center" style={{ width: "100%" }}>
                                    {companyURLs.map((c, index) => {
                                        if (this.state.keyWords != "") {
                                            if (!companyNames[index].toLowerCase().includes(this.state.keyWords.toLowerCase())) {
                                                return null;
                                            }
                                        }
                                        return (
                                            <div className="single-clients-logo" style={{ marginLeft: "0rem" }}>
                                                <Link to={c}>
                                                    <img src={companyLogos[index]} alt="logo" />
                                                    <label style={{ display: "none" }}>{companyNames[index]}</label>
                                                </Link>
                                            </div>
                                        );
                                    })}
                                </div>
                                {/*<div class="col-lg-4 col-md-12">
                                <div className="widget-area" id="secondary">
                                    <div className="widget widget_search">
                                        <form className="search-form">
                                            <label>
                                                <span className="screen-reader-text">Search for:</span>
                                                <input type="search" className="search-field" placeholder="Search..." />
                                            </label>
                                            <button type="submit">
                                                <i className='bx bx-search-alt'></i>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>*/}
                            </div>
                        </div>
                        <MediaQuery minDeviceWidth={1224}>
                            <div className="row company-list-help-box">
                                <h3 className="col-md-3 company-list-help-text" style={{ paddingLeft: "4%" }}>
                                    We also help you on </h3>

                                <div className="col-md-3" style={{ maxWidth: "18.7%" }}>
                                    <Link to="/practice">
                                        <a className="default-btn" style={{ color: "white", backgroundColor: "#090D3A" }}>
                                            <i className="bx bxs-arrow-to-right"></i>
                                            Interview Practicing
                                            <span></span>
                                        </a>
                                    </Link>
                                </div>

                                <div className="col-md-3" style={{ maxWidth: "18%" }}>
                                    <Link to="/resume">
                                        <a className="default-btn" style={{ color: "white", backgroundColor: "#090D3A" }}>
                                            <i className="bx bxs-arrow-to-right"></i>
                                            Resume Matching
                                            <span></span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </MediaQuery>
                        <MediaQuery maxDeviceWidth={1223}>
                            <div style={{ backgroundColor: 'white' }}>
                                <h3 style={{ textAlign: 'center', paddingTop: '1rem' }}>
                                    We also help you on </h3>

                                <div>
                                    <Link to="/practice">
                                        <a className="default-btn" style={{ color: "white", backgroundColor: "#090D3A", marginTop: '1rem', marginBottom: '1rem', marginLeft: '10%' }}>
                                            <i className="bx bxs-arrow-to-right"></i>
                                            Interview Praciting
                                            <span></span>
                                        </a>
                                    </Link>
                                </div>

                                <div>
                                    <Link to="/resume">
                                        <a className="default-btn" style={{ color: "white", backgroundColor: "#090D3A", marginLeft: '10%', marginBottom: '1rem' }}>
                                            <i className="bx bxs-arrow-to-right"></i>
                                            Resume Matching
                                            <span></span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </MediaQuery>
                    </section>
                    <FreeTrialArea />
                    <Footer />
                </React.Fragment>
            </DocumentMeta>
        );
    }
}

const companyNames = [
    "AIG",
    "American Express",
    "BNY Mellon",
    "BlackRock",
    "Blackstone",
    "Bloomberg",
    "Citibank",
    "Evercore",
    "Goldman Sachs",
    "Jane Street Capital",
    "Jefferies Financial Group",
    "JLL Partners",
    "JPM Chase",
    "Moody's",
    "Morgan Stanley",
    "MUFG Americas",
    "Nasdaq",
    "Two Sigma Investments",
    "Santander",
    "Leumi",
    "Citizens Financial Group",
    "Edward Jones",
    "Fifth Third Bank",
    "Hanmi Bank",
    "HSBC",
    "Julius Bar",
    "KeyBank",
    "Lazard",
    "M&T Bank",
    "Northern Trust",
    "Pictet",
    "PNC Bank",
    "Rothschild&Co",
    "Regions",
    "Raymond James",
    "State Street",
    "Wells Fargo",
    "Charles Schwab",
    "Fidelity",
    "Vanguard",
    "Amazon",
    "Facebook",
    "SEB",
    "Allstate",
    "Deloitte",
    "Deutsche Bank",
    "EY",
    "Merrill",
    "HCI",
    "KPMG",
    "PWC",
    "Bank of Montreal",
    "Barclays",
    "Credit Suisse",
    "Houlihan Lokey",
    "MetLife",
    "Accenture",
    "Bain & Company",
    "Boston Consulting Group",
    "Oliver Wyman",
    "Kearney",
    "Analysis Group",
    "Cornerstone Research",
    "LEK",
    "ZS",
    "Booz Allen",
    "Mastercard",
    "CapitalOne",
    "SelectQuote",
    "Jacobs",
    "Gartner",
    "AON",
    "Forrester",
    "Huron",
    "Perficient",
    "Willis Towers Watson",
    "Alvarez & Marsal",
    "The Hackett Group",
    "Strategy&",
    "Navigant",
    "RGP",
    "Charles River Associates",
    "ICF",
    "ADP",
    "Workday",
    "Alight",
    "Massmutual",
    "Sun Life Financial",
]

const companyURLs = [
    "/american-international-group",
    "/american-express",
    "/bny-mellon",
    "/blackrock",
    "/blackstone",
    "/bloomberg",
    "/citi",
    "/evercore",
    "/goldman-sachs",
    "/jane-street-capital",
    "/jefferies-financial-group",
    "/jll-partners",
    "/jpmorgan-chase",
    "/moodys",
    "/morgan-stanley",
    "/mufg",
    "/nasdaq",
    "/two-sigma",
    "/banco-santander",
    "/bank-leumi",
    "/citizens-financial-group",
    "/edward-jones",
    "/fifth-third-bancorp",
    "/hanmi-financial",
    "/hsbc",
    "/julius-baer",
    "/keycorp",
    "/lazard",
    "/mt-bank",
    "/northern-trust",
    "/pictet",
    "/pnc-financial-services-group",
    "/rothschild-co",
    "/regions-financial",
    "/raymond-james",
    "/state-street",
    "/wells-fargo",
    "/charles-schwab",
    "/fidelity-investments",
    "/vanguard",
    "/amazon",
    "/facebook",
    "/skandinaviska-enskilda-banken",
    "/allstate",
    "/deloitte",
    "/deutsche-bank",
    "/ernst-young",
    "/merrill-lynch",
    "/hci-group",
    "/kpmg",
    "/pwc",
    "/bank-of-montreal",
    "/barclays",
    "/credit-suisse",
    "/houlihan-lokey",
    "/metlife",
    "/accenture",
    "/bain",
    "/boston-consulting-group",
    "/oliver-wyman",
    "/kearney",
    "/analysis-group",
    "/cornerstone-research",
    "/lek-consulting",
    "/zs-associates",
    "/booz-allen-hamilton",
    "/mastercard",
    "/capital-one",
    "/selectquote",
    "/jacobs",
    "/gartner",
    "/aon",
    "/forrester-research",
    "/huron",
    "/perficient",
    "/willis-towers-waston",
    "/alvarez-marsal",
    "/hackett-group",
    "/strategy",
    "/navigant-consulting",
    "/resources-global-professionals",
    "/cra-international",
    "/icg-international",
    "/adp",
    "/workday",
    "/alight",
    "/massmutual",
    "/sun-life-financial",
];

const companyLogos = [
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/AIG.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/AE.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/BNYM.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/BR.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/BMT.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/Bloomberg.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/citibank.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/Evercore.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/GS.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/JS.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/Jefferies.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/JLLP.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/JPM.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/Moody.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/MS.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/MUFG.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/Nasdaq.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/TSV.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/Santander.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/Leumi.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/Citizens.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/EdwardJones.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/53Bank.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/HanmiBank.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/HSBC.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/JuliusBar.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/KeyBank.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/Larzard.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/M&TBank.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/Northerntrust.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/Pictet.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/PNCBank.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/Rothschild.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/Regions.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/Raymondjames.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/Statestreet.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/WellsFargo.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/charles.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/fidelity.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/vanguard.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/amazon.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/facebook.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/SEB.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/allstate.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/deloitte.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/deutsche-bank.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/ernst-young.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/merrill-lynch.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/HCIGroup.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/KPMG.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/PWC.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/bmo.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/barclays.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/creditsuisse.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/houlihanlocky.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/MetLife.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/accenture.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/bain.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/bcg.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/oliverwyman.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/kearney.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/analysisgroup.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/cornerstoneresearch.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/lek.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/zs.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/booz.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/mastercard.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/capitalone.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/selectquote.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/jacobs.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/gartner.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/aon.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/forrester.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/huron.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/perficient.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/willis.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/a&m.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/hackett.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/strategy&.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/navigant.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/RGP.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/CRA.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/ICF.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/ADP.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/workday.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/alight.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/massmutual.png",
    "https://hirebeat-assets.s3.amazonaws.com/company-logo/sunlife.png",
]

export default CompanyList;