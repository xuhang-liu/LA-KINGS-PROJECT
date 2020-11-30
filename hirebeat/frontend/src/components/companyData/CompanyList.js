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
                                <Link to="/companydata/american-international-group">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/AIG.png" alt="AIG logo"/>
                                </Link>
                            </div>
                            <div className="single-clients-logo">
                                <Link to="/companydata/american-express">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/AE.png" alt="AE logo" />
                                </Link>
                            </div>
                            <div className="single-clients-logo">
                                <Link to="/companydata/bny-mellon">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/BNYM.png" alt="BNYM logo" />
                                </Link>
                            </div>
                            <div className="single-clients-logo">
                                <Link to="/companydata/blackrock">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/BR.png" alt="BR logo"/>
                                </Link>
                            </div>
                            <div className="single-clients-logo">
                                <Link to="/companydata/blackstone">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/BMT.png" alt="BMT logo" />
                                </Link>
                            </div>
                            <div className="single-clients-logo" style={{marginTop: "1rem"}}>
                                <Link to="/companydata/bloomberg">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/Bloomberg.png" alt="BB logo"/>
                                </Link>
                            </div>
                            <div className="single-clients-logo" style={{marginTop: "1rem"}}>
                                <Link to="/companydata/citi">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/citibank.png" alt="City logo"/>
                                </Link>
                            </div>
                            <div className="single-clients-logo" style={{marginTop: "1rem"}}>
                                <Link to="/companydata/evercore">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/Evercore.png" alt="Evercore logo"/>
                                </Link>
                            </div>
                            <div className="single-clients-logo" style={{marginTop: "1rem"}}>
                                <Link to="/companydata/goldman-sachs">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/GS.png" alt="GS logo"/>
                                </Link>
                            </div>
                        </div>
                        <div className="clients-logo-list align-items-center" style={{marginTop: "1rem"}}>
                            <div className="single-clients-logo">
                                <Link to="/companydata/jane-street-capital">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/JS.png" alt="JS logo"/>
                                </Link>
                            </div>

                            <div className="single-clients-logo">
                                <Link to="/companydata/jefferies-financial-group">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/Jefferies.png" alt="Jesseries logo" />
                                </Link>
                            </div>

                            <div className="single-clients-logo">
                                <Link to="/companydata/jll-partners">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/JLLP.png" alt="JLLP logo" />
                                </Link>
                            </div>

                            <div className="single-clients-logo">
                                <Link to="/companydata/jpmorgan-chase">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/JPM.png" alt="JPC logo"/>
                                </Link>
                            </div>

                            <div className="single-clients-logo">
                                <Link to="/companydata/moodys">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/Moody.png" alt="Moody logo" />
                                </Link>
                            </div>

                            <div className="single-clients-logo" style={{marginTop: "1rem"}}>
                                <Link to="/companydata/morgan-stanley">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/MS.png" alt="MS logo"/>
                                </Link>
                            </div>

                            <div className="single-clients-logo" style={{marginTop: "1rem"}}>
                                <Link to="/companydata/mufg">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/MUFG.png" alt="MUFG logo"/>
                                </Link>
                            </div>

                            <div className="single-clients-logo" style={{marginTop: "1rem"}}>
                                <Link to="/companydata/nasdaq">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/Nasdaq.png" alt="Nasdaq logo"/>
                                </Link>
                            </div>

                            <div className="single-clients-logo" style={{marginTop: "1rem"}}>
                                <Link to="/companydata/two-sigma">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/TSV.png" alt="2 sigma logo"/>
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