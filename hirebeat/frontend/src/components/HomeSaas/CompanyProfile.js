import React, { Component } from 'react';
import ReactWOW from 'react-wow';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {Link} from "react-router-dom";

class CompanyProfile extends Component {
    render() {
        return (
            <section className="features-area pt-100 pb-70 bg-f4f6fc">
                <div className="container max-width-1290">
                    <div>
                        <h2 className="section-title2">View Company Profile to Prepare</h2>
                    </div>

                    <OwlCarousel
                        className="owl-carousel owl-theme"
                        {...options}
                    >
                        <div className="item">
                            <Link to="/american-international-group">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/AIG.png" alt="AIG logo"/>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="/american-express">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/AE.png" alt="AE logo" />
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="/bny-mellon">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/BNYM.png" alt="BNYM logo" />
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="/blackrock">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/BR.png" alt="BR logo"/>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="/blackstone">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/BMT.png" alt="BMT logo" />
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="/bloomberg">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/Bloomberg.png" alt="BB logo"/>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="/citi">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/citibank.png" alt="City logo"/>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="/evercore">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/Evercore.png" alt="Evercore logo"/>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="/goldman-sachs">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/GS.png" alt="GS logo"/>
                            </Link>
                        </div>

                        <div className="item">
                            <Link to="/jane-street-capital">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/JS.png" alt="JS logo"/>
                            </Link>
                        </div>

                        <div className="item">
                            <Link to="/jefferies-financial-group">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/Jefferies.png" alt="Jesseries logo" />
                            </Link>
                        </div>

                        <div className="item">
                            <Link to="/jll-partners">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/JLLP.png" alt="JLLP logo" />
                            </Link>
                        </div>

                        <div className="item">
                            <Link to="/jpmorgan-chase">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/JPM.png" alt="JPC logo"/>
                            </Link>
                        </div>

                        <div className="item">
                            <Link to="/moodys">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/Moody.png" alt="Moody logo" />
                            </Link>
                        </div>

                        <div className="item">
                            <Link to="/morgan-stanley">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/MS.png" alt="MS logo"/>
                            </Link>
                        </div>

                        <div className="item">
                            <Link to="/mufg">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/MUFG.png" alt="MUFG logo"/>
                            </Link>
                        </div>

                        <div className="item">
                            <Link to="/nasdaq">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/Nasdaq.png" alt="Nasdaq logo"/>
                            </Link>
                        </div>

                        <div className="item">
                            <Link to="/two-sigma">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/TSV.png" alt="2 sigma logo"/>
                            </Link>
                        </div>

                        <div className="item">
                            <Link to="/banco-santander">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/Santander.png" alt="Santander logo"/>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="/bank-leumi">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/Leumi.png" alt="Leumi logo" />
                            </Link>
                        </div>

                        <div className="item">
                            <Link to="/citizens-financial-group">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/Citizens.png" alt="Citizens logo" />
                            </Link>
                        </div>

                        <div className="item">
                            <Link to="/edward-jones">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/EdwardJones.png" alt="Edward Jones logo"/>
                            </Link>
                        </div>

                        <div className="item">
                            <Link to="/fifth-third-bancorp">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/53Bank.png" alt="53 Bank logo" />
                            </Link>
                        </div>

                        <div className="item">
                            <Link to="/hanmi-financial">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/HanmiBank.png" alt="HanmiBank logo"/>
                            </Link>
                        </div>

                        <div className="item">
                            <Link to="/hsbc">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/HSBC.png" alt="HSBC logo"/>
                            </Link>
                        </div>

                        <div className="item">
                            <Link to="/julius-baer">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/JuliusBar.png" alt="JuliusBar logo"/>
                            </Link>
                        </div>

                        <div className="item">
                            <Link to="/keycorp">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/KeyBank.png" alt="KeyBank logo"/>
                            </Link>
                        </div>

                        <div className="item">
                            <Link to="/lazard">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/Larzard.png" alt="Lazard logo"/>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="/mt-bank">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/M&TBank.png" alt="M&TBank logo" />
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="/northern-trust">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/Northerntrust.png" alt="Northern trust logo" />
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="/pictet">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/Pictet.png" alt="Pictet logo"/>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="/pnc-financial-services-group">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/PNCBank.png" alt="PNC Bank logo" />
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="/rothschild-co">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/Rothschild.png" alt="Rothschild logo"/>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="/regions-financial">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/Regions.png" alt="Regions logo"/>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="/raymond-james">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/Raymondjames.png" alt="Raymond james logo"/>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="/state-street">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/Statestreet.png" alt="State Street logo"/>
                            </Link>
                        </div>

                        <div className="item">
                            <Link to="/wells-fargo">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/WellsFargo.png" alt="Wells Fargo logo"/>
                            </Link>
                        </div>
                    </OwlCarousel>
                    <a href="/companydata" style={{color: "#13C4A1", marginLeft: "10rem"}}>Explore our company data-></a>
                </div>
            </section>
        );
    }
}

const options = {
    items: 6,
    loop: true,
    margin: 10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true
}


export default CompanyProfile;