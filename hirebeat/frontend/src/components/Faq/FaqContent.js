import React, { Component } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';
import faq1 from "../../assets/faq.png";

class FaqContent extends Component {
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
                                            HireBeat is an online video interviewing platform which allows you to train your interview anytime anywhere, all you need is a PC and internet access. We also design customized interview modules that fit your target job title.
                                            <br/><br/>
                                            Regardless this is your one shot at your dream job, or you’re tired of going on dozens of interviews but never closing the deal, you know that simply searching countless interview questions online won’t really help you.
                                            <br/><br/>
                                            Our goal is to ensure that every job seeker shines their interview and lands their dream job either with our AI analysis or personalized services our professional experts provided.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                            What access do I have on the free plan?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                            Our mission is to help everyone to take the stress out of recruiting process, therefore you can first start with our free plan, which include 3 behavioral and/or technical interview questions. If you want to unlock more attempts and upcoming resume matching feature, you can upgrade to our risk-free premium plan. 
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                            Is my interview video protected? Who else can see my videos?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                            At HireBeat, your security and privacy are vital to us. We are mindful of the personal details we ask you to provide us with and personal data that we gather through the operation of our video interview services.
                                            <br/><br/>
                                            We guarantee no personal data will ever be shared with third parties without your consent. When making an interview video, you get access to a password-protected personal account with all the data controlled by you.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                            What Payment System does HireBeat Use?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                            You can pay easily and safely through our website. We have chosen Stripe for exceeding industry security standards and are trusted by thousands of businesses of all sizes across the globe including many Fortune 500 companies.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                            Do you guarantee 100% satisfaction on HireBeat’s interview training tools?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                            Yes, we do! So much so that we offer you risk-free 30 days to try it out and if for any reason you aren’t satisfied, you can cancel the premium plan from your account dashboard or ask our Support Team to do it for a full refund.
                                            <br/><br/>
                                            We stand behind our training software at 100%. If you aren’t thrilled with the improvement in your interviewing, just email us and we’ll address your concerns or refund the purchase.
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

export default FaqContent;