import React, { Component } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';
import faq1 from "../../assets/faq.png";

class FaqContentEmployer extends Component {
    render() {
        return (
            <section className="faq-area ptb-100">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-7 col-md-12">
                            <div className="faq-accordion">
                                <h2>Get To Know About <span>HireBeat</span></h2>

                                <Accordion>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                            What is HireBeat?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                            HireBeat is an all-in-one recruitment platform that simplifies talent recruiting and assessment with a digital video screening and resume matching. By utilizing HireBeat, recruiters can get the best-fits with a centralized talent management system.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                            Who owns the data?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                            Our customers do! HireBeat is fully GDPR compliant and you have control access to all applicants' data sent to you, and candidates can easily request to delete their data in full compliance with GDPR.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                            Is my data Safe?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                            At HireBeat, your security and privacy are vital to us. Our data center is operated and hosted by Amazon Web Services (AWS) which is ISO 27001, CSA STAR, and SOC 2 certified.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                            Which plan is right for me?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                            HireBeat offers different plans to satisfy different customer needs. We suggest considering the following factors before selecting the most suitable plan:
                                            <br/><br/>
                                            *The number of positions you are looking to fulfill
                                            <br/>
                                            *The number of candidates you want to invite for video interview screening
                                            <br/>
                                            *Whether you need a centralized applicant tracking system (ATS)
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                            What type of payment do you accept?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                            We accept Visa, Mastercard, Discover, American Express, etc. We have chosen Stripe for exceeding industry security standards and are trusted by thousands of businesses of all sizes across the globe including many Fortune 500 companies. And the monthly fee will occur at the beginning of your billing cycle.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                            Can I upgrade or downgrade my plan?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                            Yes! You can adjust your plan anytime. No fuss. No hassle.
                                            <br/>
                                            To change your plan, simply select the preferred option on the pricing page. 
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                            Do you have any setup costs or fees?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                            Absolutely not, we have no hidden fees or setup costs - you will receive free onboarding training and 24/7 customer support. We believe in transparency and fair pricing for everyone.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                            What's your refund policy?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                            We will refund only if you have not yet created any interviews and also that you made the request to our support team within 48 hours after payment is completed. Please note that both conditions need to be satisfied for a refund to occur. If you satisfy both conditions we shall immediately refund your payment.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </div>

                        <div className="col-lg-5 col-md-12">
                            <div className="faq-image" style={{paddingTop:"8%"}}>
                                <img src={faq1} alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default FaqContentEmployer;