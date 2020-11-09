import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class LogoList extends Component{
    render(){
        return(
            <div>
                <h3 className="companydata-text1">More Companies to Explore</h3>
                <ul className="company_ul">
                    <li>
                        <div className="img-with-text">
                            <Link to="/companydata/goldman-sachs">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/GS2.png" alt="GS logo" style={{width:"3.5rem"}}/>
                                <p className="companydata-text4">Goldman Sachs</p>
                            </Link>
                        </div>
                    </li>
                    <li>
                        <div className="img-with-text">
                        <Link to="/companydata/morgan-stanley">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/MS2.png" alt="MS2 logo" style={{width:"3.5rem"}}/>
                                <p className="companydata-text4">Morgan Stanley</p>
                            </Link>
                        </div>
                    </li>
                    <li>
                        <div className="img-with-text">
                        <Link to="/companydata/citi">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/Citi2.png" alt="Citi logo" style={{width:"3.5rem"}}/>
                                <p className="companydata-text4">Citibank</p>
                            </Link>
                        </div>
                    </li>
                    <li>
                        <div className="img-with-text">
                        <Link to="/companydata/jpmorgan-chase">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/JPMC2.png" alt="JPMC logo" style={{width:"3.5rem"}}/>
                                <p className="companydata-text4">JPMorganChase</p>
                            </Link>
                        </div>
                    </li>
                    <li>
                        <div className="img-with-text">
                        <Link to="/companydata/blackrock">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/BR2.png" alt="BR logo" style={{width:"3.5rem"}}/>
                                <p className="companydata-text4">BlackRock</p>
                            </Link>
                        </div>
                    </li>
                    <li>
                        <div className="img-with-text">
                        <Link to="/companydata/american-express">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/AE2.png" alt="AE logo" style={{width:"3.5rem"}}/>
                                <p className="companydata-text4">American Express</p>
                            </Link>
                        </div>
                    </li>
                    <li>
                        <div className="img-with-text">
                        <Link to="/companydata/bloomberg">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/Bloomberg2.png" alt="BB logo" style={{width:"3.5rem"}}/>
                                <p className="companydata-text4">Bloomberg</p>
                            </Link>
                        </div>
                    </li>
                    <li>
                        <div className="img-with-text">
                        <Link to="/companydata/evercore">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/company-logo/Evercore2.png" alt="Evercore logo" style={{width:"3.5rem"}}/>
                                <p className="companydata-text4">Evercore</p>
                            </Link>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}
