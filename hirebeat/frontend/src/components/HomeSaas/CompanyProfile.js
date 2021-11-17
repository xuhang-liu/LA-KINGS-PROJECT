import React, { Component } from 'react';
//import ReactWOW from 'react-wow';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {Link} from "react-router-dom";

class CompanyProfile extends Component {
    render() {
        return (
            <section className="features-area pt-100 pb-100 bg-f4f6fc">
                <div className="container max-width-1290" style={{maxWidth:"100rem"}}>
                    <div>
                        <h2 className="section-title2">HireBeat Helps You Do Your Research</h2>
                        <br/>
                    </div>

                    <OwlCarousel
                        className="feedback-slides owl-carousel owl-theme"
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

                        <div className="item">
                            <Link to="/charles-schwab">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/charles.png" alt="Charles Schwab logo"/>
                            </Link>
                        </div>

                        <div className="item">
                            <Link to="/fidelity-investments">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/fidelity.png" alt="Fidelity logo"/>
                            </Link>
                        </div>

                        <div className="item">
                            <Link to="/vanguard">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/vanguard.png" alt="Vanguard logo"/>
                            </Link>
                        </div>
                        {/*<div className="item">
                            <Link to="/absa-group">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/absa.png" alt="Absa logo"/>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="/abu-dhabi-islamic-bank">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/ADIB.png" alt="ADIB logo"/>
                            </Link>
                        </div>*/}
                        <div className="item">
                            <Link to="/amazon">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/amazon.png" alt="Amazon logo"/>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="/facebook">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/facebook.png" alt="Facebook logo"/>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="/skandinaviska-enskilda-banken">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/SEB.png" alt="SEB logo"/>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="/allstate">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/allstate.png" alt="Allstate logo"/>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="/deloitte">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/deloitte.png" alt="Deloitte logo"/>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="/deutsche-bank">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/deutsche-bank.png" alt="Deutsche Bank logo"/>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="/ernst-young">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/ernst-young.png" alt="Ernst Young logo"/>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="/merrill-lynch">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/merrill-lynch.png" alt="Merrill Lynch logo"/>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="/hci-group">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/HCIGroup.png" alt="HCI Group logo"/>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="/kpmg">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/KPMG.png" alt="KPMG logo"/>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="/pwc">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/PWC.png" alt="PWC logo"/>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="/bank-of-montreal">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/bmo.png" alt="BMO logo"/>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="/barclays">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/barclays.png" alt="Barclays logo"/>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="/credit-suisse">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/creditsuisse.png" alt="Credit Suisse logo"/>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="/houlihan-lokey">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/houlihanlocky.png" alt="Houlihan Lokey logo"/>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="/metlife">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/MetLife.png" alt="MetLife logo"/>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="/accenture">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/accenture.png" alt="Accenture logo"/>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="/bain">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/bain.png" alt="Bain logo"/>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="/boston-consulting-group">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/bcg.png" alt="Boston Consulting Group logo"/>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="/oliver-wyman">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/oliverwyman.png" alt="Oliver Wyman logo"/>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="/kearney">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/kearney.png" alt="Kearney logo"/>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="/analysis-group">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/analysisgroup.png" alt="Analysis Group logo"/>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="/cornerstone-research">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/cornerstoneresearch.png" alt="Cornerstone Research logo"/>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="/lek-consulting">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/lek.png" alt="L.E.K.Consulting logo"/>
                            </Link>
                        </div>

                        <div className="item">
                            <Link to="/zs-associates">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/zs.png" alt="ZS Associates logo"/>
                            </Link>
                        </div>

                        <div className="item">
                            <Link to="/booz-allen-hamilton">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/booz.png" alt="Booz Allen Hamilton logo"/>
                            </Link>
                        </div>

                        <div className="item">
                            <Link to="/mastercard">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/mastercard.png" alt="Mastercard logo"/>
                            </Link>
                        </div>

                        <div className="item">
                            <Link to="/capital-one">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/capitalone.png" alt="Capital One logo"/>
                            </Link>
                        </div>
                    </OwlCarousel>
                    <a href="/job-seekers-companydata" className="read-more" style={{color: "#006dff", marginLeft: "76%", fontSize:"1rem", textDecoration:"none"}}>Explore our company data <i class="bx bx-right-arrow-alt"></i></a>
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
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    smartSpeed:250
}


export default CompanyProfile;