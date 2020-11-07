import React, { Component } from 'react';

export default class LogoList extends Component{
    render(){
        return(
            <div>
                <h3 className="companydata-text1">More Companies to Explore</h3>
                <ul className="company_ul">
                    <li>
                        <div className="img-with-text">
                            <a href="https://www.goldmansachs.com/" target="_blank" >
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/GS2.png" alt="GS logo" style={{width:"2.5rem"}}/>
                                <p className="companydata-text4">Goldman Sachs</p>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div className="img-with-text">
                            <a href="https://www.morganstanley.com/" target="_blank" >
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/MS2.png" alt="MS2 logo" style={{width:"2.5rem"}}/>
                                <p className="companydata-text4">Morgan Stanley</p>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div className="img-with-text">
                            <a href="https://online.citi.com/" target="_blank" >
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/Citi2.png" alt="Citi logo" style={{width:"2.5rem"}}/>
                                <p className="companydata-text4">Google</p>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div className="img-with-text">
                            <a href="https://www.jpmorgan.com/" target="_blank" >
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/JPMC2.png" alt="JPMC logo" style={{width:"2.5rem"}}/>
                                <p className="companydata-text4">JPMorganChase</p>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div className="img-with-text">
                            <a href="https://www.blackrock.com/" target="_blank" >
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/BR2.png" alt="BR logo" style={{width:"2.5rem"}}/>
                                <p className="companydata-text4">BlackRock</p>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div className="img-with-text">
                            <a href="https://www.americanexpress.com/" target="_blank" >
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/AE2.png" alt="AE logo" style={{width:"2.5rem"}}/>
                                <p className="companydata-text4">American Express</p>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div className="img-with-text">
                            <a href="https://www.bloomberg.com/" target="_blank" >
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/Bloomberg2.png" alt="BB logo" style={{width:"2.5rem"}}/>
                                <p className="companydata-text4">Bloomberg</p>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div className="img-with-text">
                            <a href="https://www.evercore.com/" target="_blank" >
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/Evercore2.png" alt="Evercore logo" style={{width:"2.5rem"}}/>
                                <p className="companydata-text4">Evercore</p>
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}
