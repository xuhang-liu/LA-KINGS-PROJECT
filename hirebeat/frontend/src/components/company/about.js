import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import AboutContent from './AboutContent';
import WhyChooseUs from '../Common/WhyChooseUs';
import TeamMember from './TeamMember';
import ClientsFeedbackSlider from '../Common/ClientsFeedbackSlider';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';

class About extends Component {
    render() {
        return (
            <React.Fragment>
                <PageTitleArea 
                    pageTitle="About Us" 
                    pageDescription="The Hepro Story" 
                />
                <AboutContent />
                <WhyChooseUs />
                <TeamMember />
                <ClientsFeedbackSlider />
                <FreeTrialArea />
            </React.Fragment>
        );
    }
}

export default About;