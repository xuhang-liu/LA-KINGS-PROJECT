import React, { Component } from 'react';

class ContactForm extends Component {
    render() {
        return (
            <div className="contact-form">
                <h3>Let's Start Your Free Trial</h3>

                <form id="contactForm">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                                <input type="text" name="name" id="name" className="form-control" placeholder="Your Name" required />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                                <input type="email" name="email" id="email" className="form-control" placeholder="Your Email" required />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                                <input type="text" name="phone_number" id="phone_number" className="form-control" placeholder="Your Phone" required />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                                <input type="text" name="msg_subject" id="msg_subject" className="form-control"  placeholder="Your Subject" required />
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                            <div className="form-group">
                                <textarea name="message" className="form-control" id="message" rows="6" placeholder="Your Message"></textarea>
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12 text-center">
                            <button type="submit" className="default-btn">
                                <i className='bx bxs-paper-plane'></i> 
                                    Send Message 
                                <span></span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default ContactForm;