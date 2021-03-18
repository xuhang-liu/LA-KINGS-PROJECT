import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import AboutContentEmployer from './AboutContentEmployer';
import FreeTrialArea from '../HomeEmployer/FreeTrialArea';
import { useEffect } from "react";
import Footer from "../layout/Footer";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class Employerabout extends Component {
    render() {
        return (
            <React.Fragment>
                <ScrollToTopOnMount />
                <PageTitleArea 
                    pageTitle="About Us"
                />
                <AboutContentEmployer />
                <FreeTrialArea />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Employerabout;