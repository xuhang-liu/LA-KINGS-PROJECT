import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import AboutContentEmployer from './AboutContentEmployer';
import FreeTrialArea from '../HomeEmployer/FreeTrialArea';
import { useEffect } from "react";

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
            </React.Fragment>
        );
    }
}

export default Employerabout;