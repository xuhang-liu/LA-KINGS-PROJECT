import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import AboutContent from './AboutContent';
import WhyChooseUs from '../Common/WhyChooseUs';
import FaqContent from '../Faq/FaqContent';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Footer from "../layout/Footer";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class About extends Component {
    render() {
        return (
            <React.Fragment>
                <ScrollToTopOnMount />
                <PageTitleArea 
                    pageTitle="Help job seekers gain core competence" 
                    pageDescription="By implementing an intelligent talent database" 
                />
                <AboutContent />
                <WhyChooseUs />
                <FaqContent />
                <FreeTrialArea />
                <Footer />
            </React.Fragment>
        );
    }
}

export default About;