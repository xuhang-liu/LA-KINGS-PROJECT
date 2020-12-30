import React, { Component } from 'react';
import {Link} from "react-router-dom";
import PageTitleArea from '../Common/PageTitleArea';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import MediaQuery from 'react-responsive';

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class CompanyList extends Component {
    render() {
        return (
            <React.Fragment>
                <ScrollToTopOnMount />
                <PageTitleArea 
                    pageTitle="Company Data" 
                    pageDescription="Ace the interview process at top tech companies like JP Morgan, American Express, BlackRock, Nasdaq, Goldman Sachs."
                />
                <section className="blog-details-area ptb-100" style={{backgroundColor:"#f4f5fe"}}>
                    <div className="container" style={{marginBottom:"3%"}}>
                        <div className="row" style={{marginBottom:"3%"}}>
                            <div className="col-lg-8 col-md-12" style={{paddingLeft:"44%", paddingTop:"2%"}}>
                                <MediaQuery minDeviceWidth={1224}>
                                <h1 className="company-data-title">Popular</h1>
                                </MediaQuery>
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
                        <div className="clients-logo-list align-items-center">
                            <div className="single-clients-logo">
                                <Link to="/american-international-group">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/AIG.png" alt="AIG logo"/>
                                </Link>
                            </div>
                            <div className="single-clients-logo">
                                <Link to="/american-express">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/AE.png" alt="AE logo" />
                                </Link>
                            </div>
                            <div className="single-clients-logo">
                                <Link to="/bny-mellon">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/BNYM.png" alt="BNYM logo" />
                                </Link>
                            </div>
                            <div className="single-clients-logo">
                                <Link to="/blackrock">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/BR.png" alt="BR logo"/>
                                </Link>
                            </div>
                            <div className="single-clients-logo">
                                <Link to="/blackstone">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/BMT.png" alt="BMT logo" />
                                </Link>
                            </div>
                            <div className="single-clients-logo" style={{marginTop: "1rem"}}>
                                <Link to="/bloomberg">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/Bloomberg.png" alt="BB logo"/>
                                </Link>
                            </div>
                            <div className="single-clients-logo" style={{marginTop: "1rem"}}>
                                <Link to="/citi">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/citibank.png" alt="City logo"/>
                                </Link>
                            </div>
                            <div className="single-clients-logo" style={{marginTop: "1rem"}}>
                                <Link to="/evercore">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/Evercore.png" alt="Evercore logo"/>
                                </Link>
                            </div>
                            <div className="single-clients-logo" style={{marginTop: "1rem"}}>
                                <Link to="/goldman-sachs">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/GS.png" alt="GS logo"/>
                                </Link>
                            </div>
                        </div>
                        <div className="clients-logo-list align-items-center" style={{marginTop: "1rem"}}>
                            <div className="single-clients-logo">
                                <Link to="/jane-street-capital">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/JS.png" alt="JS logo"/>
                                </Link>
                            </div>

                            <div className="single-clients-logo">
                                <Link to="/jefferies-financial-group">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/Jefferies.png" alt="Jesseries logo" />
                                </Link>
                            </div>

                            <div className="single-clients-logo">
                                <Link to="/jll-partners">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/JLLP.png" alt="JLLP logo" />
                                </Link>
                            </div>

                            <div className="single-clients-logo">
                                <Link to="/jpmorgan-chase">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/JPM.png" alt="JPC logo"/>
                                </Link>
                            </div>

                            <div className="single-clients-logo">
                                <Link to="/moodys">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/Moody.png" alt="Moody logo" />
                                </Link>
                            </div>

                            <div className="single-clients-logo" style={{marginTop: "1rem"}}>
                                <Link to="/morgan-stanley">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/MS.png" alt="MS logo"/>
                                </Link>
                            </div>

                            <div className="single-clients-logo" style={{marginTop: "1rem"}}>
                                <Link to="/mufg">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/MUFG.png" alt="MUFG logo"/>
                                </Link>
                            </div>

                            <div className="single-clients-logo" style={{marginTop: "1rem"}}>
                                <Link to="/nasdaq">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/Nasdaq.png" alt="Nasdaq logo"/>
                                </Link>
                            </div>

                            <div className="single-clients-logo" style={{marginTop: "1rem"}}>
                                <Link to="/two-sigma">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/TSV.png" alt="2 sigma logo"/>
                                </Link>
                            </div>
                        </div>
                        <div className="clients-logo-list align-items-center" style={{marginTop: "1rem"}}>
                            <div className="single-clients-logo">
                                <Link to="/banco-santander">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/Santander.png" alt="Santander logo"/>
                                </Link>
                            </div>

                            <div className="single-clients-logo">
                                <Link to="/bank-leumi">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/Leumi.png" alt="Leumi logo" />
                                </Link>
                            </div>

                            <div className="single-clients-logo">
                                <Link to="/citizens-financial-group">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/Citizens.png" alt="Citizens logo" />
                                </Link>
                            </div>

                            <div className="single-clients-logo">
                                <Link to="/edward-jones">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/EdwardJones.png" alt="Edward Jones logo"/>
                                </Link>
                            </div>

                            <div className="single-clients-logo">
                                <Link to="/fifth-third-bancorp">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/53Bank.png" alt="53 Bank logo" />
                                </Link>
                            </div>

                            <div className="single-clients-logo" style={{marginTop: "1rem"}}>
                                <Link to="/hanmi-financial">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/HanmiBank.png" alt="HanmiBank logo"/>
                                </Link>
                            </div>

                            <div className="single-clients-logo" style={{marginTop: "1rem"}}>
                                <Link to="/hsbc">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/HSBC.png" alt="HSBC logo"/>
                                </Link>
                            </div>

                            <div className="single-clients-logo" style={{marginTop: "1rem"}}>
                                <Link to="/julius-baer">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/JuliusBar.png" alt="JuliusBar logo"/>
                                </Link>
                            </div>

                            <div className="single-clients-logo" style={{marginTop: "1rem"}}>
                                <Link to="/keycorp">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/KeyBank.png" alt="KeyBank logo"/>
                                </Link>
                            </div>
                        </div>

                        <div className="clients-logo-list align-items-center" style={{marginTop: "1rem"}}>
                            <div className="single-clients-logo">
                                <Link to="/lazard">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/Larzard.png" alt="Lazard logo"/>
                                </Link>
                            </div>

                            <div className="single-clients-logo">
                                <Link to="/mt-bank">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/M&TBank.png" alt="M&TBank logo" />
                                </Link>
                            </div>

                            <div className="single-clients-logo">
                                <Link to="/northern-trust">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/Northerntrust.png" alt="Northern trust logo" />
                                </Link>
                            </div>

                            <div className="single-clients-logo">
                                <Link to="/pictet">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/Pictet.png" alt="Pictet logo"/>
                                </Link>
                            </div>

                            <div className="single-clients-logo">
                                <Link to="/pnc-financial-services-group">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/PNCBank.png" alt="PNC Bank logo" />
                                </Link>
                            </div>

                            <div className="single-clients-logo" style={{marginTop: "1rem"}}>
                                <Link to="/rothschild-co">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/Rothschild.png" alt="Rothschild logo"/>
                                </Link>
                            </div>

                            <div className="single-clients-logo" style={{marginTop: "1rem"}}>
                                <Link to="/regions-financial">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/Regions.png" alt="Regions logo"/>
                                </Link>
                            </div>

                            <div className="single-clients-logo" style={{marginTop: "1rem"}}>
                                <Link to="/raymond-james">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/Raymondjames.png" alt="Raymond james logo"/>
                                </Link>
                            </div>

                            <div className="single-clients-logo" style={{marginTop: "1rem"}}>
                                <Link to="/state-street">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/Statestreet.png" alt="State Street logo"/>
                                </Link>
                            </div>
                        </div>

                        <div className="clients-logo-list align-items-center" style={{marginTop: "1rem"}}>
                            <div className="single-clients-logo">
                                <Link to="/wells-fargo">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/WellsFargo.png" alt="Wells Fargo logo"/>
                                </Link>
                            </div>

                            <div className="single-clients-logo">
                                <Link to="/charles-schwab">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/charles.png" alt="Charles Schwab logo"/>
                                </Link>
                            </div>

                            <div className="single-clients-logo">
                                <Link to="/fidelity-investments">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/fidelity.png" alt="Fidelity logo"/>
                                </Link>
                            </div>

                            <div className="single-clients-logo">
                                <Link to="/vanguard">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/vanguard.png" alt="Vanguard logo"/>
                                </Link>
                            </div>

                            {/*<div className="single-clients-logo">
                                <Link to="/absa-group">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/absa.png" alt="Absa logo"/>
                                </Link>
                            </div>

                            <div className="single-clients-logo">
                                <Link to="/abu-dhabi-islamic-bank">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/ADIB.png" alt="ADIB logo"/>
                                </Link>
                            </div>*/}

                            <div className="single-clients-logo">
                                <Link to="/amazon">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/amazon.png" alt="Amazon logo"/>
                                </Link>
                            </div>

                            <div className="single-clients-logo">
                                <Link to="/facebook">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/facebook.png" alt="Facebook logo"/>
                                </Link>
                            </div>

                            <div className="single-clients-logo">
                                <Link to="/skandinaviska-enskilda-banken">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/SEB.png" alt="SEB logo"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <MediaQuery minDeviceWidth={1224}>
                    <div className="row company-list-help-box">
                        <h3 className="col-md-3 company-list-help-text" style={{paddingLeft:"4%"}}>
                            We also help you on </h3>
                            
                        <div className="col-md-3" style={{maxWidth:"18.7%"}}>
                            <Link to="/practice">
                                <a className="default-btn" style={{color:"white", backgroundColor:"#090D3A"}}>
                                    <i className="bx bxs-arrow-to-right"></i> 
                                    Interview Practicing
                                    <span></span>
                                </a>
                            </Link>
                        </div>

                        <div className="col-md-3" style={{maxWidth:"18%"}}>
                            <Link to="/resume">
                                <a className="default-btn" style={{color:"white", backgroundColor:"#090D3A"}}>
                                    <i className="bx bxs-arrow-to-right"></i> 
                                    Resume Matching
                                    <span></span>
                                </a>
                            </Link>
                        </div>
                    </div>
                    </MediaQuery>
                    <MediaQuery maxDeviceWidth={1223}>
                    <div style={{backgroundColor:'white'}}>
                        <h3 style={{textAlign:'center', paddingTop:'1rem'}}>
                            We also help you on </h3>
                            
                        <div>
                            <Link to="/practice">
                                <a className="default-btn" style={{color:"white", backgroundColor:"#090D3A", marginTop:'1rem', marginBottom:'1rem', marginLeft:'10%'}}>
                                    <i className="bx bxs-arrow-to-right"></i> 
                                    Interview Praciting
                                    <span></span>
                                </a>
                            </Link>
                        </div>

                        <div>
                            <Link to="/resume">
                                <a className="default-btn" style={{color:"white", backgroundColor:"#090D3A", marginLeft:'10%', marginBottom:'1rem'}}>
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
            </React.Fragment>
        );
    }
}

export default CompanyList;