import React, { Component } from 'react';
import amazon from "../../assets/companydata/amazon 1.png";
import google from "../../assets/companydata/google 1.png";
import microsoft from "../../assets/companydata/microsoft 1.png";
import linkedin from "../../assets/companydata/linkedin 1.png";
import facebook from "../../assets/companydata/facebook 1.png";
import apple from "../../assets/companydata/apple 1.png";
import netflix from "../../assets/companydata/netflix 1.png";
import stripe from "../../assets/companydata/stripe 1.png";

export default class LogoList extends Component{
    render(){
        return(
            <div>
                <h3 className="companydata-text1">More Companies to Explore</h3>
                <ul className="company_ul">
                    <li>
                        <div className="img-with-text">
                            <a href="/" >
                                <img src={amazon} alt="image" style={{width:"2.5rem"}}/>
                                <p className="companydata-text4">Amazon</p>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div className="img-with-text">
                            <a href="/" >
                                <img src={linkedin} alt="image" style={{width:"2.5rem"}}/>
                                <p className="companydata-text4">Linkedin</p>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div className="img-with-text">
                            <a href="/" >
                                <img src={google} alt="image" style={{width:"2.5rem"}}/>
                                <p className="companydata-text4">Google</p>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div className="img-with-text">
                            <a href="/" >
                                <img src={microsoft} alt="image" style={{width:"2.5rem"}}/>
                                <p className="companydata-text4">Microsoft</p>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div className="img-with-text">
                            <a href="/" >
                                <img src={facebook} alt="image" style={{width:"2.5rem"}}/>
                                <p className="companydata-text4">Facebook</p>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div className="img-with-text">
                            <a href="/" >
                                <img src={apple} alt="image" style={{width:"2.5rem"}}/>
                                <p className="companydata-text4">Apple</p>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div className="img-with-text">
                            <a href="/" >
                                <img src={stripe} alt="image" style={{width:"2.5rem"}}/>
                                <p className="companydata-text4">Stripe</p>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div className="img-with-text">
                            <a href="/" >
                                <img src={netflix} alt="image" style={{width:"2.5rem"}}/>
                                <p className="companydata-text4">Netflix</p>
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}
