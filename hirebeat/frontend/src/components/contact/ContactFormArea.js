import React, { Component } from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

class ContactFormArea extends Component {
    render() {
        return (
            <section className="contact-area ptb-100">
                <div className="container">
                    <div className="contact-inner">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="contact-features-list">
                                    <h3>Some other great reasons to choose us</h3>
                                    <p>Take the first steps towards increased productivity and reduced stress with Hepro.</p>
                                    <p>We are a highly trained, dedicated team, helping entrepreneurs, professionals, and small teams streamline success - not just in work, but in life too. We help spare your time to focus on the bigger picture by taking care of the little details.</p>

                                    <ul>
                                        <li>
                                            <i className='bx bx-badge-check'></i> 
                                            Staff works from our offices in USA
                                        </li>
                                        <li>
                                            <i className='bx bx-badge-check'></i> 
                                            Scale up / down on demand
                                        </li>
                                        <li>
                                            <i className='bx bx-badge-check'></i> 
                                            One time or on going projects
                                        </li>
                                        <li>
                                            <i className='bx bx-badge-check'></i> 
                                            Hire based on skill set
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                {/* Contact Form */}
                                <ContactForm />
                            </div>
                        </div>

                        {/* Contact Info */}
                        <ContactInfo />
                    </div>
                </div>
            </section>
        );
    }
}

export default ContactFormArea;