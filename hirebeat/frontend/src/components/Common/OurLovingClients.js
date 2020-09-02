import React, { Component } from 'react';
import {Link} from "react-router-dom";
import client1 from "../public/images/clients/client1.png";
import client2 from "../public/images/clients/client2.png";
import client3 from "../public/images/clients/client3.png";
import client4 from "../public/images/clients/client4.png";
import client5 from "../public/images/clients/client5.png";
import client6 from "../public/images/clients/client6.png";
import client7 from "../public/images/clients/client7.png";
import client8 from "../public/images/clients/client8.png";
import client9 from "../public/images/clients/client9.png";

class OurLovingClients extends Component {
    render() {
        return (
            <section className="our-loving-clients ptb-100 bg-f4f5fe">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Loving Clients</h2>
                    </div>

                    <div className="clients-logo-list align-items-center">
                        <div className="single-clients-logo">
                            <Link href="#">
                                <a>
                                    <img src={client1} alt="image" />
                                </a>
                            </Link>
                        </div>

                        <div className="single-clients-logo">
                            <Link href="#">
                                <a>
                                    <img src={client2} alt="image" />
                                </a>
                            </Link>
                        </div>

                        <div className="single-clients-logo">
                            <Link href="#">
                                <a>
                                    <img src={client3} alt="image" />
                                </a>
                            </Link>
                        </div>

                        <div className="single-clients-logo">
                            <Link href="#">
                                <a>
                                    <img src={client4} alt="image" />
                                </a>
                            </Link>
                        </div>

                        <div className="single-clients-logo">
                            <Link href="#">
                                <a>
                                    <img src={client5} alt="image" />
                                </a>
                            </Link>
                        </div>

                        <div className="single-clients-logo">
                            <Link href="#">
                                <a>
                                    <img src={client6} alt="image" />
                                </a>
                            </Link>
                        </div>

                        <div className="single-clients-logo">
                            <Link href="#">
                                <a>
                                    <img src={client7} alt="image" />
                                </a>
                            </Link>
                        </div>

                        <div className="single-clients-logo">
                            <Link href="#">
                                <a>
                                    <img src={client8} alt="image" />
                                </a>
                            </Link>
                        </div>

                        <div className="single-clients-logo">
                            <Link href="#">
                                <a>
                                    <img src={client9} alt="image" />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default OurLovingClients;